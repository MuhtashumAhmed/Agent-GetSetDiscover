import { useState } from "react";
import { AiButton, PlaneUpIcon } from "../../assets/icons/Icons";
import Button from "../../components/Button"
import TravelComparisonMatrix from "../../components/booking/TravelComparisonMatrix";
import ReviewFlights from "../../components/booking/StepThreeCompoennts/ReviewFlights";
import ReviewHotel from "../../components/booking/StepThreeCompoennts/ReviewHotel";
import ReviewTours from "../../components/booking/StepThreeCompoennts/ReviewTours";
import ReviewTransfers from "../../components/booking/StepThreeCompoennts/ReviewTransfers";
import CitySummary from "../../components/booking/StepThreeCompoennts/CitySummary";

const buttons = [
  {
    id: "flights",
    title: "Flights",
    // icon: <PlaneUpIcon />,
  },
  {
    id: "hotels",
    title: "Hotels",
    // icon: <HotelIcon />,
  },
  {
    id: "tours",
    title: "Tours",
    // icon: <TourIcon />,
  },
  {
    id: "transfers",
    title: "Transfers",
    // icon: <TransferIcon />

  },
];
const ReviewAndConfirm = ({ setStep, BuildItineraryData, selectedFlights, setSelectedFlights, setSelectedHotel, setSelectedTour, setSelectedTransfers }) => {
  const [activeButton, setActiveButton] = useState("flights");
  const [isAiTabOpen, setIsAiTabOpen] = useState(false);
  const [switchSummary, setSwitchSummary] = useState(false);

  // console.log(BuildItineraryData);



  return (
    <>
      <div className='relative ' >
        {/* container in which all content  */}
        <div className='    bg-myWhite-color py-0.5 md:py-[20px] px-0.5 md:px-[20px] rounded-[20px] shadow-[0px_0px_18.3px_0px_#00000012]  min-h-[424.06px]  ' >

          <div className=" border border-dashed border-[#EEEEEE] p-2 sm:p-3 rounded-[20px] " >

            {/* header */}
            <div className='flex flex-wrap gap-4 justify-between min-h-[74px] border-b pb-3 md:pb-0 border-[#EEEEEE]  ' >
              <div>
                <div className="flex  items-center space-x-[10px] " >
                  <span className="bg-[#FF6600]  rounded-full text-sm font-bold text-myWhite-color h-5 w-5 flex items-center justify-center " >6</span>
                  <h1 className="text-[#000000] font-Poppins text-[24px] font-medium " >Review Your Trip Summary </h1>
                </div>
                <p className='font-inter text-xs text-[#58595B] ' >Follow these simple steps to design your dream journey.</p>
              </div>
              {/* AI button */}
              <button className='flex items-center w-max h-11 px-[42px] py-2 rounded-[9.34px] bg-[#007AFC] font-semibold font-inter text-sm text-myWhite-color text-nowrap '
                onClick={() => {
                  setSwitchSummary(prev => !prev)
                  // setActiveButton("")
                }}
              >
                {switchSummary ? "Switch to Itinerary Summary" : "Switch to Cities Summary"}
              </button>
            </div>

            {
              switchSummary ? <CitySummary BuildItineraryData={BuildItineraryData} /> : (
                <div
                  className="mt-[10px] flex flex-wrap gap-2 items-center  max-w-[390px] min-h-[65px] "
                >
                  {buttons?.map((btn) => {
                    return (
                      <button
                        key={btn.id}
                        className={`flex items-center border border-[#032749] w-max py-[3px] px-[24px] h-[32px] rounded-[20px]  font-Poppins text-[#032749] text-[12.34px] cursor-pointer ${activeButton === btn.id
                          ? "bg-[#042749] text-[#FFFFFF] "
                          : "  "
                          } `}
                        onClick={() => {
                          setActiveButton(btn.id)
                        }

                        }
                      >
                        {btn.title}
                      </button>
                    );
                  })}
                </div>
              )}

            {
              activeButton === "flights" && <ReviewFlights BuildItineraryData={BuildItineraryData} setSelectedFlights={setSelectedFlights} switchSummary={switchSummary} />
            }
            {
              activeButton === "hotels" && <ReviewHotel BuildItineraryData={BuildItineraryData} setSelectedHotel={setSelectedHotel} switchSummary={switchSummary} />
            }
            {
              activeButton === "tours" && <ReviewTours BuildItineraryData={BuildItineraryData} setSelectedTour={setSelectedTour} switchSummary={switchSummary} />
            }
            {
              activeButton === "transfers" && <ReviewTransfers BuildItineraryData={BuildItineraryData} setSelectedTransfers={setSelectedTransfers} switchSummary={switchSummary} />
            }
          </div>

          {/* go next page Button */}
          <div className=" flex justify-center mb-2 sm:block  sm:justify-normal sm:mb-0 " >
          <Button className=' w-xs sm:w-full  mt-[30px] bg-[#007AFC] hover:bg-[#007AFC]/90  font-inter text-[12.45px] cursor-pointer '
            onClick={() => setStep(4)}
          >Next (Documentation)</Button>
          </div>
        </div>


        {/* Ai right side sticky button */}
        {/* <div className=" flex justify-center items-center z-20 absolute top-0 right-0 h-[600px]  overflow-hidden border "> */}
        <div className={`  ${isAiTabOpen && "w-full"} transition-all ease-in-out duration-600 flex  items-center z-20 absolute top-0 right-0 h-[590px]  overflow-hidden  w-16  `}>
          {/* Toggle button */}
          <button
            className={` ${isAiTabOpen && "bg-myWhite-color "}   ml-3    `}
            onClick={() => setIsAiTabOpen((prev) => !prev)}
          >
            <AiButton />
          </button>
          {/* <WavyButton onClick={() => setIsAiTabOpen((prev) => !prev)} >asdsd</WavyButton> */}
          <div className={`Mycustom-scrollbar  bg-myWhite-color p-4  h-[580.06px] ${isAiTabOpen ? "w-full translate-x-0 " : "w-full translate-x-800  "} transition-all ease-in-out duration-600  overflow-auto `}  >
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


        {/* === close main container === */}
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

export default ReviewAndConfirm