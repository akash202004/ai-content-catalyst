import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error(
    "Gemini API key is not defined. Please set the NEXT_PUBLIC_GEMINI_API_KEY environment variable."
  );
}
const genAI = new GoogleGenerativeAI(apiKey);

// Regular text model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a professional content creator. Always respond with plain text or markdown format only. Never use RTF, HTML, or any other formatting codes. Keep your responses clean and readable.",
});

// Vision model for image analysis
const visionModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are an expert social media strategist and visual content analyst. Analyze images for social media performance, visual appeal, composition, and engagement potential. Always respond in plain text format.",
});

const generationConfig = {
  temperature: 0.2,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [],
});

// Function to analyze image with vision model
export const analyzeImageWithGemini = async (
  imageFile: File,
  prompt: string
) => {
  try {
    // Convert image to base64
    const imageBase64 = await fileToGenerativePart(imageFile);

    const result = await visionModel.generateContent([prompt, imageBase64]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
};

// Helper function to convert file to Gemini format
const fileToGenerativePart = async (file: File): Promise<any> => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(",")[1];
      resolve(base64String);
    };
    reader.readAsDataURL(file);
  });

  const base64Data = await base64EncodedDataPromise;

  return {
    inlineData: {
      data: base64Data,
      mimeType: file.type,
    },
  };
};
