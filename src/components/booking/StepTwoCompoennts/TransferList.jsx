import { useState } from "react";
import { CircleIcon, CrossIcon, FavouriteIcon, GroupOfPeopleIcon, RatingStarIcon, SmallLocationIcon, SuitcaseIcon } from "../../../assets/icons/Icons"
import Modal from "../../Modal";
import HotelCard from "./HotelCard";
import HotelDetailModal from "./HotelDetailModal";
import ToursDetailModal from "./ToursDetailModal";
import TransferCard from "./TransferCard";


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
        location: "Karachi",
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
        location: "Paris, France",
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
        location: "Islamabad",
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

const transfers = [
    {

        id: 1,
        name: "Skywell ET5",
        rating: 4.7,
        passengers: "3 passengers",
        suitcases: "3 suitcases",
         location: "Karachi",
        type: "Economy",
        price: 120,
        image: "/car.png",
    },
    {
        id: 2,
        name: "Mercedes S-Class",
        rating: 4.9,
        passengers: "4 passengers",
        suitcases: "4 suitcases",
 location: "UAE",
        type: "Luxury",
        price: 220,
        image: "/car.png",
    },
    {
        id: 3,
        name: "Toyota Corolla",
        rating: 4.5,
        passengers: "3 passengers",
        suitcases: "2 suitcases",
         location: "Karachi",
        type: "Economy",
        price: 90,
        image: "/car.png",
    },
    {
        id: 4,
        name: "Honda Civic",
        rating: 4.6,
        passengers: "3 passengers",
        suitcases: "2 suitcases",
         location: "Lahore",
        type: "Standard",
        price: 100,
        image: "/car.png",
    },
    {
        id: 5,
        name: "BMW 5 Series",
        rating: 4.8,
        passengers: "4 passengers",
        suitcases: "3 suitcases",
         location: "Karachi",
        type: "Business",
        price: 180,
        image: "/car.png",
    },
    {
        id: 6,
        name: "Audi A6",
        rating: 4.7,
        passengers: "4 passengers",
        suitcases: "3 suitcases",
         location: "Islamabad",
        type: "Business",
        price: 175,
        image: "/car.png",
    },
    {
        id: 7,
        name: "Kia Carnival",
        rating: 4.6,
        passengers: "7 passengers",
        suitcases: "5 suitcases",
         location: "Pindi",
        type: "Van",
        price: 200,
        image: "/car.png",
    },
    {
        id: 8,
        name: "Hyundai Staria",
        rating: 4.5,
        passengers: "6 passengers",
        suitcases: "4 suitcases",
         location: "Multan",
        type: "Van",
        price: 190,
        image: "/car.png",
    },
    {
        id: 9,
        name: "Tesla Model S",
        rating: 4.9,
        passengers: "4 passengers",
        suitcases: "3 suitcases",
         location: "Karachi",
        type: "Electric",
        price: 250,
        image: "/car.png",
    },
    {
        id: 10,
        name: "Rolls Royce Ghost",
        rating: 5.0,
        passengers: "4 passengers",
        suitcases: "4 suitcases",
         location: "Islamabad",
        type: "Luxury",
        price: 500,
        image: "/car.png",
    },
    {
        id: 11,
        name: "Nissan Altima",
        rating: 4.4,
        passengers: "3 passengers",
        suitcases: "2 suitcases",
         location: "Karachi",
        type: "Standard",
        price: 95,
        image: "/car.png",
    },
    {
        id: 12,
        name: "Ford Transit",
        rating: 4.5,
        passengers: "9 passengers",
        suitcases: "6 suitcases",
         location: "Lahore",
        type: "Van",
        price: 230,
        image: "/car.png",
    },
];


const TransferList = ({ selectedTransfers, setSelectedTransfers }) => {
    const [isHotelDetailModal, setIsHotelDetailModal] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [detailTourCardData, setDetailTourCardData] = useState()
    // console.log("detail card data is: ", detailTourCardData);


    const handleDeleteTransfer = (e, transfer) => {
        e.stopPropagation();
        setSelectedTransfers((prev) =>
            prev.filter((t) => t.id !== transfer.id)
        );
    };

    return (
        <div>

            {/* Selected Transfers */}
            {selectedTransfers.length > 0 && (
                <div className="">
                    <h2 className="font-Poppins font-medium text-2xl text-myBlack">
                        Selected Transfers
                    </h2>
                    <div className="flex flex-wrap gap-4 " >
                        {selectedTransfers.map((transfer, index) => (
                            <div
                                key={transfer.id || index}
                                className="flex items-center mt-[10px] flex-1 sm:flex-0 w-[320px] sm:w-[360px] h-[124px] rounded-[12px] bg-myWhite-color shadow-[4px_8px_100px_0px_#1118270F]"
                            >
                                {/* image */}
                                <figure className="ml-0.5 mr-1.5 h-[100px] w-[150px] border border-[#EFEFEF] rounded-[8px]">
                                    <img
                                        src={transfer?.image}
                                        className="rounded-lg w-full h-full object-contain"
                                        alt={transfer?.name}
                                    />
                                </figure>

                                {/* details */}
                                <div className="-mr-6 font-Poppins flex flex-col gap-1">
                                    <h6 className="font-medium text-sm text-[#1D1D1D]">
                                        {transfer?.name}
                                    </h6>
                                    <div className="flex gap-2 text-nowrap">
                                        <p className="flex items-center gap-1 text-xs text-[#032749]">
                                            <GroupOfPeopleIcon /> {transfer?.passengers}
                                        </p>
                                        <p className="flex items-center gap-1 text-xs text-[#032749]">
                                            <SuitcaseIcon /> {transfer?.suitcases}
                                        </p>
                                    </div>
                                    <p className="flex items-center gap-1 text-xs text-[#032749]">
                                        <CircleIcon /> {transfer?.type}
                                    </p>
                                    <h3 className="flex items-center text-base text-[#FF6726] underline">
                                        ${transfer?.price}
                                    </h3>
                                </div>

                                {/* cross + select */}
                                <div className="flex-1 flex flex-col justify-between items-end h-full pr-2 py-4">
                                    <button onClick={(e) => handleDeleteTransfer(e, transfer)}>
                                        <CrossIcon />
                                    </button>
                                    <button className="w-[92px] h-[30px] text-[#032749] border border-[#032749] font-poppins text-[13px] font-bold rounded-[24px] hover:bg-[#032749] hover:text-myWhite-color transition-all ease-in cursor-pointer">
                                        Select
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
                        {transfers?.map((data, i) => (
                            <TransferCard
                                key={i}
                                data={data}
                                crossIcon={false}
                                setIsHotelDetailModal={setIsHotelDetailModal}
                                showResults={showResults}
                                // setDetailTourCardData={setDetailTourCardData}
                                setSelectedTransfers={setSelectedTransfers}
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

            {/* Transfer detail modal */}
            {isHotelDetailModal && (
                <Modal isModalOpen={isHotelDetailModal} onClose={() => setIsHotelDetailModal(false)} className="rounded-[12.67px] max-w-[691.90px] w-full  " >
                    <ToursDetailModal detailTourCardData={detailTourCardData} selectedTransfers={selectedTransfers} setSelectedTransfers={setSelectedTransfers} setIsHotelDetailModal={setIsHotelDetailModal} />
                </Modal>
            )}
            {/* --- close main container ---- */}
        </div>
    )
}

export default TransferList