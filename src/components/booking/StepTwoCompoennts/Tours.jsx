import { FiChevronDown } from "react-icons/fi";
import {
  CrossIcon,
  FavouriteIcon,
  LocationIcon,
  RatingStarIcon,
  SmallLocationIcon,
} from "../../../assets/icons/Icons";
import { useState } from "react";
import SearchAvailableHotels from "./SearchAvailableHotels";
import DaisyDateInput from "../../vouchers/DaisyDateInput";
import Button from "../../Button";
import HotelDetailModal from "./HotelDetailModal";
import Modal from "../../Modal";
import SearchAvailableTours from "./SearchAvailableTours";
import ToursDetailModal from "./ToursDetailModal";
import CalendarInput from "../../CalendarInput";

const locations = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Istanbul",
  "Ankara",
  "Izmir",
];

const Tours = ({
  isDisable,
  setIsDisable,
  searchAvailableTours,
  setSearchAvailableTours,
  selectedTour,
  setSelectedTour,
}) => {
  const [toLocation, setToLocation] = useState("Istanbul, Turkey");
  const [isSelectedTour, setIsSelectedTour] = useState(false);

  // Dates
  // const [fromLocation, setFromLocation] = useState("Karachi, Pakistan");
  const [fromLocation, setFromLocation] = useState("");
  const [chechInDate, setChechInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();

  const [isTourDetailModal, setIsTourDetailModal] = useState(false);
  // console.log("selected toru from tours: ", selectedTour);

  // dropdown control
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleSelect = (type, value) => {
    if (type === "from") setFromLocation(value);
    if (type === "to") setToLocation(value);
    setOpenDropdown(null);
  };

  const handleDeleteTour = (e, tour) => {
    e.stopPropagation();
    setSelectedTour((prevTours) => prevTours.filter((t) => t.id !== tour.id));
  };


  // Check if all required fields are filled then enable btn else not
  const isFormValid = fromLocation && chechInDate && checkOutDate;
  return (
    <div>
      {searchAvailableTours && (
        <SearchAvailableTours
          selectedTour={selectedTour}
          setSelectedTour={setSelectedTour}
        />
      )}

      {!searchAvailableTours && (
        <div className="flex flex-col  ">
          {/* From city selection */}

          <div
            className={` ${isDisable && "opacity-30 pointer-events-none "
              } relative mt-4 `}
            onClick={() =>
              setOpenDropdown(openDropdown === "from" ? null : "from")
            }
          >
            <div className="flex items-center text-myBlack gap-x-4 px-4 py-3 border border-gray-200 rounded-xl cursor-pointer group hover:shadow hover:border-gray-300">
              <span>
                <LocationIcon />
              </span>
              <div className="flex items-center justify-between  w-full ">
                <div>
                  <p className="text-xs text-gray-500">Select Clity</p>
                  <p className="text-sm font-medium">{fromLocation}</p>
                </div>
                <FiChevronDown
                  className={` text-gray-400 group-hover:text-gray-600 transition-transform ${openDropdown === "from" ? "rotate-180" : ""
                    }`}
                />
              </div>
            </div>

            {openDropdown === "from" && (
              <div className=" absolute left-0 right-0 mt-1 text-myBlack/90 bg-white border border-gray-200 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
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

          <div className={`${isDisable && "opacity-30 pointer-events-none "}`}>
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
                  className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A]  mr-2 rounded-[18px]  h-[51px] border-[#EEEEEE]  text-[#000000]"
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
                  className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A]  mr-2 rounded-[18px]  h-[51px] border-[#EEEEEE]  text-[#000000]"
                  calendarClassName="bg-white   "
                  placeholder="Select Date"
                />
              </div>
            </div>
          </div>

          {/* Selected Tours */}

          {selectedTour.length > 0 && (

            <div className="mt-[15px]  ">
              <h2 className="border-b border-[#EEEEEE] pb-2 font-Poppins font-medium text-2xl text-myBlack">
                Selected Tours
              </h2>
              <div className="flex gap-4 flex-wrap" >
                {selectedTour.map((tour, index) => (
                  <div
                    key={tour.id || index}
                    className="flex gap-3 items-center mt-[10px] w-[333px] h-[124px] rounded-[12px] bg-myWhite-color shadow-[4px_8px_100px_0px_#1118270F]"
                  >
                    {/* image */}
                    <figure className="h-[100px] w-[100px]">
                      <img
                        src={tour?.image || "/tour.png"}
                        className="rounded-lg h-full object-cover"
                        alt={tour?.name}
                      />
                    </figure>

                    {/* details */}
                    <div className="font-Poppins flex flex-col gap-1">
                      <h6 className="font-medium text-sm text-[#1D1D1D]">
                        {tour?.name || "Hanoitest Dubai"}
                      </h6>
                      <p className="flex items-center gap-1 text-xs text-[#032749]">
                        <SmallLocationIcon />
                        {tour?.location || "Hanoi, Vietnam"}
                      </p>
                      <span className="flex items-center gap-1 text-xs text-[#1D1D1D]">
                        <RatingStarIcon /> {tour?.rating || 4.7}
                      </span>
                      <h3 className="flex items-center text-base text-[#FF6726]">
                        ${tour?.price || 120}
                        <span className="text-[#838383] text-sm">/person</span>
                      </h3>
                    </div>

                    {/* fav and cross */}
                    <div className="flex-1 flex gap-x-2 justify-end h-full p-4">
                      <FavouriteIcon />
                      <button
                        className="flex"
                        onClick={(e) => handleDeleteTour(e, tour)}
                      >
                        <CrossIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* button */}
          <div className={`   flex flex-wrap self-end mt-4 gap-[15px]  `}>
            <Button
              className="h-[45.06px] w-[250px] rounded-[9.34px] border border-[#000000] font-inter font-medium text-base bg-myWhite-color text-[#000000]"
              onClick={() => setIsDisable((prev) => !prev)}
            >
              {isDisable ? "Enable" : "Disable"}
            </Button>
            <Button
              className={` ${!isFormValid
                ? "opacity-50 cursor-not-allowed hover:bg-[#007AFC]"
                : "cursor-pointer"
                } ${isDisable && "opacity-30 pointer-events-none "
                } float-right h-[45.06px] w-[250px] rounded-[9.34px] bg-[#007AFC] hover:bg-[#007AFC]/90  text-myWhite-color font-inter font-medium text-base`}
              onClick={() => isFormValid && setSearchAvailableTours(true)}
            >
              Search Available Tours
            </Button>
          </div>

          {isTourDetailModal && (
            <Modal
              isModalOpen={isTourDetailModal}
              onClose={() => setIsTourDetailModal(false)}
              className="rounded-[12.67px] max-w-[691.90px] w-full  "
            >
              <ToursDetailModal />
              {/* tour modal */}
            </Modal>
          )}

          {/* -- main close container ---- */}
        </div>
      )}
    </div>
  );
};

export default Tours;
