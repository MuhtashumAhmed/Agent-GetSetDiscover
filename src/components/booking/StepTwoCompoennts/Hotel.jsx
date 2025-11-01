import React, { useState } from "react";
import {
  CrossIcon,
  FavouriteIcon,
  LocationIcon,
  RatingStarIcon,
  SmallLocationIcon,
} from "../../../assets/icons/Icons";
import { FiChevronDown } from "react-icons/fi";
import DaisyDateInput from "../../vouchers/DaisyDateInput";
import Button from "../../Button";
import Modal from "../../Modal";
import HotelDetailModal from "./HotelDetailModal";
import SearchAvailableHotels from "./SearchAvailableHotels";
import CalendarInput from "../../CalendarInput";

const locations = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Istanbul",
  "Ankara",
  "Izmir",
];

const Hotel = ({
  searchAvailableHotels,
  setSearchAvailableHotels,
  selectedHotel,
  setSelectedHotel,
}) => {
  const [toLocation, setToLocation] = useState("Istanbul, Turkey");

  // Dates
  // const [fromLocation, setFromLocation] = useState("Karachi, Pakistan");
  const [fromLocation, setFromLocation] = useState("");
  const [chechInDate, setChechInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  const [isHotelDetailModal, setIsHotelDetailModal] = useState(false);
  // const [selectedHotel, setSelectedHotel] = useState([])
  // const [selectedHotel, setSelectedHotel] = useState(null)
  // dropdown control
  // console.log(selectedHotel);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSelect = (type, value) => {
    if (type === "from") setFromLocation(value);
    if (type === "to") setToLocation(value);
    setOpenDropdown(null);
  };

  // delete selected flight on cross click
  const handleDelete = (e, hotel) => {
    e.stopPropagation();
    setSelectedHotel((prev) => prev.filter((h) => h.id !== hotel.id));
  };


  // Check if all required fields are filled then enable btn else not
  const isFormValid = fromLocation && chechInDate && checkOutDate;

  return (
    <div>
      {searchAvailableHotels && (
        <SearchAvailableHotels
          selectedHotel={selectedHotel}
          setSelectedHotel={setSelectedHotel}
        />
      )}

      {!searchAvailableHotels && (
        <div className="flex flex-col  ">
          {/* From city selection */}
          <div
            className="relative mt-4 "
            onClick={() =>
              setOpenDropdown(openDropdown === "from" ? null : "from")
            }
          >
            <div className="flex items-center gap-x-4 px-4 py-3 border border-gray-200 rounded-xl cursor-pointer group hover:shadow hover:border-gray-300">
              <span>
                <LocationIcon />
              </span>
              <div className="flex items-center justify-between  w-full ">
                <div>
                  <p className="text-xs text-gray-500">Select Clity</p>
                  <p className="text-sm font-medium text-[#000000] ">
                    {fromLocation}
                  </p>
                </div>
                <FiChevronDown
                  className={` text-gray-400  group-hover:text-gray-600 transition-transform ${openDropdown === "from" ? "rotate-180" : ""
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
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${loc === fromLocation ? "bg-blue-50 text-blue-600" : ""
                      }`}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
              {/* --- Departure Date ----- */}
              <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
                <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]">
                  Check-In Date
                </li>
                {/* <DaisyDateInput
                    className="shadow-[0px_0px_13px_-3px_#0000001A]"
                    value={chechInDate}
                    onChange={setChechInDate}
                  /> */}
                <CalendarInput
                  value={chechInDate}
                  onChange={setChechInDate}
                  className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A]  h-[51px] border-[#EEEEEE]  text-[#000000]"
                  calendarClassName="bg-white   "
                  placeholder="Select Date"
                />
              </div>

              {/* --- Return Date ----- */}
              <div className="flex-1 text-sm">
                <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]">
                  Check-Out Date
                </li>
                {/* <DaisyDateInput
                  className="shadow-[0px_0px_13px_-3px_#0000001A]"
                  value={checkOutDate}
                  onChange={setCheckOutDate}
                /> */}
                <CalendarInput
                  value={checkOutDate}
                  onChange={setCheckOutDate}
                  className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A]  h-[51px] border-[#EEEEEE]  text-[#000000]"
                  calendarClassName="bg-white   "
                  placeholder="Select Date"
                />
              </div>
            </div>
          </div>

          {/* button */}
          <div className="w-full mt-4 ">
            <Button
              className={` float-right h-[45.06px] w-[250px] rounded-[9.34px] bg-[#007AFC] hover:bg-[#007AFC]/90 cursor-pointer text-myWhite-color font-inter font-medium text-base ${!isFormValid
                ? "opacity-50 cursor-not-allowed hover:bg-[#007AFC]"
                : ""
                }`}
              onClick={() => isFormValid && setSearchAvailableHotels(true)}
              disabled={!isFormValid}
            >
              Search Available Hotels
            </Button>
          </div>

          {/* selected hotel */}
          {/* selectedHotel.length > 0 && ( */}
          {selectedHotel.length > 0 && (
            <div>
              <h2 className="border-b border-[#EEEEEE] pb-2 font-Poppins font-medium text-2xl text-myBlack">
                Selected Hotels
              </h2>
              <div className="flex gap-4 flex-wrap" >

                {selectedHotel.map((hotel, index) => (
                  <div
                    key={hotel.id || index}
                    className="flex gap-3 items-center mt-[10px] w-[333px] h-[124px] rounded-[12px] bg-myWhite-color shadow-[4px_8px_100px_0px_#1118270F]"
                  >
                    {/* image */}
                    <figure className="h-[100px] w-[100px]">
                      <img
                        src={hotel?.image}
                        className="rounded-lg h-full w-full object-cover"
                        alt={hotel?.name}
                      />
                    </figure>

                    {/* hotel details */}
                    <div className="font-Poppins flex flex-col gap-1">
                      <h6 className="font-medium text-sm text-[#1D1D1D]">
                        {hotel?.name}
                      </h6>
                      <p className="flex items-center gap-1 text-xs text-[#032749]">
                        <SmallLocationIcon /> {hotel?.location}
                      </p>
                      <span className="flex items-center gap-1 text-xs text-[#1D1D1D]">
                        <RatingStarIcon /> {hotel?.rating}
                      </span>
                      <h3 className="flex items-center text-base text-[#FF6726]">
                        ${hotel?.price}
                        <span className="text-[#838383] text-sm">/person</span>
                      </h3>
                    </div>

                    {/* fav and cross icon */}
                    <div className="flex-1 flex gap-x-2 justify-end h-full p-4">
                      <FavouriteIcon />
                      <button
                        className="flex"
                        onClick={(e) => handleDelete(e, hotel)}
                      >
                        <CrossIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {isHotelDetailModal && (
            <Modal
              isModalOpen={isHotelDetailModal}
              onClose={() => setIsHotelDetailModal(false)}
              className="rounded-[12.67px] max-w-[691.90px] w-full  "
            >
              <HotelDetailModal
                selectedHotel={selectedHotel}
                setSelectedHotel={setSelectedHotel}
              />
            </Modal>
          )}

          {/* -- main close container ---- */}
        </div>
      )}
    </div>
  );
};

export default Hotel;
