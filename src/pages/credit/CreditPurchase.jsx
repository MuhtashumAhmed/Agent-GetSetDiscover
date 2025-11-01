import React, { useState } from "react";
import CreditBox from "../../components/credit/CreditBox";
import {
  BackArrow,
  ChooseTypeIcon,
  ConfigureCalculatorIcon,
  PaymentCardIcon,
  TickIcon,
} from "../../assets/icons/Icons";
import ChoosePurchaseOption from "../../components/credit/ChoosePurchaseOption";
import SimpleButton from "../../components/SimpleButton";
import Configure from "./Configure";

import Complete from "./Complete";
import Payment from "../../components/credit/Payment";

// steps button
const steps = [
  { icon: <ChooseTypeIcon />, title: "Choose Type" },
  { icon: <ConfigureCalculatorIcon />, title: "Configure" },
  { icon: <PaymentCardIcon />, title: "Payment" },
  { icon: <TickIcon />, title: "Complete" },
];

const CreditPurchase = () => {
  const [activeAction, setActiveAction] = useState("Choose Type");

  // helper to get index of current step
  const currentIndex = steps.findIndex((s) => s.title === activeAction);

  // back button handler
  const handleBack = () => {
    if (currentIndex > 0) {
      setActiveAction(steps[currentIndex - 1].title);
    }
  };

  return (
    <div className="bg-myWhite-color rounded-[20px] mx-1.5 sm:m-0 py-3 px-1 sm:px-[11px] ">
      {/* top special card */}
      <CreditBox className="mx-auto bg-gradient-to-r from-[#FF6600] to-violet-600 text-myWhite-color h-[90px] max-w-[626px] ">
        {/* Top */}
        <div className="flex justify-between gap-x-2">
          <h4 className="font-noto text-sm">Your Credit Wallet</h4>
          <button className="flex items-center justify-center bg-[#FFFFFF] w-[80.5px] h-[20px] rounded-[6.75px] text-Link font-semibold text-[10.5px] font-manrope">
            $5 per credit
          </button>
        </div>

        <div className="flex gap-x-2 items-center ">
          <h4 className="font-manrope font-bold text-[21px] text-[#FFFFFF]">
            750 credits
          </h4>
        </div>
      </CreditBox>

      {/* credit steps */}
      <div className="flex items-center justify-center  gap-8 sm:gap-[70px] mt-5 ">
        {steps.map((btn, i) => (
          <div key={i} className="flex flex-col sm:flex-row flex-wrap items-center gap-x-4">
            <div
              className={`h-[35px] w-[35px] flex items-center rounded-full justify-center font-manrope tetx-[12.3px] text-myGray
                ${activeAction === btn.title
                  ? "border-[1px] border-[#030213] bg-[#030213] text-myWhite-color"
                  : "border-[1px] border-[#717182] bg-transparent"
                }`}
            >
              {btn.icon}
            </div>
            <button className="text-[#030213] text-xs sm:text-sm text-nowrap " >{btn.title}</button>
          </div>
        ))}
      </div>

      {/* step content */}
      {activeAction === "Choose Type" && <ChoosePurchaseOption steps={steps} activeAction={activeAction} setActiveAction={setActiveAction} />}
      {activeAction === "Configure" && <Configure steps={steps} activeAction={activeAction} setActiveAction={setActiveAction} />}
      {activeAction === "Payment" && <Payment steps={steps} activeAction={activeAction} setActiveAction={setActiveAction} />}
      {activeAction === "Complete" && <Complete steps={steps} activeAction={activeAction} setActiveAction={setActiveAction} />}






    </div>
  );
};

export default CreditPurchase;
