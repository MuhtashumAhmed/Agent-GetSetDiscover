import { twMerge } from "tailwind-merge";

const DashboardCard = ({
  title,
  value,
  badge,
  subtitle,
  icon,
  className = "",
}) => {
  return (
    // <div className="flex-1 min-w-[200px] max-w-[100%] h-[88px] rounded-[16px] border-[1px] p-4 bg-myWhite-color border-white flex justify-between font-manrope ">
    <div
      className={twMerge(
        "flex-1 min-w-[211px] max-w-[100%] min-h-[88px] rounded-[16px] border-[1px] px-4 py-2 pt-4 bg-myWhite-color border-white flex justify-between font-manrope",
        className
      )}
    >
      {/* left box */}
      <div className="flex justify-between w-full   ">
        <div className="flex flex-col gap-y-1.5">
          {/* icon */}
          <div className="flex gap-x-2">
            <span className="h-[22px] w-[22px] bg-[#FFF6F6] rounded-full flex items-center justify-center ">
              {icon}
            </span>
            <p className="text-[#242E2C] font-urbanist font-bold text-sm text-nowrap ">
              {title}
            </p>
          </div>
          <h3 className="font-bold font-urbanist text-2xl lg:text-xl xl:text-2xl text-[#000000] ">
            {value}
          </h3>
        </div>
        {/* right box */}
        {/* <div className="flex flex-col gap-y-2 items-end   "> */}
        <div className="flex flex-col gap-y-2 items-end justify-between  ">
          <span className="flex items-center justify-center  w-[25px] h-[17px] bg-[#FFD3B4] rounded-[15px] py-[2px] px-[5px] font-urbanist font-semibold text-[#000000] text-[10px] ">
            {badge}
          </span>
          <h4 className="font-urbanist text-xs text-[#000000]   ">{subtitle}</h4>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
