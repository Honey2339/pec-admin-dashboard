"use client";
import { Button } from "@/components/ui/button";
import { CSSProperties } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import GuestCard from "./guest";
import IndustryVisitForm from "./iv";
import WorkshopForm from "./workshop";
import RecruitmentForm from "./recruitment";

export default function Post() {
  const [showGuest, setShowGuest] = useState(false);
  const [showIV, setShowIV] = useState(false);
  const [showWorkshop, setShowWorkshop] = useState(false);
  const [showRecruitment, setShowRecruitment] = useState(false);

  const handleValue = (value: any) => {
    setShowGuest(value === "guest");
    setShowIV(value === "iv");
    setShowWorkshop(value === "workshop");
    setShowRecruitment(value === "recruitment");
  };
  const styleForRecruitment: CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <main
      className="flex space-x-10 items-center mb-10"
      style={showRecruitment ? {} : styleForRecruitment}
    >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Enter The Details</CardTitle>
          <CardDescription>Details Of Company</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Company Name</Label>
                <Input id="name" placeholder="Name of your name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Company Address</Label>
                <Input id="name" placeholder="Address of company" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Purposes</Label>
                <Select onValueChange={handleValue}>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="guest">Guest Lecture</SelectItem>
                    <SelectItem value="iv">IV</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="recruitment">Recruitment</SelectItem>
                    {/* <SelectItem value="mou">MOU</SelectItem> */}
                  </SelectContent>
                </Select>
              </div>
              {showGuest ? <GuestCard /> : null}
              {showIV ? <IndustryVisitForm /> : null}
              {showWorkshop ? <WorkshopForm /> : null}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
      {showRecruitment ? <RecruitmentForm /> : null}
    </main>
  );
}
