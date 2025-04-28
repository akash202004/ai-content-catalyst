"use client";

import { createRazorpayOrder } from "@/actions/createRazorpayOrder";
import { verifyRazorpayOrder } from "@/actions/verifyRazorpayOrder";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const billing = () => {
  const { user } = useUser();
  console.log(user);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async (amount: number) => {
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
          console.log(response);
          const isValid = await verifyRazorpayOrder({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (isValid) {
            toast.success("Payment Verified and Successful!");
          } else {
            toast.error("Payment Verification Failed");
          }
        },
        prefill: {
          name: `${user?.fullName}`,
          email: `${user?.primaryEmailAddress?.emailAddress}`,
        },
        theme: {
          color: "#000000",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error in payment process", error);
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div className="bg-slate-100">
      <h1 className="flex justify-center text-3xl font-bold m-10">
        Upgrade to a Monthly Plan
      </h1>
      <div className="flex relative justify-center gap-10 flex-wrap">
        <div className=" bg-white shadow-md rounded-lg px-4 flex flex-col">
          <div className="text-center">
            <p className="mt-6 mb-3">Free</p>
            <h1 className="font-bold text-3xl mb-2">0$ / month</h1>
          </div>
          <div className="text-left ml-4 gap-2">
            <li className="mt-3">10,000 words/month</li>
            <li className="mt-3">50+ Content templates</li>
            <li className="mt-3">Unlimited Download & copy</li>
            <li className="mt-3">1 Month of History</li>
          </div>
          <Button className="rounded-2xl m-5">Currently Active Plan</Button>
        </div>
        <div className="bg-white shadow-md rounded-lg px-4 flex flex-col">
          <div className="text-center">
            <p className="mt-6 mb-3">Monthly</p>
            <h1 className="font-bold text-3xl mb-2">5$ / month</h1>
          </div>
          <div className="text-left ml-4 gap-2">
            <li className="mt-3">1,00,000 words/month</li>
            <li className="mt-3">50+ Content templates</li>
            <li className="mt-3">Unlimited Download & copy</li>
            <li className="mt-3">1 Year of History</li>
          </div>
          <Button
            variant={"outline"}
            className="rounded-2xl flex gap-2 text-primary border border-gray-950  m-5"
            onClick={() => handlePayment(5)}
          >
            Upgrade Plan
          </Button>
        </div>
        <div className="bg-white shadow-md rounded-lg px-4 flex flex-col">
          <div className="text-center">
            <p className="mt-6 mb-3">Full Time</p>
            <h1 className="font-bold text-3xl mb-2">50$</h1>
          </div>
          <div className="text-left ml-4 gap-2">
            <li className="mt-3">Unlimited words/month</li>
            <li className="mt-3">50+ Content templates</li>
            <li className="mt-3">Unlimited Download & copy</li>
            <li className="mt-3">10 Years of History</li>
          </div>
          <Button
            variant={"outline"}
            className="rounded-2xl flex gap-2 text-primary border border-gray-950  m-5"
            onClick={() => handlePayment(50)}
          >
            Upgrade Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default billing;
