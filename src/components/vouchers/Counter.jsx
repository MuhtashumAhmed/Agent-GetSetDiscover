import React from "react";

const Counter = ({ label,text, value, onChange, min = 0, max = 99 }) => {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));

  return (
   <div className="shadow-[0px_0px_13px_-3px_#0000001A] flex items-center justify-between bg-white font-manrope border border-[#EEEEEE] rounded-xl px-4 py-3 h-[74px]">
      <span className="flex flex-col font-manrope font-semibold text-sm text-[#000000]">
        {label}
        <span className="font-manrope text-[8px] text-[#787878] " >{text}</span>
      </span>

      <div className="flex items-center gap-0">
        <button
          onClick={dec}
          className="cursor-pointer w-6 h-6 rounded-full border border-[#9E9E9E] text-[#9E9E9E] hover:bg-gray-50 flex items-center justify-center  transition text-lg"
        >
          −
        </button>
        <span className="w-8 text-center text-sm text-[#000000] font-semibold">{value}</span>
        <button
          onClick={inc}
          className="cursor-pointer w-6 h-6 rounded-full border border-[#9E9E9E] text-[#9E9E9E] hover:bg-gray-50 flex items-center justify-center  transition text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
