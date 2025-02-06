import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/Headertop.css";

import DropDown from "./Dropdown"

// Import images
import Logo from "../assets/Logo.jpg";
import ReactLogo from "../assets/react.svg";


// Import Font Awesome for social media icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";

function Header(){
  return(
    <>
    <div className="header">
    <HeaderTop/>
    <DropDown/>
    </div>

    </>
  )
}

function HeaderTop(){
  return(
    <div className="header-bar-1">
    <div className="header-bar-1-homeimage">
      <Link to="/">
        <img src={Logo} alt="LOGO" className="responsive-logo" />
      </Link>
    </div>

    {/* Social Media Icons */}
    <div className="header-bar-1-media">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="social-icon facebook" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="social-icon twitter" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
  )
}


export default Header;


         