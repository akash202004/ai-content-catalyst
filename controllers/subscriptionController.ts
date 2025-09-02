import { db } from "@/db/index";
import { UserSubscription, User } from "@/db/schema";
import { eq, and, desc } from "drizzle-orm";

export interface SubscriptionPlan {
  name: string;
  price: number;
  features: string[];
  templateCredits: number;
  simulationCredits: number;
  duration: number; // in days
}

export const SUBSCRIPTION_PLANS: Record<string, SubscriptionPlan> = {
  free: {
    name: "Free",
    price: 0,
    features: ["10,000 template characters", "3 simulations", "Basic support"],
    templateCredits: 10000,
    simulationCredits: 3,
    duration: 30,
  },
  premium: {
    name: "Premium",
    price: 5, // $5
    features: [
      "100,000 template characters",
      "50 simulations/month",
      "Priority support",
      "Advanced templates",
    ],
    templateCredits: 100000,
    simulationCredits: 50,
    duration: 30,
  },
  ultimate: {
    name: "Ultimate",
    price: 50, // $50
    features: [
      "Unlimited template characters",
      "Unlimited simulations",
      "Premium support",
      "Custom templates",
      "API access",
    ],
    templateCredits: -1, // unlimited
    simulationCredits: -1, // unlimited
    duration: 365, // 1 year
  },
};

// Get user's current subscription
export const getUserSubscription = async (userId: string) => {
  try {
    const subscription = await db
      .select()
      .from(UserSubscription)
      .where(
        and(
          eq(UserSubscription.userId, userId),
          eq(UserSubscription.status, "active")
        )
      )
      .orderBy(desc(UserSubscription.createdAt))
      .limit(1);

    return subscription[0] || null;
  } catch (error) {
    console.error("Error getting user subscription:", error);
    throw error;
  }
};

// Create new subscription
export const createSubscription = async (data: {
  userId: string;
  plan: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  amount: number;
}) => {
  try {
    const planDetails = SUBSCRIPTION_PLANS[data.plan];
    if (!planDetails) {
      throw new Error("Invalid plan");
    }

    // Calculate end date
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + planDetails.duration);

    const subscription = await db
      .insert(UserSubscription)
      .values({
        userId: data.userId,
        plan: data.plan,
        status: "active",
        razorpayOrderId: data.razorpayOrderId,
        razorpayPaymentId: data.razorpayPaymentId,
        razorpaySignature: data.razorpaySignature,
        amount: data.amount,
        endDate,
      })
      .returning();

    return subscription[0];
  } catch (error) {
    console.error("Error creating subscription:", error);
    throw error;
  }
};

// Update subscription after payment
export const updateSubscriptionAfterPayment = async (
  orderId: string,
  paymentDetails: {
    razorpay_payment_id: string;
    razorpay_signature: string;
  }
) => {
  try {
    const updated = await db
      .update(UserSubscription)
      .set({
        razorpayPaymentId: paymentDetails.razorpay_payment_id,
        razorpaySignature: paymentDetails.razorpay_signature,
        status: "active",
        updatedAt: new Date(),
      })
      .where(eq(UserSubscription.razorpayOrderId, orderId))
      .returning();

    return updated[0];
  } catch (error) {
    console.error("Error updating subscription:", error);
    throw error;
  }
};

// Cancel subscription
export const cancelSubscription = async (userId: string) => {
  try {
    const cancelled = await db
      .update(UserSubscription)
      .set({
        status: "cancelled",
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(UserSubscription.userId, userId),
          eq(UserSubscription.status, "active")
        )
      )
      .returning();

    return cancelled[0];
  } catch (error) {
    console.error("Error cancelling subscription:", error);
    throw error;
  }
};

// Check if user has active subscription
export const hasActiveSubscription = async (
  userId: string
): Promise<boolean> => {
  try {
    const subscription = await getUserSubscription(userId);
    if (!subscription) return false;

    // Check if subscription is still valid
    const now = new Date();
    const endDate = new Date(subscription.endDate!);

    return subscription.status === "active" && endDate > now;
  } catch (error) {
    console.error("Error checking subscription:", error);
    return false;
  }
};

// Get user's current plan details
export const getUserPlanDetails = async (userId: string) => {
  try {
    const subscription = await getUserSubscription(userId);
    if (!subscription || !(await hasActiveSubscription(userId))) {
      return SUBSCRIPTION_PLANS.free;
    }

    return SUBSCRIPTION_PLANS[subscription.plan] || SUBSCRIPTION_PLANS.free;
  } catch (error) {
    console.error("Error getting user plan details:", error);
    return SUBSCRIPTION_PLANS.free;
  }
};

// Check if user can perform action based on their plan
export const canUserPerformAction = async (
  userId: string,
  action: "template" | "simulation"
): Promise<{ allowed: boolean; reason?: string }> => {
  try {
    const planDetails = await getUserPlanDetails(userId);

    if (action === "template") {
      if (planDetails.templateCredits === -1) {
        return { allowed: true }; // unlimited
      }
      // You can add template usage checking logic here
      return { allowed: true };
    }

    if (action === "simulation") {
      if (planDetails.simulationCredits === -1) {
        return { allowed: true }; // unlimited
      }

      // Check current simulation usage
      const { getSimulationCountByUser } = await import(
        "./simulationController"
      );
      const currentUsage = await getSimulationCountByUser(userId);

      if (currentUsage >= planDetails.simulationCredits) {
        return {
          allowed: false,
          reason: `You've reached your ${planDetails.name} plan limit of ${planDetails.simulationCredits} simulations. Please upgrade your plan.`,
        };
      }

      return { allowed: true };
    }

    return { allowed: false, reason: "Unknown action" };
  } catch (error) {
    console.error("Error checking user permissions:", error);
    return { allowed: false, reason: "Error checking permissions" };
  }
};
