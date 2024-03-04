import Image from "next/image";
import React from "react";

export default function NavbarAgain() {
  return (
    <div className="bg-gray-100 font-sans w-full m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <a href="/">
                <Image src="/logo.png" width={50} height={20} alt="logo" />
              </a>
              <a href="/">
                <p className="text-gray-800 text-sm font-semibold mr-4">
                  PaniPortal
                </p>
              </a>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <a
                href="/home"
                className="text-gray-800 text-sm font-semibold hover:text-blue-500 mr-10"
              >
                Home
              </a>
              <a
                href="/login"
                className="text-gray-800 text-sm font-semibold hover:text-blue-500 mr-4"
              >
                Sign in
              </a>
              <a
                href="/register"
                className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-blue-500 hover:border-blue-500"
              >
                Sign up
              </a>
            </div>
          </div>

          <div className="block sm:hidden bg-white border-t-2 py-2">
            <div className="flex flex-col">
              <div className="flex justify-between items-center border-t-2 pt-2">
                <a
                  href="/login"
                  className="text-gray-800 text-sm font-semibold hover:text-blue-500 mr-4"
                >
                  Sign in
                </a>
                <a
                  href="/register"
                  className="text-gray-800 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-blue-500 hover:border-blue-600"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
