import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer/Footer";
import SpecialHeader from "../components/SpecialHeader";
import { useState } from "react";

export default function SpecialLayout() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div className="flex relative   ">
      {/* Sidebar */}
      <div
        className={`${sideBarOpen
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
          onClick={() => setSideBarOpen(false)} //  close on outside click
        />
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col bg-secondary-background lg:ml-64  ">
        <SpecialHeader setSideBarOpen={setSideBarOpen} />
        <main className="flex-1 p-2 md:px-4">
          <Outlet />
        </main>


        <Footer />

      </div>
    </div>
  );
}
