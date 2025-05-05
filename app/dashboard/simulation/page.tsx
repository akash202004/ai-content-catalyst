"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SimulationPage = () => {
  const { user } = useUser();
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [report, setReport] = useState<any | null>(null); // Object for structured report
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [platform, setPlatform] = useState("Instagram");

  const handleImageUpload = (file: File) => {
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSimulation = async () => {
    if (!description) {
      toast.error("Please add a description.");
      return;
    }
    if (!tags.length) {
      toast.error("Please add at least one tag.");
      return;
    }

    try {
      setLoading(true);

      const prompt = `
      You are a senior social media strategist. Your task is to analyze and simulate the performance of a post on ${platform} based on its content, tone, and hashtags.

      Given:
      ---
      Platform: ${platform}
      Description: "${description}"
      Tags: ${tags.join(", ")}
      ---

      Do the following:
      1. **Simulate engagement** from 100 diverse users. For each user, randomly decide:
        - Whether they liked, commented, shared, or saved the post (or ignored it)
        - The reason for their interaction (or lack thereof)
        - How the post made them feel (emotionally or intellectually)
        - Whether they would follow the poster

      2. **Generate analytics**:
        - Estimated number of likes, comments, shares, saves, and reach
        - Engagement rate (%) based on simulated impressions

      3. **Provide insights**:
        - What worked well in the post
        - What could be improved (content, tags, tone, platform fit)
        - Tips to optimize future posts for better performance on ${platform}

      Output the result in a clean, structured format with headings:
      - Summary
      - User Reactions (sample of 5-10)
      - Estimated Analytics
      - Recommendations
    `;

      const res = await fetch("/api/gemini-simulation", {
        method: "POST",
        body: JSON.stringify({ prompt }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setReport(data.result);
      toast.success("Simulation completed!");
    } catch (err: any) {
      toast.error(err.message || "Failed to simulate.");
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

  const chartData: any = report ? {
    labels: ['Likes', 'Comments', 'Shares', 'Saves'],
    datasets: [
      {
        label: 'User Interactions',
        backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#F44336'],
        borderColor: ['#388E3C', '#1976D2', '#F57C00', '#D32F2F'],
        borderWidth: 1,
      },
    ],
  } : {
    labels: [],
    datasets: [],
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
            className="w-full p-4 border rounded mb-4 focus:outline-none focus:ring focus:ring-blue-200"
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
                className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                onClick={handleAddTag}
                className="bg-gray-800 text-white px-4 rounded hover:bg-gray-900"
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
            disabled={!description || !imagePreview}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
          >
            Preview Post
          </button>
        </>
      )}

      {showPreview && (
        <div className="mt-8 border rounded overflow-hidden shadow bg-white">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <Image
                src={user?.imageUrl || "/placeholder.jpg"}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover border shadow"
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
              className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
            >
              {loading ? "Simulating..." : "Start Simulation"}
            </button>
          </div>
        </div>
      )}

      {/* Chart */}
      {report && (
        <div className="mt-6">
          <h3 className="font-semibold text-xl mb-4">Simulation Results</h3>
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      )}
    </div>
  );
};

export default SimulationPage;
