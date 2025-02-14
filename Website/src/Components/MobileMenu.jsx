import { Link, useNavigate } from "react-router-dom";
import "./styles/MobileMenu.css";
import { useState } from "react";
import dropdownData from "./data.jsx";

function MobileDropdown({ title, items, closeMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.route) {
      navigate(item.route); // Navigate to the route if it exists
      closeMenu(); // Close the mobile menu after navigation
    }
  };

  return (
    <div className="mobile-dropdown">
      <div
        className="mobile-dropdown-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#x25BE;</span>
      </div>
      {isOpen && (
        <div className="mobile-dropdown-content">
          {items.map((item, index) => (
            <div key={index} className="mobile-dropdown-item">
              {item.subItems ? (
                <MobileDropdown
                  title={item.label}
                  items={item.subItems}
                  closeMenu={closeMenu}
                />
              ) : (
                <span
                  onClick={() => handleClick(item)}
                  style={{ cursor: item.route ? "pointer" : "default" }}
                >
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false); // Close the mobile menu
  };

  return (
    <div className="mobile-menu-container">
      <div
        className={`hamburger-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/Aboutus" onClick={closeMenu}>
            About Us
          </Link>
          {dropdownData.map((dropdown, index) => (
            <MobileDropdown
              key={index}
              title={dropdown.title}
              items={dropdown.items}
              closeMenu={closeMenu}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;