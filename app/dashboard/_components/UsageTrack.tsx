"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCredit } from "@/app/(context)/UpdateCredit";

const UsageTrack = () => {
  const { user } = useUser();
  const redirect = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCredit, setUpdateCredit } = useContext(UpdateCredit);

  const handleClick = () => {
    redirect.push("/dashboard/billing");
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user, updateCredit]);

  const getData = async () => {
    try {
      const result: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(
          eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress || "")
        );

      getTotalUsage(result);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const getTotalUsage = (result: HISTORY[]) => {
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
      >
        Upgrade
      </Button>
    </div>
  );
};

export default UsageTrack;
