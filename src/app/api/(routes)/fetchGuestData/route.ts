import { NextRequest, NextResponse } from "next/server";
import { db } from "../../auth/[...nextauth]/db";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const data = await db.guestLectures.findMany({});
  return NextResponse.json({ Data: data });
}
