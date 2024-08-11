"use client";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { useRouter } from "next/navigation";
import { WobbleCard } from "@/components/ui/wobble-card";
import {
  BookOpen,
  CupSoda,
  Github,
  Instagram,
  LayoutTemplate,
  Linkedin,
  MessageCircleDashed,
} from "lucide-react";

export default function Home() {
  const redirect = useRouter();

  const handleButtonClick = () => {
    redirect.push("/dashboard");
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b-2 shadow-md p-3">
        <Image src={"./Logo.svg"} alt="logo" height={100} width={100} />
        <Button onClick={handleButtonClick} variant={"outline"} className="p-6">
          Get Started
        </Button>
      </div>
      <div className="flex items-center justify-center flex-col h-screen ">
        <h1 className="text-4xl font-bold md:text-4xl lg:text-6xl max-w-7xl mx-auto text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Transform Ideas into <span className="text-primary">Engaging</span>{" "}
          <br />
          <Cover>Content Instantly </Cover>
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
            src="/linear.webp"
            width={500}
            height={500}
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
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
