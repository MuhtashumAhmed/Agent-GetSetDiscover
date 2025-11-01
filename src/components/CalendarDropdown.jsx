import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { CalendarDays, ChevronDown } from "lucide-react";

const CalendarDropdown = ({ setDateForfilterCalanderData }) => {
  const [selected, setSelected] = useState(new Date());
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  setDateForfilterCalanderData(selected);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 w-[146px] h-[48px] rounded-[12px] border font-inter border-[#DFE1E7] bg-white px-3 py-2 text-sm text-nowrap font-semibold text-[#19191C] shadow-[0px_1px_2px_0px_#0D0D120F]"
      >
        {/* Left side (calendar icon + date) */}
        <div className="flex items-center gap-2">
          <CalendarDays size={18} className="text-[#19191C]" />
          <span>
            {selected
              ? selected.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              : "Pick a date"}
          </span>
        </div>

        {/* Right side (chevron) */}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 z-50 bg-white text-myBlack border border-[#DFE1E7] rounded-[12px] text-sm shadow-lg p-2">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            defaultMonth={selected}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarDropdown;
