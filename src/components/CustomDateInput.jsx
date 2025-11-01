import { useState, useRef, useEffect } from "react";
import { FiCalendar } from "react-icons/fi";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const formatDate = (d) =>
    d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-xs relative shadow rounded-lg " ref={ref}>
      {/* <label className="block mb-1 text-sm font-medium text-gray-700">Date</label> */}
      <div
        className="flex font-manrope text-[10px] text-[#000000] items-center border border-[#EEEEEE]  h-[40px] px-3 bg-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <FiCalendar className="text-gray-400 mr-2" size={18} />
        <span className="text-gray-800">{formatDate(selectedDate)}</span>
      </div>

      {open && (
        <div className="absolute z-50 mt-1 p-2 rounded-lg  bg-white border border-gray-200 shadow-lg text-sm ">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              if (date) {
                setSelectedDate(date);
                setOpen(false);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
