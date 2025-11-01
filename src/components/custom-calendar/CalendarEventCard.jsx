const styles = [
  { bg: "bg-[#F5FEF1]", border: "border-[#BCF8A0]", badge: "text-[#46BF0D]" },
  { bg: "bg-[#F1F8FE]", border: "border-[#A9D3F9]", badge: "text-[#1084EF]" },
  { bg: "bg-[#FEF9F1]", border: "border-[#F9D9A9]", badge: "text-[#EF9610]" },
];

export default function CalendarEventCard({ event, index = 0 }) {
  const style = styles[index % styles.length];

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

  return (
    <div
      className={`h-[94px] rounded-[8px] shadow-sm font-inter p-2 text-[11px] ${style.bg} ${style.border} border`}
    >
      {/* Top row */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={event.avatar}
            alt={event.traveler}
            className="w-6 h-6 rounded-full"
          />
          <span className="font-semibold text-[#19191C] text-sm">
            {event.traveler}
          </span>
        </div>
        <span className={`text-xs ${style.badge}`}>{event.airline}</span>
      </div>

      {/* Time range */}
      <div className="mt-1 text-[#818898] text-xs">
        {formatTime(event.start)} - {formatTime(event.end)}
      </div>

      {/* Flight number */}
      <div className="text-[#19191C] text-[10px] font-semibold mt-1">
        Flight # {event.flight}
      </div>
    </div>
  );
}
