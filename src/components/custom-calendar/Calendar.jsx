import { useMemo } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";

export default function Calendar({ data = [], filterDate, activeButton }) {
  // Generate this week days (Mon–Sun)
  const daysOfWeek = useMemo(() => {
    const start = filterDate ? new Date(filterDate) : new Date();
    const day = start.getDay(); // 0=Sun, 1=Mon...
    const monday = new Date(start);
    monday.setDate(start.getDate() - ((day + 6) % 7)); // move to Monday
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return d;
    });
  }, [filterDate]);

  // Hours from 8:00 → 23:00
  const hours = Array.from({ length: 16 }, (_, i) => i + 8);

  return (
    <div className="custom-scrollbar overflow-x-auto sm:w-[100%] lg:w-[100%] mx-auto 2xl:max-w-full max-h-[690px] border border-[#DFE1E7] rounded-xl  ">
      {/* Header */}
      <CalendarHeader days={daysOfWeek} />

      {/* Grid */}
      <CalendarGrid
        days={daysOfWeek}
        hours={hours}
        data={data}
        activeButton={activeButton}
      />
    </div>
  );
}
