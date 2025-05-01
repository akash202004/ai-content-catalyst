import React from "react";

const categories = [
  "All",
  "Blog",
  "Instagram",
  "YouTube",
  "Linkedin",
  "Twitter",
  "SEO",
  "Other",
];

interface Props {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryTabs = ({ selectedCategory, onSelectCategory }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center pt-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === cat
              ? "bg-black text-white"
              : "bg-white text-black"
          } hover:bg-black hover:text-white transition`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
