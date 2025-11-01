import { useEffect, useState } from "react";
import { PlaneDownIcon, PlaneUpIcon } from "../../assets/icons/Icons";
import Counter from "../../components/vouchers/Counter";
import CountrySelect from "../../components/vouchers/CountrySelect";
import DaisyDateInput from "../../components/vouchers/DaisyDateInput";
import DropDown from "../../components/vouchers/DropDown";
import DestinationSelector from "../../components/booking/DestinationSelector";
import DirectionGraph from "../../components/booking/DirectionGraph";
import Button from "../../components/Button";
import CalendarInput from "../../components/CalendarInput";

const PlanYourTrip = ({ isStepValid, setIsStepValid, setStep, passengers, setPassengers, items, setItems, tripData, setTripData }) => {
  // Members counters
  // const [passengers, setPassengers] = useState({
  //   adults: 0,
  //   children: 0,
  //   infants: 0,
  //   pets: 0
  // });
  // console.log(passengers);

  const [completeTripData, setCompleteTripData] = useState();
  // console.log("plane your Trip page: ", tripData);



  // Dates
  const [departureDate, setDepartureDate] = useState();
  const [returnDate, setReturnDate] = useState();

  const [departureLocation, setDepartureLocation] = useState(null);
  const [returnDestination, setReturnDestination] = useState(null);

  // Group type
  const [country, setCountry] = useState("");

  // Destination selector
  const [error, setError] = useState();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);


  // Sync tripData with localStorage (with unique id and no duplication)
  useEffect(() => {
    if (tripData) {
      // 1️ Ensure trip has a unique id
      const tripWithId = tripData.tripId
        ? tripData
        : { ...tripData, tripId: Date.now().toString() };

      // 2️ Get old trips
      const existingTrips =
        JSON.parse(localStorage.getItem("CompleteTripData")) || [];

      // 3️ Check if trip already exists (by tripId)
      const index = existingTrips.findIndex(
        (t) => t.tripId === tripWithId.tripId
      );

      let updatedTrips;
      if (index >= 0) {
        // update existing
        existingTrips[index] = tripWithId;
        updatedTrips = [...existingTrips];
      } else {
        // add new
        updatedTrips = [...existingTrips, tripWithId];
      }

      // 4️ Save updated array
      localStorage.setItem("CompleteTripData", JSON.stringify(updatedTrips));

      // console.log("📂 Saved to localStorage (unique trips):", updatedTrips);
    }
  }, [tripData]);
  
  // jab bhi form data change ho, parent ko validity bhejo bcz navigatore want to inActive or active
  useEffect(() => {
    setIsStepValid(isFormValid());
  }, [departureDate, returnDate, departureLocation, returnDestination, passengers, country, selectedCountry, selectedCities, items]);



  // Function to handle adding new destination
  const handleAddDestination = () => {
    // Validate departure date
    if (!departureDate) {
      setError("Please select a departure date");
      return;
    }

    // Validate return date
    if (!returnDate) {
      setError("Please select a return date");
      return;
    }

    // Validate departure location
    if (!departureLocation) {
      setError("Please select a departure location");
      return;
    }

    // Validate return destination
    if (!returnDestination) {
      setError("Please select a return destination");
      return;
    }

    // Validate at least 1 adult
    if (passengers.adults <= 0) {
      setError("At least one adult is required");
      return;
    }

    // Validate group type
    if (!country) {
      setError("Please select a group type");
      return;
    }

    // Validate country + cities
    if (!selectedCountry || selectedCities.length === 0) {
      setError("Please select a country and at least one city");
      return;
    }

    // If all validations pass
    const newItems = selectedCities.map((city, index) => ({
      id: `item-${Date.now()}-${index}`,
      value: 0,
      topData: "Select Your Nights For",
      bottomData: {
        country: selectedCountry,
        city: city,
      },
    }));

    setItems((prevItems) => [...prevItems, ...newItems]);
    const { adults, children, infants, pets } = passengers;
    const formData = {
      tripId: tripData?.tripId || Date.now().toString(), // unique id
      departureLocation,
      returnDestination,
      departureDate,
      returnDate,
      adults,
      children,
      infants,
      pets,
      groupType: country,
      destinations: [...items, ...newItems],
    };
    setTripData(formData);
    // console.log("✅ Trip Data on Add btn click:", formData);

    // reset error
    setError("");
  };
  // add this computed validation state
  const isFormValid = () => {
    if (!departureDate) return false;
    if (!returnDate) return false;
    if (!departureLocation) return false;
    if (!returnDestination) return false;
    if (passengers.adults <= 0) return false;
    if (!country) return false;
    if (!selectedCountry || selectedCities.length === 0) return false;
    if (!items || items.length === 0) return false;

    return true;
  };

  return (
    <div className="p-2.5 md:p-6 flex flex-col gap-[30px] bg-myWhite-color rounded-[25px]">
      {/* === Choose Your Travel Dates ==== */}
      <div>
        <div className="flex items-center space-x-[10px]">
          <span className="bg-[#FF6600] rounded-full text-sm font-bold text-myWhite-color h-5 w-5 flex items-center justify-center">
            1
          </span>
          <h1 className="text-[#000000] font-poppins  text-2xl font-medium  ">
            Choose Your Travel Dates
          </h1>
        </div>
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
            {/* customize Date Dropdown calendar */}
            {/* <DaisyDateInput
                            className="shadow-[0px_0px_13px_-3px_#0000001A]"
                            value={departureDate}
                            onChange={setDepartureDate}
                        /> */}
            {/* Customized calendar */}
            <CalendarInput
              value={departureDate}
              onChange={setDepartureDate}
              className="bg-myWhite-color h-[51px] border-[#EEEEEE]  text-[#000000]"
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
              className="shadow-[0px_0px_13px_-3px_#0000001A]"
              value={returnDate}
              onChange={setReturnDate}
              /> */}
            <CalendarInput
              value={returnDate}
              onChange={setReturnDate}
              className="bg-myWhite-color h-[51px] border-[#EEEEEE]  text-[#000000]"
              calendarClassName="bg-white  "
              placeholder="Select Date"
            />

          </div>
        </div>
      </div>

      {/* ========= Departure and Arrival Place ==== */}
      <div className="font-manrope">
        <div className="flex items-center space-x-[10px]">
          <span className="bg-[#FF6600] rounded-full text-sm font-bold text-myWhite-color h-5 w-5 flex items-center justify-center">
            2
          </span>
          <h1 className="text-[#000000] font-poppins text-[24px] font-medium">
            Departure and Arrival Place
          </h1>
        </div>
        <p className="font-inter text-xs text-[#58595B]">
          Follow these simple steps to design your dream journey.
        </p>
        <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]">
              From (Departure Location)
            </li>
            <div className="flex gap-[22px] items-center h-[74px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A]">
              <span>
                <PlaneUpIcon className="text-[#000000]" />
              </span>
              <CountrySelect
                value={departureLocation}
                onChange={setDepartureLocation}
                placeholder="Departure Location"
              />
            </div>
          </div>

          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
            <li className="ml-4 mb-1.5 font-manrope font-semibold text-[#000000]">
              To (Return Destination)
            </li>
            <div className=" flex gap-[22px] items-center h-[74px] py-[13px] px-6 border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A]">
              <span>
                <PlaneDownIcon />
              </span>
              <CountrySelect
                value={returnDestination}
                onChange={setReturnDestination}
                placeholder="Return Destination"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========= Select Members ==== */}
      <div className="font-manrope">
        <div className="flex items-center space-x-[10px]">
          <span className="bg-[#FF6600] rounded-full text-sm font-bold text-myWhite-color h-5 w-5 flex items-center justify-center">
            3
          </span>
          <h1 className="text-[#000000] font-Poppins text-[24px] font-medium">
            Select Members
          </h1>
        </div>
        <p className="font-inter text-xs text-[#58595B]">
          Follow these simple steps to design your dream journey.
        </p>

        <div className="flex flex-wrap items-center mt-[20px] gap-[30px]">
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
            <Counter
              label="Adults"
              text="Ages 13 or above"
              value={passengers.adults}
              onChange={(value) => setPassengers(prev => ({
                ...prev,
                adults: value
              }))}
            />
          </div>
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
            <Counter
              label="Children"
              text="Ages 2-12"
              value={passengers.children}
              onChange={(value) => setPassengers(prev => ({
                ...prev,
                children: value
              }))}
            />
          </div>
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
            <Counter
              label="Infants"
              text="Under 2"
              value={passengers.infants}
              onChange={(value) => setPassengers(prev => ({
                ...prev,
                infants: value
              }))}
            />
          </div>
          <div className="w-full min-w-full sm:min-w-auto flex-1 text-sm">
            <Counter
              label="Pets"
              text="Bringing a service animal?"
              value={passengers.pets}
              onChange={(value) => setPassengers(prev => ({
                ...prev,
                pets: value
              }))}
            />
          </div>
        </div>

        <div className="mt-6 pb-1 pt-[12px] border border-[#EEEEEE] rounded-xl shadow-[0px_0px_13px_-3px_#0000001A]">
          <p className="font-manrope text-sm text-[#032749] ml-4 ">
            Select Group Type
          </p>
          <div className="px-3.5 mt-1 " >

            <DropDown
              placeholder="e.g. Males Only"
              value={country}
              onChange={setCountry}
              options={[
                { value: "family", label: "Family" },
                { value: "males", label: "Males Only" },
                { value: "females", label: "Females Only" },
                { value: "mixed", label: "Mixed Group" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* ============== Select Multiple Destination ========= */}
      <div className="font-manrope bg-white border-0 sm:border border-dashed text-[#000000] border-[#EEEEEE] rounded-[20px] sm:p-4">
        <DestinationSelector
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedCities={selectedCities}
          setSelectedCities={setSelectedCities}
          error={error}
          setError={setError}
        />

        <button
          onClick={handleAddDestination}
          className="-mt-4 my-4 w-[132px] h-[34px] rounded-[5px] text-base font-manrope bg-primary-background hover:bg-primary-background/85 cursor-pointer text-white"
        >
          Add
        </button>

        <div className="mt-4">
          <DirectionGraph
            startTop="Select Your Nights For"
            startBottom="Karachi, Pakistan"
            endTop="Select Your Nights For"
            endBottom="Lahore, Pakistan"
            items={items}
            setItems={setItems}
            tripData={tripData}
            setTripData={setTripData}
          />
        </div>
      </div>

      <Button
        className={`bg-[#007AFC] hover:bg-[#007AFC]/90 text-[16px] font-inter ${!isFormValid() ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        onClick={() => setStep((prev) => prev + 1)}
        disabled={!isFormValid()}
      >
        Next (Select itinerary)
      </Button>

    </div>
  );
};

export default PlanYourTrip;
