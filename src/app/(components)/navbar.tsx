"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function navbar() {
  const { data: session } = useSession();
  return (
    <main
      className=" p-2 items-center flex justify-between text-white shadow-2xl"
      style={{ backgroundColor: "#0c4182" }}
    >
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-5">
          <Image
            src="/logo.png"
            height={50}
            width={60}
            alt="logo"
            className="ml-10"
          />
          <h1 className="font-bold">Industry Portal</h1>
        </div>
        <div>
          <a href="/home">
            <h1 className="">Home</h1>
          </a>
        </div>
      </div>
      {session?.user.name ? (
        <div className="flex gap-10 mr-10">
          <Popover>
            <PopoverTrigger>
              <h3>{session.user.name}</h3>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col items-center justify-center">
                <Button variant="destructive" onClick={() => signOut()}>
                  Logout
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <div className="flex gap-10 mr-10">
          <a href="/login">
            <h1>Login</h1>
          </a>
          <a href="/register">
            <h1>Register</h1>
          </a>
        </div>
      )}
    </main>
  );
}
