"use client";
import React, { useState } from "react";

const SimulationPage = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSimulation = async () => {
    setLoading(true);

    const prompt = `
      Simulate the performance of the following social media post.
      ---
      Description: ${description}
      ---
      Assume this is an Instagram-style post with a photo. Estimate engagement (likes, comments, reach), audience reaction, and provide actionable tips to improve reach and performance.
    `;

    // Gemini API call placeholder
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
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Post Performance Simulator( Still Working )</h1>
      <h1 className="text-2xl font-bold mb-6">In Pipeline</h1>

      <textarea
        placeholder="Describe your post..."
        className="w-full p-4 border rounded mb-4"
        rows={6}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        className="mb-4"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button
        onClick={handleSimulation}
        disabled={loading}
        className="bg-primary text-white px-6 py-2 rounded"
      >
        {loading ? "Simulating..." : "Run Simulation"}
      </button>

      {report && (
        <div className="mt-10 p-6 border rounded bg-gray-100 whitespace-pre-wrap">
          <h2 className="text-xl font-semibold mb-2">Simulation Report:</h2>
          {report}
        </div>
      )}
    </div>
  );
};

export default SimulationPage;
