"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState, useRef } from "react";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCredit } from "@/app/(context)/UpdateCredit";
import { getAiOutputById } from "@/controllers/aiOutputController";

const UsageTrack = () => {
  const { user } = useUser();
  const redirect = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCredit, setUpdateCredit } = useContext(UpdateCredit);
  
  const [loading, setLoading] = useState(false);
  const lastClicked = useRef(0); 

  const handleClick = async () => {
    const now = Date.now();
    if (now - lastClicked.current < 1000) {
      return;
    }
    lastClicked.current = now; 
    setLoading(true); 

    await redirect.push("/dashboard/billing");

    setLoading(false); 
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user, updateCredit]);

  const getData = async () => {
    try {
      if(!user) {
        console.error("User not found");
        return;
      }
      const result = await getAiOutputById(user?.id);
      getTotalUsage(result);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const getTotalUsage = (result: any[]) => {
    let total: number = 0;
    result.forEach((element: any) => {
      total = total + Number(element.aiResponse?.length);
    });

    const cappedTotalUsage = Math.min(total, 10000);
    setTotalUsage(cappedTotalUsage);
  };

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-md">Credit</h2>
        <div className="bg-[#b48bff] w-full rounded-full">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: (totalUsage / 10000) * 100 + "%" }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 credit used</h2>
      </div>
      <Button
        variant={"outline"}
        className="w-full my-3 text-primary font-bold border-black"
        onClick={handleClick}
        disabled={loading} 
      >
        {loading ? "Loading..." : "Upgrade"}
      </Button>
    </div>
  );
};

export default UsageTrack;
