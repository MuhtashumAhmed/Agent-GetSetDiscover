import { useState } from "react";
import { CrossIcon, FlightBoxArrow, PlaneDownIcon, PlaneUpIcon, RecommendedBG } from "../../../assets/icons/Icons"


const SelectedFlightCard = ({ selectedFlights, key, data, Recommended, crossIcon = true, className = "", onDelete }) => {
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(true);
    // console.log(data);

    return (
        <div key={key} className="relative my-4 sm:mt-4 "  >
            {data?.recommended && <div className="absolute top-[-40px] sm:top-[-46px] left-[-10px]" >
                <img src="/Subtract.png" className="   " />
                <span className="absolute top-4 left-5.5 sm:left-8.5 text-myWhite-color font-roboto text-sm sm:text-base " >Recommended</span>
            </div>}
            <div className={`relative bg-myWhite-color   max-w-[320px]  sm:max-w-[506px] h-[183px]  rounded-[10px] shadow-[0px_10px_13px_0px_#00000021] 
]   ${className} `} >
                <div className="px-2 sm:px-[17px] py-[11px] " >

                    {/* header - date and cross icon */}
                    <div className="flex justify-between items-center  " >
                        <span className="text-center h-[24px] w-[116px] rounded-[16px] border border-[#032749] py-1 px-2  text-xs font-inter text-[#032749] " >{data?.date}</span>
                        {crossIcon && (<button className="flex" onClick={onDelete}  ><CrossIcon /></button>)}

                    </div>
                    <div className="flex items-center justify-between mt-[16px] " >
                        {/* left content */}
                        <div>
                            <h3 className="font-manrope text-[#111827] font-bold text-sm " >{data?.departureCode}</h3>
                            <h6 className="font-manrope text-[10px] text-[#6B7280]  " >{data?.departureCity}</h6>
                            <span className="text-xs font-manrope text-[#6B7280] " >{data?.departureTime}</span>
                        </div>
                        <div className="flex items-center " >
                            <PlaneUpIcon className="mr-5 text-[#000000] " />
                            {/* line */}
                            <div className="flex flex-col  items-center" >
                                <FlightBoxArrow className="w-36 sm:w-auto  " />
                                <span className="font-manrope text-[#6B7280] text-xs  " >{data?.duration}</span>
                            </div>
                            <PlaneDownIcon className="ml-5" />
                        </div>
                        {/* right content */}
                        <div>
                            <h3 className="font-manrope text-[#111827] font-bold text-sm " >{data?.arrivalCode}</h3>
                            <h6 className="font-manrope text-[10px] text-[#6B7280]  " >{data?.arrivalCity}</h6>
                            <span className="text-xs font-manrope text-[#6B7280] " >{data?.arrivalTime}</span>
                        </div>
                    </div>
                    {/* bullets */}
                    <div className="flex items-center font-manrope text-[10px] text-[#4B5563] mt-2 " >
                        {data?.airline}
                        <li className=" ml-8" >{data?.class}</li>
                        <li className="ml-8" >{data?.stops}</li>
                    </div>
                    <hr className='text-[#EEEEEE] my-2 ' />

                    {/* price */}
                    <div className="flex items-center justify-between" >
                        <h2 className="font-manrope text-[#4B5563] text-sm  font-semibold " >Price</h2>
                        <h2 className="font-manrope text-[#4B5563] text-sm  font-semibold " >${data?.price}</h2>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default SelectedFlightCard