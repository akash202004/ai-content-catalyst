"use client";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";
import { FlipWords } from "@/components/ui/flip-words";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Head from "next/head";
import {
  BookOpen,
  CupSoda,
  LayoutTemplate,
  MessageCircleDashed,
} from "lucide-react";
import { useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Home() {
  const Card = ({
    title,
    icon,
    children,
  }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
  }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
        </div>
      </div>
    );
  };

  const AceternityIcon = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
      </svg>
    );
  };

  const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };

  const testimonials = [
    {
      quote:
        "This product is revolutionary! It has significantly boosted our productivity.\nHighly recommend to anyone looking to streamline their workflow.",
      name: "Anna Turner",
      title: "Director of Marketing, Bright Ideas Ltd.",
    },
    {
      quote:
        "I’ve been using this for months and it never disappoints.\nThe efficiency and support are unparalleled.",
      name: "Tom Harris",
      title: "Head of Operations, MegaCorp",
    },
    {
      quote:
        "Absolutely love the interface and features!\nIt’s made a massive difference in how my team collaborates.",
      name: "Rebecca White",
      title: "Team Lead, Digital Solutions",
    },
    {
      quote:
        "It’s intuitive, reliable, and a game changer for our workflow.\nI can’t imagine doing our work without it.",
      name: "Chris Walker",
      title: "Business Development Manager, FastTrack Ltd.",
    },
    {
      quote:
        "Great value for money, with all the features we need.\nIt’s made a real impact on our operations.",
      name: "Lauren King",
      title: "Product Specialist, Tech World",
    },
    {
      quote:
        "The design is sleek and user-friendly.\nIt fits perfectly into our existing setup and adds so much value.",
      name: "Paul Green",
      title: "Chief Engineer, InnovateTech",
    },
    {
      quote:
        "This tool has transformed our team’s productivity!\nIt's so easy to use, yet powerful in its results.",
      name: "Rachel Adams",
      title: "Customer Support Manager, ServiceNow",
    },
    {
      quote:
        "I can’t recommend this enough.\nIt’s a must-have for anyone looking to optimize their daily tasks.",
      name: "Ben Mitchell",
      title: "CEO, FutureTech Solutions",
    },
    {
      quote:
        "Every feature is designed with users in mind.\nIt’s the most seamless experience I’ve had with a product in years.",
      name: "Laura Spencer",
      title: "Operations Director, CloudForce",
    },
    {
      quote:
        "It’s a huge time-saver and incredibly reliable.\nOur entire team has benefited from using this tool every day.",
      name: "David Lee",
      title: "Lead Developer, DevCore",
    },
  ];

  const words = ["Free", "Premium", "Ultimate"];

  return (
    <div>
      <Head>
        <title>AI Content Catalyst</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Create AI-powered content with ease."
        />
        <meta property="og:image" content="/preview.png" />
      </Head>

      <div className="overflow-x-hidden">
        {/* Header */}
        <header className="flex items-center justify-between border-b shadow-md px-6 py-4 md:px-10">
          <Image src="/logo.svg" alt="logo" height={60} width={60} />
          <Link href={"/dashboard"} prefetch={true}>
            <Button
              variant="outline"
              className="px-6 py-2 text-sm md:text-base"
            >
              Get Started
            </Button>
          </Link>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-4 md:px-10 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Transform Ideas into Engaging{" "}
            <span className="text-primary">Content</span>
            <br />
            <Cover className="inline-block mt-2">Content Catalyst</Cover>
          </h1>
          <p className="text-base md:text-lg mt-6 max-w-2xl">
            Leverage the power of AI to create captivating content for blogs,
            social media, and more. Get started today and watch your creativity
            flow effortlessly.
          </p>
          <Link href={"/dashboard"} prefetch={true}>
            <Button className="mt-6 px-8 py-4 text-lg bg-primary text-white">
              Get Started
            </Button>
          </Link>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 w-full px-4">
            {[
              {
                icon: <LayoutTemplate className="text-white" />,
                title: "30+ templates",
                desc: "Responsive, and mobile-first project on the web",
              },
              {
                icon: <CupSoda className="text-white" />,
                title: "Customizable",
                desc: "Components are easily customized and extendable",
              },
              {
                icon: <BookOpen className="text-white" />,
                title: "Free to Use",
                desc: "Every component and plugin is well documented",
              },
              {
                icon: <MessageCircleDashed className="text-white" />,
                title: "24/7 Support",
                desc: "Contact 24 hours a day and 7 days a week",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-left">
                <div className="bg-primary rounded-lg p-4 w-14 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Scroll Animation Section */}
        <section className="px-2 mt-1 md:mt-2 lg:mt-2 pt-2 md:pt-1.5 lg:pt-2">
          <ContainerScroll
            titleComponent={
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white relative z-50 mb-12 md:mb-16 lg:mb-20">
                Unleash the power of <br />
                <span className="block text-primary mt-2">
                  AI Content Creation
                </span>
              </h2>
            }
          >
          {/* Scroll Animation Section
        <section className="px-4 mt-8 md:mt-12 lg:mt-16 pt-8 md:pt-12 lg:pt-16">
          <ContainerScroll
            titleComponent={
              <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white relative z-50 mb-12 md:mb-16 lg:mb-20">
                Unleash the power of <br />
                <span className="block text-primary mt-2">
                  AI Content Creation
                </span>
              </h2>
            }
          > */}
            <Image
              src="/sreen.png"
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover object-left-top h-full"
              draggable={false}
            />
          </ContainerScroll>
        </section>

        {/* Wobble Card Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 py-16 max-w-7xl mx-auto">
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[300px]">
            <div className="max-w-xs">
              <h3 className="text-xl lg:text-3xl font-semibold text-white">
                AI-Powered Content Creation
              </h3>
              <p className="mt-4 text-neutral-200">
                Generate high-quality, tailored content for blogs, Instagram
                posts, YouTube subtitles, and beyond. Simply input your
                keywords, and let our AI handle the rest.
              </p>
            </div>
            <Image
              src="/sideone.png"
              width={600}
              height={600}
              alt="side visual"
              className="absolute -right-4 lg:-right-[40%] bottom-0 object-contain rounded-2xl grayscale"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h3 className="text-xl lg:text-3xl font-semibold text-white">
              Versatile Content Options
            </h3>
            <p className="mt-4 text-neutral-200">
              From Instagram hashtags to SEO-optimized articles, our tool offers
              a variety of content types to fit your specific needs.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Comprehensive History & Billing
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Keep track of your past content creations and easily manage your
                billing, all from one convenient dashboard.
              </p>
            </div>
            <Image
              src="/sidetwo.png"
              width={400}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </section>
      </div>

      {/* Plans Card Section */}
      <div className="mt-10 px-4 sm:px-6 md:px-8 py-12 flex justify-center items-center text-center">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-800 dark:text-neutral-200 leading-snug">
            Choose Your Plan to{" "}
            <span className="inline-block text-blue-600 dark:text-blue-400">
              <FlipWords words={words} />
            </span>
            <br className="hidden sm:block" />
            and Unlock the Full Potential of Our Website
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="FREE PLAN : $0/Month" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="PREMIUM PLAN : $5/Month" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="ULTIMATE PLAN : $50" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>

      {/* Testimonial Section */}
      <section className="mt-28 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 text-neutral-800">
          Our Testimonials
        </h2>
        <div className="flex justify-center items-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
          />
        </div>
      </section>

      {/*Footer Section */}
      <footer className="w-full mt-10 bg-slate-900 text-neutral-300 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              AI Content Catalyst
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Empowering creators with AI-driven tools. Generate smarter,
              faster, better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/dashboard/billing">Pricing</Link>
              </li>
              <li>
                <Link href="/dashboard/profile">Profile</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.linkedin.com/in/akash-laha-799427244/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/akash202004" target="_blank">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Akash Laha. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
