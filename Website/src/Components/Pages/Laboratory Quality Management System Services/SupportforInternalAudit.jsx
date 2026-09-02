import "../../styles/routes.css";
import SEO from "../../SEO";

function InternalAuditSupport() {
    return (
        <div className="page-container">
            <SEO
                title="Laboratory QMS Internal Audit Support | Globaq"
                description="Collaborative internal audit support for laboratories, with on-the-job training to build independent internal audit capability."
                path="/LaboratoryQualityManagementSystemServices/SupportforInternalAudit"
            />
            <div className="textbox">
                <h1>Support for Internal Audit</h1>
                <p>
                    GLOBAQ encourages clients to develop their own internal audit capabilities. While we support this goal through training and mentoring, we also offer internal audit services, providing expert auditors to assess your system.
                </p>
                <p>
                    Our approach involves collaborative audits, where our experts work alongside your team, providing on-the-job training in audit techniques. This hands-on experience empowers your internal auditors to confidently conduct audits independently in the future.
                </p>
            </div>
        </div>
    );
}

export default InternalAuditSupport;
