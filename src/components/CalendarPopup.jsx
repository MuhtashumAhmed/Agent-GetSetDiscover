import { ExportLinkIcon, ThreeDotsHorizintal } from "../assets/icons/Icons";


const CalendarPopup = ({ popupEvent, activeButton }) => {
    console.log(popupEvent);
    console.log(activeButton);


    return (
        <div className="flex flex-col gap-4 font-inter w-[340px] min-h-[401px] p-4 rounded-2xl bg-[#FFFFFF] shadow[0px_8px_56px_24px_#0D0D1208] " >
            {/* header */}
            <div className="flex justify-between items-center " >
                <div className="flex items-center gap-2" >
                    <h3 className="font-inter text-[#19191C] font-semibold text-sm " >Voucher ID</h3>
                    <span className="bg-[#F6F8FA] border border-[#ECEFF3] rounded-[4px] py-[2px] px-1 text-xs text-[#666D80] " >#{popupEvent?.voucher}</span>
                </div>
                {/* <ThreeDotsHorizintal /> */}
            </div>
            <div className="flex gap-3 border border-[#DFE1E7]  rounded-xl p-4 h-[89px]  " >
                {/* image */}
                <figure className="h-12 w-12 rounded-full overflow-hidden " >
                    {/* <img src="/review-img.png" className=" object-cover " /> */}
                    <img src={popupEvent?.avatar} className="rounded-full object-cover " />
                </figure>
                <div className="flex flex-col  " >
                    <h3 className="font-semibold text-sm text-[#19191C]  " >{popupEvent?.traveler}</h3>
                    <span className="font-medium text-sm text-[#818898]  " >alexallen2005@gmail.com</span>
                    <span className="font-medium text-sm text-[#818898]  " >+92 327 3622374</span>
                </div>
            </div>
            <div className="flex gap-3 border border-[#DFE1E7]  rounded-xl  h-[89px]  " >
                {
                    activeButton !== "tours" && (
                        <div className="flex items-center justify-center border-r border-[#DFE1E7] w-2/6 " >
                            Date
                        </div>
                    )
                }
                {
                    activeButton === "flights" && (
                        <div className="flex justify-center flex-col gap-y-2    p-3 pl-0  w-full " >

                            <div className="flex gap-14 text-[#818898] text-xs font-medium " >Flight <div className="flex flex-col font-semibold text-xs text-[#19191C] " ><span className="font-urbanist text-[10px] text-[#242E2C] " >{popupEvent?.from} → {popupEvent?.to}</span>{popupEvent?.airline} </div> </div>
                            <div className="flex items-center gap-2 text-[#818898] text-xs font-medium" >Flight Number <div className=" font-semibold text-xs text-[#19191C] " >{popupEvent?.flight} </div> </div>
                        </div>
                    )}
                {
                    activeButton === "hotels" && (
                        <div className="flex justify-center flex-col gap-y-2    p-3 pl-0  w-full " >

                            <div className="flex gap-2 text-[#818898] text-xs font-medium " >Hotel Details <div className="flex flex-col font-semibold text-xs text-[#19191C] " ><span className="font-urbanist text-[10px] text-[#242E2C] " >Istanbul</span>Hanoitest Dubai </div> </div>

                            <div className="flex items-center gap-4 text-[#818898] text-xs font-medium" >Room Type <div className=" font-semibold text-xs text-[#19191C] " >Standred </div> </div>
                        </div>
                    )}
                {
                    activeButton === "tours" && (
                        <div className="flex justify-center flex-col gap-y-2    p-4  w-full " >

                            <div className="flex gap-5 text-[#818898] text-xs font-medium " >Tour Name <span className="font-semibold text-xs text-[#19191C] " >Dubai Tour in 1 hour</span>  </div>

                            <div className="flex items-center gap-4 text-[#818898] text-xs font-medium" >City <div className=" font-semibold text-xs text-[#19191C] ml-11" >Istanbul </div> </div>
                        </div>
                    )}
                {
                    activeButton === "transfers" && (
                        <div className="flex justify-center flex-col gap-y-2      w-full " >

                            <div className="flex gap-5 text-[#818898] text-xs font-medium " >From <span className="font-semibold text-xs text-[#19191C] " >popupEvent</span>  </div>

                            <div className="flex items-center gap-4 text-[#818898] text-xs font-medium" >City <div className=" font-semibold text-xs text-[#19191C] ml-3" >Airport Istanbul </div> </div>
                        </div>
                    )}

            </div>
            <div className="flex gap-2 border border-[#DFE1E7]  rounded-xl  h-[89px]  " >

                <div className="flex justify-center gap-2 flex-col p-4 " >
                    {/* {
                        activeButton !== "tours" || activeButton !== "transfers" && (
                            <div className="  font-medium text-xs text-[#818898]  " >Members <span className="font-semibold text-[#19191C] text-xs ml-4 " >08</span> </div>
                        )} */}

                    {
                        activeButton === "flights" && (
                            <div className="" >
                                <div className="mb-2  font-medium text-xs text-[#818898]  " >Members <span className="font-semibold text-[#19191C] text-xs ml-4 " >08</span> </div>
                                <div className="  font-medium text-xs text-[#818898]  " >Time <span className="font-semibold text-[#19191C] text-xs ml-11 " >10 AM - 11 AM</span> </div>
                            </div>

                        )
                    }
                    {
                        activeButton === "hotels" && (

                            <div className="" >
                                <div className="mb-2  font-medium text-xs text-[#818898]  " >Members <span className="font-semibold text-[#19191C] text-xs ml-4 " >08</span> </div>
                                <div className="  font-medium text-xs text-[#818898]  " >Check In <span className="font-semibold text-[#19191C] text-xs ml-5 " >10 AM</span> </div>
                            </div>

                        )
                    }
                    {
                        activeButton === "tours" && (
                            <div className="flex flex-col gap-2 " >

                                <div className=" font-medium text-xs text-[#818898]  " >Start Date <span className="font-semibold text-[#19191C] text-xs ml-4 " >08 Mar</span> </div>
                                <div className="  font-medium text-xs text-[#818898]  " >End Date <span className="font-semibold text-[#19191C] text-xs ml-5 " >18 Mar</span> </div>

                            </div>
                        )
                    }
                    {
                        activeButton === "transfers" && (
                            <div className="flex flex-col gap-2 " >

                                <div className=" font-medium text-xs text-[#818898]  " >Vehicle <span className="font-semibold text-[#19191C] text-xs ml-4 " >Skywell ETS</span> </div>
                                <div className="  font-medium text-xs text-[#818898]  " >Time<span className="font-semibold text-[#19191C] text-xs ml-8 " >08:30 AM </span> </div>

                            </div>
                        )
                    }

                </div>
            </div>
            <div className="flex items-center justify-center gap-2 border border-[#DFE1E7]  rounded-xl  h-[40px]  " >

                See Details
                <ExportLinkIcon />
            </div>



        </div>
    )
}

export default CalendarPopup