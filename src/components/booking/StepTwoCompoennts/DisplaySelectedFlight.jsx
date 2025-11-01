import { CrossIcon, FlightBoxArrow, PlaneDownIcon, PlaneUpIcon } from "../../../assets/icons/Icons";

const DisplaySelectedFlight = ({ selectedFlights, setSelectedFlights }) => {
    const handleDelete = (e, id) => {
        e.stopPropagation()
        // remove clicked flight from array
        setSelectedFlights((prev) => prev.filter(f => f.id !== id))
    }

    return (
        <div>
            <h1 className='font-Poppins font-medium text-2xl text-[#000000]'>Selected Flights</h1>
            <hr className='text-[#EEEEEE]' />

            <div className='mt-[15px]'>
                {selectedFlights.length === 0 && (
                    <p className="text-sm text-[#6B7280] font-manrope mt-4">No flights selected</p>
                )}

                {selectedFlights.map((selectedFlight) => (
                    <div key={selectedFlight.id} className="relative mt-8  ">
                        <div className='relative bg-myWhite-color  max-w-[320px]  sm:max-w-[506px] h-[183px] rounded-[10px] shadow-[0px_10px_13px_0px_#00000021]'>
                            <div className="px-[17px] py-[11px]">

                                {/* header */}
                                <div className="flex justify-between items-center">
                                    <span className="text-center h-[24px] w-[116px] rounded-[16px] border border-[#032749] py-1 px-2 text-xs font-inter text-[#032749]">
                                        {selectedFlight?.date}
                                    </span>
                                    <button
                                        className="flex"
                                        onClick={(e) => handleDelete(e, selectedFlight.id)}
                                    >
                                        <span><CrossIcon /></span>
                                    </button>
                                </div>

                                {/* timing section */}
                                <div className="flex items-center justify-between mt-[16px]">
                                    <div>
                                        <h3 className="font-manrope text-[#111827] font-bold text-sm">
                                            {selectedFlight?.departureCode}
                                        </h3>
                                        <h6 className="font-manrope text-[10px] text-[#6B7280]">
                                            {selectedFlight?.departureCity}
                                        </h6>
                                        <span className="text-xs font-manrope text-[#6B7280]">
                                            {selectedFlight?.departureTime}
                                        </span>
                                    </div>

                                    <div className="flex items-center">
                                        <PlaneUpIcon className="mr-5 text-[#000000]" />
                                        <div className="flex flex-col items-center">
                                             <FlightBoxArrow className="w-26 sm:w-auto  " />
                                            <span className="font-manrope text-[#6B7280] text-xs">
                                                {selectedFlight?.duration}
                                            </span>
                                        </div>
                                        <PlaneDownIcon className="ml-5" />
                                    </div>

                                    <div>
                                        <h3 className="font-manrope text-[#111827] font-bold text-sm">
                                            {selectedFlight?.arrivalCode}
                                        </h3>
                                        <h6 className="font-manrope text-[10px] text-[#6B7280]">
                                            {selectedFlight?.arrivalCity}
                                        </h6>
                                        <span className="text-xs font-manrope text-[#6B7280]">
                                            {selectedFlight?.arrivalTime}
                                        </span>
                                    </div>
                                </div>

                                {/* airline + info */}
                                <div className="flex items-center font-manrope text-[10px] text-[#4B5563] mt-2">
                                    {selectedFlight?.airline}
                                    <li className="ml-8">{selectedFlight?.class}</li>
                                    <li className="ml-8">{selectedFlight?.stops}</li>
                                </div>

                                <hr className='text-[#EEEEEE] my-2' />

                                {/* price */}
                                <div className="flex items-center justify-between">
                                    <h2 className="font-manrope text-[#4B5563] text-sm font-semibold">Price</h2>
                                    <h2 className="font-manrope text-[#4B5563] text-sm font-semibold">
                                        ${selectedFlight?.price}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DisplaySelectedFlight
