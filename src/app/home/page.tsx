import { cn } from "@/lib/utils";
import { Inter, Space_Grotesk } from "next/font/google";
import SideBar from "./sidebar";

const gork = Space_Grotesk({ weight: "500", subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex mt-5 justify-center">
      <SideBar />
      <div className="h-[85vh]">
        <h1 className={cn(gork.className, "underline text-2xl")}>Feed</h1>
      </div>
    </main>
  );
}
