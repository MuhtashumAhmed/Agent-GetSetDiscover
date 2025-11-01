import { useId } from "react";

const MyCustomCheckbox = ({ label, checked, onChange, error }) => {
  const id = useId(); // unique id for accessibility
  // console.log(error);
  


  return (
    <label
      htmlFor={id}
      className="relative flex items-center gap-2 text-[12.3px] text-myGray font-noto cursor-pointer select-none"
    >
      {/* Real hidden checkbox */}
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      {/* Custom checkbox UI */}
      <span
        className={`mt-1 w-4 h-4 flex items-center justify-center rounded-[4px] shadow-sm border transition
          ${checked
            ? "bg-black border-black"
            : error
              ? "bg-red-50 border-red-500"
              : "bg-[#F3F3F5] border-gray-300"}`}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>

      <span className="text-myGray  font-noto ml-1" >{label}</span>
    </label>
  );
};

export default MyCustomCheckbox;
