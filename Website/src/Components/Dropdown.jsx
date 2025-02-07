import { Link, useNavigate } from "react-router-dom";
import "./styles/Dropdown.css";
import { useState } from "react";

import dropdownData from "./data.jsx"

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="dropdown-title">{title}</span>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <div key={index} className="dropdown-item">
              {item.subItems ? (
                <Dropdown className="final-item" title={item.label} items={item.subItems} />
              ) : (
                <span onClick={item.onClick}>{item.label}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


function DropDown() {
  const navigate = useNavigate();

  const handleNavigation = (option, category) => {
    navigate(`/${category}?option=${option}`);
  };

  return (
    <>
      <div className="header-bar-3">
        <nav>
          <Link to="/">Home</Link>
          {dropdownData.map((dropdown, index) => (
            <Dropdown
              key={index}
              title={dropdown.title}
              items={dropdown.items}
            />
          ))}
        </nav>
      </div>
    </>
  );
}

export default DropDown;