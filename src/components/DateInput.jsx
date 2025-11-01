import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

const DateIconInput = ({ selectedDate, onChange, text, className = "" }) => {
  return (
    <div className="relative">
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        customInput={
          // <button className="w-[64px] h-[32px] flex items-center justify-center rounded-lg bg-myWhite shadow-sm">
          <button className={`w-[64px] h-[32px] flex items-center justify-center rounded-lg bg-myWhite shadow-sm ${className} `}>
            <FiCalendar className="text-[#1E4841] text-sm" />
            <span className="text-[#1E4841] font-semibold font-urbanist text-[10.5px] ml-1">
              {/* Date */}
              {text}
            </span>
          </button>
        }
      />
    </div>
  );
};

export default DateIconInput;
