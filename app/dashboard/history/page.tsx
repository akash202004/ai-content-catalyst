"use client";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";

const page = () => {
  const [historyData, setHistoryData] = useState<any>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.primaryEmailAddress?.emailAddress) {
        throw new Error("User email is required");
      }
      const data = await db
        .select()
        .from(AIOutput)
        .where(
          eq(AIOutput?.createdBy, user.primaryEmailAddress.emailAddress || "")
        );
      setHistoryData(data);
      try {
      } catch (error) {
        console.log("Error in fetching the Data", error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div>
      {historyData.map((item: any, index: number) => (
        <div key={index}>
          <h1>{item.formData}</h1>
          <h1>{item.aiResponse}</h1>
          <h1>{item.createdAt}</h1>
        </div>
      ))}
    </div>
  );
};

export default page;
