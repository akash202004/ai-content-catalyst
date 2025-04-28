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
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET!)
    .update(body.toString())
    .digest("hex");
  if (expectedSignature === razorpay_signature) {
    return true;
  }
}
