import "../Components/styles/routes.css";

function AboutUs() {
    return (
        <div className="page-container">
            {/* Text Box 1: Introduction */}
            <div className="textbox">
                <h1 className="Exception">Introduction</h1>
                <p>
                    Global Quality Specialists Company Limited (GLOBAQ) is a fast-growing organization emerging
                    as a trusted name in the conformance and compliance industry.
                </p>
                <p>
                    We are dedicated to delivering excellence in quality assurance solutions, helping businesses
                    navigate the complexities of compliance while driving operational efficiency and sustainability,
                    contributing to the realization of Saudi Vision 2030 goals of a diversified and thriving economy.
                </p>
                <p>
                    With a strong commitment to professionalism, accuracy, and customer satisfaction, we empower
                    organizations to achieve their goals and contribute to a sustainable future, aligned with Vision
                    2030 of the Kingdom of Saudi Arabia.
                </p>
            </div>

            {/* Text Box 2: Who We Are */}
            <div className="textbox">
                <h1 className="Exception">Who We Are</h1>
                <p>
                    At GLOBAQ, we are a team of passionate and skilled professionals with deep expertise in
                    quality management, compliance, health and safety, and sustainability.
                </p>
                <p>
                    We have established ourselves as a reliable partner for businesses seeking innovative and
                    effective solutions.
                </p>
                <p>
                    Our foundation is built on integrity, innovation, and a customer-centric approach, enabling us to
                    deliver tailored services that meet the unique needs of our clients across diverse sectors,
                    supporting the diversification goals of Vision 2030.
                </p>
            </div>

            {/* Text Box 3: What We Do */}
            <div className="textbox">
                <h1 className="Exception">What We Do</h1>
                <p>
                    GLOBAQ specializes in providing comprehensive quality assurance solutions designed to
                    simplify compliance processes and enhance organizational performance. We work closely with
                    our clients to understand their challenges and deliver practical, efficient, and timely solutions
                    that align with international standards and regulations.
                </p>
                <p>
                    Our services support the growth and development of various sectors, a key objective of Vision
                    2030.
                </p>
                <p>
                    <strong>Our major services include:</strong>
                </p>
                <ul>
                    <li>Management System Audits (Vendor Assessments, Schedule Q - Quality Assessments,
                        Schedule D - Safety Assessments, and Management System Certification Audits)</li>
                    <li>Trainings (ISO Trainings, QHSE trainings, and other industry-specific trainings)</li>
                    <li>ISO Consultancy</li>
                    <li>Audit Assistance (ISO Internal audits, ISO third-party audits, Pre-Qualification audits)</li>
                    <li>Laboratory Quality Management System Services (ISO/IEC 17025 Consultancy,
                        Support for the accreditation process)</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutUs;