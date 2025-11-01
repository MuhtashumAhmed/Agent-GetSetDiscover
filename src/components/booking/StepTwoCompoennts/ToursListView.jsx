import { useState } from "react";
import { CrossIcon, FavouriteIcon, RatingStarIcon, SmallLocationIcon } from "../../../assets/icons/Icons"
import Modal from "../../Modal";
import HotelCard from "./HotelCard";
import HotelDetailModal from "./HotelDetailModal";
import ToursDetailModal from "./ToursDetailModal";


const hotelsData = [
    {
        id: 1,
        name: "Day Tour to Cappadocia",
        location: "Hanoi, Vietnam",
        rating: 4.7,
        price: 120,
        image: "/tour.png",
        pricePer: "person"
    },
    {
        id: 2,
        name: "Hanoitest Istanbul",
        location: "Singapore",
        rating: 4.8,
        price: 350,
        image: "/tour-2.png",
        pricePer: "person"
    },
    {
        id: 3,
        name: "Hanoitest Istanbul",
        location: "Dubai, UAE",
        rating: 4.9,
        price: 1500,
        image: "/tour.png",
        pricePer: "person"
    },
    {
        id: 4,
        name: "Day Tour to Cappadocia",
        location: "New York, USA",
        rating: 4.6,
        price: 450,
        image: "/tour-2.png",
        pricePer: "person"
    },
    {
        id: 5,
        name: "Shangri-La Hotel",
        location: "Islamabad",
        rating: 4.7,
        price: 280,
        image: "/tour.png",
        pricePer: "person"
    },
    {
        id: 6,
        name: "Day Tour to Cappadocia",
        location: "London, UK",
        rating: 4.8,
        price: 320,
        image: "/tour-2.png",
        pricePer: "person"
    },
    {
        id: 7,
        name: "Bursa and Uludag Mountain",
        location: "Lahore",
        rating: 4.5,
        price: 200,
        image: "/tour-2.png",
        pricePer: "person"
    },
    {
        id: 8,
        name: "Bursa and Uludag Mountain",
        location: "Bangkok, Thailand",
        rating: 4.7,
        price: 180,
        image: "/tour-2.png",
        pricePer: "person"
    },
    {
        id: 9,
        name: "Four Seasons",
        location: "Tokyo, Japan",
        rating: 4.9,
        price: 400,
        image: "/tour.png",
        pricePer: "person"
    },
    {
        id: 10,
        name: "Bursa and Uludag Mountain",
        location: "Las Vegas, USA",
        rating: 4.6,
        price: 250,
        image: "/tour.png",
        pricePer: "person"
    },
    {
        id: 11,
        name: "Bursa and Uludag Day Tour",
        location: "Karachi",
        rating: 4.4,
        price: 300,
        image: "/tour-2.png",
        pricePer: "person"
    },
    {
        id: 12,
        name: "Bursa and Uludag Day Tour",
        location: "San Diego, USA",
        rating: 4.3,
        price: 220,
        image: "/tour.png",
        pricePer: "person"
    }
];

const ToursListView = ({ selectedTour, setSelectedTour }) => {
    const [isHotelDetailModal, setIsHotelDetailModal] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [detailTourCardData, setDetailTourCardData] = useState()
    // console.log("detail card data is: ", detailTourCardData);


    const handleDeleteTour = (e, tour) => {
        e.stopPropagation();
        setSelectedTour((prevTours) => prevTours.filter((t) => t.id !== tour.id));
    };

    return (
        <div>


            {/* selected Tour */}
            {selectedTour.length > 0 && (
                <div className="" >
                    <h2 className="font-Poppins font-medium text-2xl text-myBlack">
                        Selected Tours
                    </h2>

                    <hr className="text-[#EEEEEE]" />
                    <div className="flex flex-wrap gap-4  " >


                        {selectedTour.map((tour, index) => (
                            <div
                                key={tour.id || index}
                                className="flex gap-3 items-center mt-[10px] w-[333px] h-[124px] rounded-[12px] bg-myWhite-color shadow-[4px_8px_100px_0px_#1118270F]"
                            >
                                {/* image */}
                                <figure className="h-[100px] w-[100px]">
                                    <img
                                        src={tour?.image || "/tour-2.png"}
                                        className="rounded-lg h-full object-cover"
                                        alt={tour?.name}
                                    />
                                </figure>

                                {/* tour details */}
                                <div className="font-Poppins flex flex-col gap-1">
                                    <h6 className="font-medium text-sm text-[#1D1D1D]">
                                        {tour?.name}
                                    </h6>
                                    <p className="flex items-center gap-1 text-xs text-[#032749]">
                                        <SmallLocationIcon /> {tour?.location || "Hanoi, Vietnam"}
                                    </p>
                                    <span className="flex items-center gap-1 text-xs text-[#1D1D1D]">
                                        <RatingStarIcon /> {tour?.rating || 4.7}
                                    </span>
                                    <h3 className="flex items-center text-base text-[#FF6726]">
                                        ${tour?.price || 120}
                                        <span className="text-[#838383] text-sm">/person</span>
                                    </h3>
                                </div>

                                {/* fav and cross icon */}
                                <div className="flex-1 flex gap-x-2 justify-end h-full p-4">
                                    <FavouriteIcon />
                                    <button className="flex" onClick={(e) => handleDeleteTour(e, tour)}>
                                        <CrossIcon />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}



            {/* suggested Hotels */}

            <div className={`mt-[15px] ${!showResults && "h-96 overflow-hidden"}`}>
                <h2 className='font-Poppins font-medium text-2xl text-myBlack'>Suggested Tours:</h2>

                <div className="relative mt-[15px]">
                    {/* Container with conditional blur and skeleton/real data */}
                    <div className={`flex flex-wrap gap-x-4 gap-y-2.5 transition-all duration-300 ${!showResults ? 'blur-md pointer-events-none' : 'blur-0'
                        }`}>
                        {hotelsData?.map((data, i) => (
                            <HotelCard
                                key={i}
                                data={data}
                                crossIcon={false}
                                setIsHotelDetailModal={setIsHotelDetailModal}
                                showResults={showResults}
                                setDetailTourCardData={setDetailTourCardData}
                            />
                        ))}
                    </div>

                    {/* View Results Button - Centered over hotel cards only */}
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

            {/* tour detail modal */}
            {isHotelDetailModal && (
                <Modal isModalOpen={isHotelDetailModal} onClose={() => setIsHotelDetailModal(false)} className="rounded-[12.67px] max-w-[350px] sm:max-w-[691.90px] w-full  " >
                    <ToursDetailModal detailTourCardData={detailTourCardData} selectedTour={selectedTour} setSelectedTour={setSelectedTour} setIsHotelDetailModal={setIsHotelDetailModal} />
                </Modal>
            )}
            {/* --- close main container ---- */}
        </div>
    )
}

export default ToursListView