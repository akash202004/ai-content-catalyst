"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import Image from "next/image";

const SettingsPage = () => {
  const { user } = useUser();
  const [name, setName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(
    user?.primaryEmailAddress?.emailAddress || ""
  );

  const handleUpdate = () => {
    console.log("Updated:", { name, email });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-4xl mx-auto flex flex-col gap-5">
        {/* Each card */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
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

        <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Edit Personal Information
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="mt-1 w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-500 cursor-not-allowed"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleUpdate}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Password Settings
          </h2>
          <p className="text-sm text-gray-600">
            Change your current password securely.
          </p>
          <button className="mt-3 text-blue-600 hover:underline text-sm font-medium">
            Update Password
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Notification Preferences
          </h2>
          <p className="text-sm text-gray-600">
            Choose how you want to receive notifications.
          </p>
          <button className="mt-3 text-blue-600 hover:underline text-sm font-medium">
            Edit Preferences
          </button>
        </div>

        <div className="bg-red-50 p-6 rounded-2xl border border-red-200 shadow-md">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Delete Account
          </h2>
          <p className="text-sm text-red-500">
            Permanently delete your account. This action cannot be undone.
          </p>
          <button className="mt-3 text-red-600 hover:underline text-sm font-medium">
            Delete Account
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => signOut({ redirectUrl: "/" })}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-900 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
