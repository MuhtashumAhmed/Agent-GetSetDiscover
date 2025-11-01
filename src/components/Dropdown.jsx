import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ 
  options = [], 
  value, 
  onChange, 
  className = "", 
  buttonClass = "", 
  menuClass = "" 
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-full px-3 py-2 text-sm bg-gray-100 rounded-md hover:bg-gray-200 ${buttonClass}`}
      >
        {value || "Select option"}
        <FiChevronDown
          className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20 ${menuClass}`}
        >
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
