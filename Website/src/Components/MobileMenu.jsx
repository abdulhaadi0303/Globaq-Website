import React, { useState } from "react";
import "./styles/MobileMenu.css";
import { Link, useNavigate } from "react-router-dom";

function MobileMenu() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showManagementDropdown, setShowManagementDropdown] = useState(false);
  const [showTrainingsDropdown, setShowTrainingsDropdown] = useState(false);
  const [showConsultancyDropdown, setShowConsultancyDropdown] = useState(false);
  const [showAssistanceDropdown, setShowAssistanceDropdown] = useState(false);
  const [showLabServicesDropdown, setShowLabServicesDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (option) => {
    navigate(`/ManagementSystemAudits?option=${option}`);
    setIsOpen(false); // Close the menu after navigation
  };

  return (
    <div className="mobile-menu-container">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>

            {/* Management System Audits Dropdown */}
            <li>
              <div
                className="dropdown-title"
                onClick={() => setShowManagementDropdown(!showManagementDropdown)}
              >
                Management System Audits
              </div>
              {showManagementDropdown && (
                <ul className="dropdown-content">
                  <li>
                    <div className="dropdown-item">Second Party Audits</div>
                    <ul className="sub-dropdown-content">
                      <li onClick={() => handleNavigation("Vendor Assessment")}>
                        Vendor Assessment
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("Schedule Q - Quality Assessment")
                        }
                      >
                        Schedule Q - Quality Assessment
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("Schedule D - Safety Assessment")
                        }
                      >
                        Schedule D - Safety Assessment
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="dropdown-item">
                      Management System Certification Audits
                    </div>
                    <ul className="sub-dropdown-content">
                      <li>Coming Soon</li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>

            {/* Trainings Dropdown */}
            <li>
              <div
                className="dropdown-title"
                onClick={() => setShowTrainingsDropdown(!showTrainingsDropdown)}
              >
                Trainings
              </div>
              {showTrainingsDropdown && (
                <ul className="dropdown-content">
                  <li>
                    <div className="dropdown-item">ISO Trainings</div>
                    <ul className="sub-dropdown-content">
                      <li
                        onClick={() =>
                          handleNavigation("ISO Implementation Training", "Trainings")
                        }
                      >
                        ISO Implementation Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("ISO Awareness Training", "Trainings")
                        }
                      >
                        ISO Awareness Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("Internal Audit Training", "Trainings")
                        }
                      >
                        Internal Audit Training
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="dropdown-item">Other Trainings</div>
                    <ul className="sub-dropdown-content">
                      <li
                        onClick={() =>
                          handleNavigation("Six Sigma Training", "Trainings")
                        }
                      >
                        Six Sigma Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("Lean Six Sigma Training", "Trainings")
                        }
                      >
                        Lean Six Sigma Training
                      </li>
                      <li
                        onClick={() => handleNavigation("5S Training", "Trainings")}
                      >
                        5S Training
                      </li>
                      <li
                        onClick={() => handleNavigation("ESG Training", "Trainings")}
                      >
                        ESG Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("SDGs Awareness Training", "Trainings")
                        }
                      >
                        SDGs Awareness Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation(
                            "Circular Economy Awareness Training",
                            "Trainings"
                          )
                        }
                      >
                        Circular Economy Awareness Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("Risk Assessment Training", "Trainings")
                        }
                      >
                        Risk Assessment Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation(
                            "Root Cause Analysis Training",
                            "Trainings"
                          )
                        }
                      >
                        Root Cause Analysis Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("HACCP Awareness Training", "Trainings")
                        }
                      >
                        HACCP Awareness Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation("HIRAC Training", "Trainings")
                        }
                      >
                        HIRAC Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation(
                            "Saudi Aramco Schedule Q Awareness Training",
                            "Trainings"
                          )
                        }
                      >
                        Saudi Aramco Schedule Q Awareness Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation(
                            "Saudi Aramco Schedule D Awareness Training",
                            "Trainings"
                          )
                        }
                      >
                        Saudi Aramco Schedule D Awareness Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation(
                            "Saudi Aramco CSM Awareness Training",
                            "Trainings"
                          )
                        }
                      >
                        Saudi Aramco CSM Awareness Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation(
                            "Saudi Aramco CSAR Awareness Training",
                            "Trainings"
                          )
                        }
                      >
                        Saudi Aramco CSAR Awareness Training
                      </li>
                      <li
                        onClick={() =>
                          handleNavigation(
                            "Saudi Aramco WSSM Awareness Training",
                            "Trainings"
                          )
                        }
                      >
                        Saudi Aramco WSSM Awareness Training
                      </li>
                    </ul>
                  </li>
                </ul>
              )}
            </li>

            {/* ISO Consultancy Dropdown */}
            <li>
              <div
                className="dropdown-title"
                onClick={() => setShowConsultancyDropdown(!showConsultancyDropdown)}
              >
                ISO Consultancy
              </div>
              {showConsultancyDropdown && (
                <ul className="dropdown-content">
                  <li
                    onClick={() =>
                      handleNavigation("ISO/IEC 17025:2017", "Consultancy")
                    }
                  >
                    ISO/IEC 17025:2017
                  </li>
                  <li
                    onClick={() =>
                      handleNavigation("ISO/IEC 17020:2012", "Consultancy")
                    }
                  >
                    ISO/IEC 17020:2012
                  </li>
                  <li
                    onClick={() => handleNavigation("ISO 9001:2015", "Consultancy")}
                  >
                    ISO 9001:2015
                  </li>
                  <li
                    onClick={() => handleNavigation("ISO 14001:2015", "Consultancy")}
                  >
                    ISO 14001:2015
                  </li>
                  <li
                    onClick={() => handleNavigation("ISO 45001:2018", "Consultancy")}
                  >
                    ISO 45001:2018
                  </li>
                  <li
                    onClick={() => handleNavigation("ISO 22000:2018", "Consultancy")}
                  >
                    ISO 22000:2018
                  </li>
                  <li
                    onClick={() => handleNavigation("ISO 55001:2014", "Consultancy")}
                  >
                    ISO 55001:2014
                  </li>
                  <li
                    onClick={() => handleNavigation("ISO 31000:2018", "Consultancy")}
                  >
                    ISO 31000:2018
                  </li>
                  <li
                    onClick={() => handleNavigation("ISO 59004:2024", "Consultancy")}
                  >
                    ISO 59004:2024
                  </li>
                  <li
                    onClick={() => handleNavigation("ISO 59010:2024", "Consultancy")}
                  >
                    ISO 59010:2024
                  </li>
                  <li
                    onClick={() => handleNavigation("ISO 59020:2024", "Consultancy")}
                  >
                    ISO 59020:2024
                  </li>
                </ul>
              )}
            </li>

            {/* Audit Assistance Dropdown */}
            <li>
              <div
                className="dropdown-title"
                onClick={() => setShowAssistanceDropdown(!showAssistanceDropdown)}
              >
                Audit Assistance
              </div>
              {showAssistanceDropdown && (
                <ul className="dropdown-content">
                  <li
                    onClick={() =>
                      handleNavigation("ISO Internal Audits", "AuditAssistance")
                    }
                  >
                    ISO Internal Audits
                  </li>
                  <li
                    onClick={() =>
                      handleNavigation("ISO third party audit", "AuditAssistance")
                    }
                  >
                    ISO third party audit
                  </li>
                </ul>
              )}
            </li>

            {/* Lab Quality Management System Services Dropdown */}
            <li>
              <div
                className="dropdown-title"
                onClick={() => setShowLabServicesDropdown(!showLabServicesDropdown)}
              >
                Lab Quality Management System Services
              </div>
              {showLabServicesDropdown && (
                <ul className="dropdown-content">
                  <li>Consultancy</li>
                  <li>
                    <div className="sub-dropdown-title">Training</div>
                    <ul className="sub-dropdown-content">
                      <li>ISO/IEC 17025:2017 Awareness training</li>
                      <li>ISO/IEC 17025:2017 Internal auditor training</li>
                      <li>Measurement uncertainty training</li>
                      <li>Proficiency testing training</li>
                      <li>Risk assessment training</li>
                      <li>Root cause analysis training</li>
                    </ul>
                  </li>
                  <li>Implementation Support</li>
                  <li>3rd Party Internal Audit</li>
                  <li>Support for Internal Audit</li>
                  <li>Support for Accreditation Process</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;