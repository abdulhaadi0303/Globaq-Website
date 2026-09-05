import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

// Group images — see notes below the code for exactly what to source for each
const groupImages = {
    consultancy: "/consultancy.jpg",
    audits: "/audit.jpg",
    aramco: "/aramco-safety.jpg",
};

const consultancyItems = [
    {
        title: "ISO Consultancy",
        text: "ISO 9001 consulting for quality management, from gap analysis to certification. We create a Quality Management System aligned with ISO 9001:2015 based on how your business operates. Then we support you during Stage 1 and Stage 2 audits.",
    },
    {
        title: "ISO/IEC 17025 Consultancy and Accreditation Support",
        text: "Expert guidance for laboratories seeking ISO/IEC 17025 accreditation, including technical competence, requirements of the management system, and accreditation body relations.",
    },
    {
        title: "ISO/IEC 17020 Consultancy and Accreditation Support",
        text: "Expert guidance for inspection bodies seeking ISO/IEC 17020 accreditation. Covers impartiality, competency, and process requirements.",
    },
];

const auditItems = [
    {
        title: "Management System Audits",
        text: "Experienced auditors will conduct an independent audit of your management system, to ensure it is compliant and ready for certification by external bodies or client reviews. They know what certification agencies and clients want.",
    },
    {
        title: "Quality Assessments",
        text: "Review your documentation, quality processes and controls in depth to identify any gaps, risks and areas for improvement. This is done before you hire an outside party.",
    },
    {
        title: "3rd Party Internal Audits",
        text: "Third-party audits on your behalf, conducted by an independent third party. This gives you an unbiased, defensible assessment of the performance of your system before certification or client audits.",
    },
    {
        title: "Audit Assistance",
        text: "Hands-on support is available before, during and after certification audits and surveillance audits so that your team doesn't have to navigate the process alone.",
    },
];

const aramcoItems = [
    {
        title: "Schedule Q Audits",
        text: "Prepare and support Saudi Aramco Schedule Q audit requirements. This includes quality management system protocols and documentation, management responsibility and project execution controls, which Aramco vendors and contractors must demonstrate.",
    },
    {
        title: "Schedule D Audits",
        text: "Support for Saudi Aramco Schedule D audit requirements. Helping contractors align safety and project implementation controls with Aramco expectations.",
    },
    {
        title: "CSSP Reviews",
        text: "Contractor Safety Systems Program reviews are conducted to ensure that Aramco vendors meet safety requirements and continue to be qualified.",
    },
    {
        title: "HSE Assessments",
        text: "Assessments of your operational and compliance risk in relation to Saudi and international HSE regulations.",
    },
    {
        title: "Safety Assessments",
        text: "Review of safety systems, site practices and procedures. This will help you to close any gaps that may exist before they become incidents, nonconformances or lost tenders.",
    },
];

const trainings = [
    "ISO trainings",
    "Lead auditor trainings",
    "Internal auditor trainings",
    "Implementation trainings",
    "Awareness trainings",
    "Foundation courses",
    "Transition courses",
    "Business improvement trainings",
    "Six Sigma trainings",
    "Root cause analysis trainings",
];

const whyUs = [
    {
        title: "Local presence, local understanding.",
        text: "Local presence and understanding of Saudi Aramco's and Eastern Province industrial client expectations.",
    },
    {
        title: "Practical, not theoretical.",
        text: "Not just paperwork, but practical systems that your team can follow every day.",
    },
    {
        title: "Full cycle support.",
        text: "Support for the entire cycle, from gap analysis to certification and all subsequent surveillance audits.",
    },
    {
        title: "Aramco-specific expertise",
        text: 'Expertise in Aramco specific requirements (Schedule Q, Schedule D, CSSP), alongside ISO standard consultancy.',
    },
];

// Reusable zigzag image/text row for a group of related services
function ServiceGroup({ id, heading, image, imageAlt, items, reverse, visible, setRef }) {
    return (
        <div
            id={id}
            ref={setRef}
            className={`py-16 md:py-20 px-4 md:px-8 transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <div className="max-w-6xl mx-auto">
                <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? "md:[direction:rtl]" : ""}`}>
                    <div className={reverse ? "md:[direction:ltr]" : ""}>
                        <div className="w-full h-64 md:h-100 rounded-3xl shadow-xl overflow-hidden bg-gradient-to-br from-orange-100 to-gray-100">
                            <img
                                src={image}
                                alt={imageAlt}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = "none";
                                    e.target.parentElement.classList.add("flex", "items-center", "justify-center");
                                    e.target.parentElement.innerHTML +=
                                        '<span style="font-size:3rem">🏗️</span>';
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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setVisibleSections((prev) => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting,
                    }));
                });
            },
            { threshold: 0.05, rootMargin: "0px" }
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

    const registerRef = (index) => (el) => {
        sectionsRef.current[index] = el;
    };

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="About Us | Globaq"
                description="Globaq KSA offers comprehensive ISO 9001 quality management services, including management system audits and assessments, HSE and Safety Assessments, Aramco Vendor Compliance Support, and professional Training for businesses in the Eastern Province. Our consultants will guide you step-by-step through the process of getting certified, preparing for an Aramco Schedule Q or Schedule D audit, and training your team."
                path="/AboutUs"
            />

            {/* Hero */}
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

            {/* Our Process */}
