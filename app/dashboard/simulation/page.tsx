"use client";
import React, { useState } from "react";

const SimulationPage = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleImageUpload = (file: File) => {
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSimulation = async () => {
    if (!description) return alert("Please add a description.");
    setLoading(true);

    const prompt = `
      Simulate the performance of the following Instagram-style social media post:
      ---
      Description: ${description}
      ---
      Simulate reactions from 5 fake users. Each should:
      - Say if they liked/commented/saved
      - Explain why they interacted (or not)
      - Mention how the post made them feel
      Provide performance estimates (likes, comments, reach) + tips to improve.
    `;

    const res = await fetch("/api/gemini-simulation", {
      method: "POST",
      body: JSON.stringify({ prompt }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setReport(data.result);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">📊 Post Performance Simulator</h1>
      <p className="text-gray-600 mb-8 text-center">Preview and simulate how your post might perform with AI-generated insights.</p>

      {!showPreview && (
        <>
          <textarea
            placeholder="Write your post description..."
            className="w-full p-4 border rounded mb-4 focus:outline-none focus:ring focus:ring-blue-200"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

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
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div>
                <p className="font-semibold">fake_user123</p>
                <p className="text-sm text-gray-500">Just now</p>
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
            <p>{description}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={handleSimulation}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-all"
                disabled={loading}
              >
                {loading ? "Simulating..." : "Run Simulation"}
              </button>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-500 hover:text-gray-800 underline"
              >
                Edit Post
              </button>
            </div>
          </div>
        </div>
      )}

      {report && (
        <div className="mt-10 p-6 border rounded bg-gray-100 whitespace-pre-wrap shadow">
          <h2 className="text-xl font-semibold mb-2">Simulation Report:</h2>
          {report}
        </div>
      )}
    </div>
  );
};

export default SimulationPage;