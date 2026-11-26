// Reuse the saved ISO course content until the Lead Auditor page is released.
import "../../../styles/routes.css";
import SEO from "../../../SEO";
import PageSchema from "../../../PageSchema";

const pagePath = "/services/trainings/iso-lead-auditor-training/";
const description = "ISO Implementation Training, ISO Awareness Training, Internal Audit Training";

export default function ISOLeadAuditorTraining() {
    return (
        <div className="page-container">
            <SEO title="ISO Trainings | Globaq" description={description} path={pagePath} />
            <PageSchema
                id="page-schema-service"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: "ISO Trainings",
                    description,
                    provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
                    areaServed: { "@type": "Country", name: "Saudi Arabia" },
                    url: `https://globaqksa.com${pagePath}`,
                }}
            />
            <h1>ISO Trainings</h1>
            <section className="textbox">
                <h2 className="mb-6 text-3xl font-extrabold">ISO Implementation Training</h2>
                <p>
                    Knowing the requirements of an ISO standard is only the first step; successful implementation
                    requires practical application. GLOBAQ implementation training provides the hands-on
                    experience and guidance necessary to effectively integrate the standard into your operations.
                </p>
                <p>
                    We offer comprehensive ISO training, from awareness to implementation for the following
                    standards:
                </p>
                <ul>
                    <li>ISO/IEC 17025:2017</li>
                    <li>ISO/IEC 17020:2012</li>
                    <li>ISO 9001:2015</li>
                    <li>ISO 14001:2015</li>
                    <li>ISO 45001:2018</li>
                    <li>ISO 22000:2018</li>
                    <li>ISO 55001:2014</li>
                    <li>ISO 31000:2018</li>
                    <li>ISO 59004:2024</li>
                    <li>ISO 59010:2024</li>
                    <li>ISO 59020:2024</li>
                </ul>
            </section>
            <section className="textbox">
                <h2 className="mb-6 text-3xl font-extrabold">ISO Awareness Training</h2>
                <p>
                    Our awareness training courses introduce the International Organization for Standardization
                    (ISO), its structure, and the core principles of ISO Management Systems and related standards.
                    Led by experienced trainers, these courses provide participants with a solid understanding of
                    the specific management standard upon completion.
                </p>
                <p>We offer awareness training for the following standards:</p>
                <ul>
                    <li>ISO/IEC 17025:2017</li>
                    <li>ISO/IEC 17020:2012</li>
                    <li>ISO 9001:2015</li>
                    <li>ISO 14001:2015</li>
                    <li>ISO 45001:2018</li>
                    <li>ISO 22000:2018</li>
                    <li>ISO 55001:2014</li>
                    <li>ISO 31000:2018</li>
                    <li>ISO 59004:2024</li>
                    <li>ISO 59010:2024</li>
                    <li>ISO 59020:2024</li>
                </ul>
            </section>
            <section className="textbox">
                <h2 className="mb-6 text-3xl font-extrabold">Internal Audit Training</h2>
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
            </section>
        </div>
    );
}
