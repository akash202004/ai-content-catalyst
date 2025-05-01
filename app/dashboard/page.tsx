"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";
import CategoryTabs from "./_components/CategoryTab";

const page = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <div>
      {/* Search Section */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      {/* Category Tabs */}
      <CategoryTabs
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {/* Template List Section */}
      <TemplateListSection
        userSearchInput={userSearchInput}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default page;
