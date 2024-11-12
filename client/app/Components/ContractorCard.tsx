//Libraries
import Image from "next/image";

//Images
import profilepic from "../Assets/Images/profilepic.jpg";
import starpic from "../Assets/Images/star.svg";

export default function ContractorCard() {
  return (
    <div className="flex flex-col w-full sm:w-full md:w-full lg:w-[50vw] xl:w-[40vw] 2xl:w-[30vw] p-4 bg-white border border-gray-200 rounded-lg shadow-sm gap-5">
      <div className="flex gap-5 w-full">
        <Image
          src={profilepic}
          alt="Contractor Picture"
          className="w-[20vw] sm:w-[15vw] md:w-[15vw] lg:w-[10vw] xl:w-[7vw] 2xl:w-[5.5vw] h-[20vw] sm:h-auto md:h-auto xl:h-auto rounded-full "
        />
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Adrian Rose</h3>
            <h3 className="text-xl font-semibold">25/hr</h3>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={starpic}
              alt="Contractor Picture"
              className="w-[8vw] sm:w-[4.5vw] md:w-[4vw] lg:w-[1.5vw] xl:w-[1.5vw] 2xl:w-[1.2vw] rounded-full "
            />
            <p className="text-md">4.3 Rating</p>
          </div>
          <p className="text-md">103 Jobs Completed</p>
          <p className="text-md">23 Jobs Completed</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <p className="badge badge-md">Speedy Response</p>
        <p className="badge badge-md">Elite</p>
        <p className="badge badge-md">Great Value</p>
      </div>
      <p className="text-md">
        Hello everyone! My name is Musa. I’m a professional painter within 10
        years of experience. I also have a top notch professional team. You will
        not regret 100%.
      </p>
      <button className="btn ">Select</button>
    </div>
  );
}
