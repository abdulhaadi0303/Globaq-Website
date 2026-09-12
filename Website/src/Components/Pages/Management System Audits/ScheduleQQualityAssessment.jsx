import "../../styles/routes.css";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

function ScheduleQ() {
    return (
        <div className="page-container">
            <SEO
                title="Schedule Q - Quality Assessment | Globaq"
                description="Independent quality assessments at 15% and 60% project completion milestones, ensuring contractor compliance with Saudi Aramco Schedule Q requirements."
                path="/MangementSystemAudits/ScheduleQQualityAssessment"
            />
            <PageSchema
                id="page-schema-service"
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: "Schedule Q - Quality Assessment",
                    description: "Independent quality assessments at 15% and 60% project completion milestones, ensuring contractor compliance with Saudi Aramco Schedule Q requirements.",
                    provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
                    areaServed: { "@type": "Country", name: "Saudi Arabia" },
                    url: "https://globaqksa.com/MangementSystemAudits/ScheduleQQualityAssessment",
                }}
            />

            <div className="textbox">
                <h1>Schedule Q - Quality Assessment</h1>
                <p>
                    Saudi Aramco mandates quality assessments at key project milestones. Design, procurement,
                    and construction processes are subject to independent audits at both 15% and 60% project
                    completion. These assessments ensure contractor compliance with project-specific
                    requirements defined in the contract schedules. Our Schedule Q Saudi Aramco assessment
                    services.
                </p>
            </div>
        </div>
    );
}

export default ScheduleQ;
