import { useState } from "react";
import {
  CircleIcon,
  ClockIcon,
  CrossIcon,
  FavouriteIcon,
  GroupOfPeopleIcon,
  LocationIcon,
  RatingStarIcon,
  SmallLocationIcon,
  SuitcaseIcon,
  TimeIcon,
} from "../../../assets/icons/Icons";
import { FiChevronDown } from "react-icons/fi";
import DaisyDateInput from "../../vouchers/DaisyDateInput";
import Button from "../../Button";
import ToursDetailModal from "./ToursDetailModal";
import Modal from "../../Modal";
import SearchAvailableTours from "./SearchAvailableTours";
import SwapInputBox from "../../SwapInputBox";
import SearchAvailableTransfer from "./SearchAvailableTransfer";
import CustomTimePicker from "../../CustomTimePicker";
import CalendarInput from "../../CalendarInput";

const Transfers = ({
  isDisable,
  setIsDisable,
  searchAvailableTransfers,
  setSearchAvailableTransfers,
  selectedTransfers,
  setSelectedTransfers,
  transferForm,
  setTransferForm
}) => {



  // date modal open close state
  const [isTimePicker, setIsTimePicker] = useState(false);

  const [isTourDetailModal, setIsTourDetailModal] = useState(false);
  // console.log("selected toru from tours: ", selectedTour);

  // dropdown control
  const [openDropdown, setOpenDropdown] = useState(null);


  // Dates
  // const [transferForm, setTransferForm] = useState({
  //   fromLocation: "",
  //   toLocation: "",
  //   pickupDate: "",
  //   pickupTime: "",
  // });

  // check validity
  const isFormValid =
    transferForm.fromLocation.trim() !== "" &&
    transferForm.toLocation.trim() !== "" &&
    transferForm.pickupDate !== "" &&
    transferForm.pickupTime !== "";


  const handleDeleteTransfer = (e, transfer) => {
    e.stopPropagation();
    setSelectedTransfers((prev) => prev.filter((t) => t.id !== transfer.id));
  };


  return (
    <div>
      {searchAvailableTransfers && (
        <SearchAvailableTransfer
          selectedTransfers={selectedTransfers}
          setSelectedTransfers={setSelectedTransfers}
        />
      )}

      {!searchAvailableTransfers && (
        <div className="flex flex-col  ">
          {/* From city selection */}
          <div
            className={` ${isDisable && "opacity-30 pointer-events-none "
              } text-[#1D1D1D] relative mt-4 `}
            onClick={() =>
              setOpenDropdown(openDropdown === "from" ? null : "from")
            }
          >
            <SwapInputBox
              fromLocation={transferForm.fromLocation}
              toLocation={transferForm.toLocation}
              setFromLocation={(val) =>
                setTransferForm((prev) => ({ ...prev, fromLocation: val }))
              }
              setToLocation={(val) =>
                setTransferForm((prev) => ({ ...prev, toLocation: val }))
              }
            />

          </div>

          <div className={`${isDisable && "opacity-30 pointer-events-none "}`}>
            <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
              {/* --- Departure Date ----- */}
              <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
                <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]">
                  Pickup Date
                </li>

                <CalendarInput
                  value={transferForm.pickupDate}
                  onChange={(val) =>
                    setTransferForm((prev) => ({ ...prev, pickupDate: val }))
                  }
                  className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A]  rounded-[18px]  h-[51px] border-[#EEEEEE]  text-[#000000]"
                  calendarClassName="bg-white"
                  placeholder="Select Date"
                />

              </div>

              {/* --- Pickup Time ----- */}
              <div className="flex-1 text-sm">
                <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]">
                  Pickup Time
                </li>
                <div
                  className="flex items-center px-3 w-full h-[48px] text-[#1D1D1D] bg-white rounded-[12px] border border-gray-200 shadow-[0px_0px_13px_-3px_#0000001A] cursor-pointer"
                  onClick={() => setIsTimePicker(true)}
                >

                  <ClockIcon />

                  <p className="ml-4">{transferForm.pickupTime || "00 : 00"} </p>

                </div>
              </div>
            </div>
          </div>

          {/* button */}
          <div className={`   flex flex-wrap self-end mt-4 gap-[15px]  `}>
            <Button
              className="h-[45.06px] w-[250px] rounded-[9.34px] border border-[#000000] font-inter font-medium text-base bg-myWhite-color text-[#000000]"
              onClick={() => setIsDisable((prev) => !prev)}
            >
              {isDisable ? "Enable" : "Disable"}
            </Button>
            <Button
              className={`${!isFormValid
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
                } ${isDisable && "opacity-30 pointer-events-none "}
  float-right h-[45.06px] w-[250px] rounded-[9.34px]
  bg-[#007AFC] hover:bg-[#007AFC]/90 text-myWhite-color
  font-inter font-medium text-base`}
              disabled={!isFormValid} // <-- add this
              onClick={() => isFormValid && setSearchAvailableTransfers(true)}
            >
              Search Available Tours
            </Button>
          </div>

          {/* Selected Tours */}
          {selectedTransfers.length > 0 && (
            <div className="mt-[15px]">
              <h2 className="border-b border-[#EEEEEE] pb-2 font-Poppins font-medium text-2xl text-myBlack ">
                Selected Transfers
              </h2>
              <div className="flex flex-wrap gap-4 " >

                {selectedTransfers.map((transfer, index) => (
                  <div
                    key={transfer.id || index}
                    className="flex items-center mt-[10px] w-[333px] h-[124px] rounded-[12px] bg-myWhite-color shadow-[4px_8px_100px_0px_#1118270F]"
                  >
                    {/* image */}
                    <figure className="ml-0.5 mr-1.5 h-[100px] w-[150px] border border-[#EFEFEF] rounded-[8px]">
                      <img
                        src={transfer?.image}
                        className="rounded-lg w-full h-full object-contain"
                        alt={transfer?.name}
                      />
                    </figure>

                    {/* details */}
                    <div className="-mr-6 font-Poppins flex flex-col gap-1">
                      <h6 className="font-medium text-sm text-[#1D1D1D] ">
                        {transfer?.name}
                      </h6>

                      <div className="flex gap-2 text-nowrap">
                        <p className="flex items-center gap-1 text-xs text-[#032749]">
                          <GroupOfPeopleIcon /> {transfer?.passengers}
                        </p>
                        <p className="flex items-center gap-1 text-xs text-[#032749]">
                          <SuitcaseIcon /> {transfer?.suitcases}
                        </p>
                      </div>

                      <p className="flex items-center gap-1 text-xs text-[#032749]">
                        <CircleIcon /> {transfer?.type}
                      </p>

                      <h3 className="flex items-center text-base text-[#FF6726] underline">
                        ${transfer?.price}
                      </h3>
                    </div>

                    {/* fav + cross + select */}
                    <div className="flex-1 flex flex-col justify-between items-end h-full pr-2 py-4">
                      <button onClick={(e) => handleDeleteTransfer(e, transfer)}>
                        <CrossIcon />
                      </button>

                      <button className="w-[92px] h-[30px] border text-[#032749] border-[#032749] font-poppins text-[13px] font-bold rounded-[24px] hover:bg-[#032749] hover:text-myWhite-color transition-all ease-in cursor-pointer ">
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}


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
          {/* === clock ==== */}
          {isTimePicker && (
            <Modal
              isModalOpen={isTimePicker}
              onClose={() => setIsTimePicker(false)}
              className="rounded-[12.67px] w-0 bg-transparent shadow-none"
            >
              <CustomTimePicker
                pickupTime={transferForm.pickupTime}
                setPickupTime={(val) =>
                  setTransferForm((prev) => ({ ...prev, pickupTime: val }))
                }
              />

            </Modal>
          )}

          {/* -- main close container ---- */}
        </div>
      )}
    </div>
  );
};

export default Transfers;
