import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link href={"/dashboard/content/" + item?.slug}>
      <div className="p-5 bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 border border-black flex flex-col gap-3 cursor-pointer hover:scale-105">
        <Image src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-medium text-lg line-clamp-1">{item.name}</h2>
        <p className="text-gray-500 line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;
