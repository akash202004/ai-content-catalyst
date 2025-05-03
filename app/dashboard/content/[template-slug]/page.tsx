"use client";

import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/utils/aiModel";
import { db } from "@/db/index";
import { AIOutput } from "@/db/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { toast } from "react-toastify";
import { UpdateCredit } from "@/app/(context)/UpdateCredit";
import { createAiOutput } from "@/controllers/aiOutputController";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

interface AIOutputData {
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
}

const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCredit, setUpdateCredit } = useContext(UpdateCredit);
  const { user } = useUser();

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === props.params["template-slug"]
  );

  const generateAiContent = async (formData: any) => {
    if (!user) {
      toast.error("Please login to continue...");
      return;
    }
    if (totalUsage >= 10000) {
      toast.error("Your Free Credit Used Up! Upgrade for more...");
      return;
    }

    try {
      setLoading(true);

      if (!selectedTemplate) {
        throw new Error("Selected Template not found");
      }

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
      const result = await chatSession.sendMessage(finalAIPrompt);
      const aiResponseText = await result?.response.text();
      setAiOutput(aiResponseText);

      await saveInDb({
        formData,
        templateSlug: selectedTemplate?.slug,
        aiResponse: aiResponseText,
        createdBy: user?.id || "", 
      });

      setLoading(false);
      setUpdateCredit(Date.now());
    } catch (error) {
      console.log("Error in generating AI content", error);
      setLoading(false); 
    }
  };

  const saveInDb = async ({
    formData,
    aiResponse,
    templateSlug,
    createdBy,
  }: AIOutputData) => {
    try {
      const result = await createAiOutput({
        formData: JSON.stringify(formData),
        aiResponse,
        templateSlug,
        createdBy: user?.id || "", 
      });

    } catch (error) {
      console.error("Error saving to database:", error);
      throw error;
    }
  };

  return (
    <div className="p-5 bg-slate-100">
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
