"use client";
import {
  FileClock,
  Home,
  Settings,
  WalletCards,
  TrendingUp,
  X,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

interface SideNavProps {
  onClose?: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ onClose }) => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "Post Simulation",
      icon: TrendingUp,
      path: "/dashboard/simulation",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();

  const handleLinkClick = () => {
    // Close mobile menu when a link is clicked
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="h-screen p-5 relative shadow-sm border-r border-black bg-white">
      {/* Mobile Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 p-2 rounded-lg border border-black hover:bg-gray-100 transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      <div className="flex justify-center border-b pb-3 border-black">
        <Link href={"/dashboard"} onClick={handleLinkClick}>
          <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="mt-4 ">
        {MenuList.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            prefetch={true}
            onClick={handleLinkClick}
          >
            <div
              className={`flex gap-2 mb-4 p-2 rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 border border-black  hover:bg-primary hover:text-white cursor-pointer items-center ${
                path == menu.path ? "bg-primary text-white" : ""
              }`}
            >
              <menu.icon className="h-7" />
              <h2 className="text-md">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
};

export default SideNav;
