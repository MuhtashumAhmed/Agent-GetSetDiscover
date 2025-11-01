import React, { useEffect, useState } from 'react'
import { AiButton, AIStarIcon, CrossIcon, FilterIcon, HotelIcon, PlaneUpIcon, TourIcon, TransferIcon } from '../../assets/icons/Icons'
import Button from "../../components/Button"
import Flights from '../../components/booking/StepTwoCompoennts/Flights';
import TravelComparisonMatrix from '../../components/booking/TravelComparisonMatrix';
import { IoIosArrowBack } from "react-icons/io";
import Hotel from '../../components/booking/StepTwoCompoennts/Hotel';
import FlightFilter from '../../components/booking/FlightFilter';
import Tours from '../../components/booking/StepTwoCompoennts/Tours';
import TourFilter from '../../components/booking/TourFilter';
import Transfers from '../../components/booking/StepTwoCompoennts/Transfers';
import TransfersFilter from '../../components/booking/StepTwoCompoennts/TransfersFilter';

const buttons = [
  {
    id: "flights",
    title: "Flights",
    icon: <PlaneUpIcon />,
  },
  {
    id: "hotels",
    title: "Hotels",
    icon: <HotelIcon />,
  },
  {
    id: "tours",
    title: "Tours",
    icon: <TourIcon />,
  },
  {
    id: "transfers",
    title: "Transfers",
    icon: <TransferIcon />

  },
];

