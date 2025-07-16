import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-700 to-gray-900 text-white mt-20">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Section 1 - Company Info */}
                    <div className="space-y-4">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                GLOBAQ KSA
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Your trusted partner in excellence, delivering innovative solutions across Saudi Arabia.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 - Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 relative">
                            Contact Us
                            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                        </h3>
                        
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 p-3 rounded-lg bg-gray-700/60 hover:bg-gray-700/80 transition-all duration-300 group">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FaMapMarkerAlt className="text-white text-sm" />
                                </div>
                                <div>
                                    <p className="text-gray-300 font-medium">Al-Khobar, Saudi Arabia</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 p-3 rounded-lg bg-gray-700/60 hover:bg-gray-700/80 transition-all duration-300 group">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FaEnvelope className="text-white text-sm" />
                                </div>
                                <div>
                                    <a href="mailto:info@globaqksa.com" className="text-gray-300 font-medium hover:text-orange-400 transition-colors duration-300">
                                        info@globaqksa.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 p-3 rounded-lg bg-gray-700/60 hover:bg-gray-700/80 transition-all duration-300 group">
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FaPhone className="text-white text-sm" />
                                </div>
                                <div>
                                    <a href="tel:+966530767286" className="text-gray-300 font-medium hover:text-orange-400 transition-colors duration-300">
                                        +966 53 076 7286
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 - Quick Links & Social */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 relative">
                            Quick Links
                            <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                        </h3>
                        
                        <ul className="space-y-3">
                            <li>
                                <Link 
                                    to="/AboutUs" 
                                    className="flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 group"
                                >
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 group"
                                >
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">Careers</span>
                                </a>
                            </li>
                            <li>
                                <Link 
                                    to="/ContactUs" 
                                    className="flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300 group"
                                >
                                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">Contact Us</span>
                                </Link>
                            </li>
                        </ul>

                        {/* Social Media Links */}
                        <div className="pt-4">
                            <h4 className="text-lg font-semibold text-gray-300 mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a 
                                    href="#" 
                                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                                >
                                    <FaFacebook className="text-white text-lg" />
                                </a>
                                <a 
                                    href="#" 
                                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                                >
                                    <FaTwitter className="text-white text-lg" />
                                </a>
                                <a 
                                    href="#" 
                                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                                >
                                    <FaLinkedin className="text-white text-lg" />
                                </a>
                                <a 
                                    href="#" 
                                    className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                                >
                                    <FaInstagram className="text-white text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Wave */}
            <div className="relative">
                <svg 
                    className="w-full h-8 text-orange-600" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    <path 
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                        fill="currentColor"
                    />
                </svg>
            </div>

            {/* Copyright Section */}
            <div className="bg-orange-400 text-black py-3">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <p className="font-semibold text-lg">
                            &copy; {new Date().getFullYear()} GLOBAQ KSA. All rights reserved.
                        </p>
                        <p className="text-sm opacity-90">
                            www.globaqksa.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;