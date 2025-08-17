import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function ServicesPage() {
    const location = useLocation();
    const [currentService, setCurrentService] = useState("");

    // Services data matching the home page
    const services = {
        "ms-audits": {
            title: "MS Audits (EPC Projects)",
            description: "Comprehensive management system audits for EPC projects ensuring compliance and quality standards.",
            fullDescription: "Our Management System Audits for EPC (Engineering, Procurement, and Construction) projects provide comprehensive assessments to ensure your projects meet the highest compliance and quality standards. We specialize in evaluating management systems against international standards and project-specific requirements."
        },
        "trainings": {
            title: "Trainings (ISO, QHSE, Process Improvement)",
            description: "Professional training programs covering ISO standards, QHSE practices, and process improvement methodologies.",
            fullDescription: "Our comprehensive training programs cover ISO standards, Quality, Health, Safety, and Environmental (QHSE) practices, and process improvement methodologies. We deliver customized training solutions designed to enhance your team's capabilities and ensure regulatory compliance."
        },
        "audit-assistance": {
            title: "Audit Assistance & Solutions",
            description: "Expert audit assistance and comprehensive solutions to ensure successful compliance assessments.",
            fullDescription: "We provide expert audit assistance and comprehensive solutions to ensure successful compliance assessments. Our experienced team supports organizations through internal audits, third-party audits, and compliance reviews with proven methodologies."
        },
        "laboratory-management": {
            title: "Laboratory Management System Services",
            description: "Complete laboratory management services and ISO/IEC 17025:2017 accreditation support.",
            fullDescription: "Our laboratory management system services provide complete support for ISO/IEC 17025:2017 accreditation. We offer consultancy, training, implementation support, and ongoing assistance to ensure your laboratory meets the highest international standards."
        },
        "iso-consultancy": {
            title: "ISO Consultancy",
            description: "Expert ISO consultancy services helping organizations achieve and maintain ISO certifications.",
            fullDescription: "Our expert ISO consultancy services help organizations achieve and maintain various ISO certifications. We provide end-to-end support from gap analysis to certification maintenance, ensuring your organization meets international quality management standards."
        },
        "ccc-consultancy": {
            title: "CCC Consultancy",
            description: "Specialized CCC consultancy services for regulatory compliance and market access solutions.",
            fullDescription: "Our specialized CCC (China Compulsory Certificate) consultancy services provide regulatory compliance and market access solutions for companies looking to enter the Chinese market. We ensure your products meet all necessary regulatory requirements."
        },
        "ai-solutions": {
            title: "AI Solutions",
            description: "Cutting-edge artificial intelligence solutions to optimize operations and enhance business intelligence.",
            fullDescription: "Our cutting-edge artificial intelligence solutions are designed to optimize operations and enhance business intelligence. We develop custom AI applications that streamline processes, improve decision-making, and drive digital transformation."
        },
        "erp-solutions": {
            title: "ERP Solutions",
            description: "Comprehensive enterprise resource planning solutions for streamlined business operations.",
            fullDescription: "Our comprehensive ERP (Enterprise Resource Planning) solutions provide streamlined business operations through integrated software systems. We offer implementation, customization, and support services for various ERP platforms."
        },
        "it-solutions": {
            title: "IT Solutions",
            description: "Complete IT infrastructure and software solutions tailored to your business requirements.",
            fullDescription: "Our complete IT solutions cover infrastructure setup, software development, system integration, and ongoing technical support. We provide tailored technology solutions that align with your business objectives and growth requirements."
        },
        "sustainability-esg": {
            title: "Sustainability & ESG Integration",
            description: "Environmental, social, and governance consulting for sustainable business transformation.",
            fullDescription: "Our sustainability and ESG (Environmental, Social, and Governance) integration services help organizations implement sustainable practices and meet ESG compliance requirements. We provide strategic consulting for sustainable business transformation."
        },
        "circular-economy": {
            title: "Circular Economy Solutions",
            description: "Innovative circular economy strategies for sustainable resource management and waste reduction.",
            fullDescription: "Our circular economy solutions focus on innovative strategies for sustainable resource management and waste reduction. We help organizations transition to circular business models that minimize waste and maximize resource efficiency."
        },
        "csr-solutions": {
            title: "CSR Solutions",
            description: "Corporate social responsibility consulting to build impactful community engagement programs.",
            fullDescription: "Our CSR (Corporate Social Responsibility) solutions help organizations develop and implement impactful community engagement programs. We provide strategic consulting to align CSR initiatives with business objectives and community needs."
        }
    };

    useEffect(() => {
        const path = location.pathname.split('/').pop();
        setCurrentService(path || "");
    }, [location]);

    const service = services[currentService];

    if (!service) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-20">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <div className="bg-white rounded-3xl p-12 shadow-2xl">
                        <div className="text-6xl mb-6">⚙️</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                            Our <span className="text-orange-500">Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We provide comprehensive solutions across various domains. This page will be developed 
                            with detailed information about each service.
                        </p>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-700">
                                <span className="font-semibold">Coming Soon:</span> Detailed service pages with comprehensive information, 
                                case studies, and client testimonials.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 mt-8">
                                <Link
                                    to="/"
                                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Back to Home
                                </Link>
                                <Link
                                    to="/ContactUs"
                                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-lg">
                                <span className="text-4xl">⚙️</span>
                            </div>
                            <div className="text-left">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                                    {service.title}
                                </h1>
                                <div className="w-32 h-1 bg-orange-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Service Description */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                                Service Overview
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {service.fullDescription}
                            </p>
                            
                            {/* Key Features */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits:</h3>
                                <div className="space-y-3">
                                    {[
                                        "Expert consultation and guidance",
                                        "Compliance with international standards",
                                        "Customized solutions for your business",
                                        "Ongoing support and maintenance",
                                        "Cost-effective implementation"
                                    ].map((benefit, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-white text-sm">✓</span>
                                            </div>
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Service Stats/Info */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-orange-50 to-gray-50 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                                    Why Choose GLOBAQ?
                                </h3>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div className="bg-white rounded-xl p-6 shadow-md">
                                        <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
                                        <div className="text-sm text-gray-600">Years Experience</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-md">
                                        <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                                        <div className="text-sm text-gray-600">Projects Completed</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-md">
                                        <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
                                        <div className="text-sm text-gray-600">Client Satisfaction</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-md">
                                        <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                                        <div className="text-sm text-gray-600">Support Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Call to Action */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your specific requirements and learn how we can help 
                        your organization achieve its goals with our {service.title.toLowerCase()} services.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/ContactUs"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Get a Free Consultation
                        </Link>
                        <Link
                            to="/"
                            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>

                {/* Additional Services */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                        Explore Our Other Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Object.entries(services)
                            .filter(([key]) => key !== currentService)
                            .slice(0, 3)
                            .map(([key, otherService]) => (
                                <Link
                                    key={key}
                                    to={`/services/${key}`}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                                >
                                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                                        {otherService.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {otherService.description}
                                    </p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesPage;