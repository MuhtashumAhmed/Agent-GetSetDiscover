import React, { useState, useRef, useEffect } from "react";

const FlightFilter = ({ onClose }) => {
  const [sortBy, setSortBy] = useState("All");
  const [stops, setStops] = useState("All");
  const [timeRange, setTimeRange] = useState([0, 24]); // 0 = 12 AM, 24 = 12 AM
  const [airline, setAirline] = useState("Qatar");

  const filterRef = useRef(null);

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        onClose(); // call parent to close
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleReset = () => {
    setSortBy("All");
    setStops("All");
    setTimeRange([0, 24]);
    setAirline("");
  };

  const handleApply = () => {
    const filters = { sortBy, stops, timeRange, airline };
    console.log("✅ Applied Filters:", filters);
    onClose(); // ✅ close after Apply
  };

  return (
    <div
      ref={filterRef}
      className="w-full max-w-[434px] bg-white p-4 rounded-[20px] shadow-md"
    >
      {/* Sort By */}
      <div className="mb-4">
        <h3 className="text-base font-roboto font-medium text-gray-700 mb-2">
          Sort By
        </h3>
        <div className="flex gap-2 flex-wrap">
          {["All", "Best", "Fastest", "Cheapest"].map((option) => (
            <button
              key={option}
              onClick={() => setSortBy(option)}
              className={`px-3 py-1 cursor-pointer rounded-full font-manrope text-sm border transition ${
                sortBy === option
                  ? "bg-[#032749] text-myWhite-color border-[#032749]"
                  : "bg-[#F5F5F5] text-[#838383] border-[#E6E6E6]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Stops */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Stops</h3>
        <div className="flex gap-2 flex-wrap">
          {["All", "1 stop", "2 stops", "Direct"].map((option) => (
            <button
              key={option}
              onClick={() => setStops(option)}
              className={`px-4 py-1.5 cursor-pointer rounded-full font-manrope text-sm border transition ${
                stops === option
                  ? "bg-[#032749] text-myWhite-color border-[#032749]"
                  : "bg-[#F5F5F5] text-[#838383] border-[#E6E6E6]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Time */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-[#2F313C] mb-2 font-roboto ">
          Time
        </h3>
        <div className="flex items-center justify-between text-[8px] font-semibold font-inter text-[#042749] mb-2">
          <span>12 AM</span>
          <span>12 PM</span>
          <span>12 AM</span>
        </div>
        <input
          type="range"
          min="0"
          max="24"
          step="1"
          value={timeRange[0]}
          onChange={(e) => setTimeRange([+e.target.value, timeRange[1]])}
          className="w-full accent-[#032749]"
        />
      </div>

      {/* Airline */}
      <div className="mb-4 ">
        <h3 className="text-base font-roboto font-medium text-[#2F313C] mb-2">
          Select Airline
        </h3>
        <select
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
          className="w-full border bg-[#F4F4F4] font-inter text-sm text-[#333333] border-gray-300 rounded-lg px-3 py-2 focus:outline-none"
        >
          <option value="">Select Airline</option>
          <option value="Qatar">Qatar</option>
          <option value="Emirates">Emirates</option>
          <option value="Turkish">Turkish Airlines</option>
        </select>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-between mt-6 gap-3">
        <button
          onClick={handleReset}
          className="flex-1 px-6 py-2 border border-[#000000] rounded-[11px] font-manrope text-base text-myBlack"
        >
          Reset
        </button>
        <button
          onClick={handleApply}
          className="flex-1 px-6 py-2 bg-[#FF6600] hover:bg-[#FF6600]/95 text-white rounded-[11px] font-manrope text-base"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FlightFilter;
