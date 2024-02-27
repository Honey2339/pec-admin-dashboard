import { Button } from "@/components/ui/button";
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

export default function RecruitmentForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Recruitment</CardTitle>
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
              <Label htmlFor="address">Company Address</Label>
              <Input id="address" placeholder="Address of company" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="roles">Role</Label>
              <Input id="roles" placeholder="Role of the candidate" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
