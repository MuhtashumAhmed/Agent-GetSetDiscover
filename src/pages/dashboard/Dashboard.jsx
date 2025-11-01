import DashboardCard from "../../components/DashboardCard";

import Button from "../../components/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Select from "react-select";

import TimeBox from "../../components/dashboard/TimeBox";
import RevenueTrend from "../../components/dashboard/RevenueTrendGraph";
import ToggleView from "../../components/dashboard/ToggleView";
import ListView from "../../components/dashboard/ListView";
import CalanderView from "../../components/dashboard/CalanderView";
import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import CustomDropDownSelect from "../../components/CustomDropDownSelect";

import { dummyData } from "../../dummyData/dashboardTableData";
import { calanderData } from "../../dummyData/CalanderData";
import Pagination from "../../components/Pagination";
import CalanderDropdown from "../../components/CalendarDropdown";
import Calendar from "../../components/custom-calendar/Calendar";
import Modal from "../../components/Modal";
import AddNote from "../../components/AddNote";
import {
  HotelIcon,
  PlaneUpIcon,
  TourIcon,
  TransferIcon,
} from "../../assets/icons/Icons";
import CalendarInput from "../../components/CalendarInput";

const Dashboard = () => {
  const navigate = useNavigate();

  const [view, setView] = useState("list"); // default "list"
  const [activeButton, setActiveButton] = useState("flights");
  const data = dummyData[activeButton];

  // top filters
  const [topFilterActive, setTopFilterActive] = useState("Today"); // default active
  const [date, setDate] = useState();

  const [dateForfilterCalanderData, setDateForfilterCalanderData] =
    useState("2025-09-10");

  // console.log(dateForfilterCalanderData);

  // add note to calander
  const [isAddNote, setIsAddNote] = useState(false);

  let calanderDataList = [];

  if (activeButton === "flights") {
    // listData = flightListData;
    calanderDataList = calanderData.flights;
  } else if (activeButton === "hotels") {
    // listData = hotelListData;
    calanderDataList = calanderData.hotels;
  }
  // console.log(calanderDataList);

  const cardData = [
    {
      icon: (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.94424 3.67812C9.93677 3.68743 9.92886 3.69651 9.92052 3.70532L8.18693 5.53736C8.06709 5.664 7.88349 5.7074 7.71964 5.64781L3.16899 3.99303L2.43087 4.73115L5.92433 7.06013C6.03339 7.13283 6.1041 7.25061 6.11702 7.38104C6.12994 7.51148 6.08369 7.64083 5.99101 7.73351L4.67851 9.04601C4.59646 9.12806 4.48518 9.17415 4.36915 9.17415H3.23787L2.55206 9.85996L4.16992 10.4057C4.29915 10.4493 4.40066 10.5507 4.44444 10.6798L4.99505 12.3045L5.68165 11.6179V10.4867C5.68165 10.3634 5.73365 10.2458 5.82485 10.1629L7.14829 8.9598C7.24196 8.87465 7.36791 8.83425 7.49363 8.84901C7.61934 8.86378 7.7325 8.93227 7.80389 9.03681L10.1204 12.4292L10.8628 11.6868L9.20799 7.13616C9.14824 6.97185 9.19206 6.78774 9.31942 6.66795L11.1373 4.95824C11.2875 4.79633 11.3714 4.58331 11.3714 4.36165C11.3714 4.12898 11.279 3.90584 11.1145 3.74132C10.95 3.5768 10.7268 3.48438 10.4941 3.48438C10.2932 3.48438 10.0994 3.55332 9.94424 3.67812ZM11.7974 5.533C12.0858 5.21219 12.2464 4.7952 12.2464 4.36165C12.2464 3.89692 12.0618 3.45122 11.7332 3.1226C11.4046 2.79399 10.9589 2.60938 10.4941 2.60938C10.0294 2.60938 9.58372 2.79399 9.2551 3.1226C9.23068 3.14702 9.20973 3.17366 9.19225 3.20189L7.74876 4.72735L3.20616 3.07549C3.04642 3.0174 2.86748 3.0571 2.74729 3.17729L1.43479 4.48979C1.34211 4.58247 1.29586 4.71183 1.30878 4.84226C1.32169 4.9727 1.39241 5.09047 1.50147 5.16317L4.99493 7.49215L4.18793 8.29915H3.05665C2.94062 8.29915 2.82934 8.34525 2.74729 8.42729L1.43479 9.73979C1.32777 9.84681 1.28366 10.0015 1.31817 10.1489C1.35268 10.2963 1.4609 10.4153 1.60431 10.4637L3.68519 11.1656L4.3923 13.2521C4.44084 13.3953 4.55992 13.5033 4.7072 13.5377C4.85448 13.5721 5.00907 13.528 5.11601 13.421L6.42851 12.1085C6.51056 12.0265 6.55665 11.9152 6.55665 11.7992V10.6802L7.36483 9.94548L9.69535 13.3584C9.76878 13.4659 9.8863 13.5351 10.016 13.5473C10.1456 13.5594 10.2739 13.5131 10.366 13.421L11.6785 12.1085C11.7987 11.9883 11.8384 11.8094 11.7803 11.6496L10.1288 7.10794L11.6966 5.63348C11.7092 5.62336 11.7215 5.61243 11.7332 5.6007C11.7334 5.60046 11.7337 5.60022 11.7339 5.59999L11.766 5.56789C11.7772 5.5567 11.7877 5.54505 11.7974 5.533Z"
            fill="#242E2C"
          />
        </svg>
      ),
      title: "Flights Today ",
      value: "138",
      badge: "150",
      subtitle: "Total Member",
    },
    {
      icon: (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.3125 6.55051H2.625V10.0505H1.75C1.63397 10.0505 1.52269 10.0966 1.44064 10.1787C1.35859 10.2607 1.3125 10.372 1.3125 10.488C1.3125 10.604 1.35859 10.7153 1.44064 10.7974C1.52269 10.8794 1.63397 10.9255 1.75 10.9255H12.25C12.366 10.9255 12.4773 10.8794 12.5594 10.7974C12.6414 10.7153 12.6875 10.604 12.6875 10.488C12.6875 10.372 12.6414 10.2607 12.5594 10.1787C12.4773 10.0966 12.366 10.0505 12.25 10.0505H11.375V6.55051H12.6875C12.7827 6.55041 12.8753 6.51927 12.9511 6.46181C13.027 6.40435 13.0821 6.32371 13.108 6.23211C13.1339 6.14052 13.1293 6.04297 13.0947 5.95426C13.0602 5.86556 12.9977 5.79054 12.9166 5.74059L7.22914 2.24059C7.16022 2.19821 7.0809 2.17578 7 2.17578C6.9191 2.17578 6.83978 2.19821 6.77086 2.24059L1.08336 5.74059C1.00233 5.79054 0.939799 5.86556 0.905259 5.95426C0.870718 6.04297 0.866051 6.14052 0.891965 6.23211C0.917879 6.32371 0.972961 6.40435 1.04885 6.46181C1.12475 6.51927 1.21731 6.55041 1.3125 6.55051ZM3.5 6.55051H5.25V10.0505H3.5V6.55051ZM7.875 6.55051V10.0505H6.125V6.55051H7.875ZM10.5 10.0505H8.75V6.55051H10.5V10.0505ZM7 3.12652L11.142 5.67551H2.85797L7 3.12652ZM13.5625 12.238C13.5625 12.354 13.5164 12.4653 13.4344 12.5474C13.3523 12.6294 13.241 12.6755 13.125 12.6755H0.875C0.758968 12.6755 0.647688 12.6294 0.565641 12.5474C0.483594 12.4653 0.4375 12.354 0.4375 12.238C0.4375 12.122 0.483594 12.0107 0.565641 11.9287C0.647688 11.8466 0.758968 11.8005 0.875 11.8005H13.125C13.241 11.8005 13.3523 11.8466 13.4344 11.9287C13.5164 12.0107 13.5625 12.122 13.5625 12.238Z"
            fill="black"
          />
        </svg>
      ),
      title: "Hotels Today ",
      value: "8",
      badge: "18",
      subtitle: "Guests",
    },
    {
      icon: (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.125 5.23828C6.125 5.06522 6.17632 4.89605 6.27246 4.75216C6.36861 4.60826 6.50527 4.49611 6.66515 4.42989C6.82504 4.36366 7.00097 4.34633 7.1707 4.38009C7.34044 4.41386 7.49635 4.49719 7.61872 4.61956C7.74109 4.74193 7.82443 4.89784 7.85819 5.06758C7.89195 5.23731 7.87462 5.41324 7.80839 5.57313C7.74217 5.73301 7.63002 5.86967 7.48612 5.96582C7.34223 6.06196 7.17306 6.11328 7 6.11328C6.76794 6.11328 6.54538 6.02109 6.38128 5.857C6.21719 5.69291 6.125 5.47035 6.125 5.23828ZM3.5 5.23828C3.5 4.31002 3.86875 3.41978 4.52513 2.76341C5.1815 2.10703 6.07174 1.73828 7 1.73828C7.92826 1.73828 8.8185 2.10703 9.47487 2.76341C10.1313 3.41978 10.5 4.31002 10.5 5.23828C10.5 8.5168 7.35109 10.3538 7.21875 10.4309C7.15263 10.4687 7.0778 10.4885 7.00164 10.4885C6.92548 10.4885 6.85065 10.4687 6.78453 10.4309C6.64891 10.3538 3.5 8.51953 3.5 5.23828ZM4.375 5.23828C4.375 7.54609 6.335 9.07789 7 9.53125C7.66445 9.07844 9.625 7.54609 9.625 5.23828C9.625 4.54209 9.34844 3.87441 8.85616 3.38213C8.36387 2.88984 7.69619 2.61328 7 2.61328C6.30381 2.61328 5.63613 2.88984 5.14384 3.38213C4.65156 3.87441 4.375 4.54209 4.375 5.23828ZM11.089 8.9368C10.9813 8.90122 10.864 8.90885 10.7619 8.95807C10.6597 9.00729 10.5806 9.09426 10.5413 9.20064C10.5021 9.30702 10.5056 9.4245 10.5512 9.52831C10.5969 9.63212 10.6811 9.71415 10.786 9.75711C11.6889 10.0913 12.25 10.5386 12.25 10.9258C12.25 11.6564 10.2528 12.6758 7 12.6758C3.74719 12.6758 1.75 11.6564 1.75 10.9258C1.75 10.5386 2.31109 10.0913 3.21398 9.75766C3.31894 9.7147 3.40311 9.63267 3.44875 9.52886C3.4944 9.42504 3.49795 9.30756 3.45866 9.20118C3.41937 9.09481 3.34031 9.00784 3.23814 8.95862C3.13598 8.9094 3.01869 8.90177 2.91102 8.93734C1.59797 9.42133 0.875 10.1279 0.875 10.9258C0.875 12.6309 4.03102 13.5508 7 13.5508C9.96898 13.5508 13.125 12.6309 13.125 10.9258C13.125 10.1279 12.402 9.42133 11.089 8.9368Z"
            fill="black"
          />
        </svg>
      ),
      title: "Tours Today",
      value: "50",
      badge: "180",
      subtitle: "Total Tourists",
    },
    {
      icon: (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.125 6.55078H12.5344L11.0152 3.13281C10.9464 2.97817 10.8343 2.84679 10.6924 2.75457C10.5505 2.66236 10.3849 2.61328 10.2156 2.61328H3.78437C3.61514 2.61328 3.44953 2.66236 3.30763 2.75457C3.16572 2.84679 3.0536 2.97817 2.98484 3.13281L1.46562 6.55078H0.875C0.758968 6.55078 0.647688 6.59687 0.565641 6.67892C0.483594 6.76097 0.4375 6.87225 0.4375 6.98828C0.4375 7.10431 0.483594 7.21559 0.565641 7.29764C0.647688 7.37969 0.758968 7.42578 0.875 7.42578H1.3125V11.8008C1.3125 12.0328 1.40469 12.2554 1.56878 12.4195C1.73288 12.5836 1.95544 12.6758 2.1875 12.6758H3.5C3.73206 12.6758 3.95462 12.5836 4.11872 12.4195C4.28281 12.2554 4.375 12.0328 4.375 11.8008V10.9258H9.625V11.8008C9.625 12.0328 9.71719 12.2554 9.88128 12.4195C10.0454 12.5836 10.2679 12.6758 10.5 12.6758H11.8125C12.0446 12.6758 12.2671 12.5836 12.4312 12.4195C12.5953 12.2554 12.6875 12.0328 12.6875 11.8008V7.42578H13.125C13.241 7.42578 13.3523 7.37969 13.4344 7.29764C13.5164 7.21559 13.5625 7.10431 13.5625 6.98828C13.5625 6.87225 13.5164 6.76097 13.4344 6.67892C13.3523 6.59687 13.241 6.55078 13.125 6.55078ZM3.78437 3.48828H10.2156L11.5768 6.55078H2.4232L3.78437 3.48828ZM3.5 11.8008H2.1875V10.9258H3.5V11.8008ZM10.5 11.8008V10.9258H11.8125V11.8008H10.5ZM11.8125 10.0508H2.1875V7.42578H11.8125V10.0508ZM3.0625 8.73828C3.0625 8.62225 3.10859 8.51097 3.19064 8.42892C3.27269 8.34687 3.38397 8.30078 3.5 8.30078H4.375C4.49103 8.30078 4.60231 8.34687 4.68436 8.42892C4.76641 8.51097 4.8125 8.62225 4.8125 8.73828C4.8125 8.85431 4.76641 8.96559 4.68436 9.04764C4.60231 9.12969 4.49103 9.17578 4.375 9.17578H3.5C3.38397 9.17578 3.27269 9.12969 3.19064 9.04764C3.10859 8.96559 3.0625 8.85431 3.0625 8.73828ZM9.1875 8.73828C9.1875 8.62225 9.23359 8.51097 9.31564 8.42892C9.39769 8.34687 9.50897 8.30078 9.625 8.30078H10.5C10.616 8.30078 10.7273 8.34687 10.8094 8.42892C10.8914 8.51097 10.9375 8.62225 10.9375 8.73828C10.9375 8.85431 10.8914 8.96559 10.8094 9.04764C10.7273 9.12969 10.616 9.17578 10.5 9.17578H9.625C9.50897 9.17578 9.39769 9.12969 9.31564 9.04764C9.23359 8.96559 9.1875 8.85431 9.1875 8.73828Z"
            fill="black"
          />
        </svg>
      ),
      title: "Transfers Today",
      value: "50",
      badge: "18",
      subtitle: "Cities Covered",
    },
  ];

  // === top filter ===
  const topFilters = [
    { label: "Today", path: "#" },
    { label: "Tomorrow", path: "#" },
    { label: "This Week", path: "#" },
  ];

  // time box
  const timeBoxData = [
    { title: "Tokyo", time: "12:00 AM" },
    { title: "New York", time: "12:00 AM" },
    { title: "London", time: "12:00 AM" },
    { title: "Moscow", time: "12:00 AM" },
    { title: "Singapore", time: "12:00 AM" },
    { title: "Houston", time: "12:00 AM" },
  ];

  const countryOptions = [
    { value: "pk", label: "Pakistan" },
    { value: "qa", label: "Qatar" },
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "uae", label: "UAE" },
  ];
  const graphOptions = [
    { value: "value7", label: "last 8 month" },
    { value: "value14", label: "last 10 month" },
    { value: "value21", label: "last 12 month" },
  ];

  // == table filter options
  const tableFilterOptions = [
    { value: "value7", label: "last 7 days" },
    { value: "value14", label: "last 14 days" },
    { value: "value21", label: "last 21 days" },
    { value: "moth", label: "last month" },
  ];

  // table buttons or Links
  const buttons = [
    {
      id: "flights",
      title: "Flights",
      icon: <PlaneUpIcon />,
    },
    {
      id: "hotels",
      title: "Hotels",
      icon: <HotelIcon />,
    },
    {
      id: "tours",
      title: "Tours",
      icon: <TourIcon />,
    },
    {
      id: "transfers",
      title: "Transfers",
      icon: <TransferIcon />,
    },
  ];

  // ===== Pagination =====
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const totalItems = data?.length;
  const totalPages = Math.ceil(totalItems / resultsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * resultsPerPage;
    return data.slice(start, start + resultsPerPage);
  }, [data, currentPage, resultsPerPage]);

  // Reset pagination whenever data changes (like when switching Transfers → Flights etc.)
  useEffect(() => {
    setCurrentPage(1); // Always go back to first page
    setResultsPerPage(10); // Reset to default results per page
  }, [data]); // 👈 dependency on data source

  return (
    <div className=" px-2 md:px-0 flex flex-col gap-y-5 mb-6 ">
      {/* top 3 buttons */}
      {/* <div className="flex items-center  w-[343px] h-[42.86141586303711px] rounded-[100px] py-[5px] px-1 bg-[#FFFFFF] mb-5 "> */}
      {activeButton === "flights" && (
        <div className="flex items-center gap-x-[5px] w-max h-[42.8px] rounded-[100px] py-[5px] px-[5px] bg-[#FFFFFF]">
          {topFilters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setTopFilterActive(filter.label)}
              className={`w-max h-[31px] rounded-[18px] px-[18px] flex items-center justify-center font-manrope text-sm transition-colors ${topFilterActive === filter.label
                ? "bg-[#FF6600] text-[#FFFFFF]"
                : "bg-[#F5F5F5] text-[#838383] hover:bg-[#E5E5E5]"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      <div className=" flex flex-wrap justify-center md:justify-normal  gap-x-2 gap-y-5 px-1 md:px-0 ">
        {/* Top Cards */}

        {cardData?.map((val, i) => {
          return (
            <DashboardCard
              key={i}
              title={val.title}
              value={val.value}
              badge={val.badge}
              subtitle={val.subtitle}
              icon={val.icon}
            />
          );
        })}

        {/* special card */}
        <div
          className="flex-1 flex flex-col justify-between min-w-[270px] max-w-[100%]  bg-gradient-to-r from-[#FF6600] to-violet-600 text-myWhite-color
        rounded-[16px] h-[88px] px-4 py-4  "
        >
          <div className="flex flex-col  gap-y-1.5">
            {/* Top */}
            <div className=" flex gap-x-2">
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
          </div>
          {/* Bottom box */}
          <div className=" flex justify-between  items-center ">
            <div className="flex gap-x-2 items-center">
              <h4 className="font-noto font-bold text-[31.5px]  ">750</h4>
              <span className="font-noto text-sm text-[#DCFCE7] ">credits</span>
            </div>
            <Link
              className="flex items-center justify-center bg-[#FFFFFF] w-[104.94000244140625px] h-[31.479999542236328px] rounded-[6.75px] text-Link font-semibold text-[12.3px] font-noto "
              to={"/dashboard/credit"} target="_blank"
            >
              <span className="mr-[7px] ">
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
          </div>
        </div>
      </div>

      {/* =========  2nd container (graph) ========== */}

      <div className="grid   md:flex flex-wrap gap-4 w-full min-h-[293px]   gap-y-5 ">
        {/* 1st col */}
        
        {/* <div className="  flex-1 max-w-[584px] md:max-w-full   bg-white shadow rounded-[8px] p-4 "> */}
        <div className="  flex-1 md:max-w-full   bg-white shadow rounded-[8px] p-4 ">
          <div className="flex justify-between ">
            <h2 className="text-sm font-medium font-Poppins text-[#14191F] ">
              Revenue Trend
            </h2>
            <Select
              options={graphOptions}
              placeholder="Last 8 month"
              className="basic-single"
              classNamePrefix="select"
              isSearchable={false}
              components={{
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (base) => ({
                  ...base,
                  width: "114px",
                  height: "34px",
                  minHeight: "34px",
                  borderRadius: "8px",
                  borderColor: "#EEEEEE",
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: "#2563EB",
                  },
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "#9CA3AF",
                  fontSize: "10px",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#1F2937",
                  fontSize: "12px",
                }),
                dropdownIndicator: (base) => ({
                  ...base,
                  padding: "2px",
                }),
                option: (base, state) => ({
                  ...base,
                  fontSize: "12px", // ✅ option font size
                  color: state.isSelected ? "#ffffff" : "#1F2937", // selected vs normal
                  backgroundColor: state.isSelected
                    ? "#2563EB" // selected option bg
                    : state.isFocused
                      ? "#E5E7EB" // hover bg
                      : "#ffffff",
                  cursor: "pointer",
                }),
              }}
            />
          </div>
          <RevenueTrend />
        </div>

        {/* 2nd col  */}
        <div className="  min-w-[284px]  h-[293px] bg-white shadow rounded-[20px] pt-[9px] pb-[14px] px-4">
          <div className=" min-w-[243px] 2xl:w-full mx-auto">
            <h2 className="font-bold text-lg font-urbanist mb-[16px] text-[#000000] ">
              Flight Status
            </h2>

            <form className="flex flex-col font-manrope text-[12px]">
              <div className="flex flex-col ">
                <label className="mb-[6px] text-[12px] font-manrope font-semibold text-[#000000] ">
                  Flight Number
                </label>
                <input
                  type="text"
                  placeholder="Qatar Airline"
                  className="h-[34px] py-[5px] w-full px-3 border-[1px] border-[#EEEEEE] outline-none rounded-lg text-[#000000] "
                />
                <span className="mt-[6px] font-manrope font-semibold text-[10px] text-[#C2C2C2] ">
                  e.g: SOT000
                </span>
              </div>

              <div className="flex flex-col mt-[25px]  ">
                <label className="mb-[6px] text-[12px] font-manrope font-semibold text-[#000000] ">
                  Departure Date (Local Time)
                </label>

                {/* Customized calendar */}
                <CalendarInput
                  value={date}
                  onChange={setDate}
                  className="bg-myWhite-color border-[#EEEEEE]  text-[#000000]"
                  calendarClassName="bg-white  "
                  placeholder="Select Date"
                />
                {/* <ModernDatePicker /> */}
              </div>

              <Button className="bg-myBlue hover:bg-myBlue/90 cursor-pointer mt-[15px] text-xs h-[35px] w-full 2xl:h-[40px] font-Poppins">
                Check Status
              </Button>
            </form>
          </div>
        </div>

        {/* 3rd col  */}
        <div className="  flex flex-col justify-between min-w-[234px] gap-2  ">
          <div className="grid grid-cols-3 gap-[3px] ">
            {timeBoxData?.map((val, i) => {
              return <TimeBox key={i} title={val.title} time={val.time} />;
            })}
          </div>

          {/* bottom form */}
          <div className=" w-full h-[164px] 2xl:w-full mx-auto rounded-[15px] bg-myWhite-color py-[7px] px-5 text-[#000000] ">
            <h2 className="font-bold text-lg font-urbanist mb-[6px]">
              Visa Requirement
            </h2>

            <form className="flex flex-col font-manrope text-[12px]  ">
              <div className="flex flex-col w-full">
                <label className="mb-[6px] text-[12px] font-manrope font-semibold text-[#000000] ">
                  Country
                </label>

                <Select
                  options={countryOptions}
                  placeholder="Select Country"
                  className="basic-single"
                  classNamePrefix="select"
                  isSearchable={false}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={{
                    control: (base) => ({
                      ...base,
                      height: "34px",
                      minHeight: "34px",
                      borderRadius: "8px",
                      borderColor: "#EEEEEE",
                      boxShadow: "none",
                      "&:hover": {
                        borderColor: "#2563EB", // hover border
                      },
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: "#9CA3AF", // gray text
                      fontSize: "14px",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: "#1F2937", // text color
                      fontSize: "14px",
                    }),
                    dropdownIndicator: (base) => ({
                      ...base,
                      padding: "4px",
                    }),
                  }}
                />
              </div>
              {/* <span className="font-manrope text-[10px] font-semibold text-[#C2C2C2] ">
                supportive text
              </span> */}

              <Button  className="mt-4 bg-myBlue hover:bg-myBlue/90 cursor-pointer  text-[16px] h-[29px] text-xs w-full font-Poppins">
                Check Status
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* ======== last Container (Table or Calander) ======= */}
      {/* <div className="  flex flex-col gap-y-[21px] w-[90dvw]  md:w-[100%]  bg-[#FFFFFF] h-[770px]  p-5 border-[1px] border-[#0000001A] rounded-[12.75px]  "> */}
      {/* <div className="flex flex-col space-y-[21px] rounded-[16px] border-[1px] border-white/40 p-2 md:p-2.5 lg:p-4 bg-myWhite-color w-[95dvw] sm:w-[100%] md:w-[100%] mx-auto lg:w-[100%] overflow-x-auto"> */}
      {/* <div className="flex flex-col space-y-[21px] rounded-[16px] border-[1px] border-white/40 p-2 md:p-2.5 lg:p-4 bg-myWhite-color w-full  max-w-[95dvw] sm:max-w-[100%] md:max-w-[100%] mx-auto lg:max-w-3xl xl:max-w-[100%]  overflow-x-auto bg-red-600 "> */}
      <div className=" p-2 sm:p-0 flex flex-col space-y-[21px] rounded-[16px] border-[1px] border-white/40  bg-myWhite-color w-[95dvw] sm:w-[100%] md:w-[100%] mx-auto lg:w-[100%] overflow-x-auto   ">
        <div
          // className={`p-2 md:p-2.5 lg:pt-4 lg:px-4  ${
          className={`md:p-2.5 lg:pt-4 lg:px-4  ${view !== "list" && "flex justify-between items-center  "
            } `}
        >
          <h2 className="text-myGray font-semibold font-noto text-sm p-3 ">
            Today’s Travelers Summary
          </h2>
          {view !== "list" && (
            <button
              className="cursor-pointer flex items-center justify-center w-[96px] h-[36px] shadow-lg rounded-[8px] font-Poppins text-[10px] text-[#19191c] "
              onClick={() => setIsAddNote(true)}
            >
              {" "}
              <span className="mr-[8px]  ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.25 10C6.25 9.65482 6.52982 9.375 6.875 9.375H13.125C13.4702 9.375 13.75 9.65482 13.75 10C13.75 10.3452 13.4702 10.625 13.125 10.625H6.875C6.52982 10.625 6.25 10.3452 6.25 10Z"
                    fill="#242E2C"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 6.25C10.3452 6.25 10.625 6.52982 10.625 6.875V13.125C10.625 13.4702 10.3452 13.75 10 13.75C9.65482 13.75 9.375 13.4702 9.375 13.125V6.875C9.375 6.52982 9.65482 6.25 10 6.25Z"
                    fill="#242E2C"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.875 6.25C1.875 3.83375 3.83375 1.875 6.25 1.875H13.75C16.1662 1.875 18.125 3.83375 18.125 6.25V13.75C18.125 16.1662 16.1662 18.125 13.75 18.125H6.25C3.83375 18.125 1.875 16.1662 1.875 13.75V6.25ZM6.25 3.125C4.52411 3.125 3.125 4.52411 3.125 6.25V13.75C3.125 15.4759 4.52411 16.875 6.25 16.875H13.75C15.4759 16.875 16.875 15.4759 16.875 13.75V6.25C16.875 4.52411 15.4759 3.125 13.75 3.125H6.25Z"
                    fill="#242E2C"
                  />
                </svg>
              </span>
              Add Notes
            </button>
          )}
        </div>

        <div className="  flex flex-wrap justify-between items-center gap-y-4 px-2 md:px-2.5 lg:px-4  ">
          {/* buttons */}
          <div
            className="flex flex-wrap justify-between items-center gap-y-4 gap-x-[36.21px] max-w-[568px] min-h-[65px]  bg-[#FFFFFF] rounded-[20px] py-[15px] px-[20px] border-[1px] border-[#EEEEEE]  "
            style={{ boxShadow: "0 -10.28px 71.96px #0000000D" }}
          >
            {buttons?.map((btn) => {
              return (
                <button
                  key={btn.id}
                  className={`flex items-center w-max py-[3px] px-[13px] h-[35px] rounded-[20px]  font-Poppins text-[#032749] text-[12.34px] cursor-pointer ${activeButton === btn.id
                    ? "bg-primary-background text-[#FFFFFF] "
                    : "bg-[#F8F8F8]"
                    } `}
                  onClick={() => setActiveButton(btn.id)}
                >
                  <span className="mr-[10px]  ">{btn.icon}</span> {btn.title}
                </button>
              );
            })}
          </div>
          {/* <div className="flex items-center justify-between border flex-1 " > */}
          {/* <div className={`flex items-center justify-between border ${view !== "list" && ""}  `} > */}
          <div
            className={`flex flex-wrap gap-2 items-center justify-between   `}
          >
            {/* calendar Filters */}
            {view !== "list" && (
              <div className="flex gap-x-4">
              

                {/*  calander compoennt */}
                <CalanderDropdown
                  setDateForfilterCalanderData={setDateForfilterCalanderData}
                />

              </div>
            )}

            {/* left vew buton */}
            <ToggleView setView={setView} view={view} />
          </div>
        </div>

        {/* == search bar=== */}
        <div className="flex items-center justify-between gap-3 p-2 md:p-2.5 lg:pt-0 lg:px-4 ">
          {view === "list" && (
            <>
              <div className="flex items-center bg-[#F5F5F5] rounded-[6px] px-3 h-[36px] flex-1">
                <img src="/search.png" alt="" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent ml-[6px] outline-none flex-1 text-[11px] font-Poppins text-[#868F9B]  "
                />
              </div>

              <div className="w-[180px] text-sm  ">
                <CustomDropDownSelect
                  data={tableFilterOptions}
                  placeholder={"Last 7 days"}
                />
              </div>
            </>
          )}
        </div>

        {/* === data table or calander === */}
        {/* <div className=" w-auto  bg-red-500  "> */}
        <div className=" w-full      max-w-[860px] xl:max-w-full mx-auto -mt-2 ">
          {view === "list" ? (
            <ListView data={paginatedData} />
          ) : (
            <Calendar
              data={calanderData}
              filterDate={dateForfilterCalanderData}
              activeButton={activeButton}
            />
          )}
        </div>
        {view === "list" && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            resultsPerPage={resultsPerPage}
            onResultsPerPageChange={setResultsPerPage}
          />
        )}
      </div>

      {/* ==main conatiner end==== */}

      {isAddNote && (
        <Modal
          isModalOpen={isAddNote}
          onClose={() => setIsAddNote(false)}
          className="rounded-[20px] "
        >
          <AddNote />
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
