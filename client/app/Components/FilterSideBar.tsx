"use client";

//Libraries
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";

interface FilterSideBarProps {
  currentFilters: Record<string, string>;
  category: string | null;
}

export default function FilterSideBar({
  currentFilters,
  category,
}: FilterSideBarProps) {
  const [formData, setFormData] = useState({
    priceRange: 150,
    sortedBy: "Price (Lowest to Highest)",
  });

  const router = useRouter();

  useEffect(() => {
    // Initialize the filters with currentFilters
    setFormData((prevData) => ({
      ...prevData,
      priceRange: currentFilters.hourlyChargeMax
        ? parseInt(currentFilters.hourlyChargeMax, 10)
        : prevData.priceRange,
      sortedBy: currentFilters.sortBy
        ? getSortByLabel(currentFilters.sortBy)
        : prevData.sortedBy,
    }));
  }, [currentFilters]);

  const getSortByLabel = (sortBy: string): string => {
    if (sortBy === "hourlyCharge:asc") return "Price (Lowest to Highest)";
    if (sortBy === "hourlyCharge:desc") return "Price (Highest to Lowest)";
    return "Price (Lowest to Highest)";
  };

  const handleClickUpdateFilters = () => {
    // Construct query parameters
    const query = new URLSearchParams();

    // Conditionally add hourlyChargeMax if priceRange is not 150
    if (formData.priceRange !== 150) {
      query.set("hourlyChargeMax", formData.priceRange.toString());
    }

    // Add sortBy parameter
    query.set(
      "sortBy",
      formData.sortedBy === "Price (Lowest to Highest)"
        ? "hourlyCharge:asc"
        : formData.sortedBy === "Price (Highest to Lowest)"
        ? "hourlyCharge:desc"
        : "hourlyCharge:asc"
    );

    // Push new URL and refresh the page
    router.push(`?category=${category}&${query.toString()}`);
  };

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClickSortBy = (value: string) => {
    setFormData((prevData) => ({ ...prevData, sortedBy: value }));
  };

  return (
    <div className="flex flex-col w-full sm:w-full md:w-full lg:w-[35vw] xl:w-[25vw] 2xl:w-[20vw] max-h-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm gap-5">
      <div className="flex flex-col gap-5">
        <h3 className="font-bold">Sorted by</h3>
        <div className="dropdown">
          <div
            tabIndex={0}
            className="flex input input-bordered rounded-full items-center"
          >
            {formData.sortedBy}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <button
                onClick={() => handleClickSortBy("Price (Lowest to Highest)")}
              >
                Price (Lowest to Highest)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClickSortBy("Price (Highest to Lowest)")}
              >
                Price (Highest to Lowest)
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Price</h3>
          <h3 className="font-bold">
            {formData.priceRange >= 150
              ? `+${formData.priceRange}`
              : formData.priceRange}
          </h3>
        </div>
        <div>
          <input
            className="range range-secondary"
            type="range"
            min={10}
            max={150}
            name="priceRange"
            value={formData.priceRange}
            step={5}
            onChange={handleChange}
          />
          <div className="flex w-full justify-between px-2 text-xs">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="font-bold">Badges</h3>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Verified</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Fast Responder</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Great Value</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-secondary"
            />
          </label>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleClickUpdateFilters}>
        Apply
      </button>
    </div>
  );
}
