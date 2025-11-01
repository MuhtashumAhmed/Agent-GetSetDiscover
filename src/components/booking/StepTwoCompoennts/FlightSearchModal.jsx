import React, { useRef, useState } from "react";
import { FiChevronDown, FiCalendar } from "react-icons/fi";
import { PlaneLeftIcon, PlaneRightIcon } from "../../../assets/icons/Icons";
import CalendarInput from "../../CalendarInput";

const locations = [
  "Karachi, Pakistan",
  "Lahore, Pakistan",
  "Islamabad, Pakistan",
  "Istanbul, Turkey",
  "Ankara, Turkey",
  "Izmir, Turkey",
];

export default function FlightSearchModal() {
  const [fromLocation, setFromLocation] = useState("Karachi, Pakistan");
  const [toLocation, setToLocation] = useState("Istanbul, Turkey");
  // const [departureDate, setDepartureDate] = useState("2024-03-15");
  const [departureDate, setDepartureDate] = useState();

  // dropdown control
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSelect = (type, value) => {
    if (type === "from") setFromLocation(value);
    if (type === "to") setToLocation(value);
    setOpenDropdown(null);
  };
  const inputRef = useRef(null);

  const openPicker = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // Native date picker open
    }
  };

  return (
    <div className=" w-xs mx-auto p-2 sm:p-0 pb-2 space-y-6 bg-white  relative">
      {/* From Location */}
      <div
        className="relative  "
        onClick={() => setOpenDropdown(openDropdown === "from" ? null : "from")}
      >
        <div className="flex items-center gap-x-4 px-4 py-3 text-myBlack border border-gray-200 rounded-xl cursor-pointer group hover:shadow hover:border-gray-300">
          <span>
            <PlaneRightIcon />
          </span>
          <div className="flex items-center justify-between  w-full ">
            <div>
              <p className="text-xs text-gray-500">From (Location)</p>
              <p className="text-sm font-medium">{fromLocation}</p>
            </div>
            <FiChevronDown
              className={` text-gray-400 group-hover:text-gray-600 transition-transform ${
                openDropdown === "from" ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {openDropdown === "from" && (
          <div className=" absolute left-0 right-0 mt-1 text-myBlack bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
            {locations.map((loc) => (
              <div
                key={loc}
                onClick={() => handleSelect("from", loc)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  loc === fromLocation ? "bg-blue-50 text-blue-600" : ""
                }`}
              >
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* To Location */}
      <div
        className="relative"
        onClick={() => setOpenDropdown(openDropdown === "to" ? null : "to")}
      >
        <div className=" flex items-center text-myBlack gap-x-4 px-4 py-3 border border-gray-200 rounded-xl cursor-pointer group hover:shadow hover:border-gray-300">
          <span>
            <PlaneLeftIcon />
          </span>
          <div className="flex items-center justify-between  w-full ">
            <div>
              <p className="text-xs text-gray-500">To (Destination)</p>
              <p className="text-sm font-medium">{toLocation}</p>
            </div>
            <FiChevronDown
              className={` text-gray-400 group-hover:text-gray-600 transition-transform ${
                openDropdown === "from" ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {openDropdown === "to" && (
          <div className="custom-scrollbar absolute left-0 right-0 mt-1 text-myBlack bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
            {locations.map((loc) => (
              <div
                key={loc}
                onClick={() => handleSelect("to", loc)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  loc === toLocation ? "bg-blue-50 text-blue-600" : ""
                }`}
              >
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Departure Date */}
      <div>
        <label
          htmlFor="departureDate"
          className="block mb-1 text-xs font-medium text-gray-700"
        >
          Departure Date
        </label>
        {/* <div
                    className="relative cursor-pointer"
                    onClick={openPicker} // ✅ div click = open picker
                >
                    <input
                        ref={inputRef}
                        id="departureDate"
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="w-full px-4 py-3 pl-10 border text-myBlack border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />

                </div> */}
        <CalendarInput
          value={departureDate}
          onChange={setDepartureDate}
          className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A]  rounded-[18px]  h-[51px] border-[#EEEEEE]  text-[#000000]"
          calendarClassName="bg-white   "
          placeholder="Select Date"
        />
      </div>
    </div>
  );
}
