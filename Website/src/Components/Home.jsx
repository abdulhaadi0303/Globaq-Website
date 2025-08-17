import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Images array - all images should be placed in the public folder
// Public folder images are accessible directly with paths starting with "/"
const images = [
    "/pic1.jpg",     
    "/pic2.jpg",     
    "/pic3.jpg",     
    "/pic4.jpg",     
    "/pic8.jpg",     
    "/pic10.jpg",    
    "/pic11.jpg",        
];

// Services data with descriptions
const services = [
    {
        title: "MS Audits (EPC Projects)",
        description: "Comprehensive management system audits for EPC projects ensuring compliance and quality standards.",
        route: "/services/ms-audits"
    },
    {
        title: "Trainings (ISO, QHSE, Process Improvement)",
        description: "Professional training programs covering ISO standards, QHSE practices, and process improvement methodologies.",
        route: "/services/trainings"
    },
    {
        title: "Audit Assistance & Solutions",
        description: "Expert audit assistance and comprehensive solutions to ensure successful compliance assessments.",
        route: "/services/audit-assistance"
    },
    {
        title: "Laboratory Management System Services",
        description: "Complete laboratory management services and ISO/IEC 17025:2017 accreditation support.",
        route: "/services/laboratory-management"
    },
    {
        title: "ISO Consultancy",
        description: "Expert ISO consultancy services helping organizations achieve and maintain ISO certifications.",
        route: "/services/iso-consultancy"
    },
    {
        title: "CCC Consultancy",
        description: "Specialized CCC consultancy services for regulatory compliance and market access solutions.",
        route: "/services/ccc-consultancy"
    },
    {
        title: "AI Solutions",
        description: "Cutting-edge artificial intelligence solutions to optimize operations and enhance business intelligence.",
        route: "/services/ai-solutions"
    },
    {
        title: "ERP Solutions",
        description: "Comprehensive enterprise resource planning solutions for streamlined business operations.",
        route: "/services/erp-solutions"
    },
    {
        title: "IT Solutions",
        description: "Complete IT infrastructure and software solutions tailored to your business requirements.",
        route: "/services/it-solutions"
    },
    {
        title: "Sustainability & ESG Integration",
        description: "Environmental, social, and governance consulting for sustainable business transformation.",
        route: "/services/sustainability-esg"
    },
    {
        title: "Circular Economy Solutions",
        description: "Innovative circular economy strategies for sustainable resource management and waste reduction.",
        route: "/services/circular-economy"
    },
    {
        title: "CSR Solutions",
        description: "Corporate social responsibility consulting to build impactful community engagement programs.",
        route: "/services/csr-solutions"
    }
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoadErrors, setImageLoadErrors] = useState({});
    const sectionsRef = useRef([]);
    const [visibleSections, setVisibleSections] = useState({});

    // Carousel functions
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(nextImage, 1500);
        return () => clearInterval(interval);
    }, []);

    // Handle image load errors
    const handleImageError = (index) => {
        setImageLoadErrors(prev => ({ ...prev, [index]: true }));
    };

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.2 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Carousel Section */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-orange-50 to-gray-50">
                {/* Carousel Container */}
                <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8">
                    {/* Previous Button */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl text-2xl font-bold"
                    >
                        ‹
                    </button>

                    {/* Image Container */}
                    <div className="relative w-full max-w-7xl h-[400px] md:h-[500px] mx-1">
                        {imageLoadErrors[currentIndex] ? (
                            // Fallback display when image fails to load
                            <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl shadow-2xl flex items-center justify-center">
                                <div className="text-center text-orange-800">
                                    <div className="text-6xl mb-4">🏢</div>
                                    <p className="text-xl font-semibold">GLOBAQ Image {currentIndex + 1}</p>
                                    <p className="text-sm opacity-75">Image not available</p>
                                </div>
                            </div>
                        ) : (
                            <img
                                src={images[currentIndex]}
                                alt={`GLOBAQ Carousel ${currentIndex + 1}`}
                                className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-105"
                                onError={() => handleImageError(currentIndex)}
                            />
                        )}
                        
                        {/* Overlay with company info */}
                        <div className="absolute inset-0  bg-opacity-40 rounded-2xl flex items-end">
                            <div className="p-8 text-white">
                                <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">
                                    GLOBAQ
                                </h1>
                                <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">
                                    Quality Assurance Excellence
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextImage}
                        className="absolute right-4 z-10 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl text-2xl font-bold"
                    >
                        ›
                    </button>
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 flex-wrap justify-center max-w-xs">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-orange-500 w-8' : 'bg-white bg-opacity-50'
                            }`}
                        />
                    ))}
                </div>
            </div>



            {/* Vision Section */}
            <div
                id="vision"
                ref={(el) => (sectionsRef.current[1] = el)}
                className={`py-20 px-4 md:px-8 transition-all duration-1000 ${
                    visibleSections["vision"] 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-10"
                }`}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center mb-12">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full">
                                <span className="text-4xl">🔮</span>
                            </div>
                            <div className="text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                                    Our <span className="text-orange-500">Vision</span>
                                </h2>
                                <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                            To be a global market leader in the conformance and compliance industry, contributing to a 
                            sustainable future by delivering innovative and reliable quality assurance solutions. This vision 
                            aligns with <span className="font-semibold text-orange-600">Saudi Vision 2030's</span> focus on sustainable development and a high quality of life.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div
                id="mission"
                ref={(el) => (sectionsRef.current[2] = el)}
                className={`py-20 px-4 md:px-8 bg-gray-50 transition-all duration-1000 ${
                    visibleSections["mission"] 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-10"
                }`}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center mb-12">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full">
                                <span className="text-4xl">🎯</span>
                            </div>
                            <div className="text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                                    Our <span className="text-orange-500">Mission</span>
                                </h2>
                                <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                            To provide <span className="font-bold text-orange-600 text-2xl">SET (Simple, Efficient, and Timely)</span> quality 
                            assurance solutions, continuously improving our services through professionalism, accuracy, competency, 
                            and a relentless focus on customer satisfaction, ensuring sustainable and quality services for consumers.
                        </p>
                    </div>
                </div>
            </div>
            {/* Our Services Section */}
            <div
                id="services"
                ref={(el) => (sectionsRef.current[0] = el)}
                className={`py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-orange-50 transition-all duration-1000 ${
                    visibleSections["services"] 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-10"
                }`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-8">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full">
                                    <span className="text-4xl">⚙️</span>
                                </div>
                                <div className="text-left">
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                                        Our <span className="text-orange-500">Services</span>
                                    </h2>
                                    <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive solutions tailored to meet your business needs with excellence and innovation
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100"
                            >
                                <Link to={service.route} className="block h-full">
                                    {/* Service Title */}
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                                        {service.title}
                                    </h3>

                                    {/* Service Description */}
                                    <p className="text-gray-600 leading-relaxed text-sm mb-6 line-clamp-4">
                                        {service.description}
                                    </p>

                                    {/* Learn More Button */}
                                    <div className="flex items-center text-orange-500 group-hover:text-orange-600 font-semibold text-sm mt-auto">
                                        <span className="mr-2">Learn More</span>
                                        <svg 
                                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Need a Custom Solution?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                We provide tailored solutions to meet your unique business requirements. 
                                Contact us to discuss your specific needs.
                            </p>
                            <Link
                                to="/ContactUs"
                                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quality Commitment Section */}
            <div
                id="quality"
                ref={(el) => (sectionsRef.current[3] = el)}
                className={`py-20 px-4 md:px-8 transition-all duration-1000 ${
                    visibleSections["quality"] 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-10"
                }`}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-center mb-12">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full">
                                <span className="text-4xl">🏆</span>
                            </div>
                            <div className="text-left">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                                    Our Commitment to <span className="text-orange-500">Quality</span>
                                </h2>
                                <div className="w-24 h-1 bg-orange-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-50 to-gray-50 rounded-3xl p-8 md:p-12 shadow-lg">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-10">
                            <span className="font-bold text-orange-600">At GLOBAQ,</span> quality is at the heart of everything we do. 
                            We are dedicated to adhering to the principles of total quality management, ensuring that our services 
                            meet the highest standards of excellence. Our quality policy emphasizes:
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: "👥", text: "Meeting and exceeding customer requirements" },
                                { icon: "🛡️", text: "Ensuring compliance with legal, regulatory, and industry standards" },
                                { icon: "⚡", text: "Fostering continuous improvement in all our processes" },
                                { icon: "🎓", text: "Empowering our team through training and development" },
                                { icon: "🌱", text: "Promoting sustainability in our operations and services" }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">{item.icon}</span>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-12 text-center">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                By upholding these commitments, we aim to build long-term relationships with our customers, 
                                stakeholders, and the community, contributing to a sustainable and quality-focused future while 
                                ensuring mutual growth and success, in line with the overarching goals of 
                                <span className="font-bold text-orange-600"> Saudi Vision 2030.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;