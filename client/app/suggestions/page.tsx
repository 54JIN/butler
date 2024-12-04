"use client";

const axios = require("axios");

//Libraries
import { useSearchParams } from "next/navigation";
import { AxiosError } from "axios";

//Components
import Header from "../Components/Header";
import FilterSideBar from "../Components/FilterSideBar";
import ContractorCard from "../Components/ContractorCard";

//Temp Data
import ContractorSuggestions from "../Assets/TempData/ContractorSuggestions";
import { useEffect, useState } from "react";

export default function Suggestions() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [contractors, setContractors] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams: Record<string, string> = {};

        const allowedFilters = ["sortBy", "hourlyChargeMax"];

        searchParams.forEach((value, key) => {
          if (value && allowedFilters.includes(key)){
            queryParams[key] = value
          };
        });
        
        setFilters(queryParams);
        console.log(queryParams)

        const queryString = new URLSearchParams(queryParams).toString();
        console.log(queryString)

        const response = await axios.get(`http://localhost:5000/${category}?${queryString}`);

        setContractors(response.data);

        console.log(response.data);
      } catch (e) {
        setError(true);
        console.error("Error fetching data:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams, category]);

  return (
    <div className="flex">
      <Header />
      <div className="flex flex-col mt-20 lg:flex-row w-full justify-center min-h-screen p-5 gap-5">
        <div>
          <FilterSideBar currentFilters={filters} category={category}/>
        </div>
        <div className="flex flex-col gap-5">
          {ContractorSuggestions.map((contractor, idx) => {
            return <ContractorCard contractorData={contractor} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}
