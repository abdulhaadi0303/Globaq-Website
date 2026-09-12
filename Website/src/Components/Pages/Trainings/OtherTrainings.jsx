import "../../styles/routes.css";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

function OtherTrainings() {
    return (
        <div className="page-container">
            <SEO
                title="Other Trainings | Globaq"
                description="Training programs beyond ISO standards, including Six Sigma, Lean, 5S, ESG, HACCP, HIRAC, and Saudi Aramco-specific awareness training."
                path="/Trainings/OtherTrainings"
            />

            <PageSchema
                id="page-schema-service"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: "Other Trainings",
                    description: "Training programs beyond ISO standards, including Six Sigma, Lean, 5S, ESG, HACCP, HIRAC, and Saudi Aramco-specific awareness training.",
                    provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
                    areaServed: { "@type": "Country", name: "Saudi Arabia" },
                    url: "https://globaqksa.com/Trainings/OtherTrainings",
                }}
            />

            <div className="textbox">
                <h1>Other Trainings</h1>
                <p>
                    Beyond ISO standards, GLOBAQ offers a diverse portfolio of training programs designed to 
                    enhance organizational performance and sustainability across a range of disciplines. These include, 
                    but not limited to:
                </p>
                <ul>
                    <li>Six Sigma Training</li>
                    <li>Lean Six Sigma Training</li>
                    <li>5S Training</li>
                    <li>Environmental, Social and Governance (ESG) Training</li>
                    <li>UN Sustainable Development Goals (SDGs) Awareness Training</li>
                    <li>Circular Economy Awareness Training</li>
                    <li>Risk Assessment Training</li>
                    <li>Root Cause Analysis Training</li>
                    <li>Hazard Analysis & Critical Control Points (HACCP) Awareness Training</li>
                    <li>Hazard Identification, Risk Assessment and Control (HIRAC) Training</li>
                    <li>Saudi Aramco Schedule Q Awareness Training</li>
                    <li>Saudi Aramco Schedule D Awareness Training</li>
                    <li>Saudi Aramco Construction Safety Manual (CSM) Awareness Training</li>
                    <li>Saudi Aramco Contractor Safety Administrative Requirements (CSAR) Awareness Training</li>
                    <li>Saudi Aramco Work Site Safety Manual (WSSM) Awareness Training</li>
                </ul>
            </div>
        </div>
    );
}

export default OtherTrainings;
