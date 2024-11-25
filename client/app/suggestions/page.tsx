"use client";

const axios = require("axios");

//Libraries
import { useSearchParams } from 'next/navigation';
import { AxiosError } from "axios";

//Components
import FilterSideBar from "../Components/FilterSideBar";
import ContractorCard from "../Components/ContractorCard";

//Temp Data
import ContractorSuggestions from "../Assets/TempData/ContractorSuggestions";
import { useEffect, useState } from 'react';

export default function Suggestions() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const [contractors, setContractors] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/${category}`)
        setContractors(response.data)
        console.log(response.data)
      } catch (e) {
        setError(true);
        console.error("Error fetching data:", e);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData()
  }, [])

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center min-h-screen p-5 gap-5">
      <div>
        <FilterSideBar />
      </div>
      <div className="flex flex-col gap-5">
        {contractors.map((contractor, idx) => {
          return <ContractorCard contractorData={contractor} key={idx} />;
        })}
      </div>
    </div>
  );
}
