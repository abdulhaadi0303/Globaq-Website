import "../../styles/routes.css";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

function ISOConsultancy() {
    return (
        <div className="page-container">
            <SEO
                title="Laboratory QMS Consultancy | Globaq"
                description="ISO/IEC 17025:2017 consultancy services helping laboratories achieve accreditation, from system implementation to final accreditation application."
                path="/LaboratoryQualityManagementSystemServices/Consultancy"
            />

            <PageSchema
                id="page-schema-service"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: "Laboratory QMS Consultancy",
                    description: "ISO/IEC 17025:2017 consultancy services helping laboratories achieve accreditation, from system implementation to final accreditation application.",
                    provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
                    areaServed: { "@type": "Country", name: "Saudi Arabia" },
                    url: "https://globaqksa.com/LaboratoryQualityManagementSystemServices/Consultancy",
                }}
            />

            <div className="textbox">
                <h1>Consultancy</h1>
                <p>
                    ISO/IEC 17025:2017 is the globally recognized standard for testing and calibration laboratories.
                    The certification is very important for laboratories as well as industries or organizations that
                    produce testing and calibration results such as health, electronics, construction, and
                    engineering.
                </p>
                <p>
                    There is a good reason why most clients are able to trust the services provided by a calibration
                    laboratory with this accreditation. On one hand, they have highly qualified employees; on the other
                    hand, they possess the latest equipment and advanced technical assistance. Since the certified
                    laboratories are enlisted in the Directory of Accredited Laboratories, clients can easily identify
                    the laboratories accredited. Resultantly, the number of clients increases rapidly, generating more
                    and more revenues.
                </p>
                <p>
                    Laboratories use ISO/IEC 17025 to implement a quality system aimed at improving their ability
                    to consistently produce valid results. It is also the basis for accreditation from an accreditation
                    body. Since the standard is about competence, accreditation is simply formal recognition of a
                    demonstration of that competence.
                </p>
                <p>
                    GLOBAQ consultancy services help laboratories achieve accreditation through an accreditation
                    body. We tailor a 17025-compliant system to your existing practices, identifying and resolving
                    non-conformities. Our pre-assessment audit ensures your readiness for the accreditation body's
                    evaluation. We provide comprehensive support throughout the entire process, from initial
                    assessment and system implementation to finally applying for accreditation on your behalf. We
                    then assist you in closing any accreditation audit findings and help you achieve accreditation.
                </p>
            </div>
        </div>
    );
}

export default ISOConsultancy;
