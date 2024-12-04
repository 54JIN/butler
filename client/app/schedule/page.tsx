"use client";

// const axios = require("axios");

//Libraries
import Image from "next/image";
// import { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";

//Components
import ScheduleCalendar from "../Components/ScheduleCalendar";

//Images
import profilepic from "../Assets/Images/profilepic.jpg";

export default function Schedule() {
  const searchParams = useSearchParams();
  const servicerId = searchParams.get("id");

  return (
    <div>
      <div className="flex w-full justify-center items-center min-h-screen p-5">
        <div className="flex flex-col bg-[#ffffff] p-5 gap-4 border-[2px] border-[rgba(238,238,238,0.8)] rounded-lg w-[95vw] max-w-[400px]">
          <h1 className="text-2xl font-medium">Book your service</h1>
          <div className="flex items-center gap-5">
            <Image
              src={profilepic}
              alt="Logo"
              className="w-[12vw] sm:w-[7vw] md:w-[6vw] lg:w-[4vw] xl:w-[3vw] 2xl:w-[2.5vw] rounded-full"
            />
            <p>John Davids Availability</p>
          </div>
          <ScheduleCalendar />
          <button className="btn btn-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  );
}
