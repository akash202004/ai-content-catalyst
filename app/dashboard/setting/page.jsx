"use client";
import { useUser, signOut } from "@clerk/nextjs";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { deleteUserById } from "@/controllers/userController";
const SettingsPage = () => {
  const { user } = useUser();
  const [name, setName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(
    user?.primaryEmailAddress?.emailAddress || ""
  );

  const handleUpdate = () => {
    console.log("Updated:", { name, email });
  };

  const handleDeleteAccount = async () => {
    // const confirmDelete = await deleteUserById(user?.id);
    // console.log(confirmDelete);
    // if (confirmDelete) {
    //   alert("Account deleted successfully.");
    //   signOut({ redirectUrl: "/" });
    // } else {
    //   alert("Failed to delete account.");
    // }
    console.log("Account deleted successfully.");
  };

  return (
    <div className="min-h-screen p-5">
      <div className="w-full flex flex-col gap-5">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 mt-5 border border-black p-5">
          <div className="flex items-center gap-4">
            <Image
              src={user?.imageUrl || "/placeholder.jpg"}
              alt="User Avatar"
              width={72}
              height={72}
              className="rounded-full object-cover border shadow"
            />
            <div>
              <h1 className="text-2xl font-bold">{user?.fullName}</h1>
              <p className="text-gray-500">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Info Edit Card */}
        <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)]  hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 mt-2 border border-black p-5 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Edit Personal Information
          </h2>
          <div>
            <label className="block text-sm font-medium mt-2 text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full border rounded-md px-4 py-2 border-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mt-2 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="mt-1 w-full border-black border rounded-md px-4 py-2 cursor-not-allowed"
            />
          </div>
          <div className="flex justify-end mt-3">
            <Button onClick={handleUpdate} variant="default" size="sm">
              Save Changes
            </Button>
          </div>
        </div>

        {/* Password Card */}
        <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)]  hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 mt-2 border border-black p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Password Settings
          </h2>
          <p className="text-sm text-gray-600">
            Change your current password securely.
          </p>
          <Button
            variant="secondary"
            size="sm"
            className="mt-3 text-blue-600 text-sm font-medium"
          >
            Update Password
          </Button>
        </div>

        {/* Notification Card */}
        <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)]  hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 mt-2 border border-black p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Notification Preferences
          </h2>
          <p className="text-sm text-gray-600">
            Choose how you want to receive notifications.
          </p>
          <Button
            variant="secondary"
            size="sm"
            className="mt-3 text-blue-600  text-sm font-medium"
          >
            Edit Preferences
          </Button>
        </div>

        {/* Delete Account Card */}
        <div className="bg-white rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)]  hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 mt-2 border border-black p-5">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Delete Account
          </h2>
          <p className="text-sm text-red-500">
            Permanently delete your account. This action cannot be undone.
          </p>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => handleDeleteAccount()}
            className="mt-3 text-red-600 text-sm font-medium"
          >
            Delete Account
          </Button>
        </div>

        {/* Logout Button */}
        <div className="flex justify-center ">
          <Button
            variant="destructive"
            // onClick={() => signOut({ redirectUrl: "/" })}
            size="sm"
            className="w-full sm:w-auto"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
