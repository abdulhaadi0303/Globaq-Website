import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/Dropdown.css";
import "./styles/Headertop.css";

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

function DropDown() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [showCertificationDropdown, setShowCertificationDropdown] = useState(false);
  const [showTrainingsDropdown, setShowTrainingsDropdown] = useState(false);
  const [showConsultancyDropdown, setShowConsultancyDropdown] = useState(false);
  const [showAssistanceDropdown, setShowAssistanceDropdown] = useState(false);
  const [showLabServicesDropdown, setShowLabServicesDropdown] = useState(false);

  const handleNavigation = (option, category = "") => {
    navigate(`/${category}?option=${option}`);
  };
  
  return (
    <>
        {/* <HeaderTop/> */}
       
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
                {/* ISO Trainings */}
                <div
                  className="dropdown-item"
                  onMouseEnter={() => setShowSubDropdown(true)}
                  onMouseLeave={() => setShowSubDropdown(false)}
                >
                  ISO Trainings
                  {showSubDropdown && (
                    <div className="sub-dropdown-content">
                      <span onClick={() => handleNavigation("ISO Implementation Training", "Trainings")}>
                        ISO Implementation Training
                      </span>
                      <span onClick={() => handleNavigation("ISO Awareness Training", "Trainings")}>
                        ISO Awareness Training
                      </span>
                      <span onClick={() => handleNavigation("Internal Audit Training", "Trainings")}>
                        Internal Audit Training
                      </span>
                    </div>
                  )}
                </div>

                {/* Other Trainings */}
                <div
                  className="dropdown-item"
                  onMouseEnter={() => setShowAssistanceDropdown(true)}
                  onMouseLeave={() => setShowAssistanceDropdown(false)}
                >
                  Other Trainings
                  {showAssistanceDropdown && (
                    <div className="sub-dropdown-content">
                      <span onClick={() => handleNavigation("Six Sigma Training", "Trainings")}>
                        Six Sigma Training
                      </span>
                      <span onClick={() => handleNavigation("Lean Six Sigma Training", "Trainings")}>
                        Lean Six Sigma Training
                      </span>
                      <span onClick={() => handleNavigation("5S Training", "Trainings")}>5S Training</span>
                      <span onClick={() => handleNavigation("ESG Training", "Trainings")}>ESG Training</span>
                      <span onClick={() => handleNavigation("SDGs Awareness Training", "Trainings")}>SDGs Awareness Training</span>
                      <span onClick={() => handleNavigation("Circular Economy Awareness Training", "Trainings")}>
                        Circular Economy Awareness Training
                      </span>
                      <span onClick={() => handleNavigation("Risk Assessment Training", "Trainings")}>
                        Risk Assessment Training
                      </span>
                      <span onClick={() => handleNavigation("Root Cause Analysis Training", "Trainings")}>
                        Root Cause Analysis Training
                      </span>
                      <span onClick={() => handleNavigation("HACCP Awareness Training", "Trainings")}>
                        HACCP Awareness Training
                      </span>
                      <span onClick={() => handleNavigation("HIRAC Training", "Trainings")}>HIRAC Training</span>
                      <span onClick={() => handleNavigation("Saudi Aramco Schedule Q Awareness Training", "Trainings")}>
                        Saudi Aramco Schedule Q Awareness Training
                      </span>
                      <span onClick={() => handleNavigation("Saudi Aramco Schedule D Awareness Training", "Trainings")}>
                        Saudi Aramco Schedule D Awareness Training
                      </span>
                      <span onClick={() => handleNavigation("Saudi Aramco CSM Awareness Training", "Trainings")}>
                        Saudi Aramco CSM Awareness Training
                      </span>
                      <span onClick={() => handleNavigation("Saudi Aramco CSAR Awareness Training", "Trainings")}>
                        Saudi Aramco CSAR Awareness Training
                      </span>
                      <span onClick={() => handleNavigation("Saudi Aramco WSSM Awareness Training", "Trainings")}>
                        Saudi Aramco WSSM Awareness Training
                      </span>
                    </div>
                  )}
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
        <span onClick={() => handleNavigation("ISO/IEC 17025:2017", "Consultancy")}>
          ISO/IEC 17025:2017
        </span>
      </div>
      <div className="dropdown-item">
        <span onClick={() => handleNavigation("ISO/IEC 17020:2012", "Consultancy")}>
          ISO/IEC 17020:2012
        </span>
      </div>
      <div className="dropdown-item">
        <span onClick={() => handleNavigation("ISO 9001:2015", "Consultancy")}>
          ISO 9001:2015
        </span>
      </div>
      <div className="dropdown-item">
        <span onClick={() => handleNavigation("ISO 14001:2015", "Consultancy")}>
          ISO 14001:2015
        </span>
      </div>
      <div className="dropdown-item">
        <span onClick={() => handleNavigation("ISO 45001:2018", "Consultancy")}>
          ISO 45001:2018
        </span>
      </div>
      <div className="dropdown-item">
        <span onClick={() => handleNavigation("ISO 22000:2018", "Consultancy")}>
          ISO 22000:2018
        </span>
      </div>
      <div className="dropdown-item">
        <span onClick={() => handleNavigation("ISO 55001:2014", "Consultancy")}>
          ISO 55001:2014
        </span>
      </div>
      <div className="dropdown-item">
        <span onClick={() => handleNavigation("ISO 31000:2018", "Consultancy")}>
          ISO 31000:2018
        </span>
      </div>
      <div className="dropdown-item">
        <span onClick={() => handleNavigation("ISO 59004:2024", "Consultancy")}>
          ISO 59004:2024
        </span>
      </div>
      <div className="dropdown-item">
        <span onClick={() => handleNavigation("ISO 59010:2024", "Consultancy")}>
          ISO 59010:2024
        </span>
      </div>
      <div className="dropdown-item">
        <span onClick={() => handleNavigation("ISO 59020:2024", "Consultancy")}>
          ISO 59020:2024
        </span>
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
                  <span onClick={() => handleNavigation("ISO Internal Audits", "AuditAssistance")}>
                  ISO Internal Audits</span>
                </div>
                <div className="dropdown-item">
                  <span onClick={() => handleNavigation("ISO third party audit", "AuditAssistance")}>
                  ISO third party audit</span>
                </div>
              </div>
            )}
          </div>
          

          {/* Dropdown for Laboratory Quality Management System Services */}
                  {/* Dropdown for Lab Quality Management System Services */}
                  <div 
            className="dropdown"
            onMouseEnter={() => setShowLabServicesDropdown(true)}
            onMouseLeave={() => setShowLabServicesDropdown(false)}
          >
            <span className="dropdown-title">Lab Quality Management System Services</span>
            {showLabServicesDropdown && (
              <div className="dropdown-content">
                {/* Consultancy */}
                <div className="dropdown-item">
                  <span>Consultancy</span>
                </div>
                
                {/* Training Sub-tab */}
                <div className="dropdown-item">
                  <span className="sub-dropdown-title">Training</span>
                  <div className="sub-dropdown-content">
                    <span>ISO/IEC 17025:2017 Awareness training</span>
                    <span>ISO/IEC 17025:2017 Internal auditor training</span>
                    <span>Measurement uncertainty training</span>
                    <span>Proficiency testing training</span>
                    <span>Risk assessment training</span>
                    <span>Root cause analysis training</span>
                  </div>
                </div>
                
                {/* Other Sub-tabs */}
                <div className="dropdown-item">
                  <span>Implementation Support</span>
                </div>
                <div className="dropdown-item">
                  <span>3rd Party Internal Audit</span>
                </div>
                <div className="dropdown-item">
                  <span>Support for Internal Audit</span>
                </div>
                <div className="dropdown-item">
                  <span>Support for Accreditation Process</span>
                </div>
              </div>
            )}
          </div>



        </nav>
      </div>
      </>
  );
}

export default Header;


         