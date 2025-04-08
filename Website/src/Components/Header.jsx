import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Header.css";

import DropdownMenu from "./Dropdown"; // More descriptive name
import MobileMenu from "./MobileMenu";

import Logo from "../assets/Logo.jpg";
import SideImage from "../../public/G.jpg"; // Consistent naming (PascalCase)

// No need to import Font Awesome unless used in DropdownMenu or MobileMenu

function Head() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header"> {/* Use semantic <header> tag */}
      <HeaderContent isMobile={isMobile} />
    </header>
  );
}

function HeaderContent({ isMobile }) {
  return (
    <div className="header-bar"> {/* Simplified class name */}
      <div className="header-logo-container"> {/* More descriptive name */}
        <Link to="/">
          <img src={Logo} alt="Company Logo" className="header-logo" /> {/* Added alt text */}
        </Link>
      </div>

      <div className="header-navigation"> {/* Clearer name */}
        {isMobile ? <MobileMenu /> : <DropdownMenu />}
      </div>

      <div className="header-side-image-container"> {/* More descriptive name */}
        {/* <img src={SideImage} alt="Side Graphic" className="header-side-image" /> Added alt text */}
      </div>
    </div>
  );
}

export default Head;