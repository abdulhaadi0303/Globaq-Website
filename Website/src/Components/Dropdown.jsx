import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dropdownData from "./data.jsx";

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.route) {
      navigate(`/${item.route}`);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsOpen(false), 150);
    setTimeoutId(id);
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer text-base font-bold text-gray-900 hover:text-orange-500 transition duration-300 flex items-center">
        <span>{title}</span>
        <svg
          className={`ml-1 w-3 h-3 text-gray-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg min-w-[250px] z-[9999] py-2 border border-gray-300">
          {items.map((item, index) => (
            <DropdownItem
              key={index}
              item={item}
              handleClick={handleClick}
              isLast={index === items.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownItem({ item, handleClick, isLast }) {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [subTimeout, setSubTimeout] = useState(null);

  const hasSubItems = item.subItems && item.subItems.length > 0;
  if (!item?.label) return null;

  const onEnter = () => {
    if (subTimeout) clearTimeout(subTimeout);
    setIsSubOpen(true);
  };

  const onLeave = () => {
    const id = setTimeout(() => setIsSubOpen(false), 150);
    setSubTimeout(id);
  };

  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div
        className={`px-5 py-3 text-base font-medium flex justify-between items-center text-gray-800 bg-white border-b border-gray-200 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 ${
          isLast ? "border-b-0" : ""
        }`}
        onClick={() => handleClick(item)}
        style={{ cursor: item.route || hasSubItems ? "pointer" : "default" }}
      >
        <span>{item.label}</span>
        {hasSubItems && (
          <svg
            className="w-3 h-3 text-gray-400 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {hasSubItems && isSubOpen && (
        <div className="absolute top-0 left-full ml-1 bg-white shadow-xl rounded-lg min-w-[250px] z-[9999] py-2 border border-gray-300">
          {item.subItems.map((subItem, idx) => (
            <div
              key={idx}
              className={`px-5 py-3 text-base font-medium text-gray-800 bg-white border-b border-gray-200 hover:bg-orange-50 hover:text-orange-600 cursor-pointer ${
                idx === item.subItems.length - 1 ? "border-b-0" : ""
              }`}
              onClick={() => handleClick(subItem)}
            >
              {subItem.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownMenu() {
  // You can adjust the index to balance dropdowns across rows
  const row1Dropdowns = dropdownData.slice(0, 2);
  const row2Dropdowns = dropdownData.slice(2);

  return (
    <div className="w-full px-4 pb-3 mr-10">
      <div className="grid grid-rows-2 gap-y-4 w-full">
        {/* Row 1: Static links + some dropdowns */}
        <div className="flex gap-6 flex-wrap items-center">
          <Link
            to="/"
            className="text-base font-bold text-gray-900 hover:text-orange-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/AboutUs"
            className="text-base font-bold text-gray-900 hover:text-orange-500 transition duration-300"
          >
            About Us
          </Link>
          {/* <Link
            to="/our-message"
            className="text-base font-bold text-gray-900 hover:text-orange-500 transition duration-300"
          >
            Our Message
          </Link> */}
          {row1Dropdowns.map((dropdown, index) => (
            <Dropdown key={index} title={dropdown.title} items={dropdown.items} />
          ))}
        </div>

        {/* Row 2: Remaining dropdowns */}
        <div className="flex gap-6 flex-wrap items-center">
          {row2Dropdowns.map((dropdown, index) => (
            <Dropdown key={index} title={dropdown.title} items={dropdown.items} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
