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

          <Link to="/Trainings">Trainings</Link>
          <Link to="/ISOConsultancy">ISO Consultancy</Link>
          <Link to="/AuditAssistance">Audit Assistance</Link>
          <Link to="/LaboratoryQualityManagementSystemServices">Lab Quality Management</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
