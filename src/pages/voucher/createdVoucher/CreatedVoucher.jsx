import { useState } from "react";
import {
  LocationIcon,
  PlaneDownIcon,
  PlaneLeftIcon,
  PlaneRightIcon,
  PlaneUpIcon,
} from "../../../assets/icons/Icons";
import CustomDropDownSelect from "../../../components/CustomDropDownSelect";
import Counter from "../../../components/vouchers/Counter";
import CountrySelect from "../../../components/vouchers/CountrySelect";
import DaisyDateInput from "../../../components/vouchers/DaisyDateInput";
import DropDown from "../../../components/vouchers/DropDown";
import Button from "../../../components/Button";
import CustomSelect from "../../../components/vouchers/CustomSelect";
import InputWithIcon from "../../../components/vouchers/InputWithIcon";
import DateInput from "../../../components/vouchers/DateInput";
import { FaRegCalendarAlt } from "react-icons/fa";
import FileUploadButton from "../../../components/vouchers/FileUploadButton";
import CalendarInput from "../../../components/CalendarInput";
// == table filter options
const tableFilterOptions = [
  { value: "value7", label: "last 7 days" },
  { value: "value14", label: "last 14 days" },
  { value: "value21", label: "last 21 days" },
  { value: "moth", label: "last month" },
];

const cityOptions = [
  { value: "lahore, Pakistan", label: "Lahore, Pakistan" },
  { value: "karachi, Pakistan", label: "Karachi, Pakistan" },
  { value: "dubai, UAE", label: "Dubai, UAE" },
  { value: "london, UK", label: "London, UK" },
  { value: "new york, USA", label: "New York, USA" },
];

