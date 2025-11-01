
import { ChairIcon, CrossIcon, DirectionIcon, EconomyIcon, FlightBoxArrow, MealIcon, PlaneDownIcon, PlaneIcon, PlaneUpIcon, TimeIcon, TwoStopIcon } from '../../../assets/icons/Icons'
import { RxCross2 } from "react-icons/rx";
const FlightDetailPage = ({ setIsDetailModalOpen, activeCard, setSelectedFlights, selectedFlights }) => {
    // console.log("Array of selcted flights are: ", selectedFlights);

    const handleSelectFlight = (e) => {
        e.stopPropagation()

        setSelectedFlights((prev) => {
            // check if already selected
            const alreadyAdded = prev.some(f => f.id === activeCard.id)
            if (alreadyAdded) return prev // ignore duplicate

            return [...prev, activeCard]
        })

        // optionally close modal
        setIsDetailModalOpen(false)
    }

    return (
        // <div className='custom-scrollbar mb-4  sm:w-auto max-h-[600px] overflow-auto -mt-4 ' >
        <div className=' relative custom-scrollbar mb-4 w-xs sm:w-auto max-h-[600px] overflow-auto -mt-4 ' >
        <div className='absolute to-0 right-0  mr-1.5 mt-0.5 sm:hidden' onClick={()=>   setIsDetailModalOpen(false) }  >
            <RxCross2 className='text-myWhite-color bg-myBlack p-1 rounded-full text-2xl  ' />

        </div>
            <div className='flex flex-col gap-[14px] bg-myWhite-color ' >
                {/* slider */}
                <figure className='h-[209px] w-full ' >
                    {/* <img src='/Group 3753.png' /> */}
                    <img src={activeCard?.image} />
                </figure>
                {/* content box */}
                <div className='p-4 h-[238px] rounded-[14px] bg-myWhite-color 
               backdrop-blur-[6.3px] 
               shadow-[4px_8px_100px_0px_#1118270F]' >
                    {/* header */}
                    <div className='flex justify-between' >
                        <div className='flex flex-col ' >
                            <h2 className='font-Poppins font-medium text-[20px] text-[#202226] ' >{activeCard?.departureCity} to {activeCard?.arrivalCity}</h2>
                            <div className='flex items-center  ' >
                                <span className='flex items-center gap-1.5   font-manrope text-xs text-[#4B5563] '  ><TimeIcon />{activeCard?.duration} </span>
                                {
                                    activeCard?.stops === 0 || activeCard?.stops === "Direct" && (<span className='flex items-center gap-1.5 ml-2  font-manrope text-xs text-[#4B5563] ' ><DirectionIcon />Direct </span>)
                                }

                            </div>
                        </div>
                        <span className="text-center h-[24px] w-[100px]  md:w-[116px] rounded-[16px] border border-[#032749] py-1 px-2  text-[10px] md:text-xs font-inter text-[#032749] " >{activeCard?.date}</span>
                    </div>

                    <div className='bg-[#EEEEEE] h-[69px] rounded-[14px]  mt-4 flex items-center pl-[9.64px] gap-[10px] '>
                        <img src='/airline.png' className='h-[50px] w-[50px] rounded-[8px]  ' />
                        <h2 className='text-[#111827] font-manrope font-bold text-sm ' >{activeCard?.airline} </h2>
                    </div>

                    <div className='bg-[#EEEEEE] h-[69px] rounded-[14px]  mt-4 flex items-center px-[9.64px] gap-[10px] '>
                        <div className="flex items-center justify-between mt-[16px] w-full" >
                            {/* left content */}
                            <div className='flex ' >
                                <PlaneUpIcon className="mr-3 text-myBlack " />
                                <div>
                                    <h6 className="font-manrope text-[10px] text-[#6B7280]  " >{activeCard?.departureCity} </h6>
                                    <span className="text-sm font-bold font-manrope text-[#111827] " >{activeCard?.departureTime}</span>

                                </div>
                            </div>
                            <div className="flex items-center ml-4" >
                                <div className="flex flex-col items-center" >
                                    {/* <FlightBoxArrow width='152.11' /> */}
                                    <FlightBoxArrow className='w-[70px]  sm:w-[152px] ' />
                                    <span className="font-manrope text-[#6B7280] text-xs  " >{activeCard?.duration}</span>
                                </div>
                            </div>
                            {/* right content */}
                            <div className=' flex gap-3' >
                                <PlaneDownIcon className="ml-5" />
                                <div>

                                    <h6 className="font-manrope text-[10px] text-[#6B7280]  " >{activeCard?.arrivalCity}</h6>
                                    <span className="text-sm font-bold font-manrope text-[#111827] " >{activeCard?.arrivalTime}</span>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                {/* box 2 */}
                <div className=' p-4  rounded-[14px] bg-[#F8F8F8] 
               backdrop-blur-[6.3px] 
               shadow-[4px_8px_100px_0px_#1118270F]' >
                    {/* header */}

                    <h2 className='text-sm font-manrope font-bold text-[#111827] ' >More info:</h2>

                    <div className='flex flex-wrap gap-2 ' >
                        <div className='flex items-center gap-6 h-[54.17px] max-w-[190.15px] w-full rounded-[8px] border border-[#EEEEEE] pl-7  ' >
                            <EconomyIcon />
                            <span className='text-xs font-manrope text-[#4B5563] ' >Economy</span>
                        </div>
                        <div className='flex items-center gap-6 h-[54.17px] max-w-[190.15px] w-full rounded-[8px] border border-[#EEEEEE] pl-7  ' >
                            <PlaneIcon />
                            <span className='text-xs font-manrope text-[#4B5563] ' >A321 (Narrowbody)</span>
                        </div>
                        <div className='flex items-center gap-6 h-[54.17px] max-w-[190.15px] w-full rounded-[8px] border border-[#EEEEEE] pl-7  ' >
                            <TwoStopIcon />
                            <span className='text-xs font-manrope text-[#4B5563] ' >{activeCard?.stops}</span>
                        </div>
                        <div className='flex items-center gap-6 h-[54.17px] max-w-[190.15px] w-full rounded-[8px] border border-[#EEEEEE] pl-7  ' >
                            <ChairIcon />
                            <span className='text-xs font-manrope text-[#4B5563] ' >76 cm seat pitch</span>
                        </div>
                        <div className='flex items-center gap-6 h-[54.17px] max-w-[190.15px] w-full rounded-[8px] border border-[#EEEEEE] pl-7  ' >
                            <MealIcon />
                            <span className='text-xs font-manrope text-[#4B5563] ' >Meal Provided</span>
                        </div>



                    </div>
                </div>

                {/* bottom box */}
                <div className='bg-myWhite-color rounded-[9.5px] border-[0.63px] border-[#D6D6D6] shadow-[0px_0px_11.66px_#0000000F] h-[57.02px] mt-[14px] px-[15.21px] flex justify-between items-center ' >
                    <div>
                        <span className='text-[#838383] font-Poppins text-[8.74px]  ' >Total Amount</span>
                        <h3 className='font-Poppins font-medium text-[17.74px] text-[#FF6726] ' >${activeCard?.price}</h3>
                    </div>
                    <button className='h-[30.41px] w-[115.31px] bg-[#007AFC] rounded-[10.14px] font-manrope text-[10.41px] text-myWhite-color ' onClick={(e) => handleSelectFlight(e)} >Reserve A Flight</button>
                </div>

            </div>
        </div>
    )
}

export default FlightDetailPage