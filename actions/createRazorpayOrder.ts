"use server";

import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

export async function createRazorpayOrder(amount: number) {
  const option = {
    amount: amount * 100,
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
