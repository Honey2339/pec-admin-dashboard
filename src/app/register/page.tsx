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
    <main className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-8">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((values) => ({ ...values, name: e.target.value }))
                }
              />
            </div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((values) => ({ ...values, email: e.target.value }))
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="regNo"
            >
              Reg No
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="register"
              type="text"
              placeholder="Enter your Register Number"
              name="regNo"
              value={formData.regNo}
              onChange={(e) =>
                setFormData((values) => ({ ...values, regNo: e.target.value }))
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rollNo"
            >
              Roll No
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rollno"
              type="text"
              placeholder="Enter your Roll Number"
              name="rollNo"
              value={formData.rollNo}
              onChange={(e) =>
                setFormData((values) => ({ ...values, rollNo: e.target.value }))
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
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((values) => ({
                  ...values,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
