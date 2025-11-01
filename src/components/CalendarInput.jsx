import { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css"; // custom CSS overrides
import { CalanderIcon } from "../assets/icons/Icons";

export default function CalendarInput({
  value,
  onChange,
  placeholder = "MM-DD-YYYY",
  className = "",
  calendarClassName = "",
}) {
  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true); // 👈 manually open calendar
    }
  };

  return (
    <div className="relative w-full">
      {/* Left icon clickable */}
      <CalanderIcon
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black z-10 cursor-pointer"
        onClick={handleIconClick}
      />

      {/* Date Picker */}
      <DatePicker
        ref={datePickerRef}
        selected={value}
        onChange={onChange}
        dateFormat="MM-dd-yyyy"
        placeholderText={placeholder}
        className={`input input-bordered h-[40px] focus:outline-none rounded-lg pl-10 border-[#EEEEEE] text-black bg-white w-full ${className}`}
        calendarClassName={`rounded-2xl shadow-lg p-1 bg-white border border-[#EEEEEE] overflow-hidden ${calendarClassName}`}
        wrapperClassName="block w-full"
      />
    </div>
  );
}
