import { useState } from "react";
import { AirConditionIcon, BreakfastIcon, DedicatedIcon, DoorIcon, EntranceFeesIcon, ExpertTeamIcon, FitnessRatingIcon, GroupSizeIcon, HairDryerIcon, KeyIcon, LuggageIcon, MealsIcon, MessageIcon, MicrowaveIcon, RatingFiveStarIcon, RatingStarIcon, RefrigeratorIcon, SecurityCameraIcon, SmallLocationIcon, TransportIcon, WifiIcon, WilDMilesIcon } from "../../../assets/icons/Icons"
import ReviewCard from "./ReviewCard";
import Dropdown from "../../Dropdown";
import ExpandableText from "../../ExpandableText";
import { RxCross2 } from "react-icons/rx";


const facilities = [
    { icon: <MealsIcon />, label: "MEALS" },
    { icon: <TransportIcon />, label: "TRANSPORT" },
    { icon: <GroupSizeIcon />, label: "GROUP SIZE" },
    { icon: <ExpertTeamIcon />, label: "EXPERT TEAM" },
    { icon: <EntranceFeesIcon />, label: "ENTRANCE FEES" },
    { icon: <FitnessRatingIcon />, label: "FITNESS RATING" },
    { icon: <WilDMilesIcon />, label: "WILD MILES" },

];

const reviews = [
    {
        image: "/review-img.png",
        name: "Helene Moore",
        from: "From Google Review",
        reviewStar: <RatingFiveStarIcon />,
        date: "June 5, 2019",
        message:
            "The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7\" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.",
    },
    {
        image: "/review-img.png",
        name: "Helene Moore",
        from: "From Google Review",
        reviewStar: <RatingFiveStarIcon />,
        date: "June 5, 2019",
        message:
            "The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7\" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.",
    },
];

