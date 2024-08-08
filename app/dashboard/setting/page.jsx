import { UserProfile } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center p-5 bg-slate-100">
      <UserProfile routing="hash" />
    </div>
  );
};

export default page;
