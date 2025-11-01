import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import OTPInput from "../../components/OTPInput";
import ResendTimer from "../../components/ResendTimer";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    toast.success("OTP Verified!");
    navigate("/reset");
  };

  return (
    <div className="px-4 sm:px-0 max-w-[350px]">
      <button onClick={() => navigate("/forgot")} className="mb-4">
        <IoArrowBackCircleSharp className="text-2xl text-orange-500" />
      </button>

      <OTPInput
        length={6}
        onChangeOTP={setOtp}
        logo="/logo.png"
        heading="Forgot Password"
        description="Enter your OTP sent to email."
      />

      <p className="text-center text-sm text-[#838383] mt-7">
        A code has been sent to your email
      </p>
      <ResendTimer duration={60} onResend={() => console.log("OTP Resent!")} />

      <Button
        onClick={handleVerify}
        disabled={otp.length !== 6}
        className={`${
          otp.length !== 6 && "cursor-not-allowed bg-primary-background/20"
        } w-full text-xl text-white mt-[40px]`}
      >
        Verify OTP
      </Button>
    </div>
  );
};

export default OtpVerify;
