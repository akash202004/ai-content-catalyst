import React from "react";

const categories = [
  "All",
  "Blog",
  "Instagram",
  "YouTube",
  "Linkedin",
  "Twitter",
  "Business",
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
          className={`px-6 py-2 rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 border border-black ${
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
