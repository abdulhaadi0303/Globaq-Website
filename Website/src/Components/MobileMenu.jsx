import { Link, useNavigate } from "react-router-dom";
import "./styles/MobileMenu.css";
import { useState } from "react";
import dropdownData from "./data.jsx";

const unstyledButton = {
  background: "none",
  border: "none",
  padding: 0,
  margin: 0,
  font: "inherit",
  color: "inherit",
  textAlign: "left",
  width: "100%",
};

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
      <button
        type="button"
        className="mobile-dropdown-title"
        style={unstyledButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#x25BE;</span>
      </button>
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
                <button
                  type="button"
                  style={unstyledButton}
                  onClick={() => handleClick(item)}
                  disabled={!item.route}
                >
                  {item.label}
                </button>
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
      <button
        type="button"
        className={`hamburger-icon ${menuOpen ? "open" : ""}`}
        style={{ background: "none", border: "none", padding: 0 }}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
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