import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import DropdownMenu from "./Dropdown"; // renamed for clarity
import MobileMenu from "./MobileMenu";

import Logo from "../assets/Logo.jpg";

function Head() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white pt-6 pb-0 relative overflow-visible z-[1000] px-1">
      <HeaderContent isMobile={isMobile} />
      <div className="w-[99%] h-0.5 bg-gray-700 mx-auto mt-1"></div>
    </header>
  );
}

function HeaderContent({ isMobile }) {
  return (
    <div>
      <div className="flex items-center justify-between w-full min-w-[96vw] max-w-[100vw] mb-2 px-4">
        {/* Left: Mobile menu + Logo */}
        <div className="flex items-center gap-4">
          {isMobile && (
            <div className="flex justify-start">
              <MobileMenu />
            </div>
          )}

          <div className="flex justify-center">
            <Link to="/">
              <img
                src={Logo}
                alt="Company Logo"
                className={`${isMobile ? "w-[140px] sm:w-[160px]" : "w-[190px]"} h-auto max-w-full`}
              />
            </Link>
          </div>
        </div>

        {/* Center: Dropdown Navigation */}
        {!isMobile && (
          <div className="flex items-center gap-3">
            <DropdownMenu />
          </div>
        )}

          {/* Right side: Partner Button */}
          <div className="flex justify-end ml-4 sm:ml-8">
            <Link
              to="/Partner"
              className={`text-white bg-orange-400 hover:bg-orange-700 hover:scale-[1.03] active:scale-[0.97]
                border-none rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out
                px-4  py-2 mr-10 mb-2 text-sm sm:text-base font-semibold whitespace-nowrap`}
            >
              Become a Partner
            </Link>
          </div>

      </div>
    </div>
  );
}

export default Head;
