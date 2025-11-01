import React, { useState, useEffect, useRef } from "react";
import { Search, X, Plus } from "lucide-react";

import { DestinationButton } from "./DestinationButton";
import { CrossIcon } from "../../assets/icons/Icons";

const countries = [
    { name: "Turkey", cities: ["Istanbul", "Ankara", "Izmir", "Antalya", "Bursa"] },
    { name: "Pakistan", cities: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"] },
    { name: "France", cities: ["Paris", "Lyon", "Marseille", "Nice", "Toulouse"] },
    { name: "Japan", cities: ["Tokyo", "Osaka", "Kyoto", "Hiroshima", "Fukuoka"] },
    { name: "Italy", cities: ["Rome", "Milan", "Naples", "Venice", "Florence"] },
];

export default function DestinationSelector({
    selectedCountry,
    setSelectedCountry,
    selectedCities,
    setSelectedCities,
    error,
    setError
}) {
    // const [selectedCountry, setSelectedCountry] = useState("");
    // const [selectedCities, setSelectedCities] = useState([]);
    const [countrySearch, setCountrySearch] = useState("");
    const [citySearch, setCitySearch] = useState("");
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [showCityDropdown, setShowCityDropdown] = useState(false);

    const countryRef = useRef(null);
    const cityRef = useRef(null);

    //  Outside click close logic
    useEffect(() => {
        function handleClickOutside(e) {
            if (countryRef.current && !countryRef.current.contains(e.target)) {
                setShowCountryDropdown(false);
            }
            if (cityRef.current && !cityRef.current.contains(e.target)) {
                setShowCityDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredCountries = countries.filter((c) =>
        c.name.toLowerCase().includes(countrySearch.toLowerCase())
    );
    const selectedCountryData = countries.find((c) => c.name === selectedCountry);
    const filteredCities =
        selectedCountryData?.cities.filter(
            (city) =>
                city.toLowerCase().includes(citySearch.toLowerCase()) &&
                !selectedCities.includes(city)
        ) || [];

    //  Country select
    const handleCountrySelect = (name) => {
        setSelectedCountry(name);
        setCountrySearch(name);
        setShowCountryDropdown(false);
        setCitySearch("");
        setSelectedCities([]); // reset cities on new country
        setError("")

    };

    //  Add city
    // ✅ Add city (prevent duplicates case-insensitive)
    const handleAddCity = (city) => {
        const normalizedCity = city.trim().toLowerCase();

        // Agar already exist karta hai (case-insensitive), add na karo
        if (!selectedCities.some((c) => c.toLowerCase() === normalizedCity)) {
            setSelectedCities([...selectedCities, city.trim()]);
            setCitySearch("");
            setError("");
        } else {
            setCitySearch(""); // reset search box
        }
        setShowCityDropdown(false);
    };


    //  Remove city
    const handleRemoveCity = (city) => {
        setSelectedCities(selectedCities.filter((c) => c !== city));
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && citySearch) {
            handleAddCity(citySearch);
        }
    };

    return (
        // <div className="w-full p-2 bg-white border border-dashed border-[#EEEEEE] rounded-[20px] ">
        <div className="w-full   ">
            {/* Header */}
            <div className="flex items-center space-x-[10px] ">
                <span className="bg-[#FF6600] rounded-full text-sm font-bold text-myWhite-color h-5 w-5 flex items-center justify-center">
                    4
                </span>
                <h1 className="text-[#000000] font-Poppins text-[24px] font-medium">
                    Select Multiple Destination
                </h1>
            </div>
            <p className="font-inter text-xs text-[#58595B] ">
                Follow these simple steps to design your dream journey.
            </p>

            {/* Inputs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mt-5 ">
                {/* Country */}
                <div ref={countryRef}>
                    <li className="ml-6 mb-1.5 font-manrope font-semibold text-[#000000] ">
                        Country
                    </li>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1D1B20]" />

                        {/* Input wrapper */}
                        <div className="flex items-center gap-2 pl-10 pr-4 h-[67px] border border-gray-300 rounded-[16px] bg-[#F5F5F5]">
                            {selectedCountry && (
                                <div className="flex items-center bg-[#FFFFFF] font-manrope text-sm text-[#787878] px-4 py-2 rounded-[100px]">
                                    {selectedCountry}
                                    <button
                                        onClick={() => {
                                            setSelectedCountry("");
                                            setCountrySearch("");
                                        }}
                                        className="ml-2 text-gray-500 hover:text-red-500"
                                    >
                                        <CrossIcon />
                                    </button>
                                </div>
                            )}

                            {/* Input field - conditionally show based on selection */}
                            <input
                                value={selectedCountry ? "" : countrySearch}
                                onChange={(e) => {
                                    setCountrySearch(e.target.value);
                                    setShowCountryDropdown(true);
                                }}
                                onFocus={() => {
                                    if (selectedCountry) {
                                        // Clear selection when focusing on input with a country already selected
                                        setSelectedCountry("");
                                    } else {
                                        setShowCountryDropdown(true);
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Backspace" && !countrySearch && selectedCountry) {
                                        setSelectedCountry("");
                                    }
                                }}
                                placeholder={selectedCountry ? "" : "Search country..."}
                                className="flex-1 bg-transparent outline-none text-sm h-full"
                            />
                        </div>

                        {/* Dropdown */}
                        {showCountryDropdown && filteredCountries.length > 0 && (
                            <div className="custom-scrollbar absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow z-10 max-h-48 overflow-y-auto">
                                {filteredCountries.map((country) => (
                                    <div
                                        key={country.name}
                                        onClick={() => handleCountrySelect(country.name)}
                                        className="cursor-pointer px-4 py-3 hover:bg-gray-100 last:border-0"
                                    >
                                        {country.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {error && <p className="text-red-400 text-xs mt-1 font-Poppins " >{error}</p>}
                </div>


                {/* City */}
                <div ref={cityRef}>
                    <li className="ml-6 mb-1.5 font-manrope font-semibold text-[#000000] ">
                        City
                    </li>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1D1B20]" />

                        {/* Input with chips */}
                        <div className="custom-scrollbar flex items-center flex-wrap gap-2 pl-10 pr-10 max-h-[67px] overflow-y-auto border pt-1 border-gray-300 rounded-[16px] bg-[#F5F5F5]">
                            {selectedCities.map((city) => (
                                <div
                                    key={city}
                                    className="flex items-center gap-1 bg-[#FFFFFF] font-manrope text-sm text-[#787878] px-4 py-2 rounded-[100px] "
                                >
                                    {city}
                                    <button onClick={() => handleRemoveCity(city)}>
                                        {/* <X className="w-3 h-3 text-gray-600 hover:text-red-500" /> */}
                                        <CrossIcon />
                                    </button>
                                </div>
                            ))}
                            <input
                                value={citySearch}
                                onChange={(e) => {
                                    setCitySearch(e.target.value);
                                    setShowCityDropdown(true);
                                }}
                                onFocus={() => setShowCityDropdown(true)}
                                onKeyPress={handleKeyPress}
                                placeholder="Search city..."
                                className=" flex-1 bg-transparent outline-none text-sm h-[60px] overflow-scroll "
                                disabled={!selectedCountry}
                            />
                        </div>

                        {/* Plus button */}
                        <DestinationButton
                            onClick={() => citySearch && handleAddCity(citySearch)}
                            disabled={!selectedCountry || !citySearch}
                            className="absolute right-3 top-4 -translate-y-1/2 w-6 h-6 rounded-md flex items-center justify-center disabled:opacity-50 bg-transparent "
                        >
                            <Plus className="w-6 h-6 bg-myWhite-color text-[#777777] rounded-[15px] hover:bg-none " />
                        </DestinationButton>

                        {/* Dropdown */}
                        {showCityDropdown && selectedCountry && filteredCities.length > 0 && (
                            <div className="custom-scrollbar absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow z-10 max-h-48 overflow-y-auto  ">
                                {filteredCities.map((city) => (
                                    <div
                                        key={city}
                                        onClick={() => handleAddCity(city)}
                                        className="cursor-pointer px-4 py-3 hover:bg-gray-100 last:border-0 
                                         "
                                    >
                                        {city}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
