import { useState, useRef, useEffect } from "react";

const TransfersFilter = ({ setOpenTransfersFilter }) => {
    const [selectedPrice, setSelectedPrice] = useState(""); 
    const [passengers, setPassengers] = useState("");
    const [rating, setRating] = useState("");
    const [category, setCategory] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [type, setType] = useState("");

    const filterRef = useRef(null);

    // ✅ Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setOpenTransfersFilter(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpenTransfersFilter]);

    const handlePriceClick = (value) => {
        setSelectedPrice((prev) => (prev === value ? "" : value));
    };

    const handleReset = () => {
        setSelectedPrice("");
        setPassengers("");
        setRating("");
        setCategory("");
        setType("");
        setSortBy("");
    };

    const handleApply = () => {
        const filters = {
            price: selectedPrice,
            passengers,
            rating,
            category,
            type,
            sortBy,
        };
        console.log("✅ Applied Filters:", filters);
        setOpenTransfersFilter(false); // ✅ close on apply
    };

    return (
        <div
            ref={filterRef}
            className="bg-myWhite-color w-[300px]  md:w-[434px] rounded-[20px] p-3 shadow-[0px_0px_18.3px_0px_#00000012]"
        >
            {/* Price Range */}
            <div className="mb-2 ">
                <h3 className="text-base font-roboto font-medium text-[#2F313C] mb-2">
                    Price Range
                </h3>
                <div className="flex  items-center gap-2 ">
                    <button
                        onClick={() => handlePriceClick("Min")}
                        className={`h-[42px] rounded-[8px] p-2 w-full ${
                            selectedPrice === "Min"
                                ? "bg-[#FF6600] text-white"
                                : "bg-[#F4F4F4]"
                        }`}
                    >
                        Min
                    </button>
                    <button
                        onClick={() => handlePriceClick("Max")}
                        className={`h-[42px] rounded-[8px] p-2 w-full ${
                            selectedPrice === "Max"
                                ? "bg-[#FF6600] text-white"
                                : "bg-[#F4F4F4]"
                        }`}
                    >
                        Max
                    </button>
                </div>
            </div>

            {/* Sort By Vehicle Type */}
            <div className="mb-2 ">
                <h3 className="text-base font-roboto font-medium text-[#2F313C] mb-2">
                    Sort By Vehicle Type
                </h3>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full border bg-[#F4F4F4] font-inter text-sm text-[#333333] border-gray-300 rounded-lg px-3 py-2 h-[42px] focus:outline-none"
                >
                    <option value="">Select type</option>
                    <option value="Economy">Economy</option>
                    <option value="Business">Business</option>
                </select>
            </div>

            {/* Sort By */}
            <div className="mb-2 ">
                <h3 className="text-base font-roboto font-medium text-[#2F313C] mb-2">
                    Sort By
                </h3>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full border bg-[#F4F4F4] font-inter text-sm text-[#333333] border-gray-300 rounded-lg px-3 py-2 h-[42px] focus:outline-none"
                >
                    <option value="">Select sort by</option>
                    <option value="Cheapest">Cheapest First</option>
                    <option value="Expensive">Expensive First</option>
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

export default TransfersFilter;
