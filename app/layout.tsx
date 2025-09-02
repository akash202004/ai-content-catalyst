import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "AI Content Catalyst",
  description:
    "Generate, simulate, and optimize your social media posts with AI. Boost engagement, save time, and grow your audience with AI Content Catalyst.",
  keywords: [
    "AI content generator",
    "social media simulator",
    "Instagram post AI",
    "Facebook post AI",
    "LinkedIn post AI",
    "AI post performance",
    "content optimization",
    "AI marketing tools",
    "drizzle ORM",
    "Next.js",
    "Tailwind CSS",
  ],
  openGraph: {
    title: "AI Content Catalyst",
    description:
      "Generate, simulate, and optimize your social media posts with AI. Boost engagement, save time, and grow your audience.",
    url: "https://aicontentcatalyst.com/",
    siteName: "AI Content Catalyst",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "AI Content Catalyst Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Content Catalyst",
    description:
      "Generate, simulate, and optimize your social media posts with AI. Boost engagement, save time, and grow your audience.",
    images: ["/logo.svg"],
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://aicontentcatalyst.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://aicontentcatalyst.com/" />
        </head>
        <body className={inter.className}>
          {children}
          <Analytics />
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}
