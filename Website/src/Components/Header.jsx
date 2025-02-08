import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/Headertop.css";

import DropDown from "./Dropdown";
import MobileMenu from "./MobileMenu";

// Import images
import Logo from "../assets/Logo.jpg";
import ReactLogo from "../assets/react.svg";

// Import Font Awesome for social media icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="header">
        <HeaderTop />
        {/* <MobileMenu />  */}
        {isMobile ? <MobileMenu /> : <DropDown />}
        
        
      </div>
    </>
  );
}

function HeaderTop() {
  return (
    <div className="header-bar-1">
      <div className="header-bar-1-homeimage">
        <Link to="/">
          <img src={Logo} alt="LOGO" className="responsive-logo" />
        </Link>
      </div>

      {/* Social Media Icons */}

        <div className="header-bar-1-media">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon facebook" />
          </a> */}
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon twitter" />
          </a> */}
          <a href="https://www.linkedin.com/company/global-quality-specialists-company-limited-globaq/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="social-icon linkedin" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <FaGoogle className="social-icon google" />
          </a>
        </div>

      <div className="header-bar-1-sideimage">
        <img src={ReactLogo} alt="React Logo" className="responsive-logo" />
      </div>
    </div>
  );
}

export default Header;
