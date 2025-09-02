"use client";

import { chatSession, analyzeImageWithGemini } from "@/utils/geminiModel";
import { cleanAllFormatting } from "@/utils/cleanRtfText";
import {
  getSimulationCountByUser,
  createSimulationWithCreditCheck,
} from "@/controllers/simulationController";
import { UpdateSimulationCredit } from "@/app/(context)/UpdateCredit";
import ReactMarkdown from "react-markdown";
import { useUser } from "@clerk/nextjs";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
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
import { Button } from "@/components/ui/button";

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
  const router = useRouter();
  const { updateSimulationCredit, setUpdateSimulationCredit } = useContext(
    UpdateSimulationCredit
  );

  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [report, setReport] = useState<string | null>(null);
  const [imageAnalysis, setImageAnalysis] = useState<string | null>(null);
  const [analytics, setAnalytics] = useState({
    likes: 0,
    comments: 0,
    shares: 0,
    saves: 0,
  });
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [platform, setPlatform] = useState("Instagram");
  const [simulationCount, setSimulationCount] = useState(0);

  // Check simulation count on component mount
  useEffect(() => {
    const checkSimulationCount = async () => {
      if (user?.id) {
        try {
          const count = await getSimulationCountByUser(user.id);
          setSimulationCount(count);
        } catch (error) {
          console.error("Failed to get simulation count:", error);
        }
      }
    };

    checkSimulationCount();
  }, [user]);

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

  const analyzeImageOnly = async () => {
    if (!image) return toast.error("Please upload an image first.");

    try {
      setLoading(true);
      toast.info("Analyzing image...");

      const imagePrompt = `
        Analyze this image for social media performance on ${platform}. Provide a comprehensive analysis including:
        
        1. Visual Composition & Quality:
           - Lighting, colors, contrast
           - Subject positioning and framing
           - Overall aesthetic appeal
        
        2. Platform Optimization:
           - How well it fits ${platform}'s visual standards
           - Recommended posting times and audience
        
        3. Engagement Potential:
           - Elements that could drive likes, comments, shares
           - Emotional impact and storytelling
        
        4. Improvement Suggestions:
           - Specific recommendations for better performance
           - Alternative compositions or edits
        
        5. Content Recommendations:
           - Suggested captions or hashtags that would complement this image
           - Target audience insights
        
        Provide actionable insights in plain text format.
      `;

      const analysis = await analyzeImageWithGemini(image, imagePrompt);
      setImageAnalysis(cleanAllFormatting(analysis));
      toast.success("Image analysis completed!");
    } catch (error) {
      console.error("Image analysis failed:", error);
      toast.error("Failed to analyze image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSimulation = async () => {
    if (!description) return toast.error("Please add a description.");
    if (!tags.length) return toast.error("Please add at least one tag.");

    // Check if user has exceeded free simulation limit
    if (simulationCount >= 3) {
      toast.error(
        "You've reached your free simulation limit (3/3). Please upgrade to continue!"
      );
      setTimeout(() => {
        router.push("/dashboard/billing");
      }, 2000);
      return;
    }

    if (!user?.id) {
      toast.error("Please log in to continue.");
      return;
    }

    try {
      setLoading(true);

      let imageAnalysisText = "";

      // Analyze image if uploaded
      if (image) {
        toast.info("Analyzing uploaded image...");
        const imagePrompt = `
          Analyze this image for social media performance on ${platform}. Evaluate:
          1. Visual appeal and composition
          2. Color scheme and lighting
          3. Subject matter and focus
          4. Potential engagement factors
          5. Platform-specific optimization
          6. Suggestions for improvement
          
          Provide a detailed analysis focusing on how this image might perform on ${platform}.
        `;

        try {
          imageAnalysisText = await analyzeImageWithGemini(image, imagePrompt);
          setImageAnalysis(cleanAllFormatting(imageAnalysisText));
          toast.success("Image analysis completed!");
        } catch (imageError) {
          console.error("Image analysis failed:", imageError);
          toast.warning(
            "Image analysis failed, continuing with text-only simulation."
          );
        }
      }

      // Combine image analysis with text simulation
      const prompt = `
        You are a senior social media strategist. Your task is to analyze and simulate the performance of a post on ${platform}.

        Platform: ${platform}
        Description: "${description}"
        Tags: ${tags.join(", ")}
        ${
          imageAnalysisText
            ? `Image Analysis: ${imageAnalysisText}`
            : "No image provided"
        }

        Do the following:
        1. Simulate engagement from 100 users (like, comment, share, save, ignore).
        2. Generate analytics: Likes, Comments, Shares, Saves.
        3. Provide comprehensive tips considering both text and visual elements.
        ${
          imageAnalysisText
            ? "4. Factor in the image analysis for more accurate predictions."
            : ""
        }

        Respond in this format:
        Summary: ...
        User Reactions:
        - ...
        Estimated Analytics:
        - Likes: number
        - Comments: number
        - Shares: number
        - Saves: number
        ${imageAnalysisText ? "Visual Impact: ..." : ""}
        Recommendations: ...
      `;

      const result = await chatSession.sendMessage(prompt);
      const rawText = result?.response.text();
      const cleanedText = cleanAllFormatting(rawText);
      setReport(cleanedText);

      const stats = extractAnalytics(cleanedText);
      setAnalytics(stats);

      // Save simulation to database
      try {
        await createSimulationWithCreditCheck({
          createdBy: user.id,
          platform,
          description,
          tags: tags.join(", "),
          picture: imagePreview || undefined,
          likes: stats.likes,
          comments: stats.comments,
          shares: stats.shares,
          saves: stats.saves,
          report: cleanedText,
        });

        // Update simulation count
        setSimulationCount((prev) => prev + 1);

        // Trigger context update
        setUpdateSimulationCredit(Date.now());

        toast.success("Simulation completed and saved!");
      } catch (saveError: any) {
        if (saveError.message === "FREE_LIMIT_EXCEEDED") {
          toast.error(
            "Free simulation limit exceeded! Redirecting to billing..."
          );
          setTimeout(() => {
            router.push("/dashboard/billing");
          }, 2000);
          return;
        } else {
          console.error("Failed to save simulation:", saveError);
          toast.warning("Simulation completed but failed to save.");
        }
      }
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
    <div className="bg-white m-5 p-5 rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 mt-5 border border-black">
      <h1 className="text-4xl font-bold text-center">
        Post Performance Simulator
      </h1>
      <p className="text-gray-600 text-sm mb-4 text-center">
        Preview and simulate how your post might perform with AI-generated
        insights. Upload an image for enhanced visual analysis!
      </p>

      {/* Credit Warning */}
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-purple-800">
              Simulation Credits
            </h3>
            <p className="text-sm text-purple-600">
              {simulationCount}/3 free simulations used
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-20 bg-purple-200 rounded-full h-2 mr-3">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(simulationCount / 3) * 100}%` }}
              ></div>
            </div>
            {simulationCount >= 3 ? (
              <Button
                onClick={() => router.push("/dashboard/billing")}
                size="sm"
                className="bg-purple-600 hover:bg-purple-700"
              >
                Upgrade Now
              </Button>
            ) : (
              <span className="text-sm text-purple-600 font-medium">
                {3 - simulationCount} left
              </span>
            )}
          </div>
        </div>
      </div>

      {!showPreview && (
        <>
          <label className="block mb-2 font-medium">Choose Platform:</label>
          <select
            className="w-full p-2 border border-black rounded mb-4"
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
            className="w-full p-4 border border-black rounded mb-4"
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
                className="flex-1 border border-black px-4 py-2 rounded"
              />
              <Button onClick={handleAddTag} variant={"secondary"}>
                Add
              </Button>
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

          <label className="block mb-2 font-medium">
            Upload Image (Optional):
          </label>
          <input
            type="file"
            accept="image/*"
            className="mb-4 block w-full rounded border border-black p-2"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImageUpload(file);
            }}
          />
          {imagePreview && (
            <div className="mb-4 p-2 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-700">
                ✓ Image uploaded! AI will analyze this image during simulation
                for enhanced insights.
              </p>
              <div className="mt-2 flex gap-2">
                <Button
                  onClick={analyzeImageOnly}
                  disabled={loading}
                  variant="outline"
                  size="sm"
                >
                  {loading ? "Analyzing..." : "Analyze Image Only"}
                </Button>
              </div>
            </div>
          )}

          <Button onClick={() => setShowPreview(true)}>Preview Post</Button>
        </>
      )}

      {showPreview && (
        <div className="mt-8 overflow-hidden bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 p-5 border border-black">
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

            <Button
              onClick={handleSimulation}
              disabled={loading || simulationCount >= 3}
              className={`w-full ${
                simulationCount >= 3 ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
            >
              {loading
                ? "Simulating..."
                : simulationCount >= 3
                ? "Upgrade Required (3/3 used)"
                : "Start AI-Powered Simulation"}
            </Button>

            {simulationCount >= 3 && (
              <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-center">
                <p className="text-sm text-red-600">
                  You've used all 3 free simulations.{" "}
                  <button
                    onClick={() => router.push("/dashboard/billing")}
                    className="underline font-semibold"
                  >
                    Upgrade now
                  </button>{" "}
                  for unlimited access!
                </p>
              </div>
            )}

            <Button
              variant={"secondary"}
              onClick={() => setShowPreview(false)}
              className="mt-4 w-full "
            >
              Edit Preview
            </Button>
          </div>
        </div>
      )}

      {imageAnalysis && !report && (
        <div className="mt-6">
          <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 p-5 border border-black">
            <h3 className="font-semibold text-xl mb-4">
              🖼️ Image Analysis Results
            </h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-gray-700">
                <ReactMarkdown>{imageAnalysis}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}

      {report && (
        <div className="mt-6">
          <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 p-5 border border-black">
            <h3 className="font-semibold text-xl mb-4">
              📊 Simulation Results
            </h3>
            <Bar data={chartData} options={{ responsive: true }} />
          </div>

          {imageAnalysis && (
            <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 p-5 mt-5 border border-black">
              <h3 className="font-semibold text-xl mb-4">🎨 Visual Analysis</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-700">
                  <ReactMarkdown>{imageAnalysis}</ReactMarkdown>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 p-5 mt-5 border border-black">
            <h3 className="font-semibold text-xl mb-4">📋 Detailed Report</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ReactMarkdown>{report}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimulationPage;
