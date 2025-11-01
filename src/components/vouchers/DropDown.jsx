
import { FiChevronDown } from "react-icons/fi";

const DropDown = ({
  label,
  placeholder = "Select...",
  options = [],
  value,
  onChange,
  classNames = {},
}) => {
  return (
    <div className={`flex flex-col relative border rounded-md border-[#EEEEEE]  ${classNames.wrapper || ""}`}>
      {/* Label (if passed) */}
      {label && (
        <label
          className={`mb-1 text-sm font-medium text-gray-700 ${classNames.label || ""
            }`}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-lg bg-white text-gray-700 px-3 py-2 text-sm 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 
                      border border-myWhite-color hover:border-blue-400 
                      appearance-none pr-10 ${classNames.select || ""}`}
        >
          {/* Placeholder option */}
          <option value="" disabled hidden  >
            {placeholder}
          </option>

          {/* Map options */}
          {options.map((opt, idx) => (
            <option
              key={idx}
              value={opt.value}
              className={`text-sm ${classNames.option || ""}`}
            >
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom Icon */}
        <FiChevronDown
          className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none ${classNames.icon || ""
            }`}
        />
      </div>
    </div>
  );
};

export default DropDown;
