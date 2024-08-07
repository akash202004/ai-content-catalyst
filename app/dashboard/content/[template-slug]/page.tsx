"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
  );

  const generateAiContent = async (formData: any) => {
    try {
      setLoading(true);

      if (!selectedTemplate) {
        throw new Error("Selected Template not found");
      }

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(FormData) + ", " + selectedPrompt;
      const result = await chatSession.sendMessage(finalAIPrompt);
      setAiOutput(result?.response.text());
      await saveInDb(formData, selectedTemplate?.slug, result?.response.text());
      setLoading(false);
    } catch (error) {
      console.log("Error in generating AI content", error);
      setLoading(true);
    }
  };

  const saveInDb = async (formData: string, slug: any, aiRes: string) => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      throw new Error("User email is required");
    }

    try {
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiRes,
        createdBy: user.primaryEmailAddress.emailAddress,
        createdAt: moment().format("YYYY-MM-DD"),
      });
      console.log(result);
    } catch (error) {
      console.error("Error saving to database:", error);
      throw error;
    }
  };

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => generateAiContent(v)}
          loading={loading}
        />

        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
