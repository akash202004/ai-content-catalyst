"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const UsageTrack = () => {
  const { user } = useUser();
  const redirect = useRouter();
  const [result, setResult] = useState<any>([]);

  const handleClick = () => {
    redirect.push("/dashboard/billing");
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (user?.primaryEmailAddress?.emailAddress) {
  //       const resultData = await db
  //         .select()
  //         .from(AIOutput)
  //         .where(eq(AIOutput.createdAt, user.primaryEmailAddress.emailAddress));
  //       setResult(resultData);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const getTotalUsage = () => {
  //   let total: number = 0;
  //   result.forEach((element: any) => {
  //     total = total + Number(element.aiResponse?.length || 0);
  //   });
  //   console.log(total);
  // };

  // useEffect(() => {
  //   if (result.length > 0) {
  //     getTotalUsage();
  //   }
  // }, [result]);

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-md">Credit</h2>
        <div className="bg-[#b48bff] w-full rounded-full">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: "35%" }}
          ></div>
        </div>
        <h2 className="text-sm my-2">350/10,000 credit used</h2>
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
