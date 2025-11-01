import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomTimePicker({ pickupTime, setPickupTime }) {
  // Local states for hours, minutes, and AM/PM
  const [hour, setHour] = useState(10);
  const [minute, setMinute] = useState(30);
  const [period, setPeriod] = useState("AM");

  // Whenever hour, minute, or period changes → update parent state
  useEffect(() => {
    const formatted = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")} ${period}`;
    setPickupTime(formatted);
  }, [hour, minute, period, setPickupTime]);

  const handleClockClick = (angle) => {
    const newHour = Math.round(angle / 30) || 12;
    setHour(newHour);
  };

  const handleMinuteClick = (angle) => {
    const newMinute = Math.round(angle / 6) % 60;
    setMinute(newMinute);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 flex gap-8 items-center w-[400px]">
        {/* LEFT SIDE - Digital Time + AM/PM */}
        <div className="flex flex-col items-center gap-4 ">
          <div className="flex items-center gap-2 ">
            <input
              type="number"
              value={hour}
              onChange={(e) =>
                setHour(Math.min(12, Math.max(1, Number(e.target.value))))
              }
              className="w-14 text-center text-2xl font-semibold border border-[#FF6600] text-[#1D1D1D] rounded-lg px-2 py-1 focus:ring-1 focus:ring-[#FF6600] outline-none "
            />
            <span className="text-2xl font-semibold">:</span>
            <input
              type="number"
              value={minute}
              onChange={(e) =>
                setMinute(Math.min(59, Math.max(0, Number(e.target.value))))
              }
              className="w-14 text-center text-2xl font-semibold border border-[#FF6600] text-[#1D1D1D] rounded-lg px-2 py-1 focus:ring-1 focus:ring-[#FF6600] outline-none"
            />
          </div>

          {/* AM/PM toggle */}
          <div className="flex gap-3">
            {["AM", "PM"].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-1 rounded-lg font-medium transition ${period === p
                  ? "bg-[#FF6600] hover:bg-[#FF6600]/80 text-white"
                  : "bg-[#FF6600]/10 text-gray-700 hover:bg-[#FF6600]/20 "
                  }`}
              >
                {p}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-600">
            Selected:{" "}
            <span className="font-semibold font-poppins ">{pickupTime}</span>
          </p>
        </div>

        {/* RIGHT SIDE - Analog Clock */}

        <div className="relative w-48 h-42 rounded-full border-2 border-[#FF6600] flex items-center justify-center bg-white shadow-lg">
          {/* Hour Hand */}
          <motion.div
            className="absolute w-[3px] h-16 bg-[#FF6600] origin-bottom"
            style={{ bottom: "50%" }}
            animate={{ rotate: (hour % 12) * 30 }}
            transition={{ type: "spring", stiffness: 100 }}
          />

          {/* Minute Hand */}
          <motion.div
            className="absolute w-[2px] h-20 bg-[#FF6600]/35 origin-bottom"
            style={{ bottom: "50%" }}
            animate={{ rotate: minute * 6 }}
            transition={{ type: "spring", stiffness: 80 }}
          />

          {/* Center dot */}
          <div className="absolute w-4 h-4 bg-[#FF6600] rounded-full z-10" />

          {/* Hour numbers – 12 top, 3 right, 6 bottom, 9 left */}
          {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2].map((num, idx) => {
            const angle = idx * 30; // 0° = 12 o’clock
            return (
              <div
                key={num}
                className="absolute w-6 h-6 flex items-center justify-center text-xs font-medium text-gray-600 cursor-pointer"
                style={{
                  transform: `rotate(${angle}deg) translate(80px) rotate(-${angle}deg)`,
                }}
                onClick={() => handleClockClick(angle)}
              >
                {num}
              </div>
            );
          })}

          {/* Minute ticks */}
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[6px] bg-gray-300"
              style={{ transform: `rotate(${i * 6}deg) translate(90px)` }}
              onClick={() => handleMinuteClick(i * 6)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
