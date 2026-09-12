import "../../styles/routes.css";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

function InternalAuditTraining() {
    return (
        <div className="page-container">
            <SEO
                title="Internal Audit Training | Globaq"
                description="Two-day internal auditor training programs covering Quality, Environmental, OH&S, Food Safety, and Laboratory Quality Management Systems."
                path="/Trainings/ISOTrainings/InternalAuditTraining"
            />
            <PageSchema
                id="page-schema-service"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: "Internal Audit Training",
                    description: "Two-day internal auditor training programs covering Quality, Environmental, OH&S, Food Safety, and Laboratory Quality Management Systems.",
                    provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
                    areaServed: { "@type": "Country", name: "Saudi Arabia" },
                    url: "https://globaqksa.com/Trainings/ISOTrainings/InternalAuditTraining",
                }}
            />

            <div className="textbox">
                <h1>Internal Audit Training</h1>
                <p>
                    Internal audits are critical for the maintenance and continual improvement of management
                    systems. Competent auditors are essential for effective internal audits, which, in turn, contribute
                    to successful external audits.
                </p>
                <p>
                    GLOBAQ provides two-day internal auditor training programs for various management systems,
                    including Quality, Environment, Occupational Health and Safety, Food Safety, Laboratory
                    Quality Management System, Integrated Management Systems, etc. Our training focuses on
                    standard requirements and auditing skills, using case studies and tutorials to develop competent
                    internal auditors.
                </p>
                <p>Currently, we offer internal audit training for the following standards:</p>
                <ul>
                    <li>ISO/IEC 17025:2017</li>
                    <li>ISO/IEC 17020:2012</li>
                    <li>ISO 9001:2015</li>
                    <li>ISO 14001:2015</li>
                    <li>ISO 45001:2018</li>
                    <li>ISO 22000:2018</li>
                </ul>
            </div>
        </div>
    );
}

export default InternalAuditTraining;
