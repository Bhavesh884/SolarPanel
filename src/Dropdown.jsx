import React, { useState } from "react";

const Dropdown = ({ label, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div className="relative inline-block w-full text-mytext">
      <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-orange-600">
        {label}
      </label>
      <select
        className="w-full bg-boxbg border border-gray-300 rounded-md shadow-lg focus:border-slate-600 py-2 pl-3 pr-10"
        value={selectedOption}
        onChange={handleSelect}
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
