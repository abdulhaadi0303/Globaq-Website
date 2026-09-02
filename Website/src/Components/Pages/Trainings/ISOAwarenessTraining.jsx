import "../../styles/routes.css";
import SEO from "../../SEO";

function ISOAwarenessTraining() {
    return (
        <div className="page-container">
            <SEO
                title="ISO Awareness Training | Globaq"
                description="ISO awareness training courses covering ISO 9001, ISO 14001, ISO 45001, ISO/IEC 17025, and other key management system standards."
                path="/Trainings/ISOTrainings/ISOAwarenessTraining"
            />
            <div className="textbox">
                <h1>ISO Awareness Training</h1>
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
            </div>
        </div>
    );
}

export default ISOAwarenessTraining;
