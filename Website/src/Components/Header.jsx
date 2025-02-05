import { Link } from "react-router-dom";
import "./styles/Header.css";

// Import images from the assets folder
import Logo from "../assets/Logo.jpg";
import ReactLogo from "../assets/react.svg";

// Import Font Awesome for social media icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";

function Header() {
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
          <Link to="/ManagementSystemAudits">Management System Audits</Link>
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
