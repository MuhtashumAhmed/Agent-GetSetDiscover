const EarchRewardsCard = ({key , icon, text, value,bgColor , className = "" }) => {
  return (
    <div
      className={`h-[75px] w-full sm:w-[181px] bg-myWhite-color rounded-[12.75px] p-4 border-[1px] border-[#0000001A]   ${className} `}
      key={key}
    >
      <div className="flex items-center gap-x-[10.49px]  ">
        {/* icon */}
        {/* <div className=h-[31.5px] w-[31.5px] rounded-[8.75px] bg-[#DCFCE7] p-[7px] flex items-center justify-center "> */}
        <div className={`h-[31.5px] w-[31.5px] rounded-[8.75px]  p-[7px] flex items-center justify-center ${bgColor} `}>
          <span>{icon}</span>
        </div>

        {/* text */}
        <div className="flex flex-col  " >

        <h5 className="font-noto text-[12.3px] text-[#717182] " >{text}</h5>
        <h2 className="font-noto text-[21px] font-bold text-[#0A0A0A] " >{value}</h2>
        </div>
      </div>
    </div>
  );
};

export default EarchRewardsCard;
