"use client";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

const history = () => {
  const [historyData, setHistoryData] = useState<HISTORY[]>([]);
  const { user } = useUser();
  const param = useSearchParams();

  const formatTemplateSlug = (slug: any) => {
    const whitespaceRemoved = slug.replace(/-/g, " ");
    const formatSlud = whitespaceRemoved
      .split(" ")
      .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formatSlud;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Copied!");
      },
      (err) => {
        toast.error("Failed to Copied!");
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const fetchData = async () => {
    // if (!user?.primaryEmailAddress?.emailAddress) {
    //   throw new Error("User email is required");
    // }
    const data: HISTORY[] = await db
      .select()
      .from(AIOutput)
      .where(
        eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress || "")
      )
      .orderBy(desc(AIOutput?.createdAt));

    setHistoryData(data);
    try {
    } catch (error) {
      console.log("Error in fetching the Data", error);
    }
  };

  useEffect(() => {
    if (param.get("load") === "load") {
      fetchData();
    }
  }, [param]);

  fetchData();

  return (
    <div className="m-5 bg-white p-5">
      <h1 className="text-4xl font-bold">History</h1>
      <p className="text-sm">Search your previously generated AI content</p>
      <div className="grid grid-cols-5 font-bold gap-10 p-2 mt-5 bg-slate-300">
        <div>TEMPLATE</div>
        <div className="col-span-2">AI RESPOND</div>
        <div>DATE</div>
        <div>COPY</div>
      </div>
      {historyData.map((item: any, index: number) => (
        <div
          className="grid grid-cols-5 gap-10 p-2 py-5 border-b-2"
          key={index}
        >
          <div className="font-semibold">
            <p>{formatTemplateSlug(item.templateSlug)}</p>
          </div>
          <div className="line-clamp-4 col-span-2">
            <p>{item.aiResponse}</p>
          </div>
          <div>
            <p>{item.createdAt}</p>
          </div>
          <div>
            <button
              className="text-blue-600"
              onClick={() => copyToClipboard(item.aiResponse)}
            >
              COPY
            </button>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default history;
