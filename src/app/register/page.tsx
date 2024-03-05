"use client";
import React, { useState } from "react";
import { ZodError, z } from "zod";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    regNo: "",
    rollNo: "",
    password: "",
  });

  const registerSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    regNo: z.string().min(2).max(20),
    rollNo: z.string().min(2).max(20),
    password: z.string().min(6),
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      registerSchema.parse(formData);
      console.log("Form is validated");
      setFormErrors({});
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: any = {};
        error.errors.forEach((err) => {
          const fieldName = err.path[0];
          fieldErrors[fieldName] = err.message;
        });
        setFormErrors(fieldErrors);
        console.error("Form validation errors:", fieldErrors);
      } else {
        console.error("Zod error:", error);
      }
    }
  };
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-row w-full">
        <div className="hidden lg:flex flex-col justify-between bg-[#e7dc46] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-8 h-8"></span>
          </div>
          <div className="space-y-5">
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
              Enter your account and join the ongoing events
            </h1>
          </div>
          <p className="font-medium">© Panimalar Engineering College</p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Register Today!
              </h2>
              <p className="text-md md:text-xl">
                Get started by filling this form right now
              </p>
            </div>
            <div className="flex flex-col max-w-md space-y-5">
              <form
                className="flex flex-col max-w-md space-y-5"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Username"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((values) => ({
                      ...values,
                      name: e.target.value,
                    }))
                  }
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((values) => ({
                      ...values,
                      password: e.target.value,
                    }))
                  }
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <input
                  type="text"
                  placeholder="Panimalar@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((values) => ({
                      ...values,
                      email: e.target.value,
                    }))
                  }
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <input
                  type="text"
                  placeholder="Register Number"
                  value={formData.regNo}
                  onChange={(e) =>
                    setFormData((values) => ({
                      ...values,
                      regNo: e.target.value,
                    }))
                  }
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <input
                  type="text"
                  placeholder="Roll Number"
                  value={formData.rollNo}
                  onChange={(e) =>
                    setFormData((values) => ({
                      ...values,
                      rollNo: e.target.value,
                    }))
                  }
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
                >
                  Submit
                </button>
              </form>
              <div className="flex justify-center items-center">
                <span className="w-full border border-black"></span>
                <span className="px-4">Or</span>
                <span className="w-full border border-black"></span>
              </div>
              <button className="flex items-center hover:bg-black hover:border-white hover:text-white justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                <a href="/adminlogin">
                  <span>Admin Login</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
