"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Card, Metric, Text, Title, BarList, Flex, Grid } from "@tremor/react";
import Chart from "./chart";
import Post from "./post";

const website = [
  { name: "/home", value: 1230 },
  { name: "/contact", value: 751 },
  { name: "/gallery", value: 471 },
  { name: "/august-discount-offer", value: 280 },
  { name: "/case-studies", value: 78 },
];

const shop = [
  { name: "Intern", value: 453 },
  { name: "DA Intern", value: 200 },
];
const app = [
  { name: "/shop", value: 789 },
  { name: "/product-features", value: 676 },
  { name: "/about", value: 564 },
  { name: "/login", value: 234 },
  { name: "/downloads", value: 191 },
];

const data = [
  {
    category: "Website",
    stat: "10,234",
    data: website,
  },
  {
    category: "TCS",
    stat: "12,543",
    data: shop,
  },
];

export default function DashBoard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);
  useEffect(() => {
    if (status === "authenticated") {
      console.log("Session is authenticated:", session);
    } else if (status === "unauthenticated") {
      router.push("/adminlogin");
    }
  }, [status, session, router]);
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Post />
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item) => (
          <Card className="" key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.stat}</Metric>
              <Text>Applicants</Text>
            </Flex>
            <Flex className="mt-6">
              <Text>Roles</Text>
              <Text className="text-right">Applied</Text>
            </Flex>
            <BarList
              data={item.data}
              valueFormatter={(number: number) =>
                Intl.NumberFormat("us").format(number).toString()
              }
              className="mt-2"
            />
          </Card>
        ))}
      </Grid>
      {/* Import this if you need a performance chart */}
      {/* <Chart /> */}
    </main>
  );
}
