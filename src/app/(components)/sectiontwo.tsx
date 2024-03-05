import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Inter, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { FcApproval } from "react-icons/fc";

const grok = Space_Grotesk({ subsets: ["latin"], weight: ["600"] });

export default function SectionTwo() {
  return (
    <main className="mt-12">
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className={cn(grok.className, "text-5xl underline")}>
          Why PaniPortal?
        </h1>
      </div>
      <div className="flex gap-10">
        {/* <div className="h-[50vh] w-[50vh] bg-black"></div> */}
        <Image src="/logo.png" width={400} height={80} alt="logo" />
        <div className="text-left">
          <h1 className="text-3xl font-semibold mb-5">
            Work Faster And Smarter
          </h1>
          <p
            className="text-gray-500 text-xl max-w-[600px]"
            style={{ lineHeight: "1.8" }}
          >
            Say goodbye to manual searching for companies and their resources,
            providing a centralized hub for essential updates, opportunities,
            and resources. With a focus on efficiency and connectivity.
          </p>
          <div className="mt-5 space-y-4">
            <div className="flex gap-3 items-center text-gray-500 text-lg">
              <FcApproval size={30} />
              <p>Intelligent planning, scheduling, and sequencing</p>
            </div>
            <div className="flex gap-3 items-center text-gray-500 text-lg">
              <FcApproval size={30} />
              <p>Centralize courses, docs, and webpages in one plan</p>
            </div>
          </div>
          <div className="mt-10">
            <Button className="p-7 bg-blue-500 hover:bg-blue-700" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
