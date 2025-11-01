import { useState } from "react";
import { DropdownIcon, MapViewIcon } from "../../../assets/icons/Icons";
import DaisyDateInput from "../../vouchers/DaisyDateInput";
import HotelListView from "./HotelListView";
import HotelMapView from "./HotelMapView";
import ToursListView from "./ToursListView";
import TransferList from "./TransferList";
import CalendarInput from "../../CalendarInput";

const options = ["Istanbul ", "Istanbul  ", "Istanbul "];

const SearchAvailableTransfer = ({
  selectedTransfers,
  setSelectedTransfers,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [filterDate, setFilterDate] = useState();

  return (
    <div>
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
        {/* <ToursListView selectedTour={selectedTour} setSelectedTour={setSelectedTour} /> */}
        <TransferList
          selectedTransfers={selectedTransfers}
          setSelectedTransfers={setSelectedTransfers}
        />
      </div>
    </div>
  );
};

export default SearchAvailableTransfer;
