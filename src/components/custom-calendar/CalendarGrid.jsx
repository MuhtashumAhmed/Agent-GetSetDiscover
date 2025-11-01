import { useState, useEffect } from "react";
import CalendarEventCard from "./CalendarEventCard";
import CalendarPopup from "../CalendarPopup";

export default function CalendarGrid({ days, hours, data, activeButton }) {
  const slotBaseHeight = 142;
  const eventCardHeight = 94;
  const badgeRowHeight = 32;

  /*  which card is popped?  null | { dayIdx, hourIdx, eventIndex }  */
  const [pop, setPop] = useState(null);

  /*  close popup on outside click  */
  useEffect(() => {
    const close = () => setPop(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  /*  helper to stop bubbling  */
  const stop = (e) => e.stopPropagation();

  return (
    <div className="w-3xl">
      <div
        className="grid divide-x divide-[#DFE1E7]"
        style={{ gridTemplateColumns: `80px repeat(${days.length}, 239px)` }}
      >
        {/* ------------  TIME COLUMN  ------------ */}
        <div className="flex flex-col bg-[#FFFFFF] w-[80px]">
          <div className="h-[48px] border-b border-[#DFE1E7]" />
          {hours.map((h) => (
            <div
              key={h}
              className="h-[142px] font-inter text-[11px] text-[#19191C] flex items-center justify-center pr-2"
            >
              {`${h.toString().padStart(2, "0")}:00`}
            </div>
          ))}
        </div>

        {/* ------------  DAY COLUMNS  ------------ */}
        {days.map((day, dayIdx) => (
          <div
            key={dayIdx}
            className="flex flex-col relative w-[239px] border-t border-[#DFE1E7]"
          >
            {/* ---- admin note ---- */}
            <div className="mx-auto w-[219px] h-[40px] rounded-[8px] border border-[#BCF8A0] bg-[#F5FEF1] p-3 flex items-center px-2 text-gray-600 text-[10px] font-semibold font-inter mb-1">
              Admin can add note here
            </div>

            {/* ---- hourly slots ---- */}
            {hours.map((h, hourIdx) => {
              const slotEvents =
                data[activeButton]?.filter((ev) => {
                  const evStart = new Date(ev.start);
                  return (
                    evStart.toDateString() === day.toDateString() &&
                    evStart.getHours() === h
                  );
                }) ?? [];

              const slotHeight =
                slotBaseHeight + (slotEvents.length > 1 ? badgeRowHeight : 0);

              /*  which event should the popup show?  */
              const popupEvent =
                pop?.dayIdx === dayIdx && pop?.hourIdx === hourIdx
                  ? slotEvents[pop.eventIndex]
                  : null;

              return (
                <div
                  key={hourIdx}
                  className="border-t border-[#F1F2F5] relative p-1"
                  style={{ minHeight: slotHeight }}
                >
                  {slotEvents.length > 0 ? (
                    <div className="flex flex-col gap-1">
                      {/* ----  first card  ---- */}
                      <div
                        style={{ height: eventCardHeight }}
                        className="relative"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPop({ dayIdx, hourIdx, eventIndex: 0 });
                        }}
                      >
                        <CalendarEventCard
                          event={slotEvents[0]}
                          index={0}
                        />

                        {/* ----  POPUP  ---- */}
                        {popupEvent && (
                          <div
                            onClick={stop}
                            className="absolute  left-0 mb-2 px-3 py-1.5   text-sm font-semibold text-gray-700 whitespace-nowrap z-10  "
                          >
                            {/* {popupEvent.traveler} */}
                            <CalendarPopup popupEvent={popupEvent} activeButton={activeButton} />
                          </div>
                        )}
                      </div>

                      {/* ----  remaining avatars  ---- */}
                      {slotEvents.length > 1 && (
                        <div className="flex items-center mt-1">
                          {slotEvents.slice(1).map((ev, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setPop({
                                  dayIdx,
                                  hourIdx,
                                  eventIndex: idx + 1,
                                });
                              }}
                              className="w-6 h-6 rounded-full border border-white shadow -mr-2 focus:outline-none"
                            >
                              <img
                                src={ev.avatar}
                                alt={ev.traveler}
                                className="w-full h-full rounded-full"
                                title={ev.traveler}
                              />
                            </button>
                          ))}
                          {slotEvents.length > 4 && (
                            <span className="w-6 h-6 rounded-full bg-gray-200 text-xs flex items-center justify-center text-gray-600">
                              +{slotEvents.length - 4}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* ----  empty slot  ---- */
                    <div className="flex-1 p-2 flex items-center justify-center">
                      <img src="/calanderEmpty.png" className="h-full w-full" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}