const  SelectItinerary = ({ isStepTwoValid, setIsStepTwoValid, setStep, items, tripData, selectedFlights, setSelectedFlights, selectedHotel, setSelectedHotel, selectedTour, setSelectedTour, selectedTransfers, setSelectedTransfers, transferForm, setTransferForm }) => {


  const [activeButton, setActiveButton] = useState("flights");
  const [isDisable, setIsDisable] = useState(false)
  const [isAiTabOpen, setIsAiTabOpen] = useState(false)
  const [searchAvailableFlights, setSearchAvailableFlights] = useState(false);
  const [searchAvailableHotels, setSearchAvailableHotels] = useState(false);
  const [searchAvailableTours, setSearchAvailableTours] = useState(false);
  const [searchAvailableTransfers, setSearchAvailableTransfers] = useState(false);

  const [openFilter, setOpenFilter] = useState(false)
  const [openFlightFilter, setOpenFlightFilter] = useState(false)
  const [openToursFilter, setOpenToursFilter] = useState(false)
  const [openTransfersFilter, setOpenTransfersFilter] = useState(false)

  // console.log(isDisable);
  // jab bhi form data change ho, parent ko validity bhejo bcz navigatore want to inActive or active
  useEffect(() => {
    setIsStepTwoValid(isFormValid());
  }, [selectedFlights, selectedHotel, selectedTour, selectedTransfers]);


  const handleFilter = () => {
    setOpenFilter((prev) => !prev); // toggle open/close
  };
  // console.log("from Slect Itinerary: ", tripData);

  const handleTourFilter = () => {
    setOpenToursFilter((prev) => !prev); // toggle open/close
  }
  const handleTransfersFilter = () => {
    setOpenTransfersFilter((prev) => !prev); // toggle open/close
  }


  // add this computed validation state
  const isFormValid = () => {
    if (!selectedFlights.length > 0) return false;
    if (!selectedHotel.length > 0) return false;
    if (!selectedTour.length > 0) return false;
    if (!selectedTransfers.length > 0) return false;

    return true;
  };

  return (
    <>
      <div className='relative  p-1 pb-3 md:p-6 bg-myWhite-color rounded-[25px] overflow-hidden ' >
        <div className='' >
          {/* container in which all content*/}
          <div className='    bg-myWhite-color px-2 py-2 md:py-[30px] md:px-[25px] rounded-[20px] shadow-[0px_0px_18.3px_0px_#00000012]  min-h-[424.06px]  ' >
            {/* header */}
            <div className='flex  flex-wrap gap-4 justify-between min-h-[74px] border-b border-[#EEEEEE] ' >
              <div>
                <div className="flex  items-center space-x-[10px] " >
                  <span className="bg-[#FF6600]  rounded-full text-sm font-bold text-myWhite-color h-5 w-5 flex items-center justify-center " >5</span>
                  <h1 className="text-[#000000] font-Poppins text-[24px] font-medium " >Select Itinerary</h1>
                </div>
                <p className='font-inter text-xs text-[#58595B] ' >Follow these simple steps to design your dream journey.</p>
              </div>
              {/* AI button */}
              <button className=' mb-2 sm:mb-0 flex items-center w-[159px] h-11 px-[42px] py-2 rounded-[6.75px] bg-gradient-to-r from-[#2B7FFF] to-[#9810FA] font-semibold text-[12.3px] text-myWhite-color text-nowrap '
                onClick={() => setIsAiTabOpen(true)} > <span className='-ml-4' >
                  <AIStarIcon className="" /></span> <span className='ml-3'  >Ai Assistant</span>  </button>
            </div>


            {/* === main container === */}
            {/* <div className='flex justify-between items-center flex-wrap gap-y-4 ' > */}
            <div className={`  ${isDisable && "opacity-50 pointer-events-none "} flex justify-between items-center flex-wrap gap-y-4 `} >
              {
                searchAvailableFlights && (
                  <Button className="flex items-center justify-center gap-x-[10.5px] bg-[#F8F8F8] hover:bg-[#F8F8F8]/70 text-[#032749] text-[12.34px] font-medium font-inter w-[98px] h-[35px] cursor-pointer   "
                    onClick={() => setSearchAvailableFlights(false)
                    }
                  >
                    <IoIosArrowBack />
                    Back
                  </Button>

                )
              }
              {
                searchAvailableHotels && (
                  <Button className="flex items-center justify-center gap-x-[10.5px] bg-myWhite-color text-[#032749] text-[12.34px] font-medium font-inter w-[98px] h-[43px] border-[1px] border-[#DFE1E7]   "
                    onClick={() => setSearchAvailableHotels(false)
                    }
                  >
                    <IoIosArrowBack />
                    Back
                  </Button>
                )
              }
              {
                searchAvailableTours && (
                  <Button className="flex items-center justify-center gap-x-[10.5px] bg-myWhite-color text-[#032749] text-[12.34px] font-medium font-inter w-[98px] h-[43px] border-[1px] border-[#DFE1E7]   "
                    onClick={() => setSearchAvailableTours(false)
                    }
                  >
                    <IoIosArrowBack />
                    Back
                  </Button>
                )
              }
              {
                searchAvailableTransfers && (
                  <Button className="flex items-center justify-center gap-x-[10.5px] bg-myWhite-color text-[#032749] text-[12.34px] font-medium font-inter w-[98px] h-[43px] border-[1px] border-[#DFE1E7]   "
                    onClick={() => setSearchAvailableTransfers(false)
                    }
                  >
                    <IoIosArrowBack />
                    Back
                  </Button>
                )
              }

              <div
                className="mt-[10px] flex flex-wrap justify-between items-center gap-y-4 gap-x-[36.21px] max-w-[568px] min-h-[65px]  bg-[#FFFFFF] rounded-[20px] py-[15px] px-[20px] border-[1px] border-[#EEEEEE]  "
                style={{ boxShadow: "0 -10.28px 71.96px #0000000D" }}
              >
                {buttons?.map((btn) => {
                  return (
                    <button
                      key={btn.id}
                      className={`flex items-center w-max py-[3px] px-[13px] h-[35px] rounded-[20px]  font-Poppins text-[#032749] text-[12.34px] cursor-pointer ${activeButton === btn.id
                        ? "bg-primary-background text-[#FFFFFF] "
                        : "bg-[#F8F8F8]"
                        } `}
                      onClick={() => {
                        setActiveButton(btn.id)
                        setSearchAvailableFlights(false)
                        setSearchAvailableHotels(false)
                        setSearchAvailableTours(false)
                        setSearchAvailableTransfers(false)
                      }

                      }
                    >
                      <span className="mr-[10px]  ">{btn.icon}</span> {btn.title}
                    </button>
                  );
                })}
              </div>

              {/* <div className="relative"> */}

              <div
                className={`
                ${isDisable ? "opacity-50 pointer-events-none" : ""}
              `}
              >
                {/* Filter Button */}
                {
                  activeButton === "flights" ? (
                    <Button
                      className={`${!searchAvailableFlights && "opacity-50 pointer-events-none"} flex items-center justify-center gap-x-[10.5px] bg-[#F8F8F8] text-[#032749] text-[12.34px] font-medium font-inter w-[98px] h-[43px] border-[1px] border-[#DFE1E7]`}
                      onClick={handleFilter}
                    >
                      <FilterIcon className="text-[#032749]" />
                      Filter
                    </Button>
                  ) : activeButton === "hotels" ? (
                    <Button
                      className={`${!searchAvailableHotels && "opacity-50 pointer-events-none"} flex items-center justify-center gap-x-[10.5px] bg-[#F8F8F8] text-[#032749] text-[12.34px] font-medium font-inter w-[98px] h-[43px] border-[1px] border-[#DFE1E7]`}
                      onClick={handleFilter}
                    >
                      <FilterIcon className="text-[#032749]" />
                      Filter
                    </Button>
                  ) : activeButton === "tours" ? (
                    <Button
                      className={`${!searchAvailableTours && "opacity-50 pointer-events-none"} flex items-center justify-center gap-x-[10.5px] bg-[#F8F8F8] text-[#032749] text-[12.34px] font-medium font-inter w-[98px] h-[43px] border-[1px] border-[#DFE1E7]`}
                      onClick={handleTourFilter}
                    >
                      <FilterIcon className="text-[#032749]" />
                      Filter
                    </Button>
                  ) : (
                    <Button
                      className={` ${!searchAvailableTransfers && "opacity-50 pointer-events-none"}  flex items-center justify-center gap-x-[10.5px] bg-[#F8F8F8] text-[#032749] text-[12.34px] font-medium font-inter w-[98px] h-[43px] border-[1px] border-[#DFE1E7]`}
                      onClick={handleTransfersFilter}
                    >
                      <FilterIcon className="text-[#032749]" />
                      Filter
                    </Button>
                  )
                }
                {/* Conditionally show filter */}
                {openFilter && (
                  <div className="absolute right-16 mt-0 z-50">
                    <FlightFilter onClose={() => setOpenFilter(false)} />
                  </div>
                )}
                {openToursFilter && (
                  <div className="absolute right-16 mt-0 z-50  text-[#333333] ">
                    <TourFilter setOpenToursFilter={setOpenToursFilter} />
                  </div>
                )}
                {openTransfersFilter && (
                  <div className="absolute right-16 mt-8 z-50 text-[#333333] ">
                    <TransfersFilter setOpenTransfersFilter={setOpenTransfersFilter} />
                  </div>
                )}
              </div>


            </div>
            {
              activeButton === "flights" && <Flights isDisable={isDisable} setIsDisable={setIsDisable} items={items} searchAvailableFlights={searchAvailableFlights} setSearchAvailableFlights={setSearchAvailableFlights} tripData={tripData} selectedFlights={selectedFlights} setSelectedFlights={setSelectedFlights} />
            }
            {
              activeButton === "hotels" && <Hotel searchAvailableHotels={searchAvailableHotels} setSearchAvailableHotels={setSearchAvailableHotels} selectedHotel={selectedHotel} setSelectedHotel={setSelectedHotel} />
            }
            {
              activeButton === "tours" && <Tours isDisable={isDisable} setIsDisable={setIsDisable} searchAvailableTours={searchAvailableTours} setSearchAvailableTours={setSearchAvailableTours} selectedTour={selectedTour} setSelectedTour={setSelectedTour} />
            }
            {
              activeButton === "transfers" && <Transfers isDisable={isDisable} setIsDisable={setIsDisable} searchAvailableTransfers={searchAvailableTransfers} setSearchAvailableTransfers={setSearchAvailableTransfers} selectedTransfers={selectedTransfers} setSelectedTransfers={setSelectedTransfers} transferForm={transferForm} setTransferForm={setTransferForm} />
            }

          </div>


          {/* go next page Button */}
          <Button className={`bg-[#007AFC] hover:bg-[#007AFC]/90 text-[16px] font-inter ${!isFormValid() ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={!isFormValid()}
            onClick={() => setStep(3)}
          >Next (Review & Confirm)</Button>

        </div>


        {/* Ai right side sticky button */}
        {/* <div className=" flex justify-center items-center z-20 absolute top-0 right-0 h-[600px]  overflow-hidden border "> */}
        <div className={`  ${isAiTabOpen && "w-full"} transition-all ease-in-out duration-600 flex  items-center z-20 absolute top-0 right-0 h-[590px]  overflow-hidden  w-16  `}>
          {/* Toggle button */}
          <button
            className={` ${isAiTabOpen && "bg-myWhite-color "}    sm:ml-3    `}
            onClick={() => setIsAiTabOpen((prev) => !prev)}
          >
            <AiButton />
          </button>
          {/* <WavyButton onClick={() => setIsAiTabOpen((prev) => !prev)} >asdsd</WavyButton> */}
          <div className={`Mycustom-scrollbar -m-0.5 sm:m-0  bg-myWhite-color p-4 h-[580.06px] ${isAiTabOpen ? "w-full translate-x-0 " : "w-full translate-x-800  "} transition-all ease-in-out duration-600  overflow-auto `}  >
            <TravelComparisonMatrix />
          </div>

          <style jsx>
            {`
            /* Custom scrollbar styles */
            .Mycustom-scrollbar::-webkit-scrollbar {
              width: 10px;
            }
            
            .Mycustom-scrollbar::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 10px;
            }
            
            .Mycustom-scrollbar::-webkit-scrollbar-thumb {
              background: #888;
              border-radius: 10px;
            }
            
            .Mycustom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
            
            /* For Firefox */
            .Mycustom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: #888 #f1f1f1;
            }
          `}
          </style>

        </div>




        {/* ---close main container ----- */}
      </div>


      {/* bottom blue div */}
      {/* <div className='mt-16   bg-[#032648] h-[67px] rounded-[20px] py-2 px-6   sticky bottom-10 ' > */}
      <div className='mt-16   bg-[#032648] h-[67px] rounded-[20px] py-2 px-6   ' >
        {/* left */}
        <div className='flex justify-between items-center  ' >

          <div className='flex flex-col gap-2 sm:gap-0 ' >
            <h2 className='font-manrope font-bold text-sm sm:text-base  text-[#FFFFFF]  ' >Total Accommodation:</h2>
            <span className='font-manrope text-xs font-semibold text-[#007AFC]  ' >Includes all services.</span>
          </div>


          {/* right */}
          <div className='flex flex-col gap-2 sm:gap-0 ' >
            <h1 className='font-manrope font-bold text-xl sm:text-[26px]  text-[#FFFFFF]  ' >Rs.824,000</h1>
            <span className='font-manrope text-xs font-semibold text-[#007AFC] text-right -mt-1 ' >View Summary</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default SelectItinerary