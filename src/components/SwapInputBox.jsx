import { FiMapPin, FiChevronDown, FiRepeat } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { LocationIcon } from "../assets/icons/Icons";

// ✅ Reusable Location Dropdown Component
const LocationDropdown = ({
  label = "From (Location)",
  options = [],
  value,
  onChange,
  width = " ",
  height = "h-14",
  bg = "bg-white",
  textColor = "text-gray-400",
  labelColor = "text-[#032749] ",
  borderColor = "border-gray-200",
  rounded = "rounded-xl",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${width} w-full flex-1`} ref={dropdownRef}>
      {/* main box */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center px-3 cursor-pointer ${height} ${bg} ${rounded} border ${borderColor} shadow-sm`}
      >
        {/* <FiMapPin className="text-gray-500 mr-2" /> */}
        <LocationIcon  className="mr-3 opacity-85 " />
        <div className="flex flex-col flex-1">
          <label className={`text-xs font-manrope font-light ${labelColor}`}>
            {label}
          </label>
          <span className={`text-base ${textColor} text-myBlack truncate font-manrope font-medium`}>
            {value || "Select location"}
          </span>
        </div>
        <FiChevronDown
          className={`ml-2 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* dropdown list */}
      {isOpen && (
        <ul
          className={`absolute z-20 mt-1 ${bg} border ${borderColor} ${rounded} shadow-lg w-full max-h-48 overflow-y-auto`}
        >
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Parent SwapInputBox
const SwapInputBox = ({ fromLocation, toLocation, setFromLocation, setToLocation }) => {
  const locations = [
    "Karachi, Pakistan",
    "Lahore, Pakistan",
    "Islamabad, Pakistan",
    "Istanbul, Turkey",
    "Ankara, Turkey",
    "Izmir, Turkey",
    "New York, USA",
  ];

  const handleSwap = () => {
    setFromLocation(toLocation);
    setToLocation(fromLocation);
  };

  return (
    // <div className="flex flex-wrap gap-y-4 items-center justify-between">
    <div className="flex flex-wrap gap-y-4 items-center gap-x-2 ">
      {/* from input */}
      <LocationDropdown
        label="From (Location)"
        options={locations}
        value={fromLocation}
        onChange={setFromLocation}
      />

      {/* swap button */}
      <button
        onClick={handleSwap}
        type="button"
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow transition"
      >
        <FiRepeat className="text-gray-600" />
      </button>

      {/* to input */}
      <LocationDropdown
        label="To (Location)"
        options={locations}
        value={toLocation}
        onChange={setToLocation}
      />
    </div>
  );
};

export default SwapInputBox;