const ToursDetailModal = ({ detailTourCardData, selectedTour, setSelectedTour, setIsHotelDetailModal }) => {
    const [activeTab, setActiveTab] = useState("facilities"); //  default Facilities
    const [selected, setSelected] = useState("Negative Reviews");
    // console.log(selectedTour);


    const handleReserveTour = () => {
        setSelectedTour((prevTours) => {
            // optional: avoid duplicates by id
            const alreadyAdded = prevTours.some((t) => t.id === detailTourCardData.id);
            if (!alreadyAdded) {
                return [...prevTours, detailTourCardData];
            }
            return prevTours;
        });

        setIsHotelDetailModal(false);
    };

    return (
        <div className="px-1 flex flex-col gap-[14px]  custom-scrollbar mb-3 max-h-[510px] h-full overflow-auto -mt-4  relative " >
            <div className='absolute top-12 right-0  mr-1.5 mt-0.5 sm:hidden' onClick={() => setIsHotelDetailModal(false)} >
                <RxCross2 className='text-myWhite-color bg-myBlack p-1 rounded-full text-2xl  ' />
            </div>
            <div className=" flex  items-center  justify-between " >

                <h1 className="font-Poppins text-xl md:text-[25.34px] font-medium text-[#202226] " >{detailTourCardData?.name}</h1>
                <div className="flex flex-col gap-1 " >
                    <p className='flex items-center gap-1 text-xs text-[#032749]  ' ><SmallLocationIcon />{detailTourCardData?.location} </p>
                    <span className='flex items-center gap-1 text-xs text-[#1D1D1D] ' >{detailTourCardData?.rating} <RatingFiveStarIcon /> </span>
                </div>
            </div>

            {/* image and content section */}
             <div className="flex flex-wrap md:flex-nowrap gap-[10px] font-manrope  " >
                <figure className="h-[209.09px] w-full rounded-[10.65px]  " >
                    <img src={detailTourCardData?.image} className="rounded-[10.65px] w-full h-full object-cover " />
                </figure>
                <div className=" " >
                    <div className=" max-w-[306.66px] " >
                        <h5 className="font-Poppins text-[10.14px] text-[#1B1B1B] mb-[5px] " >About Times City:</h5>
                        <p className="text-[#838383] text-[8.85px]  " >Neelum Valley is a 144 km long bow-shaped thickly forested region in Azad Kashmir, Pakistan. The valley is situated in the northeast of Muzaffarabad, running parallel to Kaghan Valley. The two valleys are only separated by snow-covered peaks, some over 4,000 meters (13,000 ft) above sea level.</p>
                    </div>
                    <div>

                        <h5 className="font-Poppins text-[10.14px] text-[#1B1B1B] mb-[5px] " >Highlights</h5>
                        <p className="font-manrope text-[8.87px] text-[#222222] mt-2 " >Explore Auckland and Coromandel Peninsula Relax in natural hot tubs at Hot Water Beach
                            Tour the Hobbiton movie set in Matamata Learn Maori culture and enjoy a hangi meal Experience adrenaline sports in Lake Taupo</p>
                    </div>

                </div>
            </div>

            {/* buttons navigation */}
            <div className=" h-[34.22px] bg-[#FF66001A] rounded-[24.08px] py-1 px-[6.35px] flex gap-2 ">
                <button
                    onClick={() => setActiveTab("facilities")}
                    className={`px-4 py-1 w-full  font-manrope text-[10.14px] rounded-[20px] text-sm font-medium transition-all ${activeTab === "facilities"
                        ? "bg-[#FF6600] text-white"
                        : "text-[#202226]"
                        }`}
                >
                    Facilities
                </button>
                <button
                    onClick={() => setActiveTab("reviews")}
                    className={`px-4 py-1 w-full  font-manrope text-[10.14px] rounded-[20px] text-sm font-medium transition-all ${activeTab === "reviews"
                        ? "bg-[#FF6600] text-white"
                        : "text-[#202226]"
                        }`}
                >
                    Reviews
                </button>
            </div>


            {/* --- Tab Content --- */}
            <div className="mt-2 mb-[6px] ">
                {activeTab === "facilities" && (
                    <div>
                        <h4 className="font-Poppins font-medium text-[10.14px] text-[#1B1B1B] " >Overview</h4>
                        <ExpandableText
                            text="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Great fit for solo travelers on budget: central and safe location, small individual sleeping cubicle with door and lock. Friendly staff on-site 24/7. Free vegetarian breakfast 24/7. Great fit for solo travelers on budget ..... "
                            limit={300} // you can adjust this
                        />

                        <h3 className=" font-roboto text-[13.94px] text-[#222222] my-[14px] font-bold " >More info:</h3>
                        <div className="flex flex-wrap gap-2" >
                            {
                                facilities?.map((d, i) => {
                                    return (
                                        <div className=" flex flex-wrap items-center gap-[10.14px] w-full  md:max-w-[300px] bg-[#F8F8F8]  mb-[10.14px] border border-[#EEEEEE] py-2 px-4 rounded-[8px] " >
                                            {d.icon}
                                            <span className="font-poppins text-[#1A1A1A] text-sm " >{d.label}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* button */}
                        <button className="mt-[10.87px] mb-[0px] rounded-[5.07px] w-[130.4px] h-[30.74px] border border-[#222222] font-roboto text-[#222222] text-[10.14px] " >Show all 25 amenities</button>

                    </div>
                )}

                {activeTab === "reviews" && (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap items-center justify-between  " >
                            <div className="flex flex-col pl-6  " >
                                <h1 className="font-manrope text-[#222222] text-[44px] font-semibold " >{detailTourCardData?.rating}</h1>
                                <span className="font-manrope text-sm text-[#9B9B9B]  " >{detailTourCardData?.rating} ratings</span>
                            </div>
                            <figure>
                                <img src="/rating.png" />
                            </figure>
                        </div>


                        <div className="flex items-center justify-between mt-[25px] " >
                            <h1 className="font-manrope text-2xl text-[#222222] font-[600]  " >8 reviews</h1>
                            <Dropdown
                                options={["Negative Reviews", "Positive Reviews", "Most Recent"]}
                                value={selected}
                                onChange={setSelected}
                                className="w-56  "
                                buttonClass="bg-[#F4F4F4] text-gray-800  "
                                menuClass="w-56"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2" >
                            {
                                reviews?.map((d, i) => {
                                    return <ReviewCard data={d} key={i} />
                                })
                            }
                        </div>

                    </div>
                )}
            </div>

            {/* bottom box */}
            <div className=' bg-myWhite-color rounded-[9.5px] border-[0.63px] border-[#D6D6D6] shadow-[0px_0px_11.66px_#0000000F] h-[57.02px]  px-[15.21px] flex justify-between items-center ' >
                <div>
                    <span className='text-[#838383] font-Poppins text-[8.74px]  ' >Total Amount</span>
                    <h3 className='font-Poppins font-medium text-[17.74px] text-[#FF6726] ' >${detailTourCardData?.price}</h3>
                </div>
                <button className='h-[30.41px] w-[115.31px] bg-[#007AFC] rounded-[10.14px] font-manrope text-[10.41px] text-myWhite-color ' onClick={() => handleReserveTour()} >Reserve A Tour</button>
            </div>
        </div>



    )
}

export default ToursDetailModal