import { Search } from "lucide-react";
import React from "react";

const SearchSection = () => {
  return (
    <div className="p-10 bg-gradient-to-br from-purple-600 via-purple-900 to-blue-800 flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p>What woould you like to create today ?</p>
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center gap-2 p-2 border rounded-md bg-white my-5 w-[50%]">
          <Search className="text-black" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-full bg-transparent text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
