"use client";
import {
  FileClock,
  Home,
  Settings,
  WalletCards,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
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

  return (
    <div className="h-screen p-5 relative shadow-sm border bg-white">
      <div className="flex justify-center">
        <Link href={"/dashboard"}>
          <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <hr className="my-[15px] border shadow-sm" />
      <div className="mt-4 ">
        {MenuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <div
              className={`flex gap-2 mb-4 p-3 rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 border border-black  hover:bg-primary hover:text-white cursor-pointer items-center ${
                path == menu.path ? "bg-primary text-white" : ""
              }`}
            >
              <menu.icon className="h-7" />
              <h2 className="text-lg">{menu.name}</h2>
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
