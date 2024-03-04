import { cn } from "@/lib/utils";
import { Inter, Space_Grotesk } from "next/font/google";
import SideBar from "./sidebar";
import GuestFeedCard from "./guestfeedcard";
import IndustryVisitCard from "./industryvisit";
import WorkshopFeedCard from "./workshop";
import RecruitmentFeedCard from "./recruitment";

const gork = Space_Grotesk({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex">
      <SideBar />
      <div className="flex-1 h-[85vh] flex justify-center">
        {/* <h1 className={cn(gork.className, "underline text-2xl")}>Feed</h1> */}
        <div className="grid grid-cols-2">
          <GuestFeedCard />
          <IndustryVisitCard />
          <WorkshopFeedCard />
          <RecruitmentFeedCard />
        </div>
      </div>
    </main>
  );
}
