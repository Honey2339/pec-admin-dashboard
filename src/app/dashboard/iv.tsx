import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function IndustryVisitForm() {
  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="ivName">IV Name</Label>
        <Input id="ivName" placeholder="Heading for the post" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="ivDate">Date</Label>
        <Input id="ivDate" placeholder="DD/MM/YYYY" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="ivTime">Place</Label>
        <Input id="ivTime" placeholder="Industry Visit Place" />
      </div>
    </div>
  );
}
