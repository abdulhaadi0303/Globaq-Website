import "../../styles/routes.css";

function Training() {
    return (
        <div className="page-container">
            <div className="textbox">
                <h1>Training</h1>
                <p>
                    GLOBAQ offers Laboratory QMS specific training courses which include:
                </p>
                <ul>
                    <li><a href="#awareness-training">ISO/IEC 17025:2017 Awareness Training</a></li>
                    <li><a href="#internal-auditor-training">ISO/IEC 17025:2017 Internal Auditor Training</a></li>
                    <li><a href="#measurement-uncertainty-training">Measurement Uncertainty Training</a></li>
                    <li><a href="#proficiency-testing-training">Proficiency Testing Training</a></li>
                    <li><a href="#risk-assessment-training">Risk Assessment Training</a></li>
                    <li><a href="#root-cause-analysis-training">Root Cause Analysis Training</a></li>
                </ul>
                
                <h2 id="awareness-training">ISO/IEC 17025:2017 Awareness Training</h2>
                <p>
                    This awareness training course introduces the International Organization for Standardization (ISO),
                    its structure, and the core principles of ISO Management Systems and ISO/IEC 17025:2017 standard.
                    Led by experienced trainers, these courses provide participants with a solid understanding of the standard upon completion.
                </p>
                
                <h2 id="internal-auditor-training">ISO/IEC 17025:2017 Internal Auditor Training</h2>
                <p>
                    Internal audits are critical for maintaining and improving the ISO/IEC 17025:2017 management system.
                    GLOBAQ provides a two-day internal auditor training program focusing on standard requirements and auditing skills
                    based on ISO 19011:2018 guidelines using case studies and tutorials.
                </p>
                
                <h2 id="measurement-uncertainty-training">Measurement Uncertainty Training</h2>
                <p>
                    This course is designed for laboratory personnel involved in measurement uncertainty analysis to achieve
                    and maintain compliance with ISO/IEC 17025:2017. Participants will gain a deep understanding of uncertainty estimation,
                    best practices, and various uncertainty types, reinforced through case studies and practical exercises.
                </p>
                
                <h2 id="proficiency-testing-training">Proficiency Testing Training</h2>
                <p>
                    Proficiency testing (PT) validates a laboratory's technical competence under ISO/IEC 17025.
                    This course covers PT fundamentals, participation guidelines, result interpretation, corrective actions, and
                    maintaining an effective PT program.
                </p>
                
                <h2 id="risk-assessment-training">Risk Assessment Training</h2>
                <p>
                    ISO/IEC 17025:2017 emphasizes a risk-based approach to laboratory management.
                    This training equips participants with skills to proactively identify, assess, and mitigate risks to ensure compliance
                    and enhance laboratory performance.
                </p>
                
                <h2 id="root-cause-analysis-training">Root Cause Analysis Training</h2>
                <p>
                    This course provides a thorough understanding of Root Cause Analysis (RCA) and its role in driving improvements.
                    Participants will learn to identify and implement corrective actions to prevent recurrence, improving efficiency
                    and reducing operational disruptions.
                </p>
            </div>
        </div>
    );
}

export default Training;