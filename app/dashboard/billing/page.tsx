"use client";

import { createRazorpayOrder } from "@/actions/createRazorpayOrder";
import { verifyRazorpayOrder } from "@/actions/verifyRazorpayOrder";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import {
  createSubscription,
  getUserPlanDetails,
} from "@/controllers/subscriptionController";
import { createUser, getUserById } from "@/controllers/userController";
import { useRouter } from "next/navigation";
import { UpdateCredit } from "@/app/(context)/UpdateCredit";
import { CheckCircle2 } from "lucide-react";

const Billing = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentPlan, setCurrentPlan] = useState("Free");
  const { setUpdateCredit } = useContext(UpdateCredit);

  useEffect(() => {
    const getCurrentPlan = async () => {
      if (user?.id) {
        try {
          const planDetails = await getUserPlanDetails(user.id);
          setCurrentPlan(planDetails.name);
        } catch (error) {
          console.error("Error fetching plan details:", error);
        }
      }
    };
    getCurrentPlan();
  }, [user?.id]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async (amount: number) => {
    if (!user?.id) {
      toast.error("Please login to continue");
      return;
    }

    setIsProcessing(true);
    try {
      const order = await createRazorpayOrder(amount);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: "INR",
        name: "Ai-Content-Catalyst",
        description: "Make your content creation easy",
        order_id: order.id,
        handler: async function (response: any) {
          try {
            const isValid = await verifyRazorpayOrder({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (isValid && user?.id) {
              try {
                let dbUser = await getUserById(user.id);
                if (!dbUser) {
                  await createUser(
                    user.id,
                    user.primaryEmailAddress?.emailAddress || "",
                    user.fullName || ""
                  );
                }
              } catch (error) {
                console.error("Error ensuring user exists:", error);
              }

              let planType = "free";
              if (amount === 5) planType = "premium";
              if (amount === 50) planType = "ultimate";

              await createSubscription({
                userId: user.id,
                plan: planType,
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
                amount: amount,
              });

              toast.success("Payment Verified and Subscription Activated!");
              setUpdateCredit(Date.now());
              setTimeout(() => {
                router.push("/dashboard");
              }, 2000);
            } else {
              toast.error("Payment Verification Failed");
            }
          } catch (error) {
            console.error("Error processing payment:", error);
            toast.error(
              "Failed to activate subscription. Please contact support."
            );
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: `${user?.fullName}`,
          email: `${user?.primaryEmailAddress?.emailAddress}`,
        },
        theme: { color: "#000000" },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error in payment process", error);
      toast.error("Payment failed. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen py-10">
      <h1 className="text-center text-3xl font-bold mb-10">
        Choose Your Perfect Plan
      </h1>

      <div className="flex justify-center gap-10 flex-wrap">
        {[
          {
            title: "Starter",
            price: "Free",
            subtitle: "Perfect for beginners",
            features: [
              "10,000 characters/month",
              "3 simulations/month",
              "50+ Content templates",
              "Unlimited Download & copy",
              "1 Month of History",
            ],
            plan: "Free",
            amount: 0,
          },
          {
            title: "Premium",
            price: "$5/month",
            subtitle: "Best for content creators",
            features: [
              "100,000 characters/month",
              "50 simulations/month",
              "Advanced templates",
              "Unlimited Download & copy",
              "1 Year of History",
              "Priority support",
            ],
            plan: "Premium",
            amount: 5,
            badge: "Most Popular",
            highlight: true,
          },
          {
            title: "Ultimate",
            price: "$50/year",
            subtitle: "For power users & agencies",
            features: [
              "Unlimited characters",
              "Unlimited simulations",
              "Custom templates",
              "Unlimited Download & copy",
              "10 Years of History",
              "API access",
              "Premium support",
            ],
            plan: "Ultimate",
            amount: 50,
          },
        ].map((p, idx) => (
          <div
            key={idx}
            className={`w-80 flex flex-col rounded-2xl shadow-md transition-all duration-300 p-6 border relative ${
              p.highlight
                ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-2xl scale-105 border-indigo-400"
                : "bg-white text-gray-800 hover:shadow-xl border-gray-300"
            }`}
          >
            {p.badge && (
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold shadow-md ${
                  p.highlight
                    ? "bg-yellow-400 text-black"
                    : "bg-primary text-white"
                }`}
              >
                {p.badge}
              </div>
            )}

            <div className="text-center mb-6">
              <p className="mt-6 font-semibold">{p.title}</p>
              <h1 className="font-bold text-3xl mb-2">{p.price}</h1>
              <p className="text-sm opacity-80">{p.subtitle}</p>
            </div>

            <ul className="flex-1 space-y-3">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2
                    className={`w-5 h-5 ${
                      p.highlight ? "text-yellow-300" : "text-green-500"
                    }`}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              {p.amount === 0 ? (
                <Button
                  className={`w-full rounded-xl ${
                    p.highlight
                      ? "bg-yellow-400 text-black hover:bg-yellow-300"
                      : ""
                  }`}
                >
                  {currentPlan === "Free"
                    ? "Currently Active Plan"
                    : "Start for Free"}
                </Button>
              ) : (
                <Button
                  variant={currentPlan === p.plan ? "default" : "outline"}
                  className={`w-full rounded-xl ${
                    currentPlan === p.plan
                      ? p.highlight
                        ? "bg-yellow-400 text-black border-none cursor-not-allowed"
                        : "bg-primary text-white border-black cursor-not-allowed"
                      : p.highlight
                      ? "bg-yellow-400 text-black hover:bg-yellow-300 border-none"
                      : "text-primary border border-gray-950"
                  }`}
                  onClick={() => handlePayment(p.amount)}
                  disabled={isProcessing || currentPlan === p.plan}
                >
                  {currentPlan === p.plan
                    ? "Currently Active Plan"
                    : isProcessing
                    ? "Processing..."
                    : `Upgrade to ${p.plan}`}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billing;
