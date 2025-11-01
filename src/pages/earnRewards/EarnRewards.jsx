import CopyInput from "../../components/CopyInput";
import EarchRewardsCard from "../../components/earn-rewards/EarchRewardsCard";
import EarnRewardsTable from "../../components/earn-rewards/EarnRewardsTable";

const shareIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.375 6.08203C14.5831 6.08203 15.5625 5.10265 15.5625 3.89453C15.5625 2.68641 14.5831 1.70703 13.375 1.70703C12.1669 1.70703 11.1875 2.68641 11.1875 3.89453C11.1875 5.10265 12.1669 6.08203 13.375 6.08203Z"
      stroke="#0A0A0A"
      stroke-width="1.45833"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.625 11.1875C5.83312 11.1875 6.8125 10.2081 6.8125 9C6.8125 7.79188 5.83312 6.8125 4.625 6.8125C3.41688 6.8125 2.4375 7.79188 2.4375 9C2.4375 10.2081 3.41688 11.1875 4.625 11.1875Z"
      stroke="#0A0A0A"
      stroke-width="1.45833"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.375 16.293C14.5831 16.293 15.5625 15.3136 15.5625 14.1055C15.5625 12.8973 14.5831 11.918 13.375 11.918C12.1669 11.918 11.1875 12.8973 11.1875 14.1055C11.1875 15.3136 12.1669 16.293 13.375 16.293Z"
      stroke="#0A0A0A"
      stroke-width="1.45833"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.51367 10.1016L11.4939 13.0036"
      stroke="#0A0A0A"
      stroke-width="1.45833"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.4866 4.99609L6.51367 7.89818"
      stroke="#0A0A0A"
      stroke-width="1.45833"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const earnRewardsCardData = [
  {
    icon: (
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9173 15.9375V14.4792C11.9173 13.7056 11.61 12.9638 11.063 12.4168C10.5161 11.8698 9.7742 11.5625 9.00065 11.5625H4.62565C3.8521 11.5625 3.11024 11.8698 2.56326 12.4168C2.01628 12.9638 1.70898 13.7056 1.70898 14.4792V15.9375"
          stroke="#155DFC"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.916 2.90625C12.5415 3.06839 13.0954 3.43363 13.4908 3.94463C13.8862 4.45563 14.1007 5.08346 14.1007 5.72958C14.1007 6.37571 13.8862 7.00354 13.4908 7.51454C13.0954 8.02554 12.5415 8.39077 11.916 8.55292"
          stroke="#155DFC"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.291 15.9365V14.4781C16.2905 13.8319 16.0754 13.2041 15.6795 12.6934C15.2836 12.1826 14.7292 11.8178 14.1035 11.6562"
          stroke="#155DFC"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.81315 8.64583C8.42398 8.64583 9.72982 7.34 9.72982 5.72917C9.72982 4.11834 8.42398 2.8125 6.81315 2.8125C5.20232 2.8125 3.89648 4.11834 3.89648 5.72917C3.89648 7.34 5.20232 8.64583 6.81315 8.64583Z"
          stroke="#155DFC"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    text: "Total Referrals",
    value: "3",
    bgColor: "bg-[#DCFCE7]",
  },
  {
    icon: (
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9076 15.9375V14.4792C11.9076 13.7056 11.6003 12.9638 11.0533 12.4168C10.5063 11.8698 9.76443 11.5625 8.99089 11.5625H4.61589C3.84234 11.5625 3.10047 11.8698 2.55349 12.4168C2.00651 12.9638 1.69922 13.7056 1.69922 14.4792V15.9375"
          stroke="#00A63E"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.80339 8.64583C8.41422 8.64583 9.72005 7.34 9.72005 5.72917C9.72005 4.11834 8.41422 2.8125 6.80339 2.8125C5.19255 2.8125 3.88672 4.11834 3.88672 5.72917C3.88672 7.34 5.19255 8.64583 6.80339 8.64583Z"
          stroke="#00A63E"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.0938 6.45703V10.832"
          stroke="#00A63E"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.2813 8.64453H11.9062"
          stroke="#00A63E"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    text: "Active Referrals",
    value: "1",
    bgColor: "bg-[#DCFCE7]",
  },
  {
    icon: (
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8333 6.45703H3.16667C2.76396 6.45703 2.4375 6.78349 2.4375 7.1862V8.64453C2.4375 9.04724 2.76396 9.3737 3.16667 9.3737H14.8333C15.236 9.3737 15.5625 9.04724 15.5625 8.64453V7.1862C15.5625 6.78349 15.236 6.45703 14.8333 6.45703Z"
          stroke="#9810FA"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 6.45703V15.9362"
          stroke="#9810FA"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.1048 9.375V14.4792C14.1048 14.8659 13.9512 15.2369 13.6777 15.5104C13.4042 15.7839 13.0333 15.9375 12.6465 15.9375H5.35482C4.96804 15.9375 4.59711 15.7839 4.32362 15.5104C4.05013 15.2369 3.89648 14.8659 3.89648 14.4792V9.375"
          stroke="#9810FA"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.7194 6.45865C5.23593 6.45865 4.77227 6.2666 4.4304 5.92473C4.08854 5.58287 3.89648 5.1192 3.89648 4.63574C3.89648 4.15227 4.08854 3.6886 4.4304 3.34674C4.77227 3.00488 5.23593 2.81282 5.7194 2.81282C6.42282 2.80056 7.11213 3.14186 7.69744 3.79221C8.28275 4.44255 8.73689 5.37176 9.00065 6.45865C9.26441 5.37176 9.71855 4.44255 10.3039 3.79221C10.8892 3.14186 11.5785 2.80056 12.2819 2.81282C12.7654 2.81282 13.229 3.00488 13.5709 3.34674C13.9128 3.6886 14.1048 4.15227 14.1048 4.63574C14.1048 5.1192 13.9128 5.58287 13.5709 5.92473C13.229 6.2666 12.7654 6.45865 12.2819 6.45865"
          stroke="#9810FA"
          stroke-width="1.45833"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    text: "Credits Earned",
    value: "200",
    bgColor: "bg-[#F3E8FF]",
  },
];

const giftIcon = (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8333 6.45703H3.16667C2.76396 6.45703 2.4375 6.78349 2.4375 7.1862V8.64453C2.4375 9.04724 2.76396 9.3737 3.16667 9.3737H14.8333C15.236 9.3737 15.5625 9.04724 15.5625 8.64453V7.1862C15.5625 6.78349 15.236 6.45703 14.8333 6.45703Z"
      stroke="#0A0A0A"
      stroke-width="1.45833"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 6.45703V15.9362"
      stroke="#0A0A0A"
      stroke-width="1.45833"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.1048 9.375V14.4792C14.1048 14.8659 13.9512 15.2369 13.6777 15.5104C13.4042 15.7839 13.0333 15.9375 12.6465 15.9375H5.35482C4.96804 15.9375 4.59711 15.7839 4.32362 15.5104C4.05013 15.2369 3.89648 14.8659 3.89648 14.4792V9.375"
      stroke="#0A0A0A"
      stroke-width="1.45833"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.7194 6.45865C5.23593 6.45865 4.77227 6.2666 4.4304 5.92473C4.08854 5.58287 3.89648 5.1192 3.89648 4.63574C3.89648 4.15227 4.08854 3.6886 4.4304 3.34674C4.77227 3.00488 5.23593 2.81282 5.7194 2.81282C6.42282 2.80056 7.11213 3.14186 7.69744 3.79221C8.28275 4.44255 8.73689 5.37176 9.00065 6.45865C9.26441 5.37176 9.71855 4.44255 10.3039 3.79221C10.8892 3.14186 11.5785 2.80056 12.2819 2.81282C12.7654 2.81282 13.229 3.00488 13.5709 3.34674C13.9128 3.6886 14.1048 4.15227 14.1048 4.63574C14.1048 5.1192 13.9128 5.58287 13.5709 5.92473C13.229 6.2666 12.7654 6.45865 12.2819 6.45865"
      stroke="#0A0A0A"
      stroke-width="1.45833"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const bulletPoint = [
  "• Share your referral link with friends",
  "• When they sign up and make their first booking, you both get 50 credits",
  "• When they become active users, you get an additional 50 credits",
  "• No limit on the number of referrals you can make!",
];

const EarnRewards = () => {
  return (
    <div className=" p-2 md:p-0 flex  flex-col gap-y-[22px] -mb-10 -mt-2 ">
      {/* top cards */}
      <div className="flex justify-center md:justify-normal flex-wrap items-center gap-5 ">
        {earnRewardsCardData?.map((d, i) => {
          return (
            <EarchRewardsCard
              key={i}
              icon={d.icon}
              text={d.text}
              value={d.value}
              bgColor={d.bgColor}
            />
          );
        })}
      </div>

      {/* 2nd container */}
      <div className="p-[21px] bg-myWhite-color rounded-[12.75px] border-[1px] border-[#0000001A]  ">
        {/*  header + copy input */}
        <div className="flex  flex-wrap gap-[14px] ">
          <div className="w-full sm:flex-1">
            <span className="pl-[6.99px] flex items-center gap-x-[6.99px] mb-[26.23px]">
              {shareIcon}
              <h3 className="font-noto text-sm text-[#0A0A0A] ">
                Your Referral Link
              </h3>
            </span>
            <CopyInput value="https://travelagent.com/ref/USER123456" />
          </div>
          <div className="w-full sm:flex-1">
            <span className="pl-[6.99px] flex items-center gap-x-[6.99px] mb-[26.23px]">
              {shareIcon}
              <h3 className="font-noto text-sm text-[#0A0A0A] ">
                Your Referral Link
              </h3>
            </span>
            <CopyInput value="USER123456" />
          </div>
        </div>

        {/* text box */}
        <div className="rounded-[8.75px] p-[14px] bg-[#EFF6FF]  mt-[14px] min-h-[134.9250030517578px] ">
          <span className="flex items-center gap-x-[7px] ">
            {" "}
            {giftIcon}{" "}
            <h2 className=" font-noto text-sm text-[#0A0A0A] ">How it works</h2>{" "}
          </span>

          {/* bullet points */}
          <ul className="mt-[7px] font-noto text-[12.3px] text-[#717182] ">
            {bulletPoint.map((bulletPoint, i) => {
              return (
                <li key={i} className="mt-2 md:mt-[2.6px]">
                  {bulletPoint}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* last container table */}
      <div className="mb-12 w-[95dvw] sm:w-full rounded-[12.75px]  ">
        <EarnRewardsTable />
      </div>
    </div>
  );
};

export default EarnRewards;
