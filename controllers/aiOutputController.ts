import { db } from "@/db/index";
import { AIOutput } from "@/db/schema";
import { eq } from "drizzle-orm";

interface AiOutput {
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
}

export async function createAiOutput(data: AiOutput) {
  const { formData, aiResponse, templateSlug, createdBy } = data;

  try {
    const result = await db.insert(AIOutput).values({
      formData,
      aiResponse,
      templateSlug,
      createdBy,
    });
    return result;
  } catch (error) {
    console.error("Error creating AI output:", error);
    throw new Error("Failed to create AI output");
  }
}

export async function getAiOutputById(id: string){
  try {
    const result = await db.query.AIOutput.findMany({
      where: eq(AIOutput.createdBy, id),
    });
    return result;
  } catch (error) {
    console.error("Error fetching AI output by ID:", error);
    throw new Error("Failed to fetch AI output");
  }
}
