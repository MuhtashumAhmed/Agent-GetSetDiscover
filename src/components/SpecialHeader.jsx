import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import NotificationPopup from "./NotificationPopup";
import { FiSearch } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import { MdOutlineLogout } from "react-icons/md";
import { BackArrow, SettingIcon } from "../assets/icons/Icons";

const SpecialHeader = ({ setSideBarOpen }) => {
  // console.log(user);

  const { pathname } = useLocation();
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  // console.log(pathname);

  const notifications = [
    {
      id: 1,
      user: "Huzaifa",
      title: "Made a Purchase of 120 Credits",
      action: "Purchase",
      date: "Mar 15, 2024 • 12:00 PM",
    },
    {
      id: 2,
      user: "Huzaifa",
      title: "New User Signup “Huzaifa”",
      action: "Signup",
      date: "Mar 15, 2024 • 12:00 PM",
    },
    {
      id: 3,
      user: "Huzaifa",
      title: "New Ticket Open, “I need Help”",
      action: "Ticket",
      date: "Mar 15, 2024 • 12:00 PM",
    },
  ];



  // profile dropdown
  const [isProfilepopupOpen, setIsProfilepopupOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsProfilepopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Map route path -> header title
  const titles = {
    "/dashboard/booking": "Booking",
    "/dashboard/history": "History",
    "/dashboard/voucher/created-voucher": "Create Voucher",
    "/dashboard/voucher/all-vouchers": "All Vouchers", // <-- add this
    // "/dashboard/voucher/all-vouchers": "All Vouchers",
  };

  const handleSideBar = () => {
    setSideBarOpen((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".notif-wrapper")) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const [loggingOut, setLoggingOut] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // const handleLogout = () => {
  //   dispatch(logout()); // <-- actually updates redux state
  // };

  const navigate = useNavigate();

  const handleLogout = async () => {
    toast.success("Logged out successfully", {
      autoClose: 150,
      onClose: () => navigate("/"), // toast band hote hi navigate
    });

    // try {
    //   setLoggingOut(true);
    //   dispatch(logout());
    //   localStorage.removeItem("token");
    //   toast.success("Logged out successfully", {
    //     autoClose: 1500,
    //     onClose: () => navigate("/"), // toast band hote hi navigate
    //   });
    // } catch (error) {
    //   toast.error("Logout failed, try again ❌");
    // } finally {
    //   setLoggingOut(false);
    // }
  };
  return (
    <header className="mb-2 md:mb-0 h-26   md:h-16 flex items-center justify-between px-3 sm:px-3.5 lg:px-6">
      {/* hamburger */}
      <div className="flex items-center space-x-3">
        <i className="lg:hidden cursor-pointer" onClick={handleSideBar}>
          <GiHamburgerMenu className="text-xl text-myBlack " />
        </i>
        {/* Left side: dynamic title */}
        <div className="mt-1.5 flex gap-x-4  z-20 text-sm sm:text-md md:text-lg font-manrope font-semibold text-[#1E4841]">

          {/* ======== Back button ==== */}
          {/* <div className="flex items-center justify-center rounded-[8px] cursor-pointer w-10 h-10 bg-myWhite-color" onClick={() => navigate(-1)} ><BackArrow /></div> */}

          <div className="flex flex-col justify-end font-Poppins font-semibold text-lg ">
            <span className="font-Poppins text-xs text-[#868F9B] " >
              {titles[pathname] === "" && "Voucher / Create"}
              {/* {titles[pathname] === "voucher" && "All Voucher / Create"} */}
              {titles[pathname] === "Booking" && "Dashboard / "}
              {titles[pathname] === "Hostory" && "Hostory / Reserve"}
              {/* {titles[pathname] || "Page"} */}
              {

                titles[pathname] !== "History" && (

                  <span className="font-Poppins text-xs text-[#868F9B]">
                    {pathname.includes("/voucher") && "Voucher / "}
                    {titles[pathname] || "Page"}
                  </span>
                )
              }
            </span>
            {titles[pathname] || "Page"}
          </div>
        </div>
      </div>

      {/* Right side: actions */}

      <div className="flex gap-y-4 sm:flex-row items-center space-x-2 md:space-x-4">
        <div className="flex items-center space-x-2">
          {/*setting button */}

          <button className="flex items-center justify-center h-[36px] w-[36px] bg-[#FFF6F6] hover:bg-gray-50 rounded-[8px]">
            <SettingIcon />
          </button>

          {/* 🔔 Bell icon + dropdown */}
          <div className="relative notif-wrapper">
            <button
              className="flex items-center justify-center h-[36px] w-[36px] bg-[#FFF6F6] hover:bg-gray-50 rounded-[8px]"
              onClick={() => setIsNotifOpen((prev) => !prev)}
            >
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.03141 1.81256C4.58326 1.79928 2.51062 3.88688 2.51403 6.31178L2.51404 6.31258L2.51403 6.87508C2.51403 9.47139 1.96966 11.035 1.44727 11.9376H12.5527C12.0303 11.035 11.4859 9.47138 11.4859 6.87508V6.37586C11.4859 3.88341 9.49643 1.83154 7.03141 1.81256ZM1.38903 6.31298C1.38497 3.26759 3.96168 0.670465 7.03826 0.687584L7.03939 0.68759C10.1429 0.711103 12.6109 3.28567 12.6109 6.37586V6.87508C12.6109 9.31259 13.121 10.6739 13.5266 11.3745L13.527 11.3751C13.6255 11.5458 13.6775 11.7394 13.6777 11.9366C13.6779 12.1337 13.6262 12.3275 13.5279 12.4984C13.4297 12.6693 13.2882 12.8113 13.1178 12.9104C12.9473 13.0094 12.7538 13.0619 12.5566 13.0626L12.5547 13.0626H1.44528L1.4433 13.0626C1.24616 13.0619 1.05266 13.0094 0.882192 12.9104C0.711721 12.8113 0.570266 12.6693 0.471996 12.4984C0.373726 12.3275 0.322091 12.1337 0.322266 11.9366C0.322441 11.7394 0.374417 11.5458 0.472991 11.3751L0.473326 11.3745C0.878957 10.6739 1.38903 9.31259 1.38903 6.87508V6.31298Z"
                  fill="#242E2C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.74997 11.9376C5.06063 11.9376 5.31247 12.1894 5.31247 12.5001V13.0626C5.31247 13.5101 5.49026 13.9394 5.80673 14.2558C6.1232 14.5723 6.55242 14.7501 6.99997 14.7501C7.44752 14.7501 7.87675 14.5723 8.19321 14.2558C8.50968 13.9394 8.68747 13.5101 8.68747 13.0626V12.5001C8.68747 12.1894 8.93931 11.9376 9.24997 11.9376C9.56063 11.9376 9.81247 12.1894 9.81247 12.5001V13.0626C9.81247 13.8085 9.51616 14.5239 8.98871 15.0513C8.46126 15.5788 7.74589 15.8751 6.99997 15.8751C6.25405 15.8751 5.53868 15.5788 5.01123 15.0513C4.48379 14.5239 4.18747 13.8085 4.18747 13.0626V12.5001C4.18747 12.1894 4.43931 11.9376 4.74997 11.9376Z"
                  fill="#242E2C"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {isNotifOpen && (
              <NotificationPopup
                notifications={notifications}
                onClose={() => setIsNotifOpen(false)}
              />
            )}
          </div>

          <div className="relative" ref={menuRef}>
            {/* Profile */}
            <div
              onClick={() => setIsProfilepopupOpen(!isProfilepopupOpen)}
              className="flex flex-col-reverse md:flex-row items-center gap-x-2 gap-y-2 cursor-pointer"
            >
              <img
                // src={`https://backend.getsetdiscover.com${user?.main_image}`}
                src="/profile2.jpg"
                alt="profile"
                // className="w-6 h-6 md:w-8 md:h-8 object-contain object-center rounded-full border border-[#FF6600]  "
                className={`flex items-center justify-center h-[36px] w-[36px] bg-[#FFF6F6] hover:bg-gray-50 rounded-[8px] object-contain object-center border transition-all ease-in-out duration-400 hover:border-[#FF6600] ${isProfilepopupOpen ? "border-[#FF6600]" : "border-gray-300"
                  }    `}
                loading="lazy"
              />
              <p className="text-[#1E4841] font-bold text-[12px] md:text-[16px] capitalize hidden md:block">
                user name
              </p>
            </div>

            {/* Dropdown */}
            {isProfilepopupOpen && (
              <div className="absolute right-0 mt-2 px-1 py-1 w-36 max-h-12 flex items-center bg-white rounded-lg shadow-lg border border-gray-200">
                <button
                  // className="border border-[#FF6600]  text-[#FF6600] font-Poppins  hover:bg-[#FF6600] hover:text-myWhite-color capitalize transition-all ease-in-out duration-400 cursor-pointer px-4 py-1 rounded-lg text-sm md:text-base "
                  className="group flex items-center gap-x-2 border-[#FF6600] hover:bg-[#FF6600]/20 text-[#FF6600]/65 font-Poppins font-semibold  hover:text-[#FF6600] capitalize transition-all ease-in-out duration-400 cursor-pointer px-2.5 py-1 rounded-lg  text-xs  w-full "
                  // onClick={handleLogout}
                  onClick={() => {
                    setIsLogoutModalOpen(true); // open confirmation modal
                    setIsProfilepopupOpen(false);
                  }}
                >
                  <MdOutlineLogout className="text-lg  text-[#FF6600]/65   group-hover:text-[#FF6600] " />{" "}
                  logout
                </button>
              </div>
            )}
          </div>

          {/* Logout Confirmation Modal */}
          {isLogoutModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 bg-opacity-30"
              onClick={() => {
                setIsLogoutModalOpen(false);
              }}
            >
              <div
                className="bg-white rounded-xl shadow-lg p-4 w-72"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-sm text-center font-roboto text-[#14191F] mb-2">
                  Are you sure you want to logout?
                </h2>
                <div className="flex justify-center gap-3">
                  <button
                    className="px-7 py-1 font-Poppins text-xs  rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsLogoutModalOpen(false)}
                  >
                    No
                  </button>
                  <button
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="px-7 py-1 font-Poppins text-xs  rounded-lg bg-primary-background text-white hover:bg-primary-background/90 disabled:opacity-50"
                  >
                    {loggingOut ? "Logging out..." : "Yes"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default SpecialHeader;
