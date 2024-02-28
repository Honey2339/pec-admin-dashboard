import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function WorkshopForm({ setData }: any) {
  return (
    <div className="grid w-full items-center gap-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="workshopName">Workshop Name</Label>
        <Input
          id="workshopName"
          placeholder="Heading for the post"
          onChange={(e) =>
            setData((values: any) => ({
              ...values,
              workshopName: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="workshopDate">Date Of Workshop</Label>
        <Input
          id="workshopDate"
          placeholder="DD/MM/YYYY"
          type="date"
          onChange={(e) =>
            setData((values: any) => ({
              ...values,
              workshopDate: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="workshopTime">Place</Label>
        <Input
          id="workshopTime"
          placeholder="Workshop Visit Place"
          onChange={(e) =>
            setData((values: any) => ({
              ...values,
              workshopTime: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
}
