import { useEffect, useState } from "react";
import {
  CalanderIcon,
  PlaneDownIcon,
  PlaneUpIcon,
  PlusIcon,
} from "../../../assets/icons/Icons";
import Modal from "../../Modal";
import FlightSearchModal from "./FlightSearchModal";
import Button from "../../Button";
import SelectedFlights from "./SelectedFlights";
import SearchAvailableFlights from "./SearchAvailableFlights";
import DisplaySelectedFlight from "./DisplaySelectedFlight";
import { AnimatePresence } from "framer-motion";

const Flights = ({
  isDisable,
  setIsDisable,
  setSearchAvailableFlights,
  searchAvailableFlights,
  tripData,
  selectedFlights,
  setSelectedFlights,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedTrips =
      JSON.parse(localStorage.getItem("CompleteTripData")) || [];
    setData(savedTrips);
    // console.log("📂 Flights me fetched tripData:", savedTrips);
  }, []);

  const [isAddFlightModal, setIsAddFlightModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  // const [selectedFlight, setSelectedFlight] = useState([]);

  const handleRowSelection = (id) => {
    setSelectedRow((prev) => (prev === id ? null : id)); // un-check if same row
  };

  //  Helper: format only day + month in English
  // Day only
  const getDay = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.getDate(); // 1-31
  };

  // Month name only
  const getMonthName = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return months[date.getMonth()];
  };

  //  Helper: add days to a date
  const addDays = (dateString, days) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    date.setDate(date.getDate() + days);
    return date.toISOString().split("T")[0]; // return YYYY-MM-DD
  };

  return (
    <>
      <div className="mt-[15px]">
        <div
          className={`${
            isDisable && " opacity-50 pointer-events-none"
          } flex flex-wrap  gap-3`}
        >
          {searchAvailableFlights && (
            <SearchAvailableFlights
              selectedFlights={selectedFlights}
              setSelectedFlights={setSelectedFlights}
            />
          )}

          {!searchAvailableFlights &&
            data?.map((trip, index) => {
              const {
                departureLocation,
                returnDestination,
                departureDate,
                returnDate,
                destinations = [],
                tripId,
              } = trip;

              let currentDate = departureDate; // start with departure date

              // Build path with incremental dates
              const flightPath = [
                {
                  from: departureLocation,
                  to: destinations[0]?.bottomData,
                  date: currentDate,
                },
                ...destinations.slice(0, -1).map((dest, i) => {
                  currentDate = addDays(currentDate, dest.value || 0);
                  return {
                    from: dest.bottomData,
                    to: destinations[i + 1]?.bottomData,
                    date: currentDate,
                  };
                }),
                {
                  from:
                    destinations[destinations.length - 1]?.bottomData ||
                    departureLocation,
                  to: returnDestination,
                  date: returnDate, // last leg uses returnDate
                },
              ].filter((step) => step.from && step.to);

              return (
                /* <div key={tripId || index} className="max-w-[510.86px] w-full flex flex-wrap  border border-[#EEEEEE] rounded-2xl p-3  "> */
                <div
                  key={tripId || index}
                  className=" w-full flex  flex-wrap gap-5 mb-4  border border-[#EEEEEE] rounded-2xl p-0.5 md:p-3  "
                >
                  {flightPath.map((step, i) => (
                    <div
                      key={i}
                      className="flex  gap-1  md:gap-[10px] items-center mb-2"
                    >
                      {/* checkbox */}
                      <input
                        type="checkbox"
                        checked={selectedRow === `${tripId}-${i}`}
                        onChange={() => handleRowSelection(`${tripId}-${i}`)}
                        className="checkbox checkbox-success text-white border-gray-300"
                      />

                      {/* From */}
                      <div className="flex items-center justify-center gap-1 sm:gap-[10px] border border-[#EEEEEE] rounded-[14px] w-[90px] md:w-[143.9px] h-[50px] py-[7px] px-3">
                        <PlaneUpIcon className="text-[#000000]" />
                        <div className="flex flex-col">
                          <h3 className="font-manrope uppercase font-bold text-sm text-[#111827]">
                            {step.from.value?.slice(0, 3) ||
                              step.from.country?.slice(0, 3)}
                          </h3>
                          <span className="font-manrope text-[10px] text-[#6B7280]">
                            {step.from.label || step.from.country}
                          </span>
                        </div>
                      </div>

                      {/* To */}
                      <div className="flex items-center justify-center gap-1 sm:gap-[10px] border border-[#EEEEEE] rounded-[14px] w-[90px] md:w-[143.9px] h-[50px] py-[7px] px-3">
                        <PlaneDownIcon />
                        <div className="flex flex-col">
                          <h3 className="font-manrope uppercase font-bold text-sm text-[#111827]">
                            {step.to.value?.slice(0, 3) ||
                              step.to.country?.slice(0, 3)}
                          </h3>
                          <span className="font-manrope text-[10px] text-[#6B7280]">
                            {step.to.label || step.to.country}
                          </span>
                        </div>
                      </div>

                      {/* Date (incremental) */}
                      <div className="flex items-center justify-center gap-1 sm:gap-[10px] border border-[#EEEEEE] rounded-[14px] w-[80px] md:w-[143.9px] h-[50px] py-[7px] px-3">
                        <CalanderIcon className="text-[#000000]  " />
                        <div className="flex flex-col items-center">
                          <h3 className="font-manrope font-bold text-sm text-[#111827] leading-none">
                            {getDay(step.date)}
                          </h3>
                          <span className="font-manrope font-bold text-sm text-[#111827]">
                            {getMonthName(step.date)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
        </div>

        {!searchAvailableFlights && (
          <div className="flex flex-col">
            {/* Add Flight Button */}
            <button
              className={`${
                isDisable && "opacity-50 pointer-events-none"
              } self-end cursor-pointer flex items-center justify-center border border-dashed border-[#787878] text-[#787878] font-manrope text-sm h-[35px] w-[126px] rounded-[100px]`}
              onClick={() => setIsAddFlightModal(true)}
            >
              Add Flight
              <PlusIcon className="ml-1" />
            </button>

            {/* selected flights */}
            {selectedFlights.length > 0 && (
              <DisplaySelectedFlight
                selectedFlights={selectedFlights}
                setSelectedFlights={setSelectedFlights}
              />
            )}

            {/* Enable/Disable & Search Flights Buttons */}
            <div className={`   flex flex-wrap self-end mt-10 gap-[15px]  `}>
              <Button
                className="h-[45.06px] w-[250px] rounded-[9.34px] border border-[#000000] font-inter font-medium text-base bg-myWhite-color text-[#000000]"
                onClick={() => setIsDisable((prev) => !prev)}
              >
                {isDisable ? "Enable" : "Disable"}
              </Button>

              {!isDisable && (
                <Button
                  className={` ${
                    !selectedRow && "opacity-30 pointer-events-none "
                  } h-[45.06px] w-[250px] rounded-[9.34px] bg-[#007AFC] hover:bg-[#007AFC]/90 cursor-pointer text-myWhite-color font-inter font-medium text-base`}
                  onClick={() => setSearchAvailableFlights(true)}
                >
                  Search Available Fights
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {isAddFlightModal && (
        <Modal
          isModalOpen={isAddFlightModal}
          onClose={() => setIsAddFlightModal(false)}
          showCloseButton={false}
          className="rounded-[20px]"
        >
          <FlightSearchModal />
        </Modal>
      )}
    </>
  );
};

export default Flights;
