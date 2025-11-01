import { useState } from "react";
import { DotIcon, GreaterSign, OrangeCircle } from "../../assets/icons/Icons";
import Adult from "../../components/booking/StepFourComponents/Adult";
import Children from "../../components/booking/StepFourComponents/Children";
import Infants from "../../components/booking/StepFourComponents/Infants";
import Pets from "../../components/booking/StepFourComponents/Pets";
import Button from "../../components/Button";


const buttons = [
  {
    id: "all",
    title: "All",

  },
  {
    id: "adults",
    title: "Adults",

  },
  {
    id: "children",
    title: "Children",

  },
  {
    id: "infants",
    title: "Infants",

  },
  {
    id: "pets",
    title: "Pets",

  },
];
const TravelerInfo = ({ passengers, setPassengers }) => {
  const [activeButton, setActiveButton] = useState("all");
  // console.log(passengers);


  const [activeIndex, setActiveIndex] = useState(0);



  /* helper: 1 → 1st, 2 → 2nd, 3 → 3rd, … */
  const ordinal = (n) =>
    n +
    ([, "st", "nd", "rd"][(n % 100 >> 3) ^ 1 && n % 10] || "th") +
    " Destination";

  return (
    <>
      <div className='bg-myWhite-color rounded-[25px] p-1 md:p-5   '  >
        {/* header */}
        <div className="border border-dashed border-[#EEEEEE] p-[10px] rounded-[20px]     " >

          <div className='pb-[15px] border-b border-[#EEEEEE]  ' >
            <div className="flex  items-center space-x-[10px]   " >
              <span className="bg-[#FF6600]  rounded-full text-sm font-bold text-myWhite-color h-5 w-5 flex items-center justify-center " >7</span>
              <h1 className="text-[#000000] font-Poppins text-[24px] font-medium " >Documents (Optional)</h1>
            </div>
            <p className='font-inter text-xs text-[#58595B] ' >Follow these simple steps to design your dream journey.</p>
          </div>

          {/* navigation buttons */}
          <div
            className="mt-2 flex flex-wrap gap-2 items-center  w-full min-h-[65px] "
          >
            {buttons?.map((btn) => {
              return (
                <button
                  key={btn.id}
                  className={`flex items-center border border-[#032749] w-max py-[1px] px-[18.13px] h-[32px] rounded-[20px]  font-manrope text-[#032749] text-sm cursor-pointer ${activeButton === btn.id
                    ? "bg-[#042749] text-[#FFFFFF] "
                    : " border border-[#E6E6E6] bg-[#F5F5F5] hover:bg-[#F5F5F5]/60 transition-all ease  text-[#838383]   "
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

          {
            activeButton === "all" && (

              <div className="flex  flex-col gap-6 " >
                {
                  passengers.adults > 0 &&
                  <div>
                    <h2 className="flex items-center font-manrope text-myBlack text-[20px] font-bold">For Adults</h2>
                    <Adult passengers={passengers} />
                  </div>
                }

                {
                  passengers.children > 0 &&
                  <div>
                    <h2 className="flex items-center font-manrope text-myBlack text-[20px] font-bold">For Children</h2>
                    <Children passengers={passengers} />
                  </div>
                }

                {
                  passengers.infants > 0 &&
                  <div>
                    <h2 className="flex items-center font-manrope text-myBlack text-[20px] font-bold">For Infants</h2>
                    <Infants passengers={passengers} />
                  </div>
                }
                {
                  passengers.pets > 0 &&

                  <div>
                    <h2 className="flex items-center font-manrope text-myBlack text-[20px] font-bold">For Pets</h2>
                    <Pets passengers={passengers} />
                  </div>
                }{
                  (passengers.adults <= 0 && passengers.children <= 0 && passengers.infants <= 0 && passengers.pets <= 0) &&
                  <p className="capitalize text-gray-500 text-center text-sm">No data found</p>
                }

              </div>
            )
          }
          {
            activeButton === "adults" && <Adult passengers={passengers} />
          }
          {
            activeButton === "children" && <Children passengers={passengers} />
          }
          {
            activeButton === "infants" && <Infants passengers={passengers} />
          }
          {
            activeButton === "pets" && <Pets passengers={passengers} />
          }



        </div>

        {/* {
        activeButton === "adults" && (
          
        )
      } */}


        {
          passengers.adults > 0 && (

            <Button
              className="mt-4 bg-[#007AFC] hover:bg-[#007AFC]/90 cursor-pointer text-[16px] font-inter"
            // onClick={() => setStep((prev) => prev + 1)}
            >
              Submit
            </Button>
          )
        }

        {/* ---- main clsoe container --- */}
      </div>
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

export default TravelerInfo