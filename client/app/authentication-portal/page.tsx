"use client";

//Libraries
import Image from "next/image";
import { useRouter } from "next/navigation";

//Images
import logo from "../Assets/Images/logo.png";

export default function authenticationPortal() {
  const router = useRouter();

  const clickHandlerSignIn = () => {
    router.push("/signin"); 
  };
  
  const clickHandlerCreateAccount = () => {
      router.push("/signup"); 
  };

  return (
    <div>
      <div className="flex w-full justify-center items-center min-h-screen p-5">
        <div className="flex flex-col bg-[#ffffff] p-5 gap-1 border-[2px] border-[rgba(238,238,238,0.8)] rounded-lg w-[95vw] max-w-[360px]">
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="Logo"
              className="w-[25vw] sm:w-[15vw] md:w-[13vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[5.5vw]"
            />
          </div>
          <div className="flex">
            <button className="btn bg-[#485424] text-white w-full mt-5" onClick={clickHandlerSignIn}>
              Sign In
            </button>
          </div>
          <div className="flex">
            <button className="btn btn-outline btn-default w-full mt-5" onClick={clickHandlerCreateAccount}>
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}