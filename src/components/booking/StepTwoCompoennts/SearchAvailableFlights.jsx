import React, { useState } from 'react'
import { DropdownIcon, PlaneDownIcon } from '../../../assets/icons/Icons';
import SelectedFlights from './SelectedFlights';
import SelectedFlightCard from './SelectedFlightCard';
import Modal from '../../Modal';
import FlightDetailPage from './FlightDetailPage';
import DisplaySelectedFlight from './DisplaySelectedFlight';

const options = [
    "Istanbul ",
    "Istanbul  ",
    "Istanbul "
];

const topFilters = [
    { label: "KHI - SAW", path: "#" },
    { label: "SAW - MAK", path: "#" },
    { label: "MAK-LHE", path: "#" },
];

// Dummy data array based on the screenshot
const flightData = [
    {
        id: 1,
        date: "24 March 2024",
        image: "/Group-3753.png",
        departureCode: "KHI",
        departureCity: "Karachi",
        departureTime: "08:30",
        arrivalCode: "SAW",
        arrivalCity: "Istanbul",
        arrivalTime: "09:30",
        duration: "1h 30m",
        airline: "Santosa Air",
        class: "Economy",
        stops: "Direct",
        price: "125,000",
        recommended: true,


    },
    {
        id: 2,
        date: "25 March 2024",
        image: "/Group-3753.png",
        departureCode: "KHI",
        departureCity: "Karachi",
        departureTime: "10:15",
        arrivalCode: "IST",
        arrivalCity: "Istanbul",
        arrivalTime: "12:45",
        duration: "2h 30m",
        airline: "Turkish Airlines",
        class: "Economy",
        stops: "1 Stop",
        price: "110,000",
        recommended: false,


    },
    {
        id: 3,
        date: "24 March 2024",
        image: "/Group-3753.png",
        departureCode: "LHE",
        departureCity: "Lahore",
        departureTime: "14:20",
        arrivalCode: "SAW",
        arrivalCity: "Istanbul",
        arrivalTime: "17:50",
        duration: "3h 30m",
        airline: "Emirates",
        class: "Business",
        stops: "Direct",
        price: "185,000",
        recommended: false,


    },
    {
        id: 4,
        date: "26 March 2024",
        image: "/Group-3753.png",
        departureCode: "ISB",
        departureCity: "Islamabad",
        departureTime: "06:45",
        arrivalCode: "IST",
        arrivalCity: "Istanbul",
        arrivalTime: "10:15",
        duration: "3h 30m",
        airline: "Qatar Airways",
        class: "Economy",
        stops: "1 Stop",
        price: "135,000",
        recommended: false,


    },
    {
        id: 5,
        date: "25 March 2024",
        image: "/Group-3753.png",
        departureCode: "KHI",
        departureCity: "Karachi",
        departureTime: "22:30",
        arrivalCode: "IST",
        arrivalCity: "Istanbul",
        arrivalTime: "02:15",
        duration: "3h 45m",
        airline: "Pegasus Airlines",
        class: "Economy",
        stops: "Direct",
        price: "95,000",
        recommended: false,


    }
];
const SearchAvailableFlights = ({ selectedFlights, setSelectedFlights }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [activeTab, setActiveTab] = useState("KHI - SAW");
    const [activeCard, setActiveCard] = useState();

    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

    const handleCardClick = (card) => {
        setActiveCard(card);     //  Jo card click hua uska data set karo
        setIsDetailModalOpen(true);    // Modal open karo
        // console.log(card);

    };
    // console.log(selectedFlight);


    return (
        <div className='w-full' >
            {/* search bar */}
            <div className="flex items-center bg-[#F5F5F5] rounded-[18px] px-3 h-[63px] flex-1 relative">
                <img src="/search.png" alt="search" />
                <input
                    type="text"
                    placeholder="Search here."
                    className="bg-transparent ml-[6px] outline-none flex-1 text-base font-Poppins text-[#868F9B]"
                />

                {/* dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex gap-3 items-center justify-center bg-myWhite-color px-3 py-2 rounded-xl text-sm font-manrope text-[#000000]  min-w-[100px] h-[49px] "
                    >
                        {selectedOption || "Istanbul"}
                        <DropdownIcon />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-full right-0 mt-1 bg-myWhite-color  rounded-xl shadow-lg z-10 w-[100px] text-sm font-manrope ">
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setSelectedOption(option);
                                        setIsDropdownOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[11px] font-Poppins text-[#868F9B]"
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* buttons filter */}
            <div className="mt-[15px]  flex items-center gap-x-[5px] w-max h-[42.8px] rounded-[100px] py-[5px] px-[5px] bg-[#FFFFFF]">
                {topFilters.map((filter) => (
                    <button
                        key={filter.label}
                        onClick={() => setActiveTab(filter)}
                        className={`w-max h-[31px] rounded-[18px] px-[18px] flex items-center justify-center font-manrope text-sm transition-colors  ${activeTab === filter
                            ? "bg-[#042749] text-[#FFFFFF]"
                            : "bg-[#F5F5F5] text-[#838383] hover:bg-[#E5E5E5]"
                            }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* selected flights */}
            {
                selectedFlights.length > 0 && (
                    <div className='mt-[15px]  ' >
                        {/* <SelectedFlights selectedFlight={selectedFlight}  /> */}
                        <DisplaySelectedFlight selectedFlights={selectedFlights} setSelectedFlights={setSelectedFlights} />

                    </div>

                )
            }


            {/* suggested flights */}
            <div className='mt-[15px]  ' >
                <h2 className='font-manrope font-bold text-[20px] text-[#000000] ' >Suggested Flights:</h2>
                <hr className='text-[#EEEEEE] my-2 ' />
                <div className='flex flex-wrap gap-4 mt-[30px]   ' >
                    {/* <SelectedFlightCard Recommended={"Recommended"} /> */}
                    {
                        flightData?.map((data, i) => {
                            return (
                                <div className='' onClick={() => handleCardClick(data)} >

                                    <SelectedFlightCard key={i} data={data} crossIcon={false} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>



            {isDetailModalOpen && (
                <Modal isModalOpen={isDetailModalOpen} onClose={() => setIsDetailModalOpen(false)} className="rounded-[20px] max-w-[482px]  " >
                    <FlightDetailPage activeCard={activeCard} selectedFlights={selectedFlights} setSelectedFlights={setSelectedFlights} setIsDetailModalOpen={setIsDetailModalOpen} />
                </Modal>
            )}
            {/* -- close main container --- */}
        </div>
    )
}

export default SearchAvailableFlights