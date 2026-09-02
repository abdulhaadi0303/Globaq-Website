import "../../styles/routes.css";
import SEO from "../../SEO";

function ScheduleD() {
    return (
        <div className="page-container">
            <SEO
                title="Schedule D - Safety Assessment | Globaq"
                description="Independent third-party safety assessments for Saudi Aramco contractors, as required under Schedule D, CSM, and CSAR. GLOBAQ Aramco-qualified auditors deliver both Schedule Q and Schedule D assessments."
                path="/MangementSystemAudits/ScheduleDSafetyAssessment"
            />
            <div className="textbox">
                <h1>Schedule D - Safety Assessment</h1>
                <p>
                    Saudi Aramco contractors are required to implement and maintain project-specific safety and
                    environmental management systems, as detailed in Schedule D of their contracts, and comply
                    with other requirements like CSM, CSAR. Independent third-party safety assessments, as
                    specified in Schedule D, are also mandatory. GLOBAQ Aramco-qualified auditors possess the
                    competence and experience to conduct both quality (Schedule Q) and safety (Schedule D)
                    assessments. Our team has a proven track record of successful project audits throughout Saudi
                    Arabia.
                </p>
            </div>
        </div>
    );
}

export default ScheduleD;
