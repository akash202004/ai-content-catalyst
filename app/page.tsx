"use client";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";
import { FlipWords } from "@/components/ui/flip-words";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Boxes } from "@/components/ui/background-boxes";
import {
  BookOpen,
  CupSoda,
  LayoutTemplate,
  MessageCircleDashed,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  const redirect = useRouter();

  const handleButtonClick = () => {
    redirect.push("/dashboard");
  };

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
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
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

  const words = ["Free", "Premium", "Ultimate"];

  return (
    <div>
      <div className="flex items-center justify-between border-b-2 shadow-md p-3 px-10">
        <Image src={"./logo.svg"} alt="logo" height={100} width={100} />
        <Button onClick={handleButtonClick} variant={"outline"} className="p-6">
          Get Started
        </Button>
      </div>
      <div className="flex items-center justify-center flex-col h-screen relative">
        <h1 className="text-4xl font-bold md:text-4xl lg:text-6xl max-w-7xl mx-auto text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Transform Ideas into Engaging{" "}
          <span className="text-primary">Content</span> <br />
          <Cover className="p-1">Content Catalyst </Cover>
        </h1>
        <p className="text-sm mt-5">
          Leverage the power of AI to create captivating content for blogs,
          social media, and more. Get started today and watch your creativity
          flow effortlessly.
        </p>
        <Button
          onClick={handleButtonClick}
          variant={"outline"}
          className="mt-5 px-12 py-6 text-2xl shadow-md outline-2 bg-primary text-white"
        >
          Get Started
        </Button>
        <div className="grid grid-cols-4 mt-[30vh] m-20 gap-20">
          <div>
            <div className="bg-primary rounded-lg p-4 w-14">
              <LayoutTemplate className=" text-white" />
            </div>
            <h1 className="font-bold mt-4">20+ templates</h1>
            <p className="mt-4">
              Responsive, and mobile-first project on the web
            </p>
          </div>
          <div>
            <div className="bg-primary rounded-lg p-4 w-14">
              <CupSoda className=" text-white" />
            </div>
            <h1 className="font-bold mt-4">Customizable</h1>
            <p className="mt-4">
              Components are easily customized and extendable
            </p>
          </div>
          <div>
            <div className="bg-primary rounded-lg p-4 w-14">
              <BookOpen className=" text-white" />
            </div>
            <h1 className="font-bold mt-4">Free to Use</h1>
            <p className="mt-4">
              Every component and plugin is well documented
            </p>
          </div>
          <div>
            <div className="bg-primary rounded-lg p-4 w-14">
              <MessageCircleDashed className=" text-white" />
            </div>
            <h1 className="font-bold mt-4">24/7 Support</h1>
            <p className="mt-4">Contact 24 hours a day and 7 days a week</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Unleash the power of <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    AI Content Creation
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/sreen.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              AI-Powered Content Creation
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Generate high-quality, tailored content for blogs, Instagram
              posts, YouTube subtitles, and beyond. Simply input your keywords,
              and let our AI handle the rest.
            </p>
          </div>
          <Image
            src="/sideone.png"
            width={600}
            height={600}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Versatile Content Options
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            From Instagram hashtags to SEO-optimized articles, our tool offers a
            variety of content types to fit your specific needs.
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
      </div>
      <div className="py-10 mt-20 flex justify-center items-center">
        <div className="text-5xl mx-auto font-normal text-neutral-700 dark:text-neutral-400">
          Choose Your Plans to
          <FlipWords words={words} /> <br />
          and Unlock the Full Potential of Our Website
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
      <div className=" mt-20 h-44 font-bold relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1
          className={cn(
            "md:text-[50px] text-xl relative z-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-slate-200 "
          )}
        >
          Akash Laha
        </h1>
        <div className="flex justify-center items-center gap-10 mt-1">
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            <Link href={"https://www.linkedin.com/in/akash-laha-799427244/"}>
              @LinkedIn
            </Link>
          </p>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            <Link href={"https://github.com/akash202004"}>@Github</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
