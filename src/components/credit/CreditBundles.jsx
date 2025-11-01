import React, { useState, useEffect } from "react";
import { EnergyIcon, TickIcon } from "../../assets/icons/Icons";
import { FaCheckCircle } from "react-icons/fa";

const bundles = [
  {
    id: 1,
    name: "Starter Pack",
    price: 9,
    oldPrice: 10,
    discount: "Save 10%",
    credits: 100,
    perks: ["Perfect for beginners", "No expiry", "Instant delivery"],
    pricePerCredit: "$0.090 per credit",
    popular: false,
  },
  {
    id: 2,
    name: "Professional",
    price: 40,
    oldPrice: 50,
    discount: "Save 20%",
    credits: 500,
    perks: [
      "Most popular choice",
      "Best value",
      "Priority support",
      "Bonus features",
    ],
    pricePerCredit: "$0.080 per credit",
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: 75,
    oldPrice: 100,
    discount: "Save 25%",
    credits: 1000,
    perks: ["Maximum savings", "Bulk discount", "Premium support", "Advanced analytics"],
    pricePerCredit: "$0.075 per credit",
    popular: false,
  },
  {
    id: 4,
    name: "Mega Pack",
    price: 175,
    oldPrice: 250,
    discount: "Save 30%",
    credits: 2500,
    perks: [
      "Ultimate value",
      "VIP support",
      "All premium features",
      "Custom integration",
    ],
    pricePerCredit: "$0.070 per credit",
    popular: false,
  },
];

const CreditBundles = () => {
  const [selectedBundle, setSelectedBundle] = useState(null);

  // Set the popular bundle as default selected on component mount
  useEffect(() => {
    const popularBundle = bundles.find(bundle => bundle.popular);
    if (popularBundle) {
      setSelectedBundle(popularBundle.id);
    }
  }, []);

  const handleSelectBundle = (bundleId) => {
    setSelectedBundle(bundleId);
    console.log("Selected bundle:", bundleId);
  };

  return (
    <div className="mt-4 max-w-8xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bundles.map((bundle) => (
          <div
            key={bundle.id}
            onClick={() => handleSelectBundle(bundle.id)}
            className={`w-full relative border rounded-[12.75px] p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer
              ${bundle.popular ? "" : ""}
              ${selectedBundle === bundle.id ? "ring-2 ring-black border-black shadow-md" : ""}
              bg-white
            `}
          >
            {/* Selected Check Icon - Top Right */}
            {selectedBundle === bundle.id && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center z-10">
                <FaCheckCircle className="w-4 h-4 text-white" />
              </div>
            )}

            {/* Popular Badge */}
            {bundle.popular && (
              <span className="flex items-center gap-x-1 font-manrope w-max mx-auto bg-[#030213] text-white text-[10.5px] px-3 py-1 rounded-full font-semibold ">
                <EnergyIcon /> Most Popular
              </span>
            )}

            {/* Header */}
            <div className="text-center text-myGray mt-0.5">
              <h3 className="text-[15.8px] font-manrope text-myGray ">{bundle.name}</h3>
              <div className="mt-2">
                <span className="text-[21px] text-myGray font-manrope font-bold">${bundle.price}</span>
              </div>
              <div className={`text-sm font-manrope  ${bundle.popular ? "text-[#00A63E]" : "text-[#00A63E]"}`}>
                <span className="ml-2 line-through text-[12.3px] text-[#717182] mr-[6.99px]">${bundle.oldPrice}</span>
                {bundle.discount}
              </div>
              <p className="mt-1 text-sm text-[#717182] ">{bundle.credits} credits</p>
            </div>

            {/* Perks */}
            <ul className="mt-4 space-y-1 text-[10.5px] font-manrope text-myGray ">
              {bundle.perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500"><TickIcon /></span> {perk}
                </li>
              ))}
            </ul>

            {/* button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSelectBundle(bundle.id);
              }}
              className={`mt-6 h-[31.47px] w-full rounded-[6.75px] font-semibold font-manrope text-[12.3px] transition
    ${selectedBundle === bundle.id
                  ? "bg-black text-white hover:bg-gray-800  "
                  : bundle.popular
                    ? "bg-transparent  text-myGray hover:bg-myGray hover:text-myWhite-color border border-[#0000001A] " //  lighter for unselected popular bundle
                    : "bg-white border border-[#0000001A] text-myGray hover:bg-myGray hover:text-myWhite-color transition-all ease-in "
                }
  `}
            >
              Select Bundle
            </button>

            {/* Price per credit */}
            <p
              className={`text-[10.5px] font-manrope text-center mt-2 ${bundle.popular ? "text-[#717182]" : "text-[#717182]"
                }`}
            >
              {bundle.pricePerCredit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditBundles;