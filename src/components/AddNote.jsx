import { useState } from "react";
import Button from "./Button";
import CalendarInput from "./CalendarInput";
import CustomDateInput from "./CustomDateInput";

const AddNote = () => {
  const [AddNoteDate, setAddNoteDate] = useState();

  return (
    <div className=" px-4 sm:p-0 -mt-5 h-[277px] w-[284px] mb-2 ">
      <h2 className="font-urbanist font-bold text-[#000000] text-[16px]  ">
        Add Notes
      </h2>
      <div className="  ">
        <label className="mb-[6px] font-manrope text-xs text-[#000000] ">
          Date
        </label>
        {/* <CustomDateInput /> */}
        <CalendarInput
          value={AddNoteDate}
          onChange={setAddNoteDate}
          className="bg-myWhite-color shadow-[0px_0px_13px_-3px_#0000001A]  h-[51px] border-[#EEEEEE]  text-[#000000]"
          calendarClassName="bg-white   "
          placeholder="Select Date"
        />
      </div>

      <textarea
        // value={message}

        placeholder="Message"
        className="w-full mt-[15px] h-24 p-3 border font-manrope text-[10px] text-[#000000] border-[#EEEEEE] rounded-md resize-none focus:outline-none shadow "
      />
      <Button className="bg-[#007AFC] h-[35px] font-Poppins text-xs text-[#FFFFFF] mt-[15px]  ">
        Add
      </Button>
    </div>
  );
};

export default AddNote;
