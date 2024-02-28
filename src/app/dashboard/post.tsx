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

  const [initData, setInitData] = useState({});
  const [data, setData] = useState({});

  const handleSubmit = (e: any) => {
    const sendData = async () => {
      await fetch("/api/sendPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ initData, data }),
      }).then((data) => {
        console.log(data);
      });
    };
    sendData();
  };

  const handleValue = (value: any) => {
    setData({});
    setShowGuest(value === "guest");
    setShowIV(value === "iv");
    setShowWorkshop(value === "workshop");
    setShowRecruitment(value === "recruitment");
  };
  return (
    <main className="flex space-x-10 items-center mb-10 justify-center">
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
                <Input
                  id="name"
                  placeholder="Name of your name"
                  onChange={(e) =>
                    setInitData((values) => ({
                      ...values,
                      cname: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Company Address</Label>
                <Input
                  id="address"
                  placeholder="Address of company"
                  onChange={(e) =>
                    setInitData((values) => ({
                      ...values,
                      address: e.target.value,
                    }))
                  }
                />
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
              {showGuest ? <GuestCard setData={setData} /> : null}
              {showIV ? <IndustryVisitForm setData={setData} /> : null}
              {showWorkshop ? <WorkshopForm setData={setData} /> : null}
              {showRecruitment ? <RecruitmentForm setData={setData} /> : null}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={handleSubmit}>Send</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
