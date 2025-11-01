import { useState, useEffect, useMemo } from "react";
import {
  DotIcon,
  GreaterSign,
  OrangeCircle,
} from "../../../assets/icons/Icons";
import SelectedFlightCard from "../StepTwoCompoennts/SelectedFlightCard";
import HotelCard from "../StepTwoCompoennts/HotelCard"; // reused for hotels & tours
import TransferCard from "../StepTwoCompoennts/TransferCard"; // ✅ naya component transfers ke liye

const CitySummary = ({ BuildItineraryData }) => {
  const [activeCity, setActiveCity] = useState("");
  const [activeTab, setActiveTab] = useState("Flights"); // sidebar default

  /* helper: 1 → 1st, 2 → 2nd, 3 → 3rd, … */
  const ordinal = (n) =>
    n +
    ([, "st", "nd", "rd"][(n % 100 >> 3) ^ 1 && n % 10] || "th") +
    " Destination";

  // ✅ extract cities
  const flightsData = useMemo(
    () =>
      BuildItineraryData?.[0]?.details?.destinations?.map(
        (d) => d.bottomData.city
      ) || [],
    [BuildItineraryData]
  );

  // ✅ extract flights once
  const allFlights = useMemo(() => {
    return (
      BuildItineraryData?.find((item) => item.type === "flights")?.details || []
    );
  }, [BuildItineraryData]);

  // ✅ extract hotels once
  const allHotels = useMemo(() => {
    return (
      BuildItineraryData?.find((item) => item.type === "hotel")?.details || []
    );
  }, [BuildItineraryData]);

  // ✅ extract tours once
  const allTours = useMemo(() => {
    return (
      BuildItineraryData?.find((item) => item.type === "tour")?.details || []
    );
  }, [BuildItineraryData]);

  // ✅ extract transfers once
  const allTransfers = useMemo(() => {
    return (
      BuildItineraryData?.find((item) => item.type === "transfer")?.details || []
    );
  }, [BuildItineraryData]);

  // ✅ filter flights
  const filteredFlights = useMemo(() => {
    if (!activeCity) return allFlights;
    return allFlights.filter(
      (flight) =>
        flight.departureCity === activeCity || flight.arrivalCity === activeCity
    );
  }, [allFlights, activeCity]);

  // ✅ filter hotels
  const filteredHotels = useMemo(() => {
    if (!activeCity) return allHotels;
    return allHotels.filter((hotel) => hotel.location?.includes(activeCity));
  }, [allHotels, activeCity]);

  // ✅ filter tours
  const filteredTours = useMemo(() => {
    if (!activeCity) return allTours;
    return allTours.filter((tour) => tour.location?.includes(activeCity));
  }, [allTours, activeCity]);

  // ✅ filter transfers
  const filteredTransfers = useMemo(() => {
    if (!activeCity) return allTransfers;
    return allTransfers.filter((transfer) =>
      transfer.location?.includes(activeCity)
    );
  }, [allTransfers, activeCity]);

  const menuItems = ["Flights", "Hotels", "Tours", "Transfers"];

  // ✅ set first city active by default
  useEffect(() => {
    if (flightsData && flightsData.length > 0) {
      setActiveCity(flightsData[0]);
    }
  }, [flightsData]);

  return (
    <div>
      {/* Top City Filters */}
      <div className="flex flex-wrap gap-2 mt-5">
        {flightsData?.map((btn, i) => (
          <button
            key={i}
            className={`flex items-center border border-[#032749] w-max py-[3px] px-[24px] h-[32px] rounded-[20px] font-Poppins text-[#032749] text-[12.34px] cursor-pointer ${activeCity === btn ? "bg-[#042749] text-[#FFFFFF]" : ""
              }`}
            onClick={() => setActiveCity(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap gap-6 mt-5">
        {/* Left Sidebar */}
        <div className="flex-1 w-60 flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-left font-medium transition 
                ${activeTab === item ? "bg-[#FFEDE2]" : "bg-white"} shadow-sm`}
            >
              <span className="flex items-center gap-2">
                <span className="relative">
                  <OrangeCircle />
                  <span className="absolute top-1/2 left-2.5 -translate-x-1/2 -translate-y-1/2">
                    <DotIcon />
                  </span>
                </span>
                <h3 className="font-manrope font-bold text-[20px] text-[#000000]">
                  {item}
                </h3>
              </span>
              <GreaterSign />
            </button>
          ))}
          {/* Price bar */}
          <div className="h-[40px] bg-[#FF6600] rounded-[11px] flex justify-between items-center px-6 mt-4">
            <span className="font-manrope text-base text-myWhite-color">
              Total Cities Cost:
            </span>
            <span className="font-manrope font-extrabold text-lg text-myWhite-color">
              Rs.259,750
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 border border-[#EEEEEE] rounded-[26px] shadow-[0px_0px_13px_-3px_#0000001A] px-5 py-4">
          {/* Header */}
          <div className="flex items-center gap-4">
            <span className="relative">
              <OrangeCircle />
              <span className="absolute top-1/2 left-2.5 -translate-x-1/2 -translate-y-1/2">
                <DotIcon />
              </span>
            </span>
            <div>
              <h2 className="font-manrope font-bold text-[20px] text-[#000000]">
                {activeTab}
              </h2>
            </div>
          </div>
          <hr className="text-[#EEEEEE] mt-[13px]" />

          {/* Flights Tab */}
          {activeTab === "Flights" && (
            <div className="-mt-4">
              <div className="flex flex-col gap-4">
                {filteredFlights.length > 0 ? (
                  filteredFlights.map((flight, idx) => (
                    <SelectedFlightCard
                      key={idx}
                      data={flight}
                      crossIcon={false}
                      className="w-full shadow-2xl"
                    />
                  ))
                ) : (
                  <p className="text-gray-500 text-sm mt-8 text-center">
                    No flights available.
                  </p>
                )}
              </div>

              <div className="mt-[13px] border border-[#EEEEEE] rounded-[10px] px-4 py-1 flex items-center justify-between bg-myWhite-color">
                <span className="font-manrope text-[#000000] font-bold text-base">Total Flight Price:</span>
                <span className="font-manrope text-[#000000] font-bold text-base">Rs.47,600</span>
              </div>
            </div>
          )}

          {/* Hotels Tab */}
          {activeTab === "Hotels" && (
            <div className="-mt-4">
              <div className="flex flex-col gap-4">
                {filteredHotels.length > 0 ? (
                  filteredHotels.map((hotel) => (
                    <HotelCard
                      key={hotel.id}
                      data={hotel}
                      showResults={true}
                      favIcon={false}
                      crossIcon={false}
                      className="-mt-4 w-full shadow-[4px_8px_100px_0px_#1118270F]"
                    />
                  ))
                ) : (
                  <p className="text-gray-500 text-sm mt-8 text-center">
                    No hotels available.
                  </p>
                )}
              </div>
              <div className="mt-[13px] border border-[#EEEEEE] rounded-[10px] px-4 py-1 flex items-center justify-between bg-myWhite-color">
                <span className="font-manrope text-[#000000] font-bold text-base">Total Hotel Price:</span>
                <span className="font-manrope text-[#000000] font-bold text-base">Rs. 147,600</span>
              </div>
            </div>
          )}

          {/* Tours Tab */}
          {activeTab === "Tours" && (
            <div className="-mt-4">
              <div className="flex flex-col gap-4">
                {filteredTours.length > 0 ? (
                  filteredTours.map((tour, i) => (
                    <HotelCard
                      key={i}
                      data={tour}
                      crossIcon={false}
                      setIsHotelDetailModal={() => { }}
                      showResults={true}
                      setDetailTourCardData={() => { }}
                      favIcon={false}
                      className="-mt-4 w-full shadow-[4px_8px_100px_0px_#1118270F]"
                    />
                  ))
                ) : (
                  <p className="text-gray-500 text-sm mt-8 text-center">
                    No tours available.
                  </p>
                )}
              </div>
              <div className="mt-[13px] border border-[#EEEEEE] rounded-[10px] px-4 py-1 flex items-center justify-between bg-myWhite-color">
                <span className="font-manrope text-[#000000] font-bold text-base">Total Tour Price:</span>
                <span className="font-manrope text-[#000000] font-bold text-base">Rs. 59,600</span>
              </div>
            </div>
          )}

          {/* Transfers Tab */}
          {activeTab === "Transfers" && (
            <div className="-mt-4">
              <div className="flex flex-col gap-4">
                {filteredTransfers.length > 0 ? (
                  filteredTransfers.map((transfer) => (
                    <TransferCard
                      key={transfer.id}
                      data={transfer}
                      crossIcon={false}
                      selectButton={false}
                      showResults={true}
                      className="-mt-4 w-full shadow-[4px_8px_100px_0px_#1118270F]"
                    />
                  ))
                ) : (
                  <p className="text-gray-500 text-sm mt-8 text-center">
                    No transfers available.
                  </p>
                )}
              </div>
              <div className="mt-[13px] border border-[#EEEEEE] rounded-[10px] px-4 py-1 flex items-center justify-between bg-myWhite-color">
                <span className="font-manrope text-[#000000] font-bold text-base">Total Transfer Price:</span>
                <span className="font-manrope text-[#000000] font-bold text-base">Rs. 66,600</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitySummary;
