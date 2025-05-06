"use client";

import { chatSession } from "@/utils/geminiModel";
import ReactMarkdown from "react-markdown";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SimulationPage = () => {
  const { user } = useUser();
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [report, setReport] = useState<string | null>(null);
  const [analytics, setAnalytics] = useState({
    likes: 0,
    comments: 0,
    shares: 0,
    saves: 0,
  });
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [platform, setPlatform] = useState("Instagram");

  const handleImageUpload = (file: File) => {
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const extractAnalytics = (text: string) => {
    return {
      likes: parseInt(text.match(/Likes:\s*(\d+)/)?.[1] || "0"),
      comments: parseInt(text.match(/Comments:\s*(\d+)/)?.[1] || "0"),
      shares: parseInt(text.match(/Shares:\s*(\d+)/)?.[1] || "0"),
      saves: parseInt(text.match(/Saves:\s*(\d+)/)?.[1] || "0"),
    };
  };

  const handleSimulation = async () => {
    if (!description) return toast.error("Please add a description.");
    if (!tags.length) return toast.error("Please add at least one tag.");

    try {
      setLoading(true);
      const prompt = `
        You are a senior social media strategist. Your task is to analyze and simulate the performance of a post on ${platform}.

        Platform: ${platform}
        Description: "${description}"
        Tags: ${tags.join(", ")}

        Do the following:
        1. Simulate engagement from 100 users (like, comment, share, save, ignore).
        2. Generate analytics: Likes, Comments, Shares, Saves.
        3. Provide tips.

        Respond in this format:
        Summary: ...
        User Reactions:
        - ...
        Estimated Analytics:
        - Likes: number
        - Comments: number
        - Shares: number
        - Saves: number
        Recommendations: ...
      `;

      const result = await chatSession.sendMessage(prompt);
      const text = result?.response.text();
      setReport(text);

      const stats = extractAnalytics(text);
      setAnalytics(stats);

      toast.success("Simulation completed!");
    } catch (err: any) {
      toast.error(err.message || "Simulation failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const chartData = {
    labels: ["Likes", "Comments", "Shares", "Saves"],
    datasets: [
      {
        label: "Estimated Interactions",
        data: [
          analytics.likes,
          analytics.comments,
          analytics.shares,
          analytics.saves,
        ],
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#F44336"],
      },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        📊 Post Performance Simulator
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Preview and simulate how your post might perform with AI-generated
        insights.
      </p>

      {!showPreview && (
        <>
          <label className="block mb-2 font-medium">Choose Platform:</label>
          <select
            className="w-full p-2 border rounded mb-4"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Twitter">Twitter</option>
          </select>

          <label className="block mb-2 font-medium">Description:</label>
          <textarea
            placeholder="Write your post description..."
            className="w-full p-4 border rounded mb-4"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="mb-4">
            <label className="block mb-2 font-medium">Add Tags:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                placeholder="Type a tag and press Enter"
                className="flex-1 px-4 py-2 border rounded"
              />
              <button
                onClick={handleAddTag}
                className="bg-gray-800 text-white px-4 rounded"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap mt-2 gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            className="mb-4 block w-full"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImageUpload(file);
            }}
          />

          <button
            onClick={() => setShowPreview(true)}
            // disabled={!description || !imagePreview}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Preview Post
          </button>
        </>
      )}

      {showPreview && (
        <div className="mt-8 overflow-hidden sbg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)]  hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 p-5 border border-black">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <Image
                src={user?.imageUrl || "/placeholder.jpg"}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{user?.fullName || "Anonymous"}</p>
                <p className="text-sm text-gray-500">Just now on {platform}</p>
              </div>
            </div>
          </div>

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Post preview"
              className="w-full object-cover max-h-[400px]"
            />
          )}

          <div className="p-4">
            <p className="mb-2">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={handleSimulation}
              disabled={loading}
              className="w-full py-2 bg-green-600 text-white rounded"
            >
              {loading ? "Simulating..." : "Start Simulation"}
            </button>
          </div>
        </div>
      )}

      {report && (
        <div className="mt-6">
          <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)]  hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 p-5 border border-black">
            <h3 className="font-semibold text-xl mb-4">Simulation Results</h3>
            <Bar data={chartData} options={{ responsive: true }} />
          </div>

          <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)]  hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 p-5 mt-5 border border-black">
            <h3 className="font-semibold text-xl mb-4">Overall Report</h3>
            <pre className="mt-4 bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
              <ReactMarkdown>{report}</ReactMarkdown>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimulationPage;
