"use client";

//Libraries
import { useSearchParams } from 'next/navigation';

//Components
import FilterSideBar from "../Components/FilterSideBar";
import ContractorCard from "../Components/ContractorCard";

//Temp Data
import ContractorSuggestions from "../Assets/TempData/ContractorSuggestions";

export default function Suggestions() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center min-h-screen p-5 gap-5">
      <div>
        <FilterSideBar />
      </div>
      <div className="flex flex-col gap-5">
        {ContractorSuggestions.map((contractor, idx) => {
          return <ContractorCard contractorData={contractor} key={idx} />;
        })}
      </div>
    </div>
  );
}
