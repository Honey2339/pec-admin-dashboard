"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [data, setData] = useState({ name: "", password: "" });
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signIn("credentials", {
      name: data.name,
      password: data.password,
      callbackUrl: "/dashboard",
    });
  };
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Admin Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="Enter your name"
              onChange={(e) =>
                setData((values) => ({ ...values, name: e.target.value }))
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) =>
                setData((values) => ({ ...values, password: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="h-[0.5px] w-auto bg-black mt-3 mb-3"></div>
        <div>
          <h3 className="text-gray-400 text-center">
            <a href="/login">
              <span className="text-blue-400">Go Back</span>
            </a>
          </h3>
        </div>
      </div>
    </main>
  );
}
