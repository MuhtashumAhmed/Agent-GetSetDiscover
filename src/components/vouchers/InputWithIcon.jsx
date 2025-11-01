import React from "react";
import { FiUser } from "react-icons/fi"; // default icon

const InputWithIcon = ({
  leftIcon: LeftIcon = FiUser, // default icon
  placeholder = "Enter text...",
  value,
  onChange,
  className = "",
  inputClassName = "",
  iconClassName = "",
  type = "text",
  ...rest

}) => {
  return (
    <div
      className={`flex items-center  border border-[#EEEEEE] bg-white px-3  ${className}`}
    >
      {/* Left Icon */}
      <LeftIcon className={`w-5 h-5 text-gray-500 mr-2 ${iconClassName}`} />

      {/* Input */}
      <input
        // type="text"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={type === "number" ? "0" : undefined} // Auto-add min for number type
        className={`flex-1 bg-transparent focus:outline-none text-sm   ${inputClassName}`}
      />
    </div>
  );
};

export default InputWithIcon;
