import React, { useEffect, useState } from "react";

const ResendTimer = ({ duration = 60, onResend }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format mm:ss
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="text-center mt-2">
      {timeLeft > 0 ? (
        <p className="font-manrope text-base text-[#007DFC]">
          Resend in {formatTime(timeLeft)}
        </p>
      ) : (
        <button
          onClick={() => {
            setTimeLeft(duration); // reset timer
            onResend && onResend();
          }}
          className="font-manrope text-base text-[#007DFC] underline"
        >
          Resend OTP
        </button>
      )}
    </div>
  );
};

export default ResendTimer;
