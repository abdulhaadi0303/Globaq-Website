import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import PageSchema from "./PageSchema";

const groupImages = {
    consultancy: "/consultancy.jpg",
    audits: "/audit.jpg",
    aramco: "/aramco-safety.jpg",
};

const consultancyItems = [
    { title: "ISO Consultancy", text: "End to end ISO 9001 quality management consulting including gap analysis, documentation, process mapping, and implementation of a QMS aligned to ISO 9001:2015 requirements." },
    { title: "ISO/IEC 17025 Consultancy and Accreditation Support", text: "Guidance for testing and calibration laboratories seeking ISO/IEC 17025 accreditation." },
    { title: "ISO/IEC 17020 Consultancy and Accreditation Support", text: "Guidance for inspection bodies seeking ISO/IEC 17020 accreditation." },
];

const auditItems = [
    { title: "Management System Audits", text: "Independent audits of your management system to confirm it is effective, compliant, and ready for external certification or client review." },
    { title: "Quality Assessments", text: "In depth review of your quality processes to identify gaps, risks, and opportunities for improvement." },
    { title: "3rd Party Internal Audits", text: "Independent internal audits carried out on your behalf, giving you an objective view of your system's performance." },
    { title: "Audit Assistance", text: "Hands on support before, during, and after certification and surveillance audits." },
];

const aramcoItems = [
    { title: "Schedule Q Audits", text: "Support and preparation for Schedule Q audit requirements." },
    { title: "HSE Assessments", text: "Health, safety, and environment assessments to evaluate compliance and operational risk." },
    { title: "Safety Assessments", text: "Focused reviews of safety systems, procedures, and site practices." },
    { title: "Schedule D Audits", text: "Support and preparation for Schedule D audit requirements." },
    { title: "CSSP Reviews", text: "Contractor Safety Systems Program reviews to support qualification and compliance." },
];

const trainings = [
    "ISO trainings", "Lead auditor trainings", "Internal auditor trainings", "Implementation trainings",
    "Awareness trainings", "Foundation courses", "Transition courses", "Business improvement trainings",
    "Six Sigma trainings", "Root cause analysis trainings",
];

const whyUs = [
    { title: "Local presence, local understanding.", text: "We're based in the Eastern Province and understand the compliance expectations of Saudi Aramco and other regional industrial clients." },
    { title: "Practical, not theoretical.", text: "Our consultants build systems your team can actually follow day to day, not a binder that only comes out during audits." },
    { title: "Full cycle support.", text: "From initial gap analysis through certification and every surveillance audit after, we stay with you." },
    { title: "Clear communication.", text: 'We explain what ISO 9001 requires in plain language, so your team understands the "why," not just the "what."' },
];

