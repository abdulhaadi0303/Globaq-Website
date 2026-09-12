import "../../styles/routes.css";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

function ImplementationSupport() {
    return (
        <div className="page-container">
            <SEO
                title="Laboratory QMS Implementation Support | Globaq"
                description="Hands-on ISO/IEC 17025:2017 implementation support and training, from awareness to full management system implementation."
                path="/LaboratoryQualityManagementSystemServices/ImplementationSupport"
            />

            <PageSchema
                id="page-schema-service"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: "Laboratory QMS Implementation Support",
                    description: "Hands-on ISO/IEC 17025:2017 implementation support and training, from awareness to full management system implementation.",
                    provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
                    areaServed: { "@type": "Country", name: "Saudi Arabia" },
                    url: "https://globaqksa.com/LaboratoryQualityManagementSystemServices/ImplementationSupport",
                }}
            />


            <div className="textbox">
                <h1>Implementation Support</h1>
                <p>
                    Knowing the requirements of an ISO standard is only the first step; successful implementation requires practical application. GLOBAQ implementation training provides the hands-on experience and guidance necessary to effectively integrate the standard into your operations.
                </p>
                <p>
                    We offer comprehensive support and training for ISO/IEC 17025:2017 from awareness to implementation, ensuring that your management system implementation is achieved and well maintained.
                </p>
            </div>
        </div>
    );
}

export default ImplementationSupport;
