"use client";
import { useUser, UserProfile } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { deleteUserById, updateUserById } from "@/controllers/userController";
import { getUserPlanDetails } from "@/controllers/subscriptionController";

const SettingsPage = () => {
  const { user } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPlan, setCurrentPlan] = useState("Free");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);

  // Update form fields when user data loads
  useEffect(() => {
    if (user) {
      setName(user.fullName || "");
      setEmail(user.primaryEmailAddress?.emailAddress || "");
    }
  }, [user]);

  // Fetch current plan
  useEffect(() => {
    const getCurrentPlan = async () => {
      if (user?.id) {
        try {
          const planDetails = await getUserPlanDetails(user.id);
          setCurrentPlan(planDetails.name);
        } catch (error) {
          console.error("Error fetching plan details:", error);
          setCurrentPlan("Free");
        }
      }
    };
    getCurrentPlan();
  }, [user?.id]);

  if (!user) {
    return (
      <div className="min-h-screen p-5 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  const handleUpdate = async () => {
    if (!user?.id) {
      alert("User not found. Please try logging in again.");
      return;
    }
    setIsUpdating(true);
    try {
      await updateUserById(user.id, { name });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user?.id) {
      alert("User not found. Please try logging in again.");
      return;
    }

    const confirmDelete = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      await deleteUserById(user.id);
      alert("Account deleted successfully.");
      window.location.href = "/";
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete account. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-slate-100">
      <h1 className="text-3xl font-bold text-center mb-8">Account Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 border border-gray-300">
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

              {/* Plan Section */}
              {currentPlan === "Free" && (
                <div className="mt-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-sm p-4 flex flex-col items-center gap-3 border border-blue-200">
                    <p className="text-sm font-semibold text-blue-800 text-center">
                      You're on the <span className="font-bold">Free</span>{" "}
                      plan.
                      <br />
                      <span className="text-xs text-blue-600">
                        Unlock Premium features & more!
                      </span>
                    </p>
                    <a
                      href="/dashboard/billing"
                      className="w-full flex justify-center"
                    >
                      <button className="flex items-center justify-center gap-2 w-full max-w-xs text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg px-4 py-2 shadow-md transition-all duration-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        Upgrade Plan
                      </button>
                    </a>
                  </div>
                </div>
              )}

              {currentPlan === "Premium" && (
                <div className="mt-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl shadow-sm p-3 border border-green-200">
                    <p className="text-sm font-semibold text-green-700 text-center inline-flex items-center gap-2 w-full justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Premium Plan Active
                    </p>
                    <div className="mt-2 text-center">
                      <a href="/dashboard/billing">
                        <button className="text-xs text-purple-600 hover:text-purple-800 font-medium underline">
                          Consider Ultimate for unlimited features
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {currentPlan === "Ultimate" && (
                <div className="mt-4">
                  <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl shadow-sm p-3 border border-purple-200">
                    <p className="text-sm font-semibold text-purple-700 text-center inline-flex items-center gap-2 w-full justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-purple-500"
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
                    <p className="text-xs text-purple-600 text-center mt-1">
                      You have access to all premium features!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Info Edit */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 border border-gray-300">
          <h2 className="text-xl font-semibold mb-4">
            Edit Personal Information
          </h2>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border rounded-md px-4 py-2 border-gray-400"
          />
          <label className="block text-sm font-medium mt-3 text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            disabled
            className="mt-1 w-full border-gray-400 border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
          />
          <div className="flex justify-end mt-4">
            <Button onClick={handleUpdate} disabled={isUpdating}>
              {isUpdating ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>

        {/* Password Settings */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 border border-gray-300">
          <h2 className="text-xl font-semibold mb-2">Password Settings</h2>
          <p className="text-sm text-gray-600 mb-3">
            Change your password securely.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowPasswordModal(true)}
          >
            Update Password
          </Button>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 border border-gray-300">
          <h2 className="text-xl font-semibold mb-2">
            Notification Preferences
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Choose how you want to receive notifications.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowNotificationModal(true)}
          >
            Edit Preferences
          </Button>
        </div>

        {/* Delete Account */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 border border-gray-300 col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Delete Account
          </h2>
          <p className="text-sm text-red-500">
            Permanently delete your account. This action cannot be undone.
          </p>
          <Button
            variant="destructive"
            size="sm"
            onClick={handleDeleteAccount}
            disabled={isDeleting}
            className="mt-3"
          >
            {isDeleting ? "Deleting..." : "Delete Account"}
          </Button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mt-6">
        <Button
          variant="secondary"
          onClick={() => (window.location.href = "/")}
        >
          Logout
        </Button>
      </div>

      {/* Password Modal with Clerk's UserProfile */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl border border-gray-300 shadow-lg max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-4">Update Password</h3>
            <UserProfile
              appearance={{
                elements: {
                  rootBox: "w-full",
                },
              }}
            />
            <div className="flex justify-end mt-4">
              <Button
                variant="secondary"
                onClick={() => setShowPasswordModal(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Modal with toggles */}
      {showNotificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl border border-gray-300 shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              {[
                "Email Notifications",
                "SMS Notifications",
                "Push Notifications",
              ].map((label, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span>{label}</span>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      defaultChecked={i !== 1}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-500 relative transition">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition peer-checked:translate-x-5"></div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <Button
                variant="secondary"
                onClick={() => setShowNotificationModal(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  alert("Notification preferences saved!");
                  setShowNotificationModal(false);
                }}
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
