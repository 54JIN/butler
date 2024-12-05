"use client";

//Libraries
import { useRouter } from "next/navigation";
import Image from "next/image";

//Images
import landingPageImage from "../Assets/Images/landingPageImage.png";

export default function LandingPage() {
  const router = useRouter();

  const handleSearch = (category: string) => {
    router.push(`/suggestions?${category ? `serviceType=${category}&sortBy=hourlyCharge%3Aasc` : ""}`);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-around items-center h-auto md:h-screen bg-[#FEFAE0]">
        <div className="flex justify-center w-full sm:w-full  md:w-[13vw] lg:w-[10vw] xl:w-[40vw] 2xl:w-[40vw] pl-4 pr-4 md:pl-0 md:pr-0 sm:pt-[200px] md:pt-0">
          <div className="flex flex-col justify-end gap-6 w-full sm:w-full md:w-[13vw] lg:w-[10vw] xl:w-[30vw] 2xl:w-[25vw] h-[70vh] md:h-auto">
            <div>
              <h1 className="text-5xl sm:text-5xl  md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
                Find
              </h1>
              <h1 className="text-5xl sm:text-5xl  md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
                Your Service
              </h1>
            </div>
            <p>
              Don't Look any further, we can help you find any service for your
              home.
            </p>
            <div className="flex flex-col gap-7">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <div className="flex gap-5">
                <button
                  className="btn btn-outline btn-secondary"
                  onClick={() => handleSearch("Plumber")}
                >
                  Plumber
                </button>
                <button
                  className="btn btn-outline btn-secondary"
                  onClick={() => handleSearch("Electrician")}
                >
                  Electrician
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-full  md:w-[13vw] lg:w-[10vw] xl:w-[40vw] 2xl:w-[40vw]">
          <Image
            src={landingPageImage}
            alt="House"
            className="w-full sm:w-full  md:w-[13vw] lg:w-[10vw] xl:w-[30vw] 2xl:w-[30vw]"
          />
        </div>
      </div>
      <div className="bg-[#ffffff]">
        <h1 className="text-5xl sm:text-5xl  md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
          Hello
        </h1>
      </div>
      <div className="flex w-full">
        <div className="flex bg-[#088474] w-[70%] pl-20 pt-10 h-[40vh]">
          <div className="flex flex-col w-[70%]">
            <h1 className="text-5xl sm:text-5xl  md:text-6xl lg:text-6xl xl:text-5xl 2xl:text-5xl text-[#ffffff]">
              Verified Service
            </h1>
            <p className="text-[#ffffff]">
              We ensure every service provider is varified and has insurance so
              that you can sleep knowing your serivce is safe.
            </p>
          </div>
        </div>
        <div className="flex bg-[#FEFAE0] w-[30%]"></div>
      </div>
    </div>
  );
}
