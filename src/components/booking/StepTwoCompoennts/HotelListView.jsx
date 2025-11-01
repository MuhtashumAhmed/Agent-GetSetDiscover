import { useState } from "react";
import { CrossIcon, FavouriteIcon, RatingStarIcon, SmallLocationIcon } from "../../../assets/icons/Icons"
import Modal from "../../Modal";
import HotelCard from "./HotelCard";
import HotelDetailModal from "./HotelDetailModal";


const hotelsData = [
    {
        id: 1,
        name: "Hanoitest Dubai",
        location: "Hanoi, Vietnam",
        rating: 4.7,
        price: 120,
        image: "/hotel.jpg",
        pricePer: "person"
    },
    {
        id: 2,
        name: "Marina Bay Sands",
        location: "Singapore",
        rating: 4.8,
        price: 350,
        image: "/hotel-2.jpg",
        pricePer: "person"
    },
    {
        id: 3,
        name: "Burj Al Arab",
        location: "Dubai, UAE",
        rating: 4.9,
        price: 1500,
        image: "/hotel.jpg",
        pricePer: "person"
    },
    {
        id: 4,
        name: "The Plaza Hotel",
        location: "New York, USA",
        rating: 4.6,
        price: 450,
        image: "/hotel-2.jpg",
        pricePer: "person"
    },
    {
        id: 5,
        name: "Shangri-La Hotel",
        location: "Paris, France",
        rating: 4.7,
        price: 280,
        image: "/hotel.jpg",
        pricePer: "person"
    },
    {
        id: 6,
        name: "Ritz Carlton",
        location: "London, UK",
        rating: 4.8,
        price: 320,
        image: "/hotel-2.jpg",
        pricePer: "person"
    },
    {
        id: 7,
        name: "Taj Mahal Palace",
        location: "Mumbai, India",
        rating: 4.5,
        price: 200,
        image: "/hotel-2.jpg",
        pricePer: "person"
    },
    {
        id: 8,
        name: "Mandarin Oriental",
        location: "Karachi",
        rating: 4.7,
        price: 180,
        image: "/hotel-2.jpg",
        pricePer: "person"
    },
    {
        id: 9,
        name: "Four Seasons",
        location: "Tokyo, Japan",
        rating: 4.9,
        price: 400,
        image: "/hotel.jpg",
        pricePer: "person"
    },
    {
        id: 10,
        name: "Wynn Las Vegas",
        location: "Islamabad",
        rating: 4.6,
        price: 250,
        image: "/hotel.jpg",
        pricePer: "person"
    },
    {
        id: 11,
        name: "Atlantis The Palm",
        location: "Dubai, UAE",
        rating: 4.4,
        price: 300,
        image: "/hotel-2.jpg",
        pricePer: "person"
    },
    {
        id: 12,
        name: "Hotel del Coronado",
        location: "Lahore",
        rating: 4.3,
        price: 220,
        image: "/hotel.jpg",
        pricePer: "person"
    }
];

const HotelListView = ({ selectedHotel, setSelectedHotel }) => {
    const [isHotelDetailModal, setIsHotelDetailModal] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [detailCardData, setDetailCardData] = useState()

    // console.log("detail card data is: ", detailCardData);
    // console.log(selectedHotel);

    const handleDelete = (e, hotel) => {
        e.stopPropagation();

        setSelectedHotel((prevHotels) =>
            prevHotels.filter((h) => h.id !== hotel.id) // remove only the clicked hotel
        );
    };

    return (
        <div>
            {/* selected hotel */}
            {/* selectedHotel.length > 0 && ( */}
            {selectedHotel.length > 0 && (
                <div>
                    <h2 className="font-Poppins font-medium text-2xl text-myBlack">
                        Selected Hotels
                    </h2>
                    <hr className="text-[#EEEEEE]" />
                    <div className="flex flex-wrap gap-4  " >
                        {selectedHotel.map((hotel, index) => (
                            <div
                                key={hotel.id || index}
                                className="flex gap-3 items-center mt-[10px] w-[333px] h-[124px] rounded-[12px] bg-myWhite-color shadow-[4px_8px_100px_0px_#1118270F]"
                            >
                                {/* image */}
                                <figure className="h-[100px] w-[100px]">
                                    <img
                                        src={hotel?.image}
                                        className="rounded-lg h-full w-full object-cover"
                                        alt={hotel?.name}
                                    />
                                </figure>

                                {/* hotel details */}
                                <div className="font-Poppins flex flex-col gap-1">
                                    <h6 className="font-medium text-sm text-[#1D1D1D]">{hotel?.name}</h6>
                                    <p className="flex items-center gap-1 text-xs text-[#032749]">
                                        <SmallLocationIcon />
                                        {hotel?.location}
                                    </p>
                                    <span className="flex items-center gap-1 text-xs text-[#1D1D1D]">
                                        <RatingStarIcon /> {hotel?.rating}
                                    </span>
                                    <h3 className="flex items-center text-base text-[#FF6726]">
                                        ${hotel?.price}
                                        <span className="text-[#838383] text-sm">/person</span>
                                    </h3>
                                </div>

                                {/* fav and cross icon */}
                                <div className="flex-1 flex gap-x-2 justify-end h-full p-4">
                                    <FavouriteIcon />
                                    <button
                                        className="flex"
                                        onClick={(e) => handleDelete(e, hotel)} // pass hotel instead of selectedHotel
                                    >
                                        <CrossIcon />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}


            {/* suggested Hotels */}
            {/* <div className="mt-[15px]  "> */}
            <div className={`mt-[15px]  ${!showResults && "h-96 overflow-hidden"}`}>
                <h2 className='font-Poppins font-medium text-2xl text-myBlack'>Suggested Hotels:</h2>

                <div className="relative mt-[15px]">
                    {/* Container with conditional blur and skeleton/real data */}
                    <div className={`flex flex-wrap gap-x-4 gap-y-2.5 transition-all duration-300 ${!showResults ? 'blur-md pointer-events-none' : 'blur-0'
                        }`}>
                        {hotelsData?.map((data, key) => (
                            <HotelCard
                                key={key}
                                data={data}
                                crossIcon={false}
                                setIsHotelDetailModal={setIsHotelDetailModal}
                                showResults={showResults}
                                setDetailCardData={setDetailCardData}
                            />
                        ))}
                    </div>

                    {/* View Results Button - Centered over hotel cards only */}
                        {/* <div className="absolute  inset-0  items-center justify-center bg-gradient-to-b from-transparent to-white/20 rounded-lg"> */}
                    {!showResults && (
                        <div className="absolute sm:-top-52 inset-0  sm:flex items-center justify-center bg-gradient-to-b from-transparent to-white/20 rounded-lg  ">
                        
                            <button
                                onClick={() => setShowResults(true)}
                                className="bg-gradient-to-r from-[#0019CB] to-[#00BFFF] cursor-pointer text-white font-Poppins font-medium px-6 py-3 rounded-lg shadow-lg hover:from-[#0019CB]/85 hover:to-[#00BFFF]/70 transition-colors duration-200 z-10"
                            >
                                View Results
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {
                isHotelDetailModal && (
                    <Modal isModalOpen={isHotelDetailModal} onClose={() => setIsHotelDetailModal(false)} className="rounded-[12.67px] max-w-[350px] md:max-w-[691.90px] w-full  " >
                        <HotelDetailModal detailCardData={detailCardData} selectedHotel={selectedHotel} setSelectedHotel={setSelectedHotel} setIsHotelDetailModal={setIsHotelDetailModal} />
                    </Modal>
                )
            }
            {/* --- close main container ---- */}
        </div>
    )
}

export default HotelListView