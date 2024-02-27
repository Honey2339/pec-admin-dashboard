import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function GuestCard() {
  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="guestName">Guest Name</Label>
        <Input id="guestName" placeholder="Name of the guest" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="guestDate">Date</Label>
        <Input id="guestDate" placeholder="DD/MM/YYYY" />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="guestTime">Time</Label>
        <Input id="guestTime" placeholder="Time of the visit" />
      </div>
    </div>
  );
}
