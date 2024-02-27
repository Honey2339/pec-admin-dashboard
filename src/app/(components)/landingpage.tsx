import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const grok = Space_Grotesk({ weight: ["500"], subsets: ["latin"] });

export default function landingpage() {
  return (
    <main className="h-screen flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1
          className={cn(
            grok.className,
            "text-5xl font-semibold mt-36 text-center"
          )}
        >
          Industry collaboration and connectivity <br /> With our innovative
          portal solution
        </h1>
        <Button className="mt-5">Register Now!</Button>
      </div>
    </main>
  );
}
