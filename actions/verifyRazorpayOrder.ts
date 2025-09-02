"use server";

import crypto from "crypto";

export async function verifyRazorpayOrder({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
}: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}) {
  // Check if the environment variable exists
  const razorpaySecret = process.env.RAZORPAY_SECRET_KEY;

  if (!razorpaySecret) {
    console.error("RAZORPAY_SECRET_KEY environment variable is not set");
    throw new Error("Payment verification failed: Missing configuration");
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", razorpaySecret)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    return true;
  }

  return false;
}
