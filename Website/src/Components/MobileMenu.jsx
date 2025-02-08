import { Link, useNavigate } from "react-router-dom";
import "./styles/MobileMenu.css";
import { useState } from "react";
import dropdownData from "./data.jsx";

function MobileDropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-dropdown">
      <div className="mobile-dropdown-title" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#x25BE;</span>
      </div>
      {isOpen && (
        <div className="mobile-dropdown-content">
          {items.map((item, index) => (
            <div key={index} className="mobile-dropdown-item">
              {item.subItems ? (
                <MobileDropdown title={item.label} items={item.subItems} />
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

function MobileMenu() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mobile-menu-container">
      <div className={`hamburger-icon ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          {dropdownData.map((dropdown, index) => (
            <MobileDropdown key={index} title={dropdown.title} items={dropdown.items} />
          ))}
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
