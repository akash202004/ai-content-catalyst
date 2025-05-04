import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

interface TemplateListSectionProps {
  userSearchInput?: string;
  selectedCategory?: string;
}

const TemplateListSection = ({
  userSearchInput,
  selectedCategory = "All",
}: TemplateListSectionProps) => {
  const [TemplateList, setTemplateList] = useState<TEMPLATE[]>(Templates);

  useEffect(() => {
    let filtered = Templates;

    if (userSearchInput) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) =>
        item.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    setTemplateList(filtered);
  }, [userSearchInput, selectedCategory]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10 pt-5 bg-slate-100">
      {TemplateList.map((item) => (
        <TemplateCard key={item.slug} {...item} />
      ))}
    </div>
  );
};

export default TemplateListSection;
