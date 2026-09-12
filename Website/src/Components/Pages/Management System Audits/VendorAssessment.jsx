import "../../styles/routes.css";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

function VendorAssessment() {
    return (
        <div className="page-container">
            <SEO
                title="Vendor Assessment | Globaq"
                description="Supplier evaluation and vendor assessment services covering management systems, capability, capacity, and compliance to reduce onboarding risk."
                path="/MangementSystemAudits/VendorAssessment"
            />

            <PageSchema
                id="page-schema-service"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: "Vendor Assessment",
                    description: "Supplier evaluation and vendor assessment services covering management systems, capability, capacity, and compliance to reduce onboarding risk.",
                    provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
                    areaServed: { "@type": "Country", name: "Saudi Arabia" },
                    url: "https://globaqksa.com/MangementSystemAudits/VendorAssessment",
                }}
            />

            <div className="textbox">
                <h1>Vendor Assessment</h1>
                <p>
                    Managing supplier relationships is key to sustained success. Supplier audits are a critical and
                    often mandatory part of ISO management standards, ensuring product and service quality.
                </p>
                <p>
                    Our supplier evaluation and assessment services reduce risks and inefficiencies in vendor
                    onboarding and ongoing supplier management. We provide comprehensive assessments of
                    supplier management systems, capabilities, capacity, competency, and compliance, enabling
                    faster approvals, a better understanding of supplier needs, and effective risk mitigation. 
                 </p>
                 <p>
                    We help
                    organizations select suppliers based on defined criteria beyond price, and conduct on-site
                    audits for initial selection and ongoing performance evaluation.
                </p>
            </div>
        </div>
    );
}

export default VendorAssessment;
