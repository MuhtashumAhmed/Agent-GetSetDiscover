import { twMerge } from "tailwind-merge";

const CreditBox = ({ children, className = "" }) => {
  return (
    <div
      className={twMerge(
        "h-[208px] rounded-[12.75px] p-[21px] max-w-[100%]",
        className
      )}
    >
      <div>{children}</div>
    </div>
  );
};

export default CreditBox;
