import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/movingcard";
import { ContainerScroll } from "@/components/ui/scroll-card";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "@/components/ui/typewriter";
import SectionTwo from "./sectiontwo";
import Footer from "./footer";

const grok = Space_Grotesk({ weight: ["500"], subsets: ["latin"] });

export default function landingpage() {
  const words = [
    {
      text: "Post",
    },
    {
      text: "latest",
    },
    {
      text: "updates",
    },
    {
      text: "here!",
      className: "text-white dark:text-white",
    },
  ];
  const items = [
    {
      quote: "Hello",
      name: "Hello",
      title: "Title",
    },
  ];
  const users = [
    {
      name: "TCS",
      designation: "Software Developer",
      image: "/tcs.jpeg",
    },
    {
      name: "Accenture",
      designation: "Lead Designer",
      image: "/cts.webp",
    },
    { name: "Infosys", designation: "Tester", image: "/infosys.jpg" },
    {
      name: "Wipro",
      designation: "Analyst",
      image: "/wipro.svg",
    },
    {
      name: "Kar Tech",
      designation: "Electrical Engineer",
      image: "/kaar.webp",
    },
    {
      name: "MindTree",
      designation: "SDE/Intern",
      image: "/mindtree.png",
    },
    {
      name: "BlackStraw",
      designation: "SDE/Intern",
      image: "/blackstraw.jpeg",
    },
    {
      name: "Zoho",
      designation: "Project Manager",
      image: "/zoho.jpg",
    },
    {
      name: "TCS",
      designation: "Software Developer",
      image: "/tcs.jpeg",
    },
    {
      name: "Accenture",
      designation: "Lead Designer",
      image: "/cts.webp",
    },
    { name: "Infosys", designation: "Tester", image: "/infosys.jpg" },
    {
      name: "Wipro",
      designation: "Analyst",
      image: "/wipro.svg",
    },
    {
      name: "Kar Tech",
      designation: "Electrical Engineer",
      image: "/kaar.webp",
    },
    {
      name: "MindTree",
      designation: "SDE/Intern",
      image: "/mindtree.png",
    },
    {
      name: "BlackStraw",
      designation: "SDE/Intern",
      image: "/blackstraw.jpeg",
    },
    {
      name: "Zoho",
      designation: "Project Manager",
      image: "/zoho.jpg",
    },
  ];
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1
          className={cn(
            grok.className,
            "text-5xl font-semibold mt-24 text-center"
          )}
        >
          Industry collaboration and connectivity <br /> With our innovative
          portal solution
        </h1>
        <div className="flex gap-10">
          <Button className="mt-7">Register!</Button>
          <Button className="mt-7">View Demo!</Button>
        </div>
        <ContainerScroll users={users} titleComponent />
      </div>
      <div className="bg-blue-500 p-5 w-screen flex flex-col justify-center items-center">
        <TypewriterEffectSmooth words={words} />
      </div>
      <div>
        <SectionTwo />
        {/* <InfiniteMovingCards items={items} pauseOnHover={false} speed="fast" /> */}
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
