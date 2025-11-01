import { useState, useEffect } from "react";
import CreditBox from "./CreditBox";
import Button from "../../components/Button";
import { StarIcon } from "../../assets/icons/Icons";
import { FaCheckCircle } from "react-icons/fa";

const CreditBundleBox = ({ creditPlans }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Set the popular plan as default selected on component mount
  useEffect(() => {
    const popularPlan = creditPlans.find(plan => plan.popular);
    if (popularPlan) {
      setSelectedPlan(popularPlan.id);
    }
  }, [creditPlans]);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    console.log("Selected plan:", planId);
  };

  return (
    <>
      {creditPlans.map((plan, index) => (
        <div
          key={index}
          onClick={() => handleSelectPlan(plan.id)} // Added onClick to select card
          className="cursor-pointer" // Add cursor pointer to indicate it's clickable
        >
          <CreditBox
            className={`border-[1px] bg-myWhite-color h-[262.69px] p-4 rounded-lg w-full transition-all duration-300 relative ${plan.popular
              ? "border-[#0000001A]"
              : "border-[#0000001A]"
              } ${selectedPlan === plan.id
                ? "ring-1 ring-[#030213] shadow-md transform scale-[1.02]"
                : ""
              }`}
          >
            {/* Selected Icon - Top Right Corner */}
            {selectedPlan === plan.id && (
              <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-[#030213] rounded-full flex items-center justify-center">
                <FaCheckCircle className=" w-3 sm:w-4 h-3 sm:h-4 text-white" />
              </div>
            )}

            {/* Credits */}
            <h3
              className={`flex justify-between font-urbanist text-myGray font-semibold text-[15.3px] ${plan.save ? "mb-0" : "mb-[21px]"
                }`}
            >
              {plan.credits}
              {plan?.popular && (
                <span className="flex items-center justify-center w-[66.4800033569336px] h-5 rounded-[6.75px] bg-[#030213] px-[8.25px] text-myWhite-color font-semibold text-[10.5px]">
                  <StarIcon className="mr-[3.49px]" /> Popular
                </span>
              )}
            </h3>

            {/* Save Text (optional) */}
            {plan.save && (
              <span className="text-[#00A63E] text-[12.3px] font-urbanist">
                {plan.save}
              </span>
            )}

            {/* Price */}
            <h2 className="font-urbanist text-[21px] font-bold text-myGray mt-2">
              {plan.price}
            </h2>
            <span className="font-urbanist text-[12.3px] text-[#717182]">
              {plan.perCredit}
            </span>

            <Button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the card click event from firing
                handleSelectPlan(plan.id);
              }}
              className={`mt-[14px] h-[31.48px] rounded-[6.75px] border-[1px] text-[12.3px] font-semibold font-urbanist mb-[14px] cursor-pointer transition-all ease-in
    ${selectedPlan === plan.id
                  ? "bg-[#030213] text-white border-[#030213] hover:bg-[#030213]/85" // selected plan = dark
                  : plan.popular
                    ? "bg-transparent text-myGray   border-[#0000001A] hover:bg-[#030213] hover:text-myWhite-color" // popular but not selected = lighter dark (gray)
                    : "bg-myWhite-color text-myGray border-[#0000001A] hover:bg-[#030213] hover:text-myWhite-color" // normal plans
                }`}
            >
              Buy Now
            </Button>


            {/* Features */}
            <div className="flex flex-col gap-1">
              {plan.features?.map((p, i) => (
                <span
                  key={i}
                  className="font-urbanist text-[#717182] text-[10.5px]"
                >
                  ✔ {p}
                </span>
              ))}
            </div>
          </CreditBox>
        </div>
      ))}
    </>
  );
};

export default CreditBundleBox;