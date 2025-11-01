import { Outlet } from "react-router-dom";

import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div className="flex overflow-y-auto">
      {/* Sidebar (fixed left) */}
      <div
        className={` ${
          sideBarOpen ? "w-full z-50 h-full  translate-y-[80px] " : "  "
        }translate-y-[-600px]  lg:translate-y-0 transition-all ease-in  overflow-hidden lg:h-full lg:w-64 bg-light-background text-white fixed  `}
      >
        <Sidebar />
        {/* <Sidebar setSideBarOpen={setSideBarOpen} /> */}
      </div>

      {/* Right Side (scrollable content with dynamic header) */}
      <div
        className={` flex-1 lg:ml-64 flex flex-col bg-secondary-background `}
      >
        {/* Dynamic Header */}
        <Header />
        {/* <Header setSideBarOpen={setSideBarOpen} /> */}

        {/* Page Content */}
        <main className=" flex-1 p-2 sm:p-1 md:p-3 lg:p-5 xl:p-6 ">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
