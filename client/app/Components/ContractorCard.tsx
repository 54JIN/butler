//Libraries
import Image from "next/image";

//Images
import profilepic from "../Assets/Images/profilepic.jpg";
import starpic from "../Assets/Images/star.svg";

interface ContractorData {
  owner: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  hourlyCharge: string;
  rating: number;
  jobsCompleted: number;
  badges: string[];
  description: string;
}

interface ContractorCardProps {
  contractorData: ContractorData;
}

export default function ContractorCard({ contractorData }: ContractorCardProps) {
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
            <h3 className="text-xl font-semibold">{contractorData.owner.firstName} {contractorData.owner.lastName}</h3>
            <h3 className="text-xl font-semibold">{contractorData.hourlyCharge}</h3>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src={starpic}
              alt="Contractor Picture"
              className="w-[8vw] sm:w-[4.5vw] md:w-[4vw] lg:w-[1.5vw] xl:w-[1.5vw] 2xl:w-[1.2vw] rounded-full "
            />
            <p className="text-md">{contractorData.rating} Rating</p>
          </div>
          <p className="text-md">{contractorData.jobsCompleted} Jobs Completed</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {contractorData.badges.map((badge, idx) => {
          return (
            <p className="badge badge-md" key={idx}>{badge}</p>
          )
        })}
      </div>
      <p className="text-md">
        {contractorData.description}
      </p>
      <button className="btn btn-primary">Select</button>
    </div>
  );
}