function ServiceGroup({ id, heading, image, imageAlt, items, reverse, visible, setRef }) {
    return (
        <div id={id} ref={setRef} className={`py-16 md:py-20 px-4 md:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="max-w-6xl mx-auto">
                <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? "md:[direction:rtl]" : ""}`}>
                    <div className={reverse ? "md:[direction:ltr]" : ""}>
                        <div className="w-full h-64 md:h-80 rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-orange-100 to-gray-100">
                            <img src={image} alt={imageAlt} className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.parentElement.classList.add("flex", "items-center", "justify-center");
                                    e.target.parentElement.innerHTML += '<span style="font-size:3rem">🏗️</span>';
                                }}
                            />
                        </div>
                    </div>
                    <div className={reverse ? "md:[direction:ltr]" : ""}>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{heading}</h3>
                        <div className="w-20 h-1 bg-orange-500 rounded-full mb-6"></div>
                        <div className="space-y-6">
                            {items.map((item, i) => (
                                <div key={i}>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AboutUs() {
    const sectionsRef = useRef([]);
    const [visibleSections, setVisibleSections] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setVisibleSections((prev) => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
            });
        }, { threshold: 0.05, rootMargin: "0px" });

        sectionsRef.current.forEach((section) => { if (section) observer.observe(section); });
        return () => { sectionsRef.current.forEach((section) => { if (section) observer.unobserve(section); }); };
    }, []);

    const registerRef = (index) => (el) => { sectionsRef.current[index] = el; };

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="About Us | Globaq"
                description="Globaq KSA is an ISO 9001 quality management consulting company based in the Dammam/Khobar corridor, helping businesses across Saudi Arabia's Eastern Province build quality management systems that work."
                path="/AboutUs"
            />

            <PageSchema
                id="page-schema-about"
                data={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    name: "About Us | Globaq",
                    description: "Globaq KSA is an ISO 9001 quality management consulting company based in the Dammam/Khobar corridor, helping businesses across Saudi Arabia's Eastern Province build quality management systems that work.",
                    url: "https://globaqksa.com/AboutUs",
                    mainEntity: {
                        "@type": "Organization",
                        name: "GLOBAQ KSA",
                        url: "https://globaqksa.com",
                    },
                }}
            />

            <div className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                        Your ISO 9001 Quality Management Consulting Partner in the{" "}
                        <span className="text-orange-500">Eastern Province</span>
                    </h1>
                    <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                        Globaq KSA is an ISO 9001 quality management consulting company based in the Dammam/Khobar
                        corridor, helping businesses across Saudi Arabia's Eastern Province build quality management
                        systems that actually work, not just systems that pass an audit once and then gather dust.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        We work with manufacturing, construction, oil &amp; gas service, trading, and professional
                        services companies that need ISO 9001 certification to qualify for government tenders, Saudi
                        Aramco vendor registration, and corporate supply chain requirements. Our approach is
                        practical: we design your Quality Management System (QMS) around how your business actually
                        operates, then guide you through implementation, internal audits, and certification body
                        assessment step by step.
                    </p>
                </div>
            </div>

            <div id="what-we-do-intro" ref={registerRef(0)} className={`pt-16 md:pt-20 px-4 md:px-8 transition-all duration-1000 ${visibleSections["what-we-do-intro"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">What <span className="text-orange-500">We Do</span></h2>
                    <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto"></div>
                </div>
            </div>

            <ServiceGroup id="group-consultancy" heading="ISO Consultancy" image={groupImages.consultancy} imageAlt="ISO consultant reviewing quality management documentation with a client" items={consultancyItems} visible={!!visibleSections["group-consultancy"]} setRef={registerRef(1)} />
            <ServiceGroup id="group-audits" heading="Audits & Assessments" image={groupImages.audits} imageAlt="Auditor conducting a management system audit on an industrial site" items={auditItems} reverse visible={!!visibleSections["group-audits"]} setRef={registerRef(2)} />
            <ServiceGroup id="group-aramco" heading="Saudi Aramco & Safety Compliance" image={groupImages.aramco} imageAlt="Safety inspector reviewing contractor compliance at an oil and gas facility" items={aramcoItems} visible={!!visibleSections["group-aramco"]} setRef={registerRef(3)} />

            <div id="trainings" ref={registerRef(4)} className={`py-16 md:py-20 px-4 md:px-8 bg-gray-50 transition-all duration-1000 ${visibleSections["trainings"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Trainings</h2>
                        <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">We deliver practical, job relevant training so your team owns the system rather than depending entirely on outside consultants.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {trainings.map((t, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100">
                                <div className="w-8 h-8 flex-shrink-0 bg-orange-500 rounded-full flex items-center justify-center"><span className="text-white text-sm">✓</span></div>
                                <span className="text-gray-700 font-medium">{t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="why-us" ref={registerRef(5)} className={`py-16 md:py-20 px-4 md:px-8 transition-all duration-1000 ${visibleSections["why-us"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Companies in Dammam and Khobar <span className="text-orange-500">Choose Us</span></h2>
                        <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto"></div>
                    </div>
                    <div className="space-y-6">
                        {whyUs.map((item, i) => (
                            <div key={i} className="border-l-4 border-orange-500 pl-6 py-2">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="mission" ref={registerRef(6)} className={`py-16 md:py-20 px-4 md:px-8 transition-all duration-1000 ${visibleSections["mission"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 md:p-14 shadow-2xl text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-lg md:text-xl leading-relaxed opacity-95 mb-8">
                            To make ISO 9001 quality management consulting accessible, practical, and results driven
                            for businesses across Dammam, Khobar, and the wider Eastern Province, helping our clients
                            win tenders, qualify as vendors, and build a genuine culture of quality.
                        </p>
                        <p className="text-lg italic opacity-90 mb-8">Ready to start your ISO 9001 certification journey? Contact Globaq KSA today for a consultation.</p>
                        <Link to="/ContactUs" className="inline-block bg-white text-orange-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">Get in Touch</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;