const CreatedVoucher = () => {
  // Har counter ke liye state banayi
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const [country, setCountry] = useState("");
  const [type, settype] = useState("");

  // total members
  const [totalMemebers, setTotalMembers] = useState(1);
  const [membersInput, setMembersInput] = useState(""); // Add this state for the input value

  const handleMembersInputChange = (e) => {
    const value = e.target.value;
    setMembersInput(value);

    // Clear error when user types
    if (inputError) {
      // setInputError("");
    }
  };
  // Create a handler for the Add button
  const handleAddMembers = () => {
    // Convert input value to a number
    const newTotal = parseInt(membersInput) || 1;

    // Set a minimum of 1 member
    if (newTotal >= 1) {
      setTotalMembers(newTotal);
    }

    // Optional: Clear the input after adding
    setMembersInput("");
  };

  // dates
  const [departureDate, setDepartureDate] = useState();
  const [returnDate, setReturnDate] = useState();
  const [flightDepartureDate, setFlightDepartureDate] = useState();
  const [hotelCheckInDate, setHotelCheckInDate] = useState();
  const [hotelCheckOutDate, setHotelCheckOutDate] = useState();
  const [tourDate, setTourDate] = useState();

  // add country city
  const [destinationCountry, setDestinationCountry] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!destinationCountry.trim() || !destinationCity.trim()) {
      setError("Both Country and City are required.");
      return;
    }
    setError("");

    const newDestination = { destinationCountry, destinationCity };
    setDestinations([...destinations, newDestination]);

    // reset input fields
    setDestinationCountry("");
    setDestinationCity("");
  };

  const handleSelectTourDetail = () => { };

  return (
    <div className=" flex  flex-col gap-[30px] bg-myWhite-color rounded-[25px] py-5 px-3 sm:px-6 ">
      <div>
        <h1 className="text-[#000000] font-Poppins text-[24px] font-medium">
          Create Voucher
        </h1>
        <p className="font-inter text-xs text-[#58595B]">
          Select your travel dates to plan your journey and lock in your
          schedule.
        </p>

        <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
          {/* --- Departure Date ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]">
              Departure Date
            </li>
            {/* <DaisyDateInput
              value={departureDate}
              onChange={setDepartureDate}
              className="shadow-[0px_0px_13px_-3px_#0000001A]"
            /> */}
            <CalendarInput
              value={departureDate}
              onChange={setDepartureDate}
              className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A] h-[51px] border-[#EEEEEE]  text-[#000000]"
              calendarClassName="bg-white  "
              placeholder="Select Date"
            />
          </div>

          {/* --- Return Date ----- */}
          <div className="flex-1 text-sm">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]">
              Return Date
            </li>
            {/* <DaisyDateInput
              value={returnDate}
              onChange={setReturnDate}
              className="shadow-[0px_0px_13px_-3px_#0000001A]"
            /> */}
            <CalendarInput
              value={returnDate}
              onChange={setReturnDate}
              className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A] h-[51px] border-[#EEEEEE]  text-[#000000]"
              calendarClassName="bg-white  "
              placeholder="Select Date"
            />
          </div>
        </div>
      </div>

      {/* -- Departure and Arrival Place --- */}
      <div className=" ">
        <h1 className="text-[#000000] font-Poppins text-[24px] font-medium ">
          Departure and Arrival Place
        </h1>
        <p className="font-inter text-xs text-[#58595B] ">
          Follow these simple steps to design your dream journey.
        </p>

        <div className=" flex flex-wrap items-center mt-[20px] gap-[30px] ">
          {/* --- Departure Date  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              From (Departure Location)
            </li>
            <div className="flex gap-[22px] items-center  h-[74px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] ">
              <span>
                <PlaneUpIcon className="text-myBlack" />{" "}
              </span>
              <CountrySelect className="bg-gray-100 border-[#EEEEEE]   h-[45px]  " />
            </div>
          </div>

          {/* --- Return Date  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              To (Return Destination)
            </li>
            <div className="flex gap-[22px] items-center  h-[74px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] ">
              <span>
                <PlaneDownIcon />{" "}
              </span>
              <CountrySelect className="bg-gray-100 border-[#EEEEEE]  h-[45px]  " />
            </div>
          </div>
        </div>
      </div>

      {/* -- Add Members--- */}
      <div className=" ">
        <h1 className="text-[#000000] font-Poppins text-[24px] font-medium ">
          Add Members
        </h1>
        <p className="font-inter text-xs text-[#58595B] ">
          Follow these simple steps to design your dream journey.
        </p>

        <div className=" flex flex-wrap items-center mt-[20px] gap-2 sm:gap-[30px] ">
          {/* --- Departure Date  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <Counter
              label="Adults"
              text="Ages 13 or above"
              value={adults}
              onChange={setAdults}
            />
          </div>

          {/* --- Return Date  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <Counter
              label="Children"
              text="Ages 2-12"
              value={children}
              onChange={setChildren}
            />
          </div>

          {/* --- Return Date  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <Counter
              label="Infants"
              text="Under 2"
              value={infants}
              onChange={setInfants}
            />
          </div>
          {/* --- Return Date  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <Counter
              label="Pets"
              text="Bringing a service animal?"
              value={pets}
              onChange={setPets}
            />
          </div>
        </div>
        {/* -- Select Group Type --- */}
        <div className="mt-6 pb-1 pt-[12px] border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] ">
          <p className=" font-manrope text-sm text-[#032749] ml-4 -mb-0.5">
            Select Group Type
          </p>
          <div className="px-3.5 mt-1 " >

            <DropDown
              // label="Select Group Type"
              placeholder="e.g. Males Only"
              value={country}
              onChange={setCountry}
              options={[
                { value: "family", label: "Family" },
                { value: "males", label: "Males Only" },
                { value: "females", label: "Females Only" },
                { value: "mixed", label: "Mixed Group" },
              ]}
              classNames={{
                wrapper: "",
                label: "text-blue-600",
                // select:
                // "border-blue-400 bg-gray-50  hover:border-blue-500 focus:ring-blue-500",
                option: "text-gray-700",
              }}
            />
          </div>
        </div>
      </div>
      {/* ---- Add Destination--- */}
      <div>
        <h1 className="text-[#000000] font-Poppins text-[24px] font-medium">
          Add Destinations
        </h1>
        <p className="font-inter text-xs text-[#58595B]">
          Follow these simple steps to design your dream journey.
        </p>

        <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
          {/* Country */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]">
              Country
            </li>
            <input
              type="text"
              value={destinationCountry}
              onChange={(e) => setDestinationCountry(e.target.value)}
              className="h-[60px] capitalize bg-[#F5F5F5] py-1 text-gray-700 px-[21px] w-full rounded-[16px] border-none outline-0"
              placeholder="Türkiye"
            />
          </div>

          {/* City */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]">
              City
            </li>
            <input
              type="text"
              value={destinationCity}
              onChange={(e) => setDestinationCity(e.target.value)}
              className="h-[60px] capitalize bg-[#F5F5F5] py-1 text-gray-700 px-[21px] w-full rounded-[16px] border-none outline-0"
              placeholder="Istanbul"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-xs mt-2 ml-2 font-medium">{error}</p>
        )}
        {/* Add button */}
        <button
          onClick={handleAdd}
          className="my-4 w-[132px] h-[34px] rounded-[5px] text-base font-manrope bg-primary-background hover:bg-primary-background/85 cursor-pointer text-white"
        >
          Add
        </button>

        {/* --- Added Destinations --- */}
        <div className="custom-scrollbar  w-full flex flex-wrap gap-2 max-h-24 overflow-auto ">
          {destinations?.map((d, index) => (
            <div
              key={index}
              className=" capitalize bg-gray-100 w-max  rounded-2xl px-4 py-2 text-sm text-[#787878] font-manrope"
            >
              {index + 1} - {d.destinationCountry}, {d.destinationCity}
            </div>
          ))}
        </div>
      </div>
      {/* ---- Add Flight Details --- */}
      <div>
        <h1 className="text-[#000000] font-Poppins text-[24px] font-medium">
          Add Flight Details
        </h1>
        <p className="font-inter text-xs text-[#58595B]">
          Follow these simple steps to create the voucher
        </p>
        {/* Flight Detail => Row - 01 */}
        <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
          {/* Country */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              From (Departure Location)
            </li>
            <div className="flex gap-[22px] items-center  h-[55px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] ">
              <span>
                <PlaneRightIcon />{" "}
              </span>
              <CountrySelect className="bg-gray-100 border-[#EEEEEE]  h-[45px]  " />
            </div>
          </div>

          {/* --- Return Date  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              To (Return Destination)
            </li>
            <div className="flex gap-[22px] items-center  h-[55px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] ">
              <span>
                <PlaneLeftIcon />{" "}
              </span>
              <CountrySelect className="bg-gray-100 border-[#EEEEEE]  h-[45px]  " />
            </div>
          </div>

          {/* --- Flight Departure Date  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              Departure Date
            </li>
            {/* <DaisyDateInput className="shadow-[0px_0px_13px_-3px_#0000001A]" /> */}
            <CalendarInput
              value={flightDepartureDate}
              onChange={setFlightDepartureDate}
              className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A] h-[51px] border-[#EEEEEE]  text-[#000000]"
              calendarClassName="bg-white  "
              placeholder="Select Date"
            />
          </div>
        </div>
        {/* ---- Add Flight Details  => Row - 02 --- */}
        <div>
          <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
            {/* Country */}
            <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
              <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] text-nowrap ">
                From (Departure Location)
              </li>

              <input
                type="text"
                className=" h-[55px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] capitalize bg-myWhite-color w-full border-none outline-0 text-gray-700 "
                placeholder="Qatar Airline"
              />
            </div>
            {/* Flight Number */}
            <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
              <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]  text-nowrap ">
                Flight Number
              </li>

              <input
                type="text"
                className="h-[55px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] capitalize bg-myWhite-color w-full border-none outline-0 text-gray-700 "
                placeholder="AA0000"
              />
            </div>
            {/* type */}
            <div className="w-full flex-1 text-sm    ">
              <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
                Type
              </li>
              <div className="px-2  w-full   py-[8px]  border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] text-gray-700 ">
                <DropDown
                  placeholder="e.g. Economy "
                  value={type}
                  onChange={settype}
                  options={[
                    { value: "economyClass", label: "Economy Class" },
                    { value: "businessClass", label: "Business Class" },
                    { value: "firstClass", label: "First Class" },
                  ]}
                  classNames={{
                    wrapper: "",
                    label: "text-blue-600  ",
                    // select:
                    // "border-blue-400 bg-gray-50  hover:border-blue-500 focus:ring-blue-500",
                    option: "text-gray-700",
                  }}
                />
              </div>
            </div>
          </div>
          <button className="my-4 w-[132px] h-[34px] rounded-[5px] text-base font-manrope bg-primary-background hover:bg-primary-background/85 cursor-pointer text-white">
            Add
          </button>
        </div>
      </div>

      {/* === Select Hotel Details ===== */}
      <div>
        <h1 className="text-[#000000] font-Poppins text-[24px] font-medium">
          Select Hotel Details
        </h1>
        <p className="font-inter text-xs text-[#58595B]">
          Follow these simple steps to create the voucher
        </p>
        {/* Flight Detail => Row - 01 */}
        <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
          {/* seelct location */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              From (Departure Location)
            </li>
            <div className="flex gap-[22px] items-center  h-[55px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] ">
              <span>
                <LocationIcon />{" "}
              </span>
              <CustomSelect options={cityOptions} placeholder="Select City" />
            </div>
          </div>

          {/* --- hotel name  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              Hotel Name
            </li>

            <input
              type="text"
              className="h-[55px] py-[13px] px-6 border border-[#EEEEEE] text-gray-700 rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] capitalize bg-myWhite-color w-full border-none outline-0"
              placeholder="Burj Khalifa"
            />
          </div>

          {/* --- Hotel Check In Date  ----- */}
          <div className="w-full flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              Check In Date
            </li>
            {/* <DaisyDateInput className="shadow-[0px_0px_13px_-3px_#0000001A]" /> */}
            <CalendarInput
              value={hotelCheckInDate}
              onChange={setHotelCheckInDate}
              className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A] h-[51px] border-[#EEEEEE]  text-[#000000]"
              calendarClassName="bg-white  "
              placeholder="Select Date"
            />
          </div>
        </div>
        {/* ---- Add Flight Details  => Row - 02 --- */}
        <div>
          <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
            {/* Country */}
            <div className="w-full flex-1 text-sm    ">
              <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] text-nowrap ">
                Check Out Date
              </li>

              {/* <DaisyDateInput className="shadow-[0px_0px_13px_-3px_#0000001A] max-w-[366px] " /> */}
              <CalendarInput
                value={hotelCheckOutDate}
                onChange={setHotelCheckOutDate}
                className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A]  h-[51px] border-[#EEEEEE]  text-[#000000]"
                calendarClassName="bg-white   "
                placeholder="Select Date"
              />
            </div>
          </div>
          <button className="my-4 w-[132px] h-[34px] rounded-[5px] text-base font-manrope bg-primary-background hover:bg-primary-background/85 cursor-pointer text-white">
            Add
          </button>
        </div>
      </div>

      {/* ==== Select Tours Detail===== */}
      <div className="" >
        <h1 className="text-[#000000] font-Poppins text-[24px] font-medium">
          Select Tours Details
        </h1>
        <p className="font-inter text-xs text-[#58595B]">
          Follow these simple steps to create the voucher
        </p>
        {/* Flight Detail => Row - 01 */}
        <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
          {/* seelct location */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              Location
            </li>
            <div className="flex gap-[22px] items-center  h-[55px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] ">
              <span>
                <LocationIcon />{" "}
              </span>
              <CustomSelect options={cityOptions} placeholder="Select City" />
            </div>
          </div>

          {/* --- Tours name  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              Tours Name
            </li>

            <input
              type="text"
              className="h-[55px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A] capitalize bg-myWhite-color w-full border-none outline-0 text-gray-700 "
              placeholder="Burj Khalifa"
            />
          </div>

          {/* --- Tour Date  ----- */}
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm    ">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] ">
              Date
            </li>
            {/* <DaisyDateInput className="shadow-[0px_0px_13px_-3px_#0000001A]" /> */}
            <CalendarInput
              value={tourDate}
              onChange={setTourDate}
              className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A]  h-[51px] border-[#EEEEEE]  text-[#000000]"
              calendarClassName="bg-white   "
              placeholder="Select Date"
            />
          </div>
        </div>
        {/* ---- Members  => Row - 02 --- */}
        <div>
          <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
            {/* Country */}
            <div className="w-full flex-1 text-sm">
              <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000] text-nowrap">
                Members
              </li>
              <input
                type="number"
                min="1"
                className="max-w-[366px] h-[55px] py-[13px] px-6 border text-gray-700 border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A]  bg-myWhite-color w-full border-none outline-0"
                placeholder="Enter a number"
                value={membersInput}
                onChange={handleMembersInputChange}
              />
            </div>
          </div>
          <button
            className="my-4 w-[132px] h-[34px] rounded-[5px] text-base font-manrope bg-primary-background hover:bg-primary-background/85 cursor-pointer text-white"
            onClick={handleAddMembers} // Use the new handler
          >
            Add
          </button>
        </div>
      </div>

      {/* ====== Optional Documents ========= */}
      <div className=" flex flex-col h-auto ">
        <h1 className="text-[#000000] font-Poppins text-[24px] font-medium">
          Documents (Optional)
        </h1>
        <p className="font-inter text-xs text-[#58595B]">
          Follow these simple steps to create the voucher
        </p>
        {/* Flight Detail => Row - 01 */}
        <div className="  mt-[20px] gap-[30px]">
          <div className="flex flex-wrap  items-center gap-4">
            {Array.from({ length: totalMemebers }, (_, index) => {
              const travelerNumber = index + 1;
              const ordinalSuffix =
                travelerNumber === 1
                  ? "st"
                  : travelerNumber === 2
                    ? "nd"
                    : travelerNumber === 3
                      ? "rd"
                      : "th";

              return (
                <div
                  key={index}
                  // className="border  border-[#EEEEEE] flex-1 min-w-[519px] rounded-[20px] shadow-sm p-4"
                  className="border  border-[#EEEEEE] flex-1 min-w-[319px]  rounded-[20px] shadow-sm p-4"
                >
                  <h2 className="flex items-center font-manrope text-myBlack text-[20px] font-bold">
                    <span className="bg-[#FF6600] flex items-center justify-center  font-manrope text-sm text-myWhite-color h-5 w-5 rounded-full mr-[18px]">
                      {travelerNumber}
                    </span>
                    {travelerNumber}
                    {ordinalSuffix} Traveler
                  </h2>
                  <hr className="text-[#EEEEEE] mt-4" />

                  {/* details */}
                  <div className="  mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InputWithIcon
                      className="flex-1 h-[50px] rounded-[14px] font-manrope font-bold text-sm"
                      inputClassName="capitalize text-[#111827]"
                      placeholder="Surname*"
                    />
                    <InputWithIcon
                      className="flex-1 h-[50px] rounded-[14px] font-manrope font-bold text-sm"
                      inputClassName="capitalize text-[#111827]"
                      placeholder="Given Name*"
                    />

                    <DateInput
                      placeholder="Date Of Birth*"
                      icon={FaRegCalendarAlt}
                      classNames={{
                        wrapper:
                          "h-[50px] w-[265px] px-5 rounded-lg border border-[#EEEEEE]",
                        icon: "text-[#111827]",
                        placeholder: "text-sm font-medium text-gray-500",
                        value: "text-base font-semibold text-black",
                      }}
                    />

                    <DateInput
                      placeholder="Passport Issue Date"
                      icon={FaRegCalendarAlt}
                      classNames={{
                        wrapper:
                          "h-[50px] w-[265px] px-5 rounded-lg border border-[#EEEEEE]",
                        icon: "text-[#111827]",
                        placeholder: "text-sm font-medium text-gray-500",
                        value: "text-base font-semibold text-black",
                      }}
                    />

                    <FileUploadButton
                      buttonText="Passport Upload"
                      accept=".pdf,.doc,.docx,image/*"
                      multiple
                      showPreview
                      classNames={{
                        button: "px-5 py-3 rounded-xl border border-[#EEEEEE]",
                        icon: "text-blue-600",
                        text: "text-[#111827]/55",
                        fileName: "text-sm text-gray-700",
                      }}
                    />

                    <FileUploadButton
                      buttonText="Visa Upload"
                      accept=".pdf,.doc,.docx,image/*"
                      multiple
                      showPreview
                      classNames={{
                        button: "px-5 py-3 rounded-xl border border-[#EEEEEE]",
                        icon: "text-blue-600",
                        text: "text-[#111827]/55",
                        fileName: "text-sm text-gray-700",
                      }}
                    />

                    <FileUploadButton
                      buttonText="Travel Insurance Upload"
                      accept=".pdf,.doc,.docx,image/*"
                      multiple
                      showPreview
                      classNames={{
                        button: "px-5 py-3 rounded-xl border border-[#EEEEEE]",
                        icon: "text-blue-600",
                        text: "text-[#111827]/55",
                        fileName: "text-sm text-gray-700",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button className="my-4 w-[132px] h-[34px] rounded-[5px] text-base font-manrope bg-primary-background hover:bg-primary-background/85 cursor-pointer text-white">
            Add
          </button>
        </div>
      </div>

      <Button className="bg-[#007AFC] rounded-[9.34px] text-base font-inter  ">
        Create Voucher
      </Button>

      {/* main close container */}
    </div>
  );
};

export default CreatedVoucher;
