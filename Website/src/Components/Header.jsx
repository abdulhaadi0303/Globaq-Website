import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import DropdownMenu from "./Dropdown"; // renamed for clarity
import MobileMenu from "./MobileMenu";

import Logo from "../assets/Logo.jpg";

function Head() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1150);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1150);
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
              className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-auto max-w-full"
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
              className={`relative text-white bg-gradient-to-r from-orange-400 to-orange-500 
                hover:from-orange-500 hover:to-orange-600 hover:scale-[1.03] active:scale-[0.97]
                border-2 border-orange-400 hover:border-orange-500 rounded-full 
                shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                px-4 py-2 md:mr-10 mb-2 text-sm sm:text-base font-semibold whitespace-nowrap
                before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 
                hover:before:opacity-10 before:transition-opacity before:duration-300
                ring-2 ring-orange-200 ring-opacity-0 hover:ring-opacity-50
                backdrop-blur-sm overflow-hidden group`}
            >
              <span className="relative z-10">
                Become a Partner
              </span>
            </Link>
          </div>

      </div>
    </div>
  );
}

export default Head;
