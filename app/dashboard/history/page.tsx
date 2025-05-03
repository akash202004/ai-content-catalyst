"use client";
import { db } from "@/db/index";
import { AIOutput } from "@/db/schema";
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

const History = () => {
  const [historyData, setHistoryData] = useState<HISTORY[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { user } = useUser();

  const formatTemplateSlug = (slug: string) => {
    return slug
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleString();
  };

  const copyToClipboard = (text: string | null) => {
    if (!text) {
      toast.error("Nothing to copy!");
      return;
    }
    navigator.clipboard.writeText(text).then(
      () => toast.success("Copied!"),
      (err) => {
        toast.error("Failed to copy!");
        console.error("Clipboard error:", err);
      }
    );
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const email = user?.primaryEmailAddress?.emailAddress || "";
      // const data: HISTORY[] = await db
      //   .select()
      //   .from(AIOutput)
      //   .where(eq(AIOutput.createdBy, email))
      //   .orderBy(desc(AIOutput.createdAt));
      // setHistoryData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load history.");
      toast.error("Failed to fetch history data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchData();
  }, [user]);

  return (
    <div className="m-5 bg-white p-5 rounded-2xl shadow-md">
      <h1 className="text-4xl font-bold">History</h1>
      <p className="text-sm mb-5">Search your previously generated AI content</p>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : historyData.length === 0 ? (
        <p>No history found.</p>
      ) : (
        <>
          <div className="grid grid-cols-5 font-bold gap-10 p-2 bg-slate-300">
            <div>TEMPLATE</div>
            <div className="col-span-2">AI RESPONSE</div>
            <div>DATE</div>
            <div>COPY</div>
          </div>

          {historyData.map((item: HISTORY, index: number) => (
            <div
              className="grid grid-cols-5 gap-10 p-2 py-5 border-b-2"
              key={index}
            >
              <div className="font-semibold">
                <p>{formatTemplateSlug(item.templateSlug)}</p>
              </div>
              <div className="line-clamp-4 col-span-2">
                <p>{item.aiResponse || "No response available"}</p>
              </div>
              <div>
                <p>{formatDate(item.createdAt)}</p>
              </div>
              <div>
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => copyToClipboard(item.aiResponse)}
                >
                  COPY
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default History;
