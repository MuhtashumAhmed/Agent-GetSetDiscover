import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";

export default function Layout() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  // ✅ Disable horizontal scroll when sidebar is open
  useEffect(() => {
    if (sideBarOpen) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, [sideBarOpen]);

  return (
    <div className=" relative  ">
      {/* Sidebar */}
      <div
        className={`${
          sideBarOpen
            ? "z-50 h-full translate-x-0 w-56"
            : "translate-x-[-800px] lg:translate-x-0"
        } lg:translate-y-0 transition-all ease-in overflow-hidden lg:h-full lg:w-64 bg-light-background text-white fixed`}
      >
        <Sidebar setSideBarOpen={setSideBarOpen} />
      </div>

      {/* Overlay */}
      {sideBarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSideBarOpen(false)} // 👈 click to close
        />
      )}

      {/* Content */}
      <div
        className={`${
          sideBarOpen ? "ml-54" : "ml-0"
        }  flex flex-col bg-secondary-background lg:ml-64`}
      >
        <Header setSideBarOpen={setSideBarOpen} />
        <main className="flex-1 p-0 sm:px-2.5 lg:px-5 xl:px-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
