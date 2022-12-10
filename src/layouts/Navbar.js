import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setIsSidebarOpen(false));

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isSidebarOpen]);

  return (
    <div className="h-16 lg:h-20 xl:h-24 2xl:h-28 flex items-center absolute top-0 left-0 w-full z-100 transition-all duration-[.3s] bg-transparent">
      <div className="container flex items-center justify-between">
        <img
          src="images/logo.png"
          className="w-16 sm:w-16 lg:w-20 xl:w-24 2xl:w-28"
          alt=""
        />

        <button
          className="flex md:hidden text-xl sm:text-2xl text-white"
          onClick={() => setIsSidebarOpen((val) => !val)}
        >
          <IoMenu />
        </button>

        {/*  */}
        <div
          className={`fixed overflow-x-hidden top-0 left-0 w-full h-full md:static md:h-auto md:w-auto flex md:block justify-end ${
            isSidebarOpen
              ? "pointer-events-auto overflow-y-auto"
              : "pointer-events-none md:pointer-events-auto overflow-y-hidden md:overflow-y-auto"
          }`}
        >
          <div
            className={`black-screen ${isSidebarOpen ? "show" : null}`}
          ></div>
          {/*  */}
          <div
            ref={sidebarRef}
            className={`w-300px md:w-auto h-full md:h-auto p-10 md:p-0 items-start md:items-center flex flex-col md:flex-row border-l-2 border-green md:border-none md:space-x-10 bg-black md:bg-transparent transition-all duration-[.3s] z-140 ${
              isSidebarOpen
                ? "translate-x-0"
                : "translate-x-300px md:translate-x-0"
            }`}
          >
            {/*  */}
            <button
              className="flex md:hidden text-2xl mb-8"
              onClick={() => setIsSidebarOpen((val) => !val)}
            >
              <RiCloseFill />
            </button>

            <ScrollLink
              to="RoadMap"
              offset={-160}
              onClick={() => setIsSidebarOpen(false)}
              className="cursor-pointer text-xs xl:text-sm 2xl:text-base font-medium text-white"
            >
              Road Map
            </ScrollLink>
            <ScrollLink
              to="The Utility"
              offset={-160}
              onClick={() => setIsSidebarOpen(false)}
              className="cursor-pointer text-xs xl:text-sm 2xl:text-base font-medium text-white mt-4 md:mt-0"
            >
              The Utility
            </ScrollLink>
            <ScrollLink
              to="The team"
              offset={-160}
              onClick={() => setIsSidebarOpen(false)}
              className="cursor-pointer text-xs xl:text-sm 2xl:text-base font-medium text-white mt-4 md:mt-0"
            >
              The Team
            </ScrollLink>

            <button className="w-full md:w-auto mt-8 md:mt-0 gradient-button text-[10px] xl:text-xs 2xl:text-sm py-2 2xl:py-3 px-5 2xl:px-7">
              CONNECT WALLET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
