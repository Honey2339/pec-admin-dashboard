import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function WorkshopForm() {
  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="workshopName">Workshop Name</Label>
        <Input id="workshopName" placeholder="Heading for the post" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="workshopDate">Date Of Workshop</Label>
        <Input id="workshopDate" placeholder="DD/MM/YYYY" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="workshopTime">Place</Label>
        <Input id="workshopTime" placeholder="Workshop Visit Place" />
      </div>
    </div>
  );
}
