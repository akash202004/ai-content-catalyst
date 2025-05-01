import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover z-0"
        poster="/fallback.png"
      >
        <source src="/animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 text-center p-10 bg-black/40 rounded-xl">
        <h2 className="text-3xl font-bold mb-2">Browse All Templates</h2>
        <p className="mb-4">What would you like to create today?</p>
        <div className="flex items-center gap-2 p-2 border rounded-md bg-white w-[300px] mx-auto">
          <Search className="text-black" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-full bg-transparent text-black"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
