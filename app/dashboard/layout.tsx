"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import {
  UpdateCredit,
  UpdateSimulationCredit,
} from "../(context)/UpdateCredit";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [updateCredit, setUpdateCredit] = useState<any>();
  const [updateSimulationCredit, setUpdateSimulationCredit] = useState<any>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCredit.Provider value={{ updateCredit, setUpdateCredit }}>
        <UpdateSimulationCredit.Provider
          value={{ updateSimulationCredit, setUpdateSimulationCredit }}
        >
          <div className="bg-slate-100 min-h-screen">
            {/* Desktop Sidebar */}
            <div className="md:w-64 md:block hidden fixed z-30">
              <SideNav />
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
              <div className="md:hidden fixed inset-0 z-40">
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                ></div>
                {/* Sidebar */}
                <div className="fixed left-0 top-0 w-64 h-full transform transition-transform duration-300 ease-in-out">
                  <SideNav onClose={() => setIsMobileMenuOpen(false)} />
                </div>
              </div>
            )}

            <div className="md:ml-64">
              <Header
                onMobileMenuToggle={() =>
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }
                isMobileMenuOpen={isMobileMenuOpen}
              />
              {children}
            </div>
          </div>
        </UpdateSimulationCredit.Provider>
      </UpdateCredit.Provider>
    </TotalUsageContext.Provider>
  );
}

export default layout;
