import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      <div className="flex items-center gap-5">
        <h2 className="text-white bg-primary rounded-full text-sm p-3">
          Join Membership just for $5/Month
        </h2>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
