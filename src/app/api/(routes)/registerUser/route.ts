import { NextRequest, NextResponse } from "next/server";
import { db } from "../../auth/[...nextauth]/db";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  if (!data) {
    return NextResponse.json({ Message: "Error with the data" });
  }
  await db.user.createMany({
    data: {
      name: data?.name,
      email: data?.email,
      regno: data?.regNo,
      rollno: data?.rollNo,
      password: data?.password,
    },
  });
  return NextResponse.json({ Message: "User has been created" });
}
