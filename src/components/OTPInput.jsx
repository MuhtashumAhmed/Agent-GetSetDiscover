import React, { useRef, useState, useEffect } from "react";

const OTPInput = ({
  length = 6,
  onChangeOTP,
  logo = "/logo.png",
  heading = "Confirm OTP",
  description = "Enter the OTP sent to your email/phone",
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    if (/[^0-9]/.test(value)) return; // only numbers

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // only last digit
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    onChangeOTP(newOtp.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("Text").trim();
    if (/^\d+$/.test(pasteData)) {
      const newOtp = pasteData.slice(0, length).split("");
      setOtp(newOtp);

      newOtp.forEach((digit, i) => {
        if (inputRefs.current[i]) {
          inputRefs.current[i].value = digit;
        }
      });

      onChangeOTP(newOtp.join(""));
    }
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-md mx-auto ">
      {/* Logo */}
      <div className="mb-6">
        <img src={logo} alt="Logo" className="h-12  object-contain" />
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{heading}</h1>
      <p className="text-[#838383] font-roboto text-[20px] sm:text-[15px] font-[400] mb-6">{description}</p>
       

      {/* OTP Inputs */}
      <div className="flex justify-center gap-2" onPaste={handlePaste}>
        {otp.map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            required
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="
    w-12 h-12 
    text-center text-lg font-medium 
    border-b-2 border-gray-300 
    focus:border-primary-background 
    outline-none text-[#1B1B1B]
  "
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
