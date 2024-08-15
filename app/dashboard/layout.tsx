"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCredit } from "../(context)/UpdateCredit";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [updateCredit, setUpdateCredit] = useState<any>();

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCredit.Provider value={{ updateCredit, setUpdateCredit }}>
        <div className="bg-slate-100 h-screen">
          <div className="md:w-64 md:block hidden fixed">
            <SideNav />
          </div>
          <div className="md:ml-64">
            <Header />
            {children}
          </div>
        </div>
      </UpdateCredit.Provider>
    </TotalUsageContext.Provider>
  );
}

export default layout;
