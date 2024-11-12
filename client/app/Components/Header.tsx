//Libraries
import Image from "next/image";
import { useRouter } from "next/navigation";

//Images
import logo from "../Assets/Images/logo.png";

export default function Header() {
  const router = useRouter();

  const goToSignIn = () => {
    router.push('/signin');
  };
  
  const goToSignUp = () => {
    router.push('/signup');
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-[rgba(255,255,255,0.8)] backdrop-blur-md pt-2 pb-2">
      <div className="flex justify-center items-center h-[70px]">
        <div className="flex justify-between w-[90vw] sm:w-[90vw] md:w-[90vw] lg:w-[90vw] xl:w-[60vw] 2xl:w-[60vw]">
          <Image
            src={logo}
            alt="Logo"
            className="w-[25vw] sm:w-[15vw]  md:w-[13vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[5.5vw]"
          />
          <div className="flex gap-5 self-center">
            <button className="btn text-[#485424]" onClick={goToSignIn} >Log In</button>
            <button className="btn bg-[#485424] text-white" onClick={goToSignUp}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}