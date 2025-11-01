import { StarLocationIcon } from "../../assets/icons/Icons";



const TravelComparisonMatrix = ({ isAiTabOpen }) => {
    return (
        <>
            <div className=' grid grid-cols-1  sm:grid-cols-2  pb-8 ' >
                {/* gsd */}
                <div className=' order-1 sm:order-0 content-end ' >
                    <div className="flex flex-col gap-1 mt-16 " >
                        {/* Contetn */}
                        <div className="font-jakarta text-[13.9px] text-[#1A0909] min-h-[609.37px] bg-myWhite-color rounded-t-[16.48px] rounded-bl-[16.48px] p-4 shadow-[0px_0px_13px_0px_#0000001A] " >
                            <p>🧭 TRIP REQUEST TYPE:</p>
                            <p>Generate Destination Comparison Matrix & Shortlist</p>
                            <p>📊 ANALYSIS CRITERIA:</p>
                            <p> ✅ Events</p>
                            <p> ✅ Weather</p>
                            <p> ✅ Accommodation</p>
                            <p> ✅ Safety</p>
                            <p> ✅ Budget (USD + PKR)</p>
                            <p> ✅ Travel Insurance (for Pakistanis)</p>
                            <p> ✅ Itinerary realism</p>
                            <p> ✅ Culture & Language</p>
                            <p> ✅ Visa requirements</p>
                            <p> ✍️ USER INPUTS:</p>
                            <p>A. Departure City:</p>
                            <p>[Lahore, Pakistan OR your actual departure city]</p>
                            <p>B. Final Destination Hub:</p>
                            <p>[Is Dubai your only destination, or are you flying back from another country? If not, just say Dubai.]</p>
                            <p>C. Countries to Explore:</p>
                            <p> [Only UAE, or others like Saudi Arabia, Qatar, etc?]</p>
                            <p>D. Cities with Travel Dates:</p>
                            <p>Dubai, UAE: Check-in 2025-07-25 → Check-out [Enter checkout date]</p>
                            <p>[Add more cities if visiting]</p>
                            <p>E. Traveling With:</p>
                            <p>[Select one: Solo | Couple | Friends | Family with kids/elderly | Business | Backpacking | etc.]</p>
                            <p>🎯 PRIORITIES: (Pick 2–3 max or write your own)</p>
                            <p>e.g., Must have halal food (✅ easy in Dubai)</p>
                            <p>e.g., Budget-friendly mid-range hotels</p>
                            <p>e.g., Shopping and sightseeing focused</p>
                            <p>e.g., Avoid extreme heat</p>
                            <p>e.g., Family-friendly attractions</p>
                        </div>

                        <div className=" flex gap-1 mt-1" >
                            <span className=" h-[24.72px] w-[24.72px] rounded-full bg-[#00AAFF33] flex items-center justify-center " ><StarLocationIcon /> </span>
                            <span className="text-[13.19px] font-semibold font-jakarta " >getsetdiscover</span>

                        </div>
                    </div>
                    <span className="font-jakarta text-[11.54px] text-[#1A090999]  mt-1 " >11.10 AM</span>

                </div>
                {/* you */}
                <div className='justify-self-end  ' >
                    <div>
                        <div className="flex flex-col gap-1  " >
                            <div className="min-h-[58.37px] max-w-[519.55px] bg-[#155DFC] shadow-[0px_0px_13px_0px_#0000001A] py-[10.19px] px-[19.78px] rounded-t-[16.48px] rounded-bl-[16.48px] font-jakarta font-medium text-myWhite-color text-[13.19px] text-right " > To spin up that comparison matrix and shortlist for your trip, I just need you to fill in the bracketed placeholders with your specific info</div>
                            <div className=" flex justify-end " >
                                <img src="/formProfile.jpg " className="h-[24.72px] w-[24.72px] rounded-full  " />
                                <span className="text-[13.19px] font-semibold font-jakarta " >You</span>

                            </div>
                        </div>
                        <span className="font-jakarta text-[11.54px] text-[#1A090999] float-right mt-1 " >11.10 AM</span>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TravelComparisonMatrix;