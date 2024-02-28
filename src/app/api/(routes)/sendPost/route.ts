import { NextRequest, NextResponse } from "next/server";
import { db } from "../../auth/[...nextauth]/db";

export async function POST(req: NextRequest, res: NextResponse) {
  const { initData, data } = await req.json();
  console.log(initData, data);
  if (!initData) {
    return NextResponse.json({ Error: "Cname and Caddress is not defined" });
  }
  if (data?.guestName && data?.guestTime && data?.guestDate) {
    await db.guestLectures.create({
      data: {
        cname: initData?.cname,
        caddress: initData?.address,
        guestName: data?.guestName,
        guestDate: data?.guestDate,
        guestTime: data?.guestTime,
      },
    });
  }
  if (data?.ivName && data?.ivTime && data?.ivDate) {
    await db.industryVisit.create({
      data: {
        cname: initData?.cname,
        caddress: initData?.address,
        ivName: data?.ivName,
        ivDate: data?.ivDate,
        ivTime: data?.ivTime,
      },
    });
  }
  if (data?.workshopName && data?.workshopTime && data?.workshopDate) {
    await db.workshops.create({
      data: {
        cname: initData?.cname,
        caddress: initData?.address,
        workshopName: data?.workshopName,
        workshopDate: data?.workshopDate,
        workshopTime: data?.workshopTime,
      },
    });
  }
  if (data?.recruitRole) {
    await db.recruitment.create({
      data: {
        cname: initData?.cname,
        caddress: initData?.address,
        Role: data?.recruitRole,
      },
    });
  }
  return NextResponse.json({ initData });
}
