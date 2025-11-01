import { useState, useEffect } from "react";
import { CalanderIcon, DotIcon, GreaterSign, LocationIcon, MinusSign, OrangeCircle } from "../../../assets/icons/Icons";
import SelectedFlightCard from "../StepTwoCompoennts/SelectedFlightCard";
import HotelCard from "../StepTwoCompoennts/HotelCard";
import TransferCard from "../StepTwoCompoennts/TransferCard";

const ReviewTransfers = ({ BuildItineraryData, setSelectedTransfers, switchSummary }) => {
  const transferData = BuildItineraryData?.[4]?.details ?? []; // safe access
  const transferDetails = BuildItineraryData?.[4]?.transferDetail ?? []; // safe access
  const [activeIndex, setActiveIndex] = useState(0);          // 0 = first card active
  console.log(transferData[activeIndex]);
  let filterdata = transferData[activeIndex]
  // console.log("filter data " , filterdata);



  const handleDeleteTransfer = (id) => {
    setSelectedTransfers((prev) => prev.filter((f) => f.id !== id));

    // Active index adjust
    if (activeIndex >= flightsData.length - 1) {
      setActiveIndex(Math.max(0, flightsData.length - 2));
    }
  };


  const [showResults, setShowResults] = useState(true)

  /* auto-activate first card on mount */
  useEffect(() => {
    if (transferData.length) setActiveIndex(0);
  }, [transferData]);

  /* helper: 1 → 1st, 2 → 2nd, 3 → 3rd, … */
  const ordinal = (n) =>
    n +
    ([, "st", "nd", "rd"][(n % 100 >> 3) ^ 1 && n % 10] || "th") +
    " Destination";

  return (
    <>
      {
        !switchSummary && (

          <div className="mt-2" >
            {
              transferData.length > 0 ? (


                <div className="flex flex-wrap gap-5">
                  {/* -----------  LEFT  ----------- */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className=" space-y-3 py-2 max-h-[300px] overflow-auto  ">
                      {transferData.map((d, i) => (
                        <div
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          className={`flex items-center h-[74px] p-3 rounded-[15px] cursor-pointer shadow-[0px_0px_13px_-3px_#0000001A]
                            ${activeIndex === i ? "bg-[#FFEDE2]" : "bg-white border border-[#EEEEEE]"}`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-4">
                              <span className="relative">
                                <OrangeCircle />
                                <span className="absolute top-1/2 left-2.5 -translate-x-1/2 -translate-y-1/2">
                                  <DotIcon />
                                </span>
                              </span>
                              <div className="flex flex-col">
                                <h2 className="font-manrope font-bold text-[20px] text-[#000000]">
                                  {ordinal(i + 1)}
                                </h2>
                                <span className="font-poppins text-xs text-[#58595B]">
                                  {d?.location}
                                </span>
                              </div>
                            </div>
                            <GreaterSign />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* ------------- price bar ------------- */}
                    <div className="h-[40px] bg-[#FF6600] rounded-[11px] flex justify-between items-center px-3 sm:px-6 mt-4">
                      <span className="font-manrope text-sm sm:text-base text-myWhite-color">
                        Total Cost of {ordinal(activeIndex + 1)}:
                      </span>
                      <span className="font-manrope font-extrabold text-lg text-myWhite-color">
                        Rs.259,750
                      </span>
                    </div>
                  </div>

                  {/* -----------  RIGHT CARD  ----------- */}
                  <div className="flex-1 border border-[#EEEEEE] rounded-[26px] shadow-[0px_0px_13px_-3px_#0000001A] px-3 sm:px-5 py-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <span className="relative">
                          <OrangeCircle />
                          <span className="absolute top-1/2 left-2.5 -translate-x-1/2 -translate-y-1/2">
                            <DotIcon />
                          </span>
                        </span>
                        <div className="flex flex-col">
                          <h2 className="font-manrope font-bold text-[20px] text-[#000000]">
                            {ordinal(activeIndex + 1)}
                          </h2>
                          <span className="font-poppins text-xs text-[#58595B]">
                            {transferData[activeIndex]?.arrivalCity}
                          </span>
                        </div>
                      </div>
                      {/* <MinusSign /> */}
                    </div>
                    <hr className="text-[#EEEEEE] mt-[13px]" />
                    {/* Transfer card */}

                    {/* <HotelCard data={filterdata} showResults={showResults} onDelete={()=>handleDeleteHotel(filterdata.id)}  favIcon={false} className=" -mt-4 w-full  shadow-[4px_8px_100px_0px_#1118270F]" /> */}
                    <div className="" >

                      <TransferCard className="w-full rounded-b-none " data={filterdata} showResults={showResults} onDelete={() => handleDeleteTransfer(filterdata.id)} selectButton={false} />
                      <div className="rounded-b-[15px] flex flex-wrap gap-2 bg-myWhite-color  p-2 " >
                        <div className="flex-1  h-[44px] border border-[#EEEEEE] flex items-center justify-center rounded-[14px] gap-3 uppercase font-manrope font-bold text-[#111827]  " > <LocationIcon />
                          <div className="flex flex-col text-sm sm:text-base " >{transferDetails?.fromLocation.slice(0, 3)} <span className="font-manrope text-[10px] text-[#6B7280] capitalize " >Airport</span> </div>
                        </div>
                        <div className="flex-1  h-[44px] border border-[#EEEEEE] flex items-center justify-center rounded-[14px] gap-3  font-manrope font-bold text-[#111827] text-sm sm:text-base " > <LocationIcon />
                          <div className="flex flex-col " >Hotel <span className="font-manrope text-[10px] text-[#6B7280] capitalize  " >{transferDetails?.toLocation.slice(0, 8)}...</span> </div>
                        </div>
                        <div className="flex-1  h-[44px] border border-[#EEEEEE] flex items-center justify-center rounded-[14px] gap-3  font-manrope font-bold text-[#111827] text-sm sm:text-base  " > <CalanderIcon />
                          <div className="flex flex-col " >{transferDetails?.pickupDate
                            ? `${new Date(transferDetails.pickupDate).getDate().toString().padStart(2, "0")} 
     ${new Date(transferDetails.pickupDate).toLocaleString("en-US", { month: "short" })}`
                            : ""}

                            <span className="font-manrope text-[10px] text-[#6B7280] capitalize">
                              {transferDetails?.pickupTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[13px] border border-[#EEEEEE] rounded-[10px] px-4 py-1 flex items-center justify-between bg-myWhite-color">
                      <span className="font-manrope text-[#000000] font-bold text-sm sm:text-base">Total Flight Price:</span>
                      <span className="font-manrope text-[#000000] font-bold text-sm sm:text-base">Rs.47,600</span>
                    </div>
                  </div>
                </div>
              ) : <p className="text-gray-300 text-center w-full font-poppins  " >No Transfer Selected.</p>
            }
          </div>
        )}
    </>
  );
};

export default ReviewTransfers;