

const TimeBox = ({title , time , key}) => {
  return (
    <div key={key } className=" h-[60px]  rounded-[10px] bg-myWhite-color p-1 flex flex-col justify-center ">
      <h4 className="font-manrope font-semibold text-[10px] text-[#828282] ml-1 mb-1">
        {title}
      </h4>
      <span className="mx-auto justify-center w-full min-w-[63px] h-[34px] border py-[5px] px-1 border-[#EEEEEE] font-manrope flex items-center text-[12px] rounded-[8px] text-[#000000] ">
        {time}
      </span>
    </div>
  );
};

export default TimeBox;
