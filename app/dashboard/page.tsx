"use client";
import React, { useEffect, useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";
import CategoryTabs from "./_components/CategoryTab";
import { useUser } from "@clerk/nextjs";
import { createUser, getUserById } from "@/controllers/userController";

const Page = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { user } = useUser();

  useEffect(() => {
    const syncUser = async () => {
      if (user) {
        const userId = user.id;
        const userEmail = user.emailAddresses[0].emailAddress;
        const userName = user.firstName || "Unknown";
        try {
          const existingUser = await getUserById(userId);
          if (existingUser) {
            console.log("User already exists");
            return;
          }
          await createUser(userId, userEmail, userName);
          console.log("User created successfully");
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      }
    };

    syncUser();
  }, [user]);

  return (
    <div>
      {/* Search Section */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      {/* Category Tabs */}
      <CategoryTabs
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {/* Template List Section */}
      <TemplateListSection
        userSearchInput={userSearchInput}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Page;
