export default function CalendarHeader({ days }) {
    const today = new Date().toDateString();
    // console.log(days);
    console.log("today" ,today);
    

    return (
    // <div className=" overflow-x-auto sm:w-[100%] lg:w-[100%] mx-auto xl:w-[97%] max-h-[625px]   ">

        <div
            // className="grid border-b border-[#DFE1E7] bg-[#FFFFFF]   max-w-6xl "
            className="grid  bg-[#FFFFFF]   max-w-6xl "
            style={{
                gridTemplateColumns: `80px repeat(${days.length}, 239px)`,
            }}
        >
            {/* Time col header */}
            <div className="p-2 flex items-center justify-center pr-2 w-[80px] border-r border-[#F1F2F5]">
                <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 15L7.5 10L12.5 5" stroke="#19191C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
                <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 5L12.5 10L7.5 15" stroke="#19191C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
            </div>
            

            {/* Day headers */}
            {days.map((d, i) => {
                const isToday = d.toDateString() === today;
                {/* const isToday = d.toDateString()  ; */}
                console.log(isToday)
                const weekday = d.toLocaleDateString("en-US", { weekday: "short" });
                const date = d.toLocaleDateString("en-US", { day: "numeric" });

                return (
                    <div
                        key={i}
                        className="flex  items-center justify-center  w-[239px] border-r border-[#F1F2F5] py-2 "
                    >
                        {/* Day (normal text always) */}
                        {/* <span className="text-xs font-medium text-[#818898]">{weekday}</span> */}
                        <span className={`text-sm font-inter  ${isToday ? "text-[#19191C]  font-semibold " : "text-[#818898] "} `} >{weekday}</span>

                        {/* Date (highlight if today) */}
                        <span
                            className={` px-1   text-sm font-semibold ${isToday
                                ? "ml-2 w-[30px] h-[27px] rounded-[6px] flex items-center justify-center bg-blue-600 text-white"
                                : "text-[#818898] font-semibold bg-transparent"
                                }`}
                        >
                            {date}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
