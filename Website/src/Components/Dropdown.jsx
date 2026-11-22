/* eslint-disable react/prop-types -- Menu data and internal handlers are supplied by this navigation module. */
import { useEffect, useId, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dropdownData from "./data.jsx";

function Dropdown({ title, items, route }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef(null);
  const navigate = useNavigate();
  const menuId = useId();
  const hasInlineSubmenus = items?.some((item) => item.inlineSubmenu);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const handleClick = (item) => {
    if (item.route) {
      navigate(`/${item.route}`);
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.currentTarget;
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      if (!hasInlineSubmenus || !dropdown.contains(document.activeElement)) setIsOpen(false);
    }, 150);
  };

  const handleToggle = () => {
    clearTimeout(closeTimer.current);
    setIsOpen((open) => !open);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={hasInlineSubmenus ? handleBlur : undefined}
    >
      <div className="cursor-pointer text-base font-bold text-gray-800 hover:text-orange-500 transition duration-300 flex items-center">
          {route ? (
            <Link
              to={`/${route.replace(/^\/+/, "")}`}
              onClick={() => setIsOpen(false)}
            >
              {title}
            </Link>
          ) : (
            <span>{title}</span>
          )}

        {hasInlineSubmenus ? (
          <button
            type="button"
            className="ml-1 inline-flex items-center justify-center rounded p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
            aria-label={`Toggle ${title} menu`}
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={handleToggle}
          >
            <DropdownArrow open={isOpen} />
          </button>
        ) : (
          <DropdownArrow open={isOpen} className="ml-1" />
        )}
      </div>

      {isOpen && (
        <div
          id={menuId}
          className={`absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg min-w-[250px] z-[9999] py-2 border border-gray-300 ${hasInlineSubmenus ? "max-h-[70vh] w-72 overflow-y-auto overscroll-contain" : ""}`}
        >
          {items.map((item, index) =>
            item.inlineSubmenu ? (
              <InlineDropdownItem
                key={item.label}
                item={item}
                onNavigate={() => setIsOpen(false)}
                isLast={index === items.length - 1}
              />
            ) : (
              <DropdownItem
                key={index}
                item={item}
                handleClick={handleClick}
                isLast={index === items.length - 1}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

function DropdownArrow({ open, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={`w-3 h-3 text-gray-600 transition-transform duration-300 ${open ? "rotate-180" : ""} ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InlineDropdownItem({ item, isLast, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const submenuId = useId();
  const toggleLabel = `${isOpen ? "Collapse" : "Expand"} ${item.label}`;
  const style = "flex items-center gap-2 text-left text-base font-medium text-gray-800 hover:bg-orange-50 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-orange-500";

  return (
    <div className={isLast ? "" : "border-b border-gray-200"}>
      <div className="flex">
        {item.route && (
          <Link
            to={`/${item.route}`}
            onClick={onNavigate}
            className={`${style} flex-1 px-5 py-3`}
          >
            {item.label}
          </Link>
        )}
        <button
          type="button"
          className={`${style} ${item.route ? "px-4 py-3" : "w-full justify-between px-5 py-3"}`}
          aria-label={item.route ? toggleLabel : undefined}
          aria-expanded={isOpen}
          aria-controls={submenuId}
          onClick={() => setIsOpen((open) => !open)}
        >
          {!item.route && item.label}
          <DropdownArrow open={isOpen} />
        </button>
      </div>
      <ul id={submenuId} hidden={!isOpen} className="bg-orange-50/40 py-1">
        {item.subItems.map((subItem) => (
          <li key={subItem.route}>
            <Link
              to={`/${subItem.route}`}
              onClick={onNavigate}
              className={`${style} px-7 py-2.5 text-sm`}
            >
              {subItem.label}
            </Link>
          </li>
        ))}
      </ul>
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
            className="text-base font-bold text-gray-800 hover:text-orange-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/AboutUs"
            className="text-base font-bold text-gray-800 hover:text-orange-500 transition duration-300"
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
            <Dropdown
              key={index}
              title={dropdown.title}
              items={dropdown.items}
              route={dropdown.route}
            />
          ))}
        </div>

        {/* Row 2: Remaining dropdowns */}
        <div className="flex gap-6 flex-wrap items-center">
          {row2Dropdowns.map((dropdown, index) => (
            <Dropdown
              key={index}
              title={dropdown.title}
              items={dropdown.items}
              route={dropdown.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
