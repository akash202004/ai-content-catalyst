"use server";

import Razorpay from "razorpay";

// Check if environment variables exist
const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
const keySecret = process.env.RAZORPAY_SECRET_KEY;

if (!keyId || !keySecret) {
  throw new Error("Razorpay environment variables are not configured properly");
}

const razorpay = new Razorpay({
  key_id: keyId,
  key_secret: keySecret,
});

export async function createRazorpayOrder(amount: number) {
  const option = {
    amount: amount * 100 * 86,
    currency: "INR",
    receipt: "receipt_order_" + Math.random().toString(36).substring(2, 15),
  };

  try {
    const order = await razorpay.orders.create(option);
    return order;
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    throw new Error("Failed to create Razorpay order");
  }
}
