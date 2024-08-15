import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const reDirect = useRouter();

  const handleClick = () => {
    reDirect.push("/");
  };

  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
      <div>
        <Button
          onClick={handleClick}
          variant={"outline"}
          className="font-semibold text-primary text-md"
        >
          Landing Page
        </Button>
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
