import { useState } from "react";
import { DropdownIcon, MapViewIcon } from "../../../assets/icons/Icons";
import DaisyDateInput from "../../vouchers/DaisyDateInput";
import HotelListView from "./HotelListView";
import HotelMapView from "./HotelMapView";
import CalendarInput from "../../CalendarInput";

const options = ["Istanbul ", "Istanbul  ", "Istanbul "];

const SearchAvailableHotels = ({ selectedHotel, setSelectedHotel }) => {
  const [activeTab, setActiveTab] = useState("ListView"); // default ListView
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [filterDate, setFilterDate] = useState("");


  return (
    <div>
      {/* listView and MapView buttons */}
      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={() => setActiveTab("ListView")}
          className={`px-[20.23px] py-1 h-[34.11px] font-manrope text-[15.7px] rounded-[20px] text-sm font-medium transition-all ${activeTab === "ListView"
              ? "bg-[#042749] text-white"
              : "border border-[#E6E6E6] bg-[#F5F5F5] text-[#838383]"
            }`}
        >
          List View
        </button>
        <button
          onClick={() => setActiveTab("MapView")}
          className={`flex items-center gap-2 px-[20.23px] py-1 h-[34.11px] font-manrope text-[15.7px] rounded-[20px] text-sm font-medium transition-all ${activeTab === "MapView"
              ? "bg-[#042749] text-white"
              : "border border-[#E6E6E6] bg-[#F5F5F5] text-[#838383]"
            }`}
        >
          <MapViewIcon />
          Map View
        </button>
      </div>

      {/* search bar */}
      <div className="mt-[15px]  flex flex-col sm:flex-row items-stretch sm:items-center bg-[#F5F5F5] rounded-[18px] px-3 py-3 sm:py-0 sm:h-[63px] flex-1 relative gap-3 sm:gap-0">
        {/* Search Input */}
        <div className="flex items-center flex-1">
          <img src="/search.png" alt="search" />
          <input
            type="text"
            placeholder="Search here."
            className="bg-transparent ml-[6px] outline-none flex-1 text-base font-Poppins text-[#868F9B]"
          />
        </div>

        {/* Calendar + Dropdown */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
          <CalendarInput
            value={filterDate}
            onChange={setFilterDate}
            className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A] sm:max-w-[150px] rounded-[18px] h-[51px] border-[#EEEEEE] text-[#000000] w-full sm:w-auto"
            calendarClassName="bg-white"
            placeholder="Select Date"
          />

          {/* dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex gap-3 items-center justify-center bg-myWhite-color px-3 py-2 rounded-xl text-sm font-manrope text-[#000000] min-w-[100px] h-[49px] w-full sm:w-auto"
            >
              {selectedOption || "Istanbul"}
              <DropdownIcon />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-myWhite-color rounded-xl shadow-lg z-10 w-[100px] text-sm font-manrope">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedOption(option);
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[11px] font-Poppins text-[#868F9B]"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>


      <div className="mt-4">
        {activeTab === "ListView" ? (
          <HotelListView
            selectedHotel={selectedHotel}
            setSelectedHotel={setSelectedHotel}
          />
        ) : (
          <HotelMapView />
        )}
      </div>
    </div>
  );
};

export default SearchAvailableHotels;
