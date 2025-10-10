"use client";

import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-purple-300/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-blue-300/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-8 left-8 group flex items-center gap-2 px-6 py-3 bg-white/40 backdrop-blur-lg border border-white/30 text-gray-700 font-medium rounded-2xl shadow-lg hover:shadow-xl hover:bg-white/60 transition-all duration-300 hover:scale-105 z-10"
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:-translate-x-1 duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span>Back</span>
      </Link>

      {/* Main Login Card Container */}
      <div
        className={`relative z-10 transition-all duration-1000 transform ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Glassmorphic Card */}
        <div className="relative backdrop-blur-xl bg-white/60 rounded-3xl shadow-2xl border border-white/40 p-8 hover:shadow-3xl transition-all duration-500">
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition duration-500" />
          
          {/* Content Wrapper */}
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-8 space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Content Catalyst
              </h1>
              <p className="text-gray-600 font-medium">
                Welcome back! Sign in to continue
              </p>
            </div>

            {/* Clerk Sign In Component with Custom Styling */}
            <div className="clerk-wrapper">
              <SignIn
                appearance={{
                  elements: {
                    rootBox: "mx-auto",
                    card: "bg-transparent shadow-none border-0",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton:
                      "bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-300 rounded-xl py-3 text-gray-700 font-medium",
                    socialButtonsBlockButtonText: "font-medium text-gray-700",
                    dividerRow: "my-6",
                    dividerText: "text-gray-500 font-medium",
                    dividerLine: "bg-gradient-to-r from-transparent via-gray-300 to-transparent",
                    formButtonPrimary:
                      "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl py-3 text-base font-semibold normal-case",
                    formFieldInput:
                      "bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl py-3 px-4 focus:ring-2 focus:ring-purple-400/50 focus:border-transparent transition-all duration-300 hover:bg-white",
                    formFieldLabel: "text-gray-700 font-medium mb-2",
                    footerActionLink:
                      "text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300",
                    identityPreviewEditButton:
                      "text-purple-600 hover:text-purple-700",
                    formFieldInputShowPasswordButton:
                      "text-gray-500 hover:text-gray-700",
                    otpCodeFieldInput:
                      "border-gray-300 focus:border-purple-500 focus:ring-purple-500",
                    formResendCodeLink:
                      "text-purple-600 hover:text-purple-700 font-medium",
                  },
                  layout: {
                    socialButtonsPlacement: "top",
                    socialButtonsVariant: "blockButton",
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-2xl" />
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-2xl" />
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-8 text-center z-10">
        <p className="text-gray-600 text-sm font-medium backdrop-blur-sm bg-white/30 px-6 py-2 rounded-full border border-white/40">
          Powered by AI • Secure & Private
        </p>
      </div>
    </div>
  );
}
