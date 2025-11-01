import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import { useMemo } from "react";

export default function CalendarView({ data = [] }) {
  const year = new Date().getFullYear();

  // 🔹 Convert your flights into FullCalendar events
  const events = useMemo(() => {
    return data.map((item) => {
      const [day, month] = item.date.split(" ");
      const [startTime, endTime] = item.flightTime.split(" → ");

      const start = moment(`${day} ${month} ${year} ${startTime}`, "DD MMM YYYY HH:mm").toDate();
      const end = moment(`${day} ${month} ${year} ${endTime}`, "DD MMM YYYY HH:mm").toDate();

      return {
        id: item.voucher,
        title: `${item.traveler} (${item.airline})`,
        extendedProps: {
          ...item,
        },
        start,
        end,
      };
    });
  }, [data, year]);

  // 🔹 Custom render for events
  const renderEventContent = (eventInfo) => {
    const e = eventInfo.event.extendedProps;
    return (
      <div className="bg-white border  border-gray-200 rounded-lg shadow-sm p-2 text-xs flex flex-col gap-1">
        {/* Traveler + Airline */}
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-800">{e.traveler}</span>
          <span className="text-[10px] text-gray-500">{e.airline}</span>
        </div>

        {/* Route */}
        <p className="text-[11px] text-gray-600">
          {e.from} → {e.to}
        </p>

        {/* Class */}
        <span
          className={`px-2 py-[2px] rounded-full text-[10px] font-medium w-fit ${e.class === "Economy"
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-blue-700"
            }`}
        >
          {e.class}
        </span>
      </div>
    );
  };

  return (
    <div className="h-[700px] border border-[#DFE1E7] rounded-lg p-4 bg-white">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          // right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        // headerToolbar={false}
        height="100%"
        events={events}
        eventContent={renderEventContent} // 🔹 custom event renderer
        nowIndicator={true}
        selectable={true}
        editable={false}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }}
      />
    </div>
  );
}
