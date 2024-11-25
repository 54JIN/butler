"use client";

//Libraries
import { useState } from "react";
import { ChangeEvent } from "react";

export default function FilterSideBar() {
  const [formData, setFormData] = useState({
    priceRange: 0,
    sortedBy: "Recommended",
  });

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
    setFormData((prevData) => ({
      ...prevData,
      sortedBy: value,
    }));
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
              <button onClick={() => handleClickSortBy("Recommended")}>
                Recommended
              </button>
            </li>
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
        <h3 className="font-bold">Price</h3>
        <div>
          <input
            className="range range-secondary"
            type="range"
            min={0}
            max={100}
            name="priceRange"
            value={formData.priceRange}
            step={25}
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
            <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Fast Responder</span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Great Value</span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
          </label>
        </div>
      </div>
    </div>
  );
}
