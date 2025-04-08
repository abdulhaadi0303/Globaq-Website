import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"; // Make sure the import is correct
import "./styles/Footer.css";
import locationImg from "../assets/Logo.jpg"; // Correct image path

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                {/* Section 1 - Location Image */}
                <div className="footer-section location-image">
                    <img src={locationImg} alt="Location Map" />
                </div>

                {/* Section 2 - Contact Info */}
                <div className="footer-section contact-info">
                    <h3>Contact Us</h3>
                    <p><FaMapMarkerAlt /> Al-Khobar, Saudi Arabia</p>
                    <p><FaEnvelope /> info@globaqksa.com</p>
                    <p><FaPhone /> +966 53 076 7286 </p>
                </div>

                {/* Section 3 - Quick Links */}
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Brochure</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Globaq @ www.globaqksa.com </p>
            </div>
        </footer>
    );
}

export default Footer;
