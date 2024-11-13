"use client";

//Components
import ContractorCard from "../Components/ContractorCard";

//Temp Data
import ContractorSuggestions from "../Assets/TempData/ContractorSuggestions";

export default function Suggestions() {

  return (
    <div className="flex flex-col p-4 gap-5">
      {ContractorSuggestions.map((contractor, idx) => {
        return (
          <ContractorCard contractorData={contractor} key={idx} />    
        )
      })}
    </div>
  );
}