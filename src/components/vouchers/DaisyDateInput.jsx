import { FiCalendar } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";

const DaisyDateInput = ({ value, onChange, className = "" }) => {
  const dateRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPicker = () => {
    if (dateRef.current) {
      dateRef.current.showPicker();
      setIsOpen(true);
    }
  };

  // Format date for display
  const formatDisplayDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`h-[51px] border ${
          isOpen ? "border-blue-500" : "border-[#EEEEEE]"
        } rounded-xl relative cursor-pointer bg-myWhite-color transition-colors ${className}`}
        onClick={openPicker}
      >
        {/* Left Calendar Icon */}
        <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none z-10" />

        {/* Placeholder or selected date */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none text-gray-700">
          {value ? formatDisplayDate(value) : "Select date"}
        </div>

        {/* Invisible but functional date input */}
        <input
          ref={dateRef}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-myWhite-color"
        />
      </div>

      {/* Extra style override for Opera/Chrome autofill */}
      <style>
  {`
    input[type="date"] {
      background-color: var(--myWhite-color, #fff) !important;
      color-scheme: light !important; /* prevent Opera/Chrome dark mode */
    }
    input[type="date"]:-webkit-autofill,
    input[type="date"]:-webkit-autofill:hover,
    input[type="date"]:-webkit-autofill:focus,
    input[type="date"]:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px var(--myWhite-color, #fff) inset !important;
      -webkit-text-fill-color: #000 !important;
    }
  `}
</style>

    </div>
  );
};

export default DaisyDateInput;
