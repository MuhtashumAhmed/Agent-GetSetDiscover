import { useState } from "react";
import { DotIcon, GreaterSign, OrangeCircle } from "../../../assets/icons/Icons";
import FileUploadButton from "../../vouchers/FileUploadButton";
import DateInput from "../../vouchers/DateInput";
import InputWithIcon from "../../vouchers/InputWithIcon";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Pets = ({ passengers }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ helper: 1 → 1st, 2 → 2nd, 3 → 3rd, …
  const ordinal = (n) =>
    n + ([, "st", "nd", "rd"][(n % 100 >> 3) ^ 1 && n % 10] || "th");

  return (
    <div >
      {/* <div className="flex flex-wrap gap-4"> */}
      <div className=" md:flex flex-wrap gap-4  ">
        {/* Left side buttons */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-3 py-2 max-h-[300px] overflow-auto">
            {Array.from({ length: passengers?.pets || 0 }).map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`flex items-center h-[74px] p-3 rounded-[15px] cursor-pointer shadow-[0px_0px_13px_-3px_#0000001A]
                            ${activeIndex === i
                    ? "bg-[#FFEDE2]"
                    : "bg-white border border-[#EEEEEE]"
                  }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <span className="relative">
                      <OrangeCircle />
                      <span className="absolute top-1/2 left-2.5 -translate-x-1/2 -translate-y-1/2">
                        <DotIcon />
                      </span>
                    </span>
                    <div className="flex flex-col">
                      <h2 className="font-manrope font-bold text-[20px] text-[#000000]">
                        {ordinal(i + 1)} Pet
                      </h2>
                    </div>
                  </div>
                  <GreaterSign />
                </div>
              </div>
            ))}
            {passengers?.pets <= 0 && (
              <p className="w-full text-center text-gray-500">
                No Pets selected
              </p>
            )}
          </div>
        </div>

        {/* Right side */}
        {passengers?.pets > 0 && (
          <div className="flex-1">
            <div className="flex flex-col h-auto">
              {/* Show only active pet */}
              <div className="gap-[30px]">
                <div className="flex flex-wrap items-center gap-4">
                  <div
                    key={activeIndex}
                    className="border border-[#EEEEEE] flex-1 w-full md:min-w-[500px] rounded-[20px] shadow-sm p-4"
                  >
                    <h2 className="flex items-center font-manrope text-myBlack text-[18px] md:text-[20px] font-bold">
                      <span className="bg-[#FF6600] flex items-center justify-center font-manrope text-sm text-myWhite-color h-5 w-5 rounded-full mr-[12px] md:mr-[18px]">
                        {activeIndex + 1}
                      </span>
                      {ordinal(activeIndex + 1)} Pet
                    </h2>
                    <hr className="text-[#EEEEEE] mt-4" />

                    {/* details */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <InputWithIcon
                        className="flex-1 h-[50px] w-full rounded-[14px] font-manrope font-bold text-sm"
                        inputClassName="capitalize text-[#111827]"
                        placeholder="Pet Name*"
                      />

                      <FileUploadButton
                        buttonText="Image Upload"
                        accept=".pdf,.doc,.docx,image/*"
                        multiple
                        showPreview
                        classNames={{
                          button:
                            "px-5 py-3 w-full rounded-xl border border-[#EEEEEE]",
                          icon: "text-blue-600",
                          text: "text-[#111827]/55",
                          fileName: "text-sm text-gray-700",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* --- close right container --- */}
          </div>

        )}

      </div>


    </div>
  );
};

export default Pets;
