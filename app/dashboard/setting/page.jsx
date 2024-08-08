import { UserProfile } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <UserProfile />
    </div>
  );
};

export default page;
