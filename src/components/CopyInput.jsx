import { useRef, useState } from "react";

const CopyInput = ({ value }) => {
  const inputRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (inputRef.current) {
      // inputRef.current.select();
      navigator.clipboard.writeText(value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }
  };

  return (
    <div className="relative w-full ">
      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        readOnly
        value={value}
        className="h-[31.48px] w-full bg-[#F5F5F5] rounded-[6.75px] px-[11.75px] py-[7.62px] pr-10 text-sm   focus:outline-none font-noto text-[12.3px] text-[#0A0A0A] "
      />

      {/* Copy Icon inside input */}
      <button
        onClick={handleCopy}
        className="absolute right-3 cursor-pointer pl-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9375 5.10156H2.8125C2.66332 5.10156 2.52024 5.16083 2.41475 5.26631C2.30926 5.3718 2.25 5.51488 2.25 5.66406V15.7891C2.25 15.9382 2.30926 16.0813 2.41475 16.1868C2.52024 16.2923 2.66332 16.3516 2.8125 16.3516H12.9375C13.0867 16.3516 13.2298 16.2923 13.3352 16.1868C13.4407 16.0813 13.5 15.9382 13.5 15.7891V5.66406C13.5 5.51488 13.4407 5.3718 13.3352 5.26631C13.2298 5.16083 13.0867 5.10156 12.9375 5.10156ZM12.375 15.2266H3.375V6.22656H12.375V15.2266ZM15.75 3.41406V13.5391C15.75 13.6882 15.6907 13.8313 15.5852 13.9368C15.4798 14.0423 15.3367 14.1016 15.1875 14.1016C15.0383 14.1016 14.8952 14.0423 14.7898 13.9368C14.6843 13.8313 14.625 13.6882 14.625 13.5391V3.97656H5.0625C4.91332 3.97656 4.77024 3.9173 4.66475 3.81181C4.55926 3.70632 4.5 3.56325 4.5 3.41406C4.5 3.26488 4.55926 3.1218 4.66475 3.01632C4.77024 2.91083 4.91332 2.85156 5.0625 2.85156H15.1875C15.3367 2.85156 15.4798 2.91083 15.5852 3.01632C15.6907 3.1218 15.75 3.26488 15.75 3.41406Z"
            fill="#242E2C"
          />
        </svg>
      </button>

      {/* Optional copied state */}
      {copied && (
        <span className="absolute -bottom-3 right-2 text-[8px] text-primary-background ">
          Copied!
        </span>
      )}
    </div>
  );
};

export default CopyInput;
