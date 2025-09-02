"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState, useRef } from "react";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import {
  UpdateCredit,
  UpdateSimulationCredit,
} from "@/app/(context)/UpdateCredit";
import { getAiOutputById } from "@/controllers/aiOutputController";
import { getSimulationCountByUser } from "@/controllers/simulationController";
import { getUserPlanDetails } from "@/controllers/subscriptionController";
import { cleanHtmlText } from "@/utils/cleanHtmlText";

const UsageTrack = () => {
  const { user } = useUser();
  const redirect = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCredit, setUpdateCredit } = useContext(UpdateCredit);
  const { updateSimulationCredit, setUpdateSimulationCredit } = useContext(
    UpdateSimulationCredit
  );

  const [loading, setLoading] = useState(false);
  const [simulationUsage, setSimulationUsage] = useState(0);
  const [planDetails, setPlanDetails] = useState({
    name: "Free",
    templateCredits: 10000,
    simulationCredits: 3,
  });
  const lastClicked = useRef(0);

  const handleClick = async () => {
    const now = Date.now();
    if (now - lastClicked.current < 1000) {
      return;
    }
    lastClicked.current = now;
    setLoading(true);

    redirect.push("/dashboard/billing");

    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user, updateCredit, updateSimulationCredit]);

  const getData = async () => {
    try {
      if (!user) {
        console.error("User not found");
        return;
      }

      // Get user plan details
      const userPlan = await getUserPlanDetails(user.id);
      setPlanDetails(userPlan);

      // Get template generation usage
      const result = await getAiOutputById(user?.id);
      getTotalUsage(result);

      // Get simulation usage
      const simCount = await getSimulationCountByUser(user?.id);
      setSimulationUsage(simCount);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  const getTotalUsage = (result: any[]) => {
    let total: number = 0;

    result.forEach((element: any) => {
      const cleanResponse = cleanHtmlText(element.aiResponse || "");
      total += cleanResponse.length;
    });

    // For unlimited plans (templateCredits: -1), don't cap the usage
    const limitToUse =
      planDetails.templateCredits === -1
        ? Infinity
        : planDetails.templateCredits;
    const cappedTotalUsage = Math.min(total, limitToUse);
    setTotalUsage(cappedTotalUsage);
  };

  return (
    <div className="m-3">
      <div className="bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 border border-black p-3 mb-3">
        {/* Template Credits */}
        <h2 className="font-sm mb-2">Template Credits</h2>
        <div className="bg-[#b48bff] w-full rounded-full mb-2">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width:
                planDetails.templateCredits === -1
                  ? "100%"
                  : (totalUsage / planDetails.templateCredits) * 100 + "%",
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">
          {planDetails.templateCredits === -1
            ? "Unlimited characters available"
            : `${totalUsage}/${planDetails.templateCredits} characters used`}
        </h2>
        {planDetails.templateCredits !== -1 &&
          totalUsage >= planDetails.templateCredits && (
            <p className="text-xs text-yellow-200 mt-1">
              ⚠️ Template credit limit reached. Upgrade to continue!
            </p>
          )}

        {/* Divider */}
        <div className="border-t border-white my-4 opacity-30" />

        {/* Simulation Credits */}
        <h2 className="font-sm mb-2">Simulation Credits</h2>
        <div className="bg-purple-300 w-full rounded-full mb-2">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width:
                planDetails.simulationCredits === -1
                  ? "100%"
                  : (simulationUsage / planDetails.simulationCredits) * 100 +
                    "%",
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">
          {planDetails.simulationCredits === -1
            ? "Unlimited simulations available"
            : `${simulationUsage}/${planDetails.simulationCredits} simulations used`}
        </h2>
      </div>

      {/* Only show upgrade button if not on Ultimate plan */}
      {planDetails.name !== "Ultimate" && (
        <Button
          variant="outline"
          className="my-2 text-primary font-bold w-full text-xs"
          onClick={handleClick}
          disabled={loading}
        >
          {loading
            ? "Loading..."
            : planDetails.name === "Free"
            ? "Upgrade Plan"
            : planDetails.name === "Premium"
            ? "Upgrade to Ultimate"
            : "Upgrade Plan"}
        </Button>
      )}

      {/* Show current plan status for Ultimate users */}
      {planDetails.name === "Ultimate" && (
        <div className="my-2 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-2 border border-purple-200">
            <p className="text-xs font-semibold text-purple-700 flex items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              Ultimate Plan Active
            </p>
            <p className="text-xs text-purple-600 mt-1">
              All features unlocked!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsageTrack;
