import Image from "next/image";
import React from "react";

export default function navbar() {
  return (
    <main className="bg-yellow-400 p-2 items-center flex justify-between">
      <div className="font-bold flex items-center space-x-5">
        <Image
          src="/logo.png"
          height={50}
          width={60}
          alt="logo"
          className="ml-10"
        />
        <h1>Industry Portal</h1>
      </div>
      <div className="flex gap-10 mr-10">
        <a href="/login">
          <h1>Login</h1>
        </a>
        <a href="/register">
          <h1>Register</h1>
        </a>
      </div>
    </main>
  );
}
