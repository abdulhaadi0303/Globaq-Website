import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/Header.css";
import "./styles/Headertop.css";

// Import images
import Logo from "../assets/Logo.jpg";
import ReactLogo from "../assets/react.svg";

// Import Font Awesome for social media icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [showCertificationDropdown, setShowCertificationDropdown] = useState(false);
  const [showTrainingsDropdown, setShowTrainingsDropdown] = useState(false);
  const [showConsultancyDropdown, setShowConsultancyDropdown] = useState(false);
  const [showAssistanceDropdown, setShowAssistanceDropdown] = useState(false);
  const [showLabServicesDropdown, setShowLabServicesDropdown] = useState(false);

  const handleNavigation = (option) => {
    navigate(`/ManagementSystemAudits?option=${option}`);
  };

  return (
    <div className="header">
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

      <div className="header-bar-3">
        <nav>
          <Link to="/">Home</Link>

          {/* Dropdown for Management System Audits */}
          <div 
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="dropdown-title">Management System Audits</span>
            {showDropdown && (
              <div className="dropdown-content">
                <div 
                  className="dropdown-item"
                  onMouseEnter={() => setShowSubDropdown(true)}
                  onMouseLeave={() => setShowSubDropdown(false)}
                >
                  Second Party Audits
                  {showSubDropdown && (
                    <div className="sub-dropdown-content">
                      <span onClick={() => handleNavigation("Vendor Assessment")}>Vendor Assessment</span>
                      <span onClick={() => handleNavigation("Schedule Q - Quality Assessment")}>Schedule Q - Quality Assessment</span>
                      <span onClick={() => handleNavigation("Schedule D - Safety Assessment")}>Schedule D - Safety Assessment</span>
                    </div>
                  )}
                </div>
                
                {/* Management System Certification Audits */}
                <div 
                  className="dropdown-item"
                  onMouseEnter={() => setShowCertificationDropdown(true)}
                  onMouseLeave={() => setShowCertificationDropdown(false)}
                >
                  Management System Certification Audits
                  {showCertificationDropdown && (
                    <div className="sub-dropdown-content">
                      <span>Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Dropdown for Trainings */}
          <div 
            className="dropdown"
            onMouseEnter={() => setShowTrainingsDropdown(true)}
            onMouseLeave={() => setShowTrainingsDropdown(false)}
          >
            <span className="dropdown-title">Trainings</span>
            {showTrainingsDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <span>Dummy Training 1</span>
                </div>
                <div className="dropdown-item">
                  <span>Dummy Training 2</span>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown for ISO Consultancy */}
          <div 
            className="dropdown"
            onMouseEnter={() => setShowConsultancyDropdown(true)}
            onMouseLeave={() => setShowConsultancyDropdown(false)}
          >
            <span className="dropdown-title">ISO Consultancy</span>
            {showConsultancyDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <span>Dummy Consultancy 1</span>
                </div>
                <div className="dropdown-item">
                  <span>Dummy Consultancy 2</span>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown for Audit Assistance */}
          <div 
            className="dropdown"
            onMouseEnter={() => setShowAssistanceDropdown(true)}
            onMouseLeave={() => setShowAssistanceDropdown(false)}
          >
            <span className="dropdown-title">Audit Assistance</span>
            {showAssistanceDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <span>Dummy Assistance 1</span>
                </div>
                <div className="dropdown-item">
                  <span>Dummy Assistance 2</span>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown for Laboratory Quality Management System Services */}
          <div 
            className="dropdown"
            onMouseEnter={() => setShowLabServicesDropdown(true)}
            onMouseLeave={() => setShowLabServicesDropdown(false)}
          >
            <span className="dropdown-title">Lab Quality Management System Services</span>
            {showLabServicesDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <span>Dummy Service 1</span>
                </div>
                <div className="dropdown-item">
                  <span>Dummy Service 2</span>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
