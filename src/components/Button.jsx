import { twMerge } from "tailwind-merge";

const Button = ({ children, className = '', ...rest }) => {
  return (
    <button
      className={twMerge(
        `rounded-[12px] bg-[#FF6600] text-myWhite-color w-[100%] h-12 text-xl font-Poppins`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
