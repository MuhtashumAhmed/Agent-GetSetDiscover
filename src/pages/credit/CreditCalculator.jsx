import React, { useState } from "react";

const CreditCalculator = () => {
    const popularAmounts = [50, 100, 250, 500, 750, 1000, 1500, 2000];
    const pricePerCredit = 0.1;  // price per credit

    const [credits, setCredits] = useState(100);

    // handle changes (buttons, input, slider)
    const handleSetCredits = (value) => {
        let val = Math.max(1, Math.min(10000, value)); // limit 1 - 10,000
        setCredits(val);
    };

    const totalAmount = (credits * pricePerCredit).toFixed(2);

    return (
        <div className="font-manrope">
            {/* Popular Amounts */}
            <div>
                <h3 className="font-manrope text-[12.3px] text-myGray mt-2 mb-1">Popular Amounts</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 ">
                    {popularAmounts.map((amt) => (
                        <button
                            key={amt}
                            onClick={() => handleSetCredits(amt)}
                            className={`px-3 py-2 rounded-[6.75px] border border-[#0000001A] text-[10.5px] font-medium transition 
                ${credits === amt
                                    ? "bg-black text-white border-black"
                                    : "bg-white border-gray-300 text-myGray"
                                }`}
                        >
                            {amt}
                        </button>
                    ))}
                </div>
            </div>

            {/* Custom Input */}
            <div>
                <h3 className="font-manrope text-[12.3px] text-myGray mt-4 mb-1">Custom Amount</h3>
                <div className="bg-myWhite-color flex items-center " >

                    <div className="flex items-center w-full max-w-[480.48px] bg-[#F5F5F5] h-[31.48px]  rounded-[6.75px]  px-3 py-2">

                        <input
                            type="number"
                            value={credits}
                            min={1}
                            max={10000}
                            onChange={(e) => handleSetCredits(Number(e.target.value))}
                            className="flex-1 outline-none rounded-[6.75px]   text-myGray text-[12.3px] "
                        />
                    </div>
                    <span className="text-[#030213]  text-[10.5px] font-manrope bg-[#ECEEF2] rounded-[6.75px] py-[3px] px-[8.25px] font-semibold ml-2 ">credits</span>
                </div>
                <p className="text-[10.5px] text-[#717182] mt-1">
                    Minimum: 1 credit • Maximum: 10,000 credits
                </p>
            </div>

            {/* Slider */}
            <div  >
                <h3 className="font-manrope text-[12.3px] font-semibold text-myGray mb-2 mt-4">Adjust with Slider</h3>
                <input
                    type="range"
                    min={1}
                    max={2000}
                    value={credits}
                    onChange={(e) => handleSetCredits(Number(e.target.value))}
                    className="w-full accent-[#030213]"
                />
                <div className="flex justify-between text-[10.5px] text-gray-500 mt-1">
                    <span>50</span>
                    <span>2,000</span>
                </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-green-100 rounded-xl p-4 space-y-2 mt-4 font-manrope">
                <h3 className="text-sm text-myGray ">Price Breakdown</h3>
                <div className="flex justify-between text-sm">
                    <span className="tetx-[12.3px] text-myGray " >{credits} credits</span>
                    <span className="tetx-[12.3px] text-myGray " >${totalAmount}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="ettx-[12.3px] text-[#717182] " >Price per credit</span>
                    <span className="ettx-[12.3px] text-[#717182] " >${pricePerCredit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-manrope text-sm border-[#0000001A] text-myGray font-semibold border-t pt-2">
                    <span>Total Amount</span>
                    <span>${totalAmount}</span>
                </div>
            </div>
        </div>
    );
};

export default CreditCalculator;
