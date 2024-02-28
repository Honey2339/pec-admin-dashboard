import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RecruitmentForm({ setData }: any) {
  return (
    <div className="grid w-full items-center gap-4">
      {/* <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Company Name</Label>
        <Input
          id="name"
          placeholder="Name of your name"
          onChange={(e) =>
            setData((values: any) => ({
              ...values,
              workshopN: e.target.value,
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
            setData((values: any) => ({
              ...values,
              workshopName: e.target.value,
            }))
          }
        /> */}
      {/* </div> */}
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="roles">Role</Label>
        <Input
          id="roles"
          placeholder="Role of the candidate"
          onChange={(e) =>
            setData((values: any) => ({
              ...values,
              recruitRole: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
}
