"use client";
import React from "react";

interface FilterButtonsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="relative w-full p-3 bg-no-repeat bg-cover bg-center flex justify-center items-center">
      <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
        <button
          type="button"
          className={`p-3 m-2 rounded-full w-65 text-center ${
            activeFilter === "Rhyming Stories for Kids"
              ? "bg-purple-300 text-white"
              : "bg-white"
          }`}
          onClick={() => onFilterChange("Rhyming Stories for Kids")}
        >
          Rhyming Stories For Kids
        </button>
        <button
          type="button"
          className={`p-3 m-2 rounded-full w-65 text-center ${
            activeFilter === "non-rhyme"
              ? "bg-purple-300 text-white"
              : "bg-white"
          }`}
          onClick={() => onFilterChange("non-rhyme")}
        >
          Non-Rhyming Stories For Kids
        </button>
        <button
          type="button"
          className={`p-3 m-2 rounded-full w-65 text-center ${
            activeFilter === "Bedtime Stories"
              ? "bg-purple-300 text-white"
              : "bg-white"
          }`}
          onClick={() => onFilterChange("Bedtime Stories")}
        >
          Bedtime Stories For Kids
        </button>
      </div>
    </div>
  );
};

export default FilterButtons;
