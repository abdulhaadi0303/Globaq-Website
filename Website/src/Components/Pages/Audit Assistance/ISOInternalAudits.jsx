import "../../styles/routes.css";
import SEO from "../../SEO";

function ISOInternalAudits() {
    return (
        <div className="page-container">
            <SEO
                title="ISO Internal Audits | Globaq"
                description="ISO internal audit services from Globaq, including collaborative audits and on-the-job training for your internal audit team."
                path="/AuditAssistance/ISOInternalAudits"
            />
            <div className="textbox">
                <h1>ISO Internal Audits</h1>
                <p>
                    GLOBAQ encourages clients to develop their own internal audit capabilities. While we support
                    this goal through training and mentoring, we also offer internal audit services, providing expert
                    auditors to assess your system.
                </p>
                <p>
                    Our approach involves collaborative audits, where our experts work alongside your team,
                    providing on-the-job training in audit techniques. This hands-on experience empowers your
                    internal auditors to confidently conduct audits independently in the future.
                </p>
                <p>
                    We provide assistance programs for various management systems, including Quality,
                    Environment, Occupational Health and Safety, Food Safety, Laboratory Quality Management
                    System, Integrated Management Systems, etc.
                </p>
            </div>
        </div>
    );
}

export default ISOInternalAudits;
