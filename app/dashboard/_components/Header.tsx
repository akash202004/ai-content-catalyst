import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const reDirect = useRouter();

  const handleClick = () => {
    reDirect.push("/");
  };

  return (
    <div className="p-4 shadow-sm border-b-2 flex justify-between items-center bg-white">
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
        <h2 className="text-white bg-primary rounded-2xl border hidden lg:block border-black text-sm p-3">
          <Link href={"/dashboard/billing"}>
            Join Membership just for $5/Month
          </Link>
        </h2>
        <Link href={"/dashboard/profile"}>
          <UserButton
            userProfileMode="navigation"
            userProfileUrl="/dashboard/setting"
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: "w-10 h-10 border border-black",
              },
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
