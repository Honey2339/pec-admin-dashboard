"use client";

import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ZodError, z } from "zod";

const loginSchema = z.object({
  regNo: z.number(),
  password: z.string(),
});

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const parsedData = loginSchema.parse(loginData);
      console.log(loginData);
      await signIn("credentials", {
        regNo: parsedData.regNo,
        password: parsedData.password,
        flag: 2,
        redirect: false,
      }).then((data) => {
        if (data?.status == 200) {
          router.push("/home");
        } else {
          toast({
            title: "Invalid Credentials",
            description: "Check your Register Number/Password",
            variant: "destructive",
          });
        }
      });
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

  const [formErrors, setFormErrors] = useState({});

  const [loginData, setLoginData] = useState({
    regNo: 0,
    password: "",
  });

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-row w-full">
        <div className="hidden lg:flex flex-col justify-between bg-[#4682d1] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
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
                Log in to account
              </h2>
              <p className="text-md md:text-xl">Lets verify yourself!</p>
            </div>
            <div className="flex flex-col max-w-md space-y-5">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col max-w-md space-y-5"
              >
                <input
                  type="number"
                  placeholder="Register Number"
                  value={loginData.regNo || ""}
                  onChange={(e) =>
                    setLoginData((values) => ({
                      ...values,
                      regNo: parseInt(e.target.value),
                    }))
                  }
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData((values) => ({
                      ...values,
                      password: e.target.value,
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
