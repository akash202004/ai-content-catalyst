import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

const billing = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = (amount: Number) => {
    const options = {
      key: "YOUR_RAZORPAY_KEY",
      amount: Number(amount) * 100, // Amount in paise (100 paise = 1 INR)
      currency: "INR",
      name: "Your Company Name",
      description: "Your Plan Description",
      handler: function (response:any) {
        console.log(response);
        alert("Payment Successful");
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "1234567890",
      },
      theme: {
        color: "#F37254",
      },
    };

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    };
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
