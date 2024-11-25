"use client";

const axios = require("axios");

//Libraries
import { useState } from "react";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import Image from "next/image";

//Images
import logo from "../Assets/Images/logo.png";

export default function SignUp() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clickHandlerSignUp = async () => {
    try {
      // Sending POST request with form data
      const response = await axios.post("http://localhost:5000/users", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });

      // Handle success (you can navigate to a different page after successful signup)
      console.log("User created successfully:", response.data);
      router.push("/dashboard"); // Optional: Redirect to a new page (e.g., a welcome page)
    } catch (e) {
      const error = e as AxiosError;
      // Handle error with type assertion
      if (axios.isAxiosError(error)) {
        console.error(
          "Error creating user:",
          error.response ? error.response.data : error.message
        );
      } else {
        // In case the error is not an AxiosError, handle it differently
        console.error("Unknown error:", error);
      }
    }
  };

  const clickHandlerAlreadyHaveAccount = async () => {
    router.push("/signin");
  };

  return (
    <div>
      <div className="flex w-full justify-center items-center min-h-screen p-5">
        <div className="flex flex-col bg-[#ffffff] p-5 gap-4 border-[2px] border-[rgba(238,238,238,0.8)] rounded-lg w-[95vw] max-w-[360px]">
          <div>
            <Image
              src={logo}
              alt="Logo"
              className="w-[25vw] sm:w-[15vw] md:w-[13vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[5.5vw]"
            />
          </div>
          <div>
            <h2 className="text-2xl font-medium">Sign Up</h2>
            <p className="text-md text-[rgb(140,140,140)]">
              Please enter your details below
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-md text-[rgb(140,140,140)]">First Name</p>
              <label className="input input-bordered rounded-xl flex items-center gap-2">
                <input
                  type="text"
                  className="grow text-md"
                  placeholder="john"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md text-[rgb(140,140,140)]">Last Name</p>
              <label className="input input-bordered rounded-xl flex items-center gap-2">
                <input
                  type="text"
                  className="grow text-md"
                  placeholder="doe"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md text-[rgb(140,140,140)]">Email</p>
              <label className="input input-bordered rounded-xl flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow text-md"
                  placeholder="johndoe@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md text-[rgb(140,140,140)]">Password</p>
              <label className="input input-bordered rounded-xl flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow text-md"
                  placeholder="••••••••••••"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md text-[rgb(140,140,140)]">
                Re-enter New Password
              </p>
              <label className="input input-bordered rounded-xl flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow text-md"
                  placeholder="••••••••••••"
                />
              </label>
            </div>
          </div>
          <div className="flex border-t-[2px] border-[rgba(238,238,238,0.8)]">
            <button
              className="btn bg-[#485424] text-white w-full mt-5"
              onClick={clickHandlerSignUp}
            >
              Sign Up
            </button>
          </div>
          <div className="flex border-t-[2px] border-[rgba(238,238,238,0.8)]">
            <button className="btn btn-outline btn-default w-full mt-5" onClick={clickHandlerAlreadyHaveAccount}>
              Already have an account?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
