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

type FormData = {
  hourlyCharge: string;
  location: string;
  service: string;
};

export default function becomeContractor() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    hourlyCharge: "",
    location: "",
    service: "",
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

  const handleClickService = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const clickHandlerBecomeContractor = async () => {
    router.push("/suggestions")
    // try {
    //   // Sending POST request with form data
    //   const response = await axios.post("http://localhost:5000/users", {
    //     hourlyCharge: formData.hourlyCharge,
    //     location: formData.location,
    //   });

    //   // Handle success (you can navigate to a different page after successful signup)
    //   console.log("User created successfully:", response.data);
    //   router.push("/suggestions"); // Optional: Redirect to a new page (e.g., a welcome page)
    // } catch (e) {
    //   const error = e as AxiosError;
    //   // Handle error with type assertion
    //   if (axios.isAxiosError(error)) {
    //     console.error(
    //       "Error creating user:",
    //       error.response ? error.response.data : error.message
    //     );
    //   } else {
    //     // In case the error is not an AxiosError, handle it differently
    //     console.error("Unknown error:", error);
    //   }
    // }
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
            <h2 className="text-2xl font-medium">Earn Money Your Way</h2>
            <p className="text-md text-[rgb(140,140,140)]">
              Please enter your details below
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-md text-[rgb(140,140,140)]">Area of Service</p>
              <label className="input input-bordered rounded-xl flex items-center gap-2">
                <input
                  type="location"
                  className="grow text-md"
                  placeholder="New York City"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md text-[rgb(140,140,140)]">Hourly Charge</p>
            <label className="input input-bordered rounded-xl flex items-center gap-2">
              <input
                type="number"
                className="grow text-md"
                placeholder="25/hr"
                name="hourlyCharge"
                value={formData.hourlyCharge}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="dropdown">
            <div className="flex flex-col gap-2">
              <p className="text-md text-[rgb(140,140,140)]">Your Service</p>
              <div
                tabIndex={0}
                className="flex input input-bordered items-center"
              >
                {formData.service === "" ? `Choose Service` : formData.service}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <button onClick={() => handleClickService("Plumber")}>
                  Plumber
                </button>
              </li>
              <li>
                <button onClick={() => handleClickService("Electrician")}>
                  Electrician
                </button>
              </li>
            </ul>
          </div>
          <div className="flex border-t-[2px] border-[rgba(238,238,238,0.8)]">
            <button
              className="btn bg-[#485424] text-white w-full mt-5"
              onClick={clickHandlerBecomeContractor}
            >
              Become Contractor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
