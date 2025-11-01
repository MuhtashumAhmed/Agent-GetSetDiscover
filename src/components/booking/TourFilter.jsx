import React, { useState, useRef, useEffect } from "react";

const TourFilter = ({ setOpenToursFilter }) => {
    const [selectedPrice, setSelectedPrice] = useState("");
    const [passengers, setPassengers] = useState("");
    const [rating, setRating] = useState("");
    const [category, setCategory] = useState("");
    const [duration, setDuration] = useState("");
    const [language, setLanguage] = useState("");

    const filterRef = useRef(null);

    // ✅ Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setOpenToursFilter(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpenToursFilter]);

    const handlePriceClick = (value) => {
        setSelectedPrice((prev) => (prev === value ? "" : value));
    };

    const handleReset = () => {
        setSelectedPrice("");
        setPassengers("");
        setRating("");
        setCategory("");
        setDuration("");
        setLanguage("");
    };

    const handleApply = () => {
        const filters = {
            price: selectedPrice,
            passengers,
            rating,
            category,
            duration,
            language,
        };
        console.log("✅ Applied Filters:", filters);
        setOpenToursFilter(false); // ✅ close after apply
    };

    return (
        <div
            ref={filterRef}
            className="bg-myWhite-color w-[300px] md:w-[434px] rounded-[20px] p-3 shadow-[0px_0px_18.3px_0px_#00000012]"
        >
            {/* Price Range */}
            <div className="mb-2">
                <h3 className="text-base font-roboto font-medium text-[#2F313C] mb-2">
                    Price Range
                </h3>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => handlePriceClick("Min")}
                        className={`h-[42px] rounded-[8px] p-2 w-full ${selectedPrice === "Min"
                                ? "bg-[#FF6600] text-white"
                                : "bg-[#F4F4F4]"
                            }`}
                    >
                        Min
                    </button>
                    <button
                        onClick={() => handlePriceClick("Max")}
                        className={`h-[42px] rounded-[8px] p-2 w-full ${selectedPrice === "Max"
                                ? "bg-[#FF6600] text-white"
                                : "bg-[#F4F4F4]"
                            }`}
                    >
                        Max
                    </button>
                </div>
            </div>

            {/* Passengers */}
            <div className="flex flex-col gap-2 mb-2">
                <label className="text-base font-roboto font-medium text-[#2F313C]">
                    Number of Passengers
                </label>
                <input
                    type="text"
                    value={passengers}
                    onChange={(e) => {
                        const val = e.target.value;
                        if (/^\d*$/.test(val)) setPassengers(val); // ✅ only numbers
                    }}
                    placeholder="Number of Passengers"
                    className="h-[42px] bg-[#F4F4F4] rounded-[8px] p-2 text-sm border-none outline-none focus:outline-none"
                />
            </div>

            {/* Rating */}
            <div className="mb-2">
                <h3 className="text-base font-roboto font-medium text-[#2F313C] mb-2">
                    Rating
                </h3>
                <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full border bg-[#F4F4F4] font-inter text-sm text-[#333333] border-gray-300 rounded-lg px-3 py-2 h-[42px] focus:outline-none"
                >
                    <option value="">Select rating</option>
                    <option value="1">1 star</option>
                    <option value="2">2 star</option>
                    <option value="3">3 star</option>
                </select>
            </div>

            {/* Categories */}
            <div className="mb-2">
                <h3 className="text-base font-roboto font-medium text-[#2F313C] mb-2">
                    Categories
                </h3>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border bg-[#F4F4F4] font-inter text-sm text-[#333333] border-gray-300 rounded-lg px-3 py-2 h-[42px] focus:outline-none"
                >
                    <option value="">Select category</option>
                    <option value="Boat">Boat tours</option>
                    <option value="Bus">Bus tours</option>
                    <option value="Walking">Walking tours</option>
                </select>
            </div>

            {/* Duration */}
            <div className="mb-2">
                <h3 className="text-base font-roboto font-medium text-[#2F313C] mb-2">
                    Duration
                </h3>
                <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full border bg-[#F4F4F4] font-inter text-sm text-[#333333] border-gray-300 rounded-lg px-3 py-2 h-[42px] focus:outline-none"
                >
                    <option value="">Select duration</option>
                    <option value="4">4 days</option>
                    <option value="8">8 days</option>
                    <option value="12">12 days</option>
                </select>
            </div>

            {/* Language */}
            <div className="mb-2">
                <h3 className="text-base font-roboto font-medium text-[#2F313C] mb-2">
                    Guided language
                </h3>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full border bg-[#F4F4F4] font-inter text-sm text-[#333333] border-gray-300 rounded-lg px-3 py-2 h-[42px] focus:outline-none"
                >
                    <option value="">Select language</option>
                    <option value="English">English</option>
                    <option value="Urdu">Urdu</option>
                    <option value="Turkish">Turkish</option>
                </select>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap justify-between mt-6 gap-3">
                <button
                    onClick={handleReset}
                    className="flex-1 px-6 py-2 border border-[#000000] rounded-[11px] font-manrope text-base text-myBlack"
                >
                    Reset
                </button>
                <button
                    onClick={handleApply}
                    className="flex-1 px-6 py-2 bg-[#FF6600] hover:bg-[#FF6600]/95 text-white rounded-[11px] font-manrope text-base"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default TourFilter;
