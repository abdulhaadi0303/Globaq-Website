import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles/Dropdown.css";


function DropDown() {
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
                <div className="dropdown-subitem">
                  ISO Implementation Training
                  <div className="sub-dropdown-list">
                    {["ISO/IEC 17025:2017", "ISO/IEC 17020:2012", "ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ISO 22000:2018", "ISO 55001:2014", "ISO 31000:2018", "ISO 59004:2024", "ISO 59010:2024", "ISO 59020:2024"].map((item) => (
                      <span key={item} onClick={() => handleNavigation(item, "Trainings")}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="dropdown-subitem">
                  ISO Awareness Training
                  <div className="sub-dropdown-list">
                    {["ISO/IEC 17025:2017", "ISO/IEC 17020:2012", "ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ISO 22000:2018", "ISO 55001:2014", "ISO 31000:2018", "ISO 59004:2024", "ISO 59010:2024", "ISO 59020:2024"].map((item) => (
                      <span key={item} onClick={() => handleNavigation(item, "Trainings")}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="dropdown-subitem">
                  Internal Audit Training
                  <div className="sub-dropdown-list">
                    {["ISO/IEC 17025:2017", "ISO/IEC 17020:2012", "ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ISO 22000:2018"].map((item) => (
                      <span key={item} onClick={() => handleNavigation(item, "Trainings")}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
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
                {["Six Sigma Training", "Lean Six Sigma Training", "5S Training", "Environmental, Social and Governance (ESG) Training", "UN Sustainable Development Goals (SDGs) Awareness Training", "Circular Economy Awareness Training", "Risk Assessment Training", "Root Cause Analysis Training", "Hazard Analysis & Critical Control Points (HACCP) Awareness Training", "Hazard Identification, Risk Assessment and Control (HIRAC) Training", "Saudi Aramco Schedule Q Awareness Training", "Saudi Aramco Schedule D Awareness Training", "Saudi Aramco Construction Safety Manual (CSM) Awareness Training", "Saudi Aramco Contractor Safety Administrative Requirements (CSAR) Awareness Training", "Saudi Aramco Work Site Safety Manual (WSSM) Awareness Training"].map((item) => (
                  <span key={item} onClick={() => handleNavigation(item, "Trainings")}>
                    {item}
                  </span>
                ))}
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

  export default DropDown;