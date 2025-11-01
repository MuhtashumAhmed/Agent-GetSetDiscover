import { useState, useEffect } from "react";
import Button from "../../components/Button";
import PlanYourTrip from "./PlanYourTrip";
import SelectItinerary from "./SelectItinerary";
import ReviewAndConfirm from "./ReviewAndConfirm";
import TravelerInfo from "./TravelerInfo";
import { useLocation } from "react-router-dom";


const steps = [
  { number: 1, heading: "Plan Your Trip", para: "Dates, Members, Destinations" },
  { number: 2, heading: "Build Itinerary", para: "Flights, Hotels, Tours, Transfers" },
  { number: 3, heading: "Review & Confirm", para: "Price Summary + Trip Breakdown" },
  { number: 4, heading: "Traveler Info", para: "Docs + Main Contact Details" },
];

const Booking = () => {
  const [step, setStep] = useState(1);
  // complete trip data
  const [tripData, setTripData] = useState(null);

  // console.log(tripData);
  // parent state for data preservation
  const [transferForm, setTransferForm] = useState({
    fromLocation: "",
    toLocation: "",
    pickupDate: "",
    pickupTime: "",
  });
  // console.log(transferForm);

  const [selectedFlights, setSelectedFlights] = useState([])
  const [selectedHotel, setSelectedHotel] = useState([])
  const [selectedTour, setSelectedTour] = useState([])
  const [selectedTransfers, setSelectedTransfers] = useState([])

  // === for step validation if not fill form cant navigate throw top buttons
  const [isStepValid, setIsStepValid] = useState(false);
  const [isStepTwoValid, setIsStepTwoValid] = useState(false);


  // console.log("Selected hotel are: " , selectedHotel);

  //  merge all data into singel array so that pass to next step
  const BuildItineraryData = [

    { type: 'tripData', details: tripData }, // direct pass array
    { type: 'flights', details: selectedFlights }, // direct pass array
    { type: 'hotel', details: selectedHotel },
    { type: 'tour', details: selectedTour },
    { type: 'transfer', details: selectedTransfers, transferDetail: transferForm }
  ];

  // memebers or passengers
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  });

  const location = useLocation();

  // Jab Booking page open ho aur koi step state bheji ho
  useEffect(() => {
    if (location.state?.step) {
      setStep(location.state.step);
    }
  }, [location.state]);


  //  Initial state from localStorage or fallback to hardcoded
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("tripItems");
    return saved
      ? JSON.parse(saved)
      : [
        // { id: "item-1", value: 0, topData: "Select Your Nights For", bottomData: { country: "pakistan", city: "lahore" } },
        // { id: "item-2", value: 0, topData: "Select Your Nights For", bottomData: { country: "US", city: "us" } },
        // { id: "item-3", value: 0, topData: "Select Your Nights For", bottomData: { country: "KK", city: "kk" } },
        // { id: "item-4", value: 0, topData: "Select Your Nights For", bottomData: { country: "pakistan", city: "karachi" } },
      ];
  });

  // Sync items with localStorage
  useEffect(() => {
    localStorage.setItem("tripItems", JSON.stringify(items));
  }, [items]);
  // console.log("from Booking : ", tripData);


  return (
    <>
      {/* ---- Stepper Buttons ---- */}
      {step > 0 && (
        <div className="flex flex-wrap items-center mb-4 gap-4">
          {steps.map((d) => {
            const isActive = step === d.number;
            let isDisabled = false;

            // guard: step 2 cannot be accessed unless step 1 valid
            if (d.number === 2 && !isStepValid) isDisabled = true;
            // step 3 cannot be accessed unless step 2 valid
            if (d.number === 3 && !isStepTwoValid) isDisabled = true;
            if (d.number === 4 && !isStepTwoValid) isDisabled = true;

            return (
              <button
                key={d.number}
                onClick={() => {
                  if (!isDisabled) setStep(d.number);
                }}
                disabled={isDisabled}
                className={`flex items-center justify-center w-[188.15px] h-[40.82px] rounded-[13.23px] transition-colors duration-200 
        ${isActive ? "bg-[#FF6600] text-white" : "bg-myWhite-color text-black"}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
              >
                <span
                  className={`mr-4 flex items-center justify-center w-[22.32px] h-[22.32px] rounded-full text-[15.63px] font-semibold 
          ${isActive ? "bg-white text-[#FF6600]" : "bg-[#FF6600]/10 text-[#FF6600]"}
        `}
                >
                  {d.number}
                </span>
                <div className="text-left">
                  <h3 className="text-[11.58px]">{d.heading}</h3>
                  <p className="text-[8.27px]">{d.para}</p>
                </div>
              </button>
            );
          })}

        </div>
      )}

      {/* ---- Main Content ---- */}
      <div
        className={` font-manrope w-full ${step === 0 && "h-[calc(100vh-130px)]"
          }  bg-myWhite-color rounded-[25px] flex flex-col `}
      >
        <div className={`flex-1 ${step === 0 && "flex items-center justify-center"} `}>
          {step === 0 && (
            <div className="text-center">
              <img
                src="/create-your-own-trip.png"
                className="mx-auto mb-[30px] h-34 sm:h-auto sm:w-auto"
                alt="Trip"
              />
              <h2 className="font-semibold text-[#000000] text-base sm:text-[20px]">
                Create Your Own Trip
              </h2>
              <p className="text-sm sm:text-base text-[#2D2D2D]">
                Plan your journey by choosing dates, destinations, <br />
                flights, hotels, and activities.
              </p>
              <Button
                className="mt-[52px] text-sm sm:text-base font-manrope"
                onClick={() => setStep(1)}
              >
                Get Your Quote
              </Button>
            </div>
          )}
        </div>
      </div>

      {step === 1 && <PlanYourTrip isStepValid={isStepValid} setIsStepValid={setIsStepValid} setStep={setStep} passengers={passengers} setPassengers={setPassengers} items={items} setItems={setItems} tripData={tripData} setTripData={setTripData} />}
      {step === 2 && <SelectItinerary isStepTwoValid={isStepTwoValid} setIsStepTwoValid={setIsStepTwoValid} setStep={setStep} tripData={tripData} items={items} selectedFlights={selectedFlights} setSelectedFlights={setSelectedFlights} selectedHotel={selectedHotel} setSelectedHotel={setSelectedHotel} selectedTour={selectedTour} setSelectedTour={setSelectedTour} selectedTransfers={selectedTransfers} setSelectedTransfers={setSelectedTransfers} transferForm={transferForm} setTransferForm={setTransferForm} />}
      {step === 3 && <ReviewAndConfirm setStep={setStep} BuildItineraryData={BuildItineraryData} selectedFlights={selectedFlights} setSelectedFlights={setSelectedFlights} setSelectedHotel={setSelectedHotel} setSelectedTour={setSelectedTour} setSelectedTransfers={setSelectedTransfers} />}
      {step === 4 && <TravelerInfo passengers={passengers} setPassengers={setPassengers} />}
    </>
  );
};

export default Booking;