<div
    id="process"
    ref={registerRef(7)}
    className={`py-16 md:py-20 px-4 md:px-8 bg-gray-50 transition-all duration-1000 ${
        visibleSections["process"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
>
    <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                What <span className="text-orange-500">We Do</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto"></div>
        </div>
        <div className="space-y-8">
            {[
                {
                    title: "Understanding your business",
                    text: "We begin by comparing the gap between your business and Aramco's schedule or relevant standards.",
                },
                {
                    title: "Build the system",
                    text: "We create documentation, processes and controls that are tailored to the way your team works.",
                },
                {
                    title: "Train your staff",
                    text: "We offer awareness, internal audit, or lead auditor courses so that your staff is able to operate and maintain the systems.",
                },
                {
                    title: "Prepare for the audit",
                    text: "Audits are conducted by both internal and external auditors to identify any gaps.",
                },
                {
                    title: "Support certification",
                    text: "We stay with you through every stage of certification and ongoing surveillance audits.",
                },
            ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center shadow-md">
                        {i + 1}
                    </div>
                    <div className="pt-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

            {/* What We Do Offer*/}
            <div
                id="what-we-do-intro"
                ref={registerRef(0)}
                className={`pt-16 md:pt-20 px-4 md:px-8 transition-all duration-1000 ${
                    visibleSections["what-we-do-intro"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                        What <span className="text-orange-500">We Offer</span>
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto"></div>
                </div>
            </div>

            <ServiceGroup
                id="group-consultancy"
                heading="ISO Consultancy"
                image={groupImages.consultancy}
                imageAlt="ISO consultant reviewing quality management documentation with a client"
                items={consultancyItems}
                visible={!!visibleSections["group-consultancy"]}
                setRef={registerRef(1)}
            />

            <ServiceGroup
                id="group-audits"
                heading="Audits & Assessments"
                image={groupImages.audits}
                imageAlt="Auditor conducting a management system audit on an industrial site"
                items={auditItems}
                reverse
                visible={!!visibleSections["group-audits"]}
                setRef={registerRef(2)}
            />

            <ServiceGroup
                id="group-aramco"
                heading="Saudi Aramco & Safety Compliance"
                image={groupImages.aramco}
                imageAlt="Safety inspector reviewing contractor compliance at an oil and gas facility"
                items={aramcoItems}
                visible={!!visibleSections["group-aramco"]}
                setRef={registerRef(3)}
            />

            {/* Trainings */}
            <div
                id="trainings"
                ref={registerRef(4)}
                className={`py-16 md:py-20 px-4 md:px-8 bg-gray-50 transition-all duration-1000 ${
                    visibleSections["trainings"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Trainings</h2>
                        <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We deliver practical, job relevant training so your team owns the system rather than
                            depending entirely on outside consultants.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {trainings.map((t, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100"
                            >
                                <div className="w-8 h-8 flex-shrink-0 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <span className="text-gray-700 font-medium">{t}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div
                id="why-us"
                ref={registerRef(5)}
                className={`py-16 md:py-20 px-4 md:px-8 transition-all duration-1000 ${
                    visibleSections["why-us"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Why Companies in Dammam and Khobar <span className="text-orange-500">Choose Us</span>
                        </h2>
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

            {/* Mission / CTA */}
            <div
                id="mission"
                ref={registerRef(6)}
                className={`py-16 md:py-20 px-4 md:px-8 transition-all duration-1000 ${
                    visibleSections["mission"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 md:p-14 shadow-2xl text-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-lg md:text-xl leading-relaxed opacity-95 mb-8">
                            To make ISO 9001 quality management consulting accessible, practical, and results driven
                            for businesses across Dammam, Khobar, and the wider Eastern Province, helping our clients
                            win tenders, qualify as vendors, and build a genuine culture of quality.
                        </p>
                        <p className="text-lg italic opacity-90 mb-8">
                            Ready to start your ISO 9001 certification journey? Contact Globaq KSA today for a
                            consultation.
                        </p>
                        <Link
                            to="/ContactUs"
                            className="inline-block bg-white text-orange-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;