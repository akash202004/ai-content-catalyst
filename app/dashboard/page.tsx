import React from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

const page = () => {
  return (
    <div>
      {/* Search Section */}
      <SearchSection />
      {/* Template List Section */}
      <TemplateListSection />
    </div>
  );
};

export default page;
