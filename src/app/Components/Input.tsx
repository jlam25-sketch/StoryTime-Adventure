"use clients";
import React, { useState } from "react";
interface InputProps {
  onSearch: (query: string) => void;
}

const Input: React.FC<InputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    if (query.trim()) {
      onSearch(query); // Trigger the search function passed down as a prop
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a book..."
        className="p-2 border rounded-md mb-2"
      />
      <button
        onClick={handleSearchClick}
        className="p-2 bg-indigo-300 text-white rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default Input;
