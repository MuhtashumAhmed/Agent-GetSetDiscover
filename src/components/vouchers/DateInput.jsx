import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { CiCalendar } from "react-icons/ci";
import "react-datepicker/dist/react-datepicker.css";

/**
 * Custom Input for DatePicker
 */
const CustomDateInput = forwardRef(
    ({ value, onClick, placeholder, icon: Icon, classNames = {} }, ref) => (
        <div
            onClick={onClick}
            ref={ref}
            className={`flex items-center gap-3 cursor-pointer w-full ${
                classNames.wrapper || "h-[45px] px-4 border border-gray-300 rounded-xl shadow-sm bg-white"
            }`}
        >
            {/* Left Icon (customizable) */}
            {Icon ? (
                <Icon className={`w-5 h-5 text-gray-400 ${classNames.icon || ""}`} />
            ) : (
                <CiCalendar className={`w-5 h-5 text-gray-400 ${classNames.icon || ""}`} />
            )}

            {/* Placeholder / Value */}
            <span
                className={
                    value && value !== ""
                        ? `flex-1 text-gray-800 ${classNames.value || ""}`
                        : `flex-1 text-gray-400 ${classNames.placeholder || ""}`
                }
            >
                {value && value !== "" ? value : placeholder}
            </span>
        </div>
    )
);

/**
 * DateInput Component
 */
const DateInput = ({
    placeholder = "DD / MM / YYYY",
    icon,
    classNames = {},
}) => {
    const [date, setDate] = useState(null);

    return (
        <div className="w-full"> {/* Change to w-full */}
            <DatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                dateFormat="dd/MM/yyyy"
                placeholderText={placeholder}
                customInput={
                    <CustomDateInput
                        placeholder={placeholder}
                        icon={icon}
                        classNames={classNames}
                    />
                }
                wrapperClassName="w-full" // Add this line
            />
        </div>
    );
};

export default DateInput;