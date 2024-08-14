"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const UsageTrack = () => {
  const { user } = useUser();
  const redirect = useRouter();
  const [totalUsed, setTotalUsed] = useState<number>(0);

  const handleClick = () => {
    redirect.push("/dashboard/billing");
  };

  useEffect(() => {
    user && getData();
  }, [user]);

  const getData = async () => {
    try {
      const result: HISTORY[] = await db
        .select()
        .from(AIOutput)
        .where(
          eq(AIOutput.createdAt, user?.primaryEmailAddress?.emailAddress || "")
        );

      getTotalUsage(result);
      console.log(result);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const getTotalUsage = (result: HISTORY[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total = total + Number(element.aiResponse?.length);
    });
    console.log(total);
    setTotalUsed(total);
  };

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-md">Credit</h2>
        <div className="bg-[#b48bff] w-full rounded-full">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: (totalUsed / 10000) * 100 + "%" }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsed}/10,000 credit used</h2>
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
