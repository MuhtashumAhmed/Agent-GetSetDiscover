import CreditBox from "../../components/credit/CreditBox";
import { ShopIcon } from "../../assets/icons/Icons";
import Button from "../../components/Button";
import CreditBundleBox from "../../components/credit/CreditBundleBox";
import CreditTable from "../../components/credit/CreditTable";
import { useState } from "react";
import CreditPurchase from "./CreditPurchase";
import { Link } from "react-router-dom";

const cardPoints = [
  "✓ Instant credit delivery",
  "✓ No expiration date",
  "✓ Flexible usage",
];
// const secondCardPoints =["✓ Instant credit delivery" , "✓ No expiration date" , "✓ Flexible usage"]

export const creditPlans = [
  {
    id: 1,
    credits: "100 Credits",
    price: "$10",
    perCredit: "$0.10 per credit",
    save: null,
    popular: false,
    features: [
      "Instant credit delivery",
      "No expiration date",
      "Flexible usage",
    ],
  },
  {
    id: 2,
    credits: "500 Credits",
    price: "$45",
    perCredit: "$0.09 per credit",
    save: "Save 10%",
    popular: true,
    features: [
      "Instant credit delivery",
      "No expiration date",
      "Flexible usage",
    ],
  },
  {
    id: 3,
    credits: "1000 Credits",
    price: "$80",
    perCredit: "$0.08 per credit",
    save: "Save 20%",
    popular: false,
    features: [
      "Instant credit delivery",
      "No expiration date",
      "Flexible usage",
    ],
  },
];

// const paymentMethodButton = ["/visa.png", "/mastercard.png", "/paypal.png", "/bank-to-bank.png"];
const paymentMethodButton = ["/visa-new.png", "/Mastercard-Logo-2016-2020.png", "/paypal1.png" ,"/bank.png"  ];

export const creditTransactions = [
  {
    date: "2024-09-24 14:30",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -25,
    balance: 750,
  },
  {
    date: "2024-09-24 14:30",
    action: "Credit purchase",
    type: "Purchase",
    credits: 100,
    balance: 850,
  },
  {
    date: "2024-09-24 14:30",
    action: "Create Trip Plan",
    type: "Usage",
    credits: 455,
    balance: 750,
  },
  {
    date: "2024-09-24 14:30",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -25,
    balance: 750,
  },
  {
    date: "2024-09-24 14:30",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -157,
    balance: 550,
  },
  {
    date: "2024-09-24 14:30",
    action: "Create Trip Plan",
    type: "Usage",
    credits: 333,
    balance: 960,
  },
  {
    date: "2024-09-24 14:30",
    action: "Create Trip Plan",
    type: "Usage",
    credits: 254,
    balance: 99,
  },
  {
    date: "2024-09-24 14:30",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -25,
    balance: 750,
  },
  {
    date: "2024-09-24 15:00",
    action: "Credit purchase",
    type: "Purchase",
    credits: 100,
    balance: 850,
  },
  {
    date: "2024-09-25 09:10",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -40,
    balance: 810,
  },
  {
    date: "2024-09-25 12:20",
    action: "Credit purchase",
    type: "Purchase",
    credits: 200,
    balance: 1010,
  },
  {
    date: "2024-09-26 08:45",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -50,
    balance: 960,
  },
  {
    date: "2024-09-26 11:00",
    action: "Credit purchase",
    type: "Purchase",
    credits: 150,
    balance: 1110,
  },
  {
    date: "2024-09-27 10:15",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -30,
    balance: 1080,
  },
  {
    date: "2024-09-27 16:40",
    action: "Credit purchase",
    type: "Purchase",
    credits: 120,
    balance: 1200,
  },
  {
    date: "2024-09-28 09:25",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -60,
    balance: 1140,
  },
  {
    date: "2024-09-28 18:10",
    action: "Credit purchase",
    type: "Purchase",
    credits: 80,
    balance: 1220,
  },
  {
    date: "2024-09-29 13:05",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -45,
    balance: 1175,
  },
  {
    date: "2024-09-30 07:55",
    action: "Credit purchase",
    type: "Purchase",
    credits: 300,
    balance: 1475,
  },
  {
    date: "2024-09-30 15:30",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -20,
    balance: 1455,
  },
  {
    date: "2024-10-01 09:45",
    action: "Credit purchase",
    type: "Purchase",
    credits: 50,
    balance: 1505,
  },
  {
    date: "2024-10-01 17:00",
    action: "Create Trip Plan",
    type: "Usage",
    credits: -35,
    balance: 1470,
  },
];
const columns = [
  {
    Header: "Date & Time",
    accessor: "date",
    Cell: (value) => {
      const [datePart, timePart] = value.split(" ");
      return (
        <span className="flex items-center gap-2">
          <span>{datePart}</span>
          <span className="text-gray-400">- {timePart}</span>
        </span>
      );
    },
  },
  {
    Header: "Action",
    accessor: "action",
  },
  {
    Header: "Type",
    accessor: "type",
    Cell: (value) => (
      <span
        className={`px-3 py-1 text-xs font-urbanist rounded-[16px] ${value === "Purchase"
          ? "bg-[#1E4841] text-[#BBF49C] "
          : "bg-[#FDCED1] text-[#F73541] "
          }`}
      >
        {value}
      </span>
    ),
  },
  {
    Header: "Credits",
    accessor: "credits",
    Cell: (value) => (
      <span className={value > 0 ? "text-[#008234] " : "text-[#A30000]"}>
        {value}
      </span>
    ),
  },
  {
    Header: "Balance",
    accessor: "balance",
  },
];

const Credit = () => {
  const [activeView, setActiveView] = useState("wallet");

  return (
    <>
      {activeView === "wallet" ? (
        <div className="p-2 md:p-0 mt-2 flex flex-col gap-4 lg:flex-row  w-full  ">
          {/* Left Container */}
          {/* <div className="max-w-[310px] w-full  "> */}
          <div className="  lg:max-w-[310px] w-[95dvw]    ">
            {/* special Box */}
            <CreditBox className="  bg-gradient-to-r from-[#FF6600] to-violet-600 text-myWhite-color">
              {/* Top */}
              <div className="flex gap-x-2">
                <span className="h-[22px] w-[22px]  flex items-center justify-center ">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8542 5.96745V3.77995C13.8542 3.58656 13.7773 3.40109 13.6406 3.26435C13.5039 3.1276 13.3184 3.05078 13.125 3.05078H3.64583C3.25906 3.05078 2.88813 3.20443 2.61464 3.47792C2.34115 3.75141 2.1875 4.12234 2.1875 4.50911C2.1875 4.89589 2.34115 5.26682 2.61464 5.54031C2.88813 5.8138 3.25906 5.96745 3.64583 5.96745H14.5833C14.7767 5.96745 14.9622 6.04427 15.0989 6.18102C15.2357 6.31776 15.3125 6.50323 15.3125 6.69661V9.61328M15.3125 9.61328H13.125C12.7382 9.61328 12.3673 9.76693 12.0938 10.0404C11.8203 10.3139 11.6667 10.6848 11.6667 11.0716C11.6667 11.4584 11.8203 11.8293 12.0938 12.1028C12.3673 12.3763 12.7382 12.5299 13.125 12.5299H15.3125C15.5059 12.5299 15.6914 12.4531 15.8281 12.3164C15.9648 12.1796 16.0417 11.9942 16.0417 11.8008V10.3424C16.0417 10.1491 15.9648 9.96359 15.8281 9.82685C15.6914 9.6901 15.5059 9.61328 15.3125 9.61328Z"
                      stroke="white"
                      stroke-width="1.45833"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.1875 4.51172V14.7201C2.1875 15.1068 2.34115 15.4778 2.61464 15.7512C2.88813 16.0247 3.25906 16.1784 3.64583 16.1784H14.5833C14.7767 16.1784 14.9622 16.1016 15.0989 15.9648C15.2357 15.8281 15.3125 15.6426 15.3125 15.4492V12.5326"
                      stroke="white"
                      stroke-width="1.45833"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <h4 className=" font-noto  text-sm  ">Your Credit Wallet</h4>
              </div>
              {/* button container */}
              <div className="mt-[35.84px] ">
                <p className="mb-[6.99px]  text-[#DCFCE7] font-urbanist text-[12.3px] ">
                  Available Credits
                </p>
                <div className="flex gap-x-2 items-center ">
                  <h4 className="font-urbanist font-bold text-[31.5px] text-[#FFFFFF]  ">
                    750
                  </h4>
                  <span className="font-urbanist text-sm text-[#DCFCE7] self-end ">
                    credits
                  </span>
                </div>
                {/* button */}
                <div className="flex items-center gap-[13.98px] mt-[9.98px] ">
                  <Link className="flex items-center justify-center bg-[#FFFFFF] w-[104.94000244140625px] h-[31.479999542236328px] rounded-[6.75px] text-Link font-semibold text-[12.3px] font-noto  "
                    // onClick={() => setActiveView("buy")} 
                    onClick={() => window.open('/dashboard/credit/buy', '_blank')}>

                    <span className="mr-[7px] "    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.37305 7.60547H11.528"
                          stroke="#155DFC"
                          stroke-width="1.165"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.45117 3.52734V11.6823"
                          stroke="#155DFC"
                          stroke-width="1.165"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    Buy Credits{" "}
                  </Link>
                  <span className="text-[#DCFCE7] font-urbanist text-[12.3px] ">
                    $5 per credit
                  </span>
                </div>
              </div>
            </CreditBox>

            {/* bottom boxes */}
            <div className="mt-5  ">
              <h6 className="flex gap-[6.99px] text-[#0A0A0A] ">
                <ShopIcon className="text-[#0A0A0A] text-sm font-urbanist mb-[14px] " />
                Credit Bundles{" "}
              </h6>
              {/* credit bundle box  */}
              <div className="flex flex-col md:flex-row  lg:flex-col gap-[10.5px]  ">
                <CreditBundleBox creditPlans={creditPlans} />
              </div>

              {/* payment method */}
              <div className="bg-[#DCFCE7] rounded-[8.75px] p-[10.5px] mt-[14px]  ">
                <p className="font-urbanist text-[#717182] text-[10.5px] ">
                  Payment methods accepted:
                </p>
                {/* <div className="flex  gap-x-[7px] mt-[6.99px]  "> */}
                <div className=" grid grid-cols-4 sm:grid-cols-4 items-center justify-items-center  gap-4  gap-x-[7px] mt-[6.99px]    ">
                  {paymentMethodButton?.map((btn, i) => {
                    return (
                      <img src={btn} key={i} loading="lazy" className=" h-max w-[50px] sm:h-[50px] sm:w-full    border border-gray-50/30   object-contain  rounded-md " />
                      
                      
                    );
                  })}
                  {/* <img src="/paypal1.png" className="h-[25px] " /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Container */}
          <div className="flex-1  w-[95dvw] sm:w-full  overflow-x-auto  mb-4 ">
            <CreditTable columns={columns} data={creditTransactions} />
          </div>
        </div>
      ) : (<CreditPurchase />)}


    </>
  )
};

export default Credit;
