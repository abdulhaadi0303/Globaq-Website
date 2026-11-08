/* eslint-disable react/prop-types -- Presentational helpers use the unchanged local page content. */
import { useEffect, useRef, useId, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

const page = {
  "title": "Project Quality Assessment Services in Saudi Arabia",
  "metaTitle": "Project Quality Assessment & Schedule Q Audits Saudi Arabia",
  "description": "GLOBAQ provides independent project quality assessments and Saudi Aramco Schedule Q audits in Saudi Arabia through Aramco-approved auditors.",
  "path": "/services/management-system-audits-saudi-arabia/project-quality-assessments/",
  "label": "Project Quality Assessments",
  "sections": [
    {
      "title": "Independent Project Quality Audits and Saudi Aramco Schedule Q Assessments",
      "id": "independent-project-quality-audits-and-saudi-aramco-schedule-q-assessments",
      "intro": [
        {
          "type": "p",
          "text": "Improve project quality performance, identify compliance gaps and strengthen quality management controls with GLOBAQ's independent project quality assessment services in Saudi Arabia."
        },
        {
          "type": "p",
          "text": "We support project owners, contractors and Engineering, Procurement and Construction (EPC) organisations through evidence-based quality assurance audits, including Saudi Aramco Schedule Q assessments conducted by Aramco-approved auditors."
        },
        {
          "type": "p",
          "text": "Our assessments evaluate quality management implementation across relevant project activities, helping organisations verify compliance with contractual quality requirements and address identified nonconformities."
        },
        {
          "type": "cta",
          "text": "Discuss Your Project Quality Assessment"
        }
      ],
      "cards": []
    },
    {
      "title": "Independent Project Quality Assessments in Saudi Arabia",
      "id": "independent-project-quality-assessments-in-saudi-arabia",
      "intro": [
        {
          "type": "p",
          "text": "Maintaining project quality requires effective planning, documented procedures, consistent implementation and reliable monitoring throughout project execution. GLOBAQ (Global Quality Specialists Company Limited) provides independent project quality assessments to help organisations evaluate whether their quality management systems and project activities meet applicable contractual, technical and quality requirements."
        },
        {
          "type": "p",
          "text": "Our project quality and construction quality audits focus on the actual implementation of quality management processes across design, procurement and construction activities, rather than documentation alone."
        },
        {
          "type": "p",
          "text": "For Saudi Aramco projects, GLOBAQ's Aramco-approved auditors possess the competence and experience to conduct Quality Management System (QMS) audits under applicable Schedule Q requirements."
        },
        {
          "type": "p",
          "text": "Depending on project-specific contractual obligations, independent assessments may be conducted at defined milestones, such as 15%, 60% and 90% project completion, or through annual audits."
        },
        {
          "type": "p",
          "text": "With experience conducting project audits across Saudi Arabia, GLOBAQ helps contractors and project organisations identify weaknesses, document nonconformities and strengthen quality management performance throughout project execution."
        }
      ],
      "cards": []
    },
    {
      "title": "Our Project Quality Assessment Services",
      "id": "our-project-quality-assessment-services",
      "intro": [],
      "cards": [
        {
          "title": "Project Quality Management System Assessment",
          "blocks": [
            {
              "type": "p",
              "text": "We assess relevant project quality management controls, responsibilities, procedures and documented processes against agreed quality and contractual requirements."
            },
            {
              "type": "p",
              "text": "Our assessments examine how the project Quality Management System (QMS) is established and implemented, including the responsibilities and controls used to manage quality-related activities."
            },
            {
              "type": "p",
              "text": "The focus is on determining whether the project team is following defined quality requirements and maintaining appropriate evidence of implementation."
            }
          ]
        },
        {
          "title": "Quality Planning and Documentation Review",
          "blocks": [
            {
              "type": "p",
              "text": "Our auditors evaluate applicable project quality plans, procedures, records and supporting documentation to identify missing or inadequately implemented requirements."
            },
            {
              "type": "p",
              "text": "Depending on the agreed assessment scope, reviews may include the quality management documentation relevant to design, procurement and construction activities."
            },
            {
              "type": "p",
              "text": "The objective is to identify inconsistencies between documented quality arrangements, contractual obligations and the evidence available to demonstrate implementation."
            }
          ]
        },
        {
          "title": "Project Quality Compliance Assessment",
          "blocks": [
            {
              "type": "p",
              "text": "We examine relevant contractual and technical quality requirements and evaluate whether the project demonstrates appropriate implementation through objective evidence."
            },
            {
              "type": "p",
              "text": "For EPC projects, assessments focus on the quality obligations established in the applicable contract schedules and project specifications."
            },
            {
              "type": "p",
              "text": "For projects subject to Saudi Aramco Schedule Q, the audit criteria are aligned with the relevant contractual provisions and project-specific requirements."
            },
            {
              "type": "p",
              "text": "These assessments help contractors and project owners understand their current level of conformity and identify areas requiring corrective action."
            }
          ]
        },
        {
          "title": "Quality Implementation Verification",
          "blocks": [
            {
              "type": "p",
              "text": "Project quality assurance audits must establish whether documented controls are being applied during actual project activities."
            },
            {
              "type": "p",
              "text": "GLOBAQ evaluates implementation through document examination, personnel interviews, review of quality records and relevant project observations where applicable."
            },
            {
              "type": "p",
              "text": "Our assessments can examine implementation evidence associated with design, procurement and construction processes, depending on the project stage and agreed audit criteria."
            },
            {
              "type": "p",
              "text": "This helps identify differences between planned quality management arrangements and actual project practices."
            }
          ]
        },
        {
          "title": "Nonconformity Identification and Reporting",
          "blocks": [
            {
              "type": "p",
              "text": "We provide structured assessment findings highlighting nonconformities, implementation gaps and potential opportunities for improvement."
            },
            {
              "type": "p",
              "text": "Findings are evaluated against defined contractual or management system requirements and supported by relevant audit evidence."
            },
            {
              "type": "p",
              "text": "The resulting assessment information helps project teams determine where corrective action, improved quality controls or further verification may be necessary."
            }
          ]
        }
      ]
    },
    {
      "title": "Saudi Aramco Schedule Q Quality Assessment",
      "id": "saudi-aramco-schedule-q-quality-assessment",
      "intro": [
        {
          "type": "p",
          "text": "Saudi Aramco Schedule Q establishes contractual quality requirements for projects where these provisions are incorporated into the applicable contract. Contractors working under these requirements must implement relevant quality management arrangements and demonstrate conformity with the quality obligations applicable to their project activities."
        },
        {
          "type": "p",
          "text": "Independent quality assessments may be required at defined stages of project execution to verify the implementation of these arrangements."
        },
        {
          "type": "p",
          "text": "GLOBAQ provides Schedule Q quality assessments conducted by Aramco-approved auditors, with experience evaluating project quality management systems against applicable Saudi Aramco requirements."
        },
        {
          "type": "p",
          "text": "Our assessments examine quality management implementation across relevant design, procurement and construction activities, focusing on conformity with the project's contractual quality obligations."
        }
      ],
      "cards": [
        {
          "title": "What Does Our Schedule Q Assessment Cover?",
          "blocks": [
            {
              "type": "p",
              "text": "Applicable Schedule Q Requirements: Review of the relevant contractual quality obligations, project specifications and defined assessment criteria."
            },
            {
              "type": "p",
              "text": "Project Quality System Evaluation: Assessment of quality management processes, responsibilities, procedures and controls established for the project."
            },
            {
              "type": "p",
              "text": "Quality Plans and Records Review: Examination of applicable project quality plans, procedures, documented information and supporting quality management records."
            },
            {
              "type": "p",
              "text": "Design, Procurement and Construction Compliance: Evaluation of the quality management arrangements and implementation evidence associated with the relevant project activities."
            },
            {
              "type": "p",
              "text": "Implementation and Milestone Assessment: Verification of QMS implementation and objective evidence at contractual assessment milestones or other agreed stages of project execution."
            },
            {
              "type": "p",
              "text": "Nonconformity Identification: Identification and reporting of gaps, nonconformities and improvement opportunities against applicable Schedule Q and project-specific requirements."
            },
            {
              "type": "p",
              "text": "Corrective Action Support: Recommendations to help project teams address identified findings and strengthen quality management implementation."
            },
            {
              "type": "p",
              "text": "The assessment scope is established according to the relevant contract, project requirements and audit criteria rather than assuming every Saudi Aramco project is subject to identical provisions."
            }
          ]
        },
        {
          "title": "When Are Saudi Aramco Schedule Q Audits Conducted?",
          "blocks": [
            {
              "type": "p",
              "text": "Saudi Aramco Schedule Q quality assessments may be required at key stages of project execution."
            },
            {
              "type": "p",
              "text": "Depending on the applicable contract, independent quality assessments may be conducted at milestones such as:"
            },
            {
              "type": "p",
              "text": "● 15% Project Completion: Assessment of quality management implementation and relevant controls at an early project stage."
            },
            {
              "type": "p",
              "text": "● 60% Project Completion: Evaluation of quality management implementation and available compliance evidence during ongoing project execution."
            },
            {
              "type": "p",
              "text": "● 90% Project Completion: Assessment of relevant quality management arrangements and records at an advanced stage of project completion."
            },
            {
              "type": "p",
              "text": "● Annual Assessments: Periodic evaluations where annual quality audits are required by the applicable contractual arrangements."
            },
            {
              "type": "p",
              "text": "These milestones are examples of assessment stages identified in GLOBAQ's service portfolio. The actual audit frequency, timing and scope depend on the requirements established in the specific project contract."
            },
            {
              "type": "p",
              "text": "Learn More About Saudi Aramco Schedule Q Quality Assessments"
            }
          ]
        }
      ]
    },
    {
      "title": "Our Project Quality Assessment Process",
      "id": "our-project-quality-assessment-process",
      "intro": [],
      "cards": [
        {
          "title": "1. Requirement and Scope Review",
          "blocks": [
            {
              "type": "p",
              "text": "We establish the applicable project specifications, contractual quality obligations and assessment objectives."
            },
            {
              "type": "p",
              "text": "For Saudi Aramco Schedule Q assessments, this includes identifying the relevant Schedule Q provisions, project stage and contractual audit requirements."
            }
          ]
        },
        {
          "title": "2. Quality Documentation Assessment",
          "blocks": [
            {
              "type": "p",
              "text": "Relevant project quality plans, procedures, documented controls and supporting records are reviewed against the defined audit criteria."
            },
            {
              "type": "p",
              "text": "The review helps identify areas requiring further assessment and verification during the audit."
            }
          ]
        },
        {
          "title": "3. Quality Implementation Evaluation",
          "blocks": [
            {
              "type": "p",
              "text": "Our auditors examine objective evidence to evaluate whether project quality management processes are effectively implemented. Depending on the assessment scope, this includes reviewing relevant design, procurement and construction activities through records, interviews and project observations."
            }
          ]
        },
        {
          "title": "4. Assessment Reporting",
          "blocks": [
            {
              "type": "p",
              "text": "GLOBAQ documents identified quality gaps, relevant nonconformities and other assessment findings in a structured report."
            },
            {
              "type": "p",
              "text": "The findings are linked to applicable audit criteria and supporting evidence to help project teams understand the areas requiring attention."
            }
          ]
        },
        {
          "title": "5. Corrective Action Recommendations",
          "blocks": [
            {
              "type": "p",
              "text": "We provide recommendations to support the resolution of identified findings and improvement of project quality controls."
            },
            {
              "type": "p",
              "text": "Assessment outcomes help organisations prioritise corrective actions and strengthen quality management implementation during subsequent project activities or assessments."
            }
          ]
        }
      ]
    },
    {
      "title": "Benefits of Project Quality and Schedule Q Assessments",
      "id": "benefits-of-project-quality-and-schedule-q-assessments",
      "intro": [
        {
          "type": "p",
          "text": "Identify Quality Gaps Early: Recognise weaknesses in project QMS implementation, documentation and quality controls before they create further project challenges."
        },
        {
          "type": "p",
          "text": "Strengthen Contractual Compliance: Evaluate the implementation of applicable quality requirements, including Saudi Aramco Schedule Q provisions and project-specific contractual obligations."
        },
        {
          "type": "p",
          "text": "Improve Project Milestone Assessment Readiness: Support preparation for quality assessments at applicable project milestones, such as 15%, 60% and 90% completion, where required by the contract."
        },
        {
          "type": "p",
          "text": "Enhance Quality Management Controls: Identify opportunities to improve quality management processes across relevant design, procurement and construction activities."
        },
        {
          "type": "p",
          "text": "Support Corrective Action: Use documented assessment findings to address nonconformities, improve existing controls and reduce the likelihood of recurring quality management issues."
        }
      ],
      "cards": []
    },
    {
      "title": "Who Needs Project Quality Assessments?",
      "id": "who-needs-project-quality-assessments",
      "intro": [
        {
          "type": "p",
          "text": "Our project quality assessment services support EPC contractors, construction companies, project owners, quality assurance departments and organisations responsible for meeting defined project quality requirements. These services are particularly relevant to organisations managing projects that require independent quality management audits, contractor compliance verification or quality assessments at defined project milestones."
        },
        {
          "type": "p",
          "text": "Saudi Aramco Schedule Q assessments are especially relevant to contractors and project organisations working under contracts that incorporate Schedule Q quality obligations."
        },
        {
          "type": "p",
          "text": "GLOBAQ also supports general EPC project quality assessments where independent audits are required against other project-specific contractual quality requirements."
        }
      ],
      "cards": []
    },
    {
      "title": "Why Choose GLOBAQ for Project Quality Assessment Services?",
      "id": "why-choose-globaq-for-project-quality-assessment-services",
      "intro": [
        {
          "type": "p",
          "text": "GLOBAQ combines independent auditing expertise with practical experience in project quality management and contractual compliance assessments across Saudi Arabia."
        },
        {
          "type": "p",
          "text": "Aramco-Approved Auditors: Our team includes Aramco-approved auditors with the competence and experience to conduct QMS assessments under applicable Saudi Aramco Schedule Q requirements."
        },
        {
          "type": "p",
          "text": "Experience in Saudi Project Audits: GLOBAQ's team has a documented track record of conducting project audits across Saudi Arabia, including assessments of project quality management arrangements."
        },
        {
          "type": "p",
          "text": "Design, Procurement and Construction Coverage: Our audits evaluate quality management implementation across relevant EPC project activities according to the agreed assessment scope."
        },
        {
          "type": "p",
          "text": "Contract-Specific Audit Criteria: We assess project quality controls against applicable contractual schedules and project requirements rather than relying on generic audit checklists alone."
        },
        {
          "type": "p",
          "text": "Evidence-Based Findings: Our assessments focus on actual implementation, objective evidence and clearly documented nonconformities to support informed corrective action."
        },
        {
          "type": "p",
          "text": "Quality Management Credentials: GLOBAQ holds ISO 9001:2015 certification and lists Saudi Aramco approval among its company credentials."
        },
        {
          "type": "p",
          "text": "Based in Al Khobar, Saudi Arabia, GLOBAQ provides project quality assessment services tailored to relevant contractual obligations, project stages and quality management requirements."
        }
      ],
      "cards": []
    },
    {
      "title": "Frequently Asked Questions",
      "id": "frequently-asked-questions",
      "intro": [],
      "cards": [
        {
          "title": "What is a project quality assessment?",
          "blocks": [
            {
              "type": "p",
              "text": "A project quality assessment is a structured evaluation of the quality management arrangements, processes and implementation evidence used to meet a project's defined quality requirements."
            },
            {
              "type": "p",
              "text": "It helps determine whether project quality controls are implemented effectively and identifies nonconformities or areas requiring improvement."
            }
          ]
        },
        {
          "title": "What is Saudi Aramco Schedule Q?",
          "blocks": [
            {
              "type": "p",
              "text": "Saudi Aramco Schedule Q refers to quality requirements incorporated into applicable Saudi Aramco contracts."
            },
            {
              "type": "p",
              "text": "These contractual provisions establish quality management obligations for the relevant project activities and may require independent assessments at specified project milestones."
            },
            {
              "type": "p",
              "text": "The exact requirements depend on the project's contract and applicable Schedule Q provisions."
            }
          ]
        },
        {
          "title": "Does GLOBAQ provide Saudi Aramco Schedule Q audits?",
          "blocks": [
            {
              "type": "p",
              "text": "Yes. GLOBAQ provides independent Schedule Q quality assessments conducted by Aramco-approved auditors."
            },
            {
              "type": "p",
              "text": "Our assessments evaluate the implementation of applicable project QMS requirements and relevant quality controls across design, procurement and construction activities."
            },
            {
              "type": "p",
              "text": "The assessment criteria and scope are determined by the specific project contract."
            }
          ]
        },
        {
          "title": "What is included in a Schedule Q quality assessment?",
          "blocks": [
            {
              "type": "p",
              "text": "A Schedule Q assessment may include reviewing applicable contractual quality requirements, project quality plans, management system procedures, implementation records and other relevant objective evidence."
            },
            {
              "type": "p",
              "text": "Auditors evaluate conformity with defined assessment criteria and document any identified nonconformities or improvement opportunities."
            }
          ]
        },
        {
          "title": "When should a Schedule Q assessment be conducted?",
          "blocks": [
            {
              "type": "p",
              "text": "Schedule Q assessments may be required at defined project milestones, such as 15%, 60% and 90% completion, or through annual audits."
            },
            {
              "type": "p",
              "text": "The actual timing depends on the relevant Saudi Aramco contract and project-specific requirements."
            }
          ]
        },
        {
          "title": "What is the difference between a project quality assessment and a construction quality inspection?",
          "blocks": [
            {
              "type": "p",
              "text": "A project quality assessment examines the implementation of quality management systems, processes and controls against defined requirements."
            },
            {
              "type": "p",
              "text": "A construction quality inspection generally focuses on verifying specific construction activities, materials or completed work against applicable technical specifications and acceptance criteria."
            },
            {
              "type": "p",
              "text": "Both activities contribute to project quality assurance, but they serve different assessment purposes."
            }
          ]
        },
        {
          "title": "Does GLOBAQ conduct quality assessments for non-Aramco EPC projects?",
          "blocks": [
            {
              "type": "p",
              "text": "GLOBAQ's service portfolio includes general EPC project quality audits in addition to Saudi Aramco Schedule Q assessments."
            },
            {
              "type": "p",
              "text": "For non-Aramco EPC projects, the audit criteria are based on applicable contractual quality obligations, project specifications and agreed assessment requirements."
            }
          ]
        },
        {
          "title": "What will we receive after a project quality assessment?",
          "blocks": [
            {
              "type": "p",
              "text": "The assessment provides documented findings identifying relevant quality management gaps, nonconformities and opportunities for improvement against the agreed audit criteria."
            },
            {
              "type": "p",
              "text": "Recommendations may also support corrective action planning and improvements to project quality management controls."
            },
            {
              "type": "p",
              "text": "The specific reporting deliverables depend on the agreed assessment scope."
            }
          ]
        }
      ]
    },
    {
      "title": "Request Project Quality or Schedule Q Assessment Services",
      "id": "request-project-quality-or-schedule-q-assessment-services",
      "intro": [
        {
          "type": "p",
          "text": "Need an independent review of your project quality management system or an assessment against applicable Saudi Aramco Schedule Q requirements?"
        },
        {
          "type": "p",
          "text": "GLOBAQ provides project quality assessments, EPC quality audits and Schedule Q assessment services through qualified auditors experienced in Saudi project requirements."
        },
        {
          "type": "p",
          "text": "Contact our team to discuss your project scope, applicable contractual obligations, assessment milestones and quality management requirements."
        },
        {
          "type": "cta",
          "text": "Discuss Your Schedule Q or Project Quality Assessment"
        },
        {
          "type": "cta",
          "text": "Request a Quote"
        }
      ],
      "cards": []
    }
  ]
};

const heroImage = { src: "/audit.jpg", width: 1024, height: 536 };

const parentPath = "/services/management-system-audits-saudi-arabia/";

function Copy({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type !== "cta") return <p key={index}>{block.text}</p>;

    const style = block.text === "Request a Quote"
      ? "bg-transparent text-orange-700 hover:bg-orange-100"
      : "bg-orange-700 text-white hover:bg-orange-800 hover:shadow-md";

    return (
      <Link
        key={index}
        to="/ContactUs"
        className={`my-2 mr-3 inline-flex max-w-full items-center justify-center gap-4 rounded-lg border border-orange-700 px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${style}`}
      >
        {block.text}
        <span aria-hidden="true">↗</span>
      </Link>
    );
  });
}

function CoverageFlipCards({ blocks }) {
  const icons = ["quality", "safety", "supplier", "project", "quality", "safety"];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {blocks.map((block, index) => {
        const colon = block.text.indexOf(":");
        return (
          <CoverageFlipCard
            key={block.text}
            heading={colon >= 0 ? block.text.slice(0, colon + 1) : block.text}
            description={colon >= 0 ? block.text.slice(colon + 1).trim() : ""}
            icon={icons[index % icons.length]}
          />
        );
      })}
    </div>
  );
}

function CoverageFlipCard({ heading, description, icon }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const descriptionId = useId();
  const lastPointerType = useRef(null);

  return (
    <div data-reveal className="min-w-0">
      <button
        type="button"
        aria-label={`${heading}. ${isFlipped ? "Hide details" : "Show details"}`}
        aria-expanded={isFlipped}
        aria-controls={descriptionId}
        aria-describedby={isFlipped ? descriptionId : undefined}
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setIsFlipped(true);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") setIsFlipped(false);
        }}
        onPointerDown={(event) => {
          lastPointerType.current = event.pointerType;
        }}
        onClick={(event) => {
          // Keyboard activation has no click count. Touch and pen use a tap.
          if (event.detail === 0 || lastPointerType.current !== "mouse") {
            setIsFlipped((previous) => !previous);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") setIsFlipped(false);
        }}
        className="block h-full w-full cursor-pointer rounded-2xl text-left [perspective:1200px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
      >
        <span
          className={`grid h-full min-h-[250px] rounded-2xl transition-transform duration-500 ease-in-out [transform-style:preserve-3d] motion-reduce:transition-none motion-reduce:[transform:none] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front: heading only, with an icon and interaction hint. */}
          <span
            aria-hidden="true"
            className={`flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-orange-200 bg-white p-7 text-center shadow-sm [grid-area:1/1] [backface-visibility:hidden] ${
              isFlipped ? "motion-reduce:invisible" : "motion-reduce:visible"
            }`}
          >
            <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-700 ring-1 ring-orange-100">
              <AuditIcon kind={icon} className="h-8 w-8" />
            </span>
            <span className="max-w-[260px] text-xl font-bold leading-snug text-gray-800">
              {heading}
            </span>
          </span>

          {/* Back: the same heading and complete supplied description. */}
          <span
            aria-hidden={!isFlipped}
            className={`flex min-h-[250px] flex-col justify-center rounded-2xl border border-orange-400 bg-gradient-to-br from-orange-100 to-amber-100 p-7 shadow-lg shadow-orange-950/10 [grid-area:1/1] [transform:rotateY(180deg)] [backface-visibility:hidden] motion-reduce:[transform:none] ${
              isFlipped ? "motion-reduce:visible" : "motion-reduce:invisible"
            }`}
          >
            <span className="mb-4 text-lg font-bold leading-snug text-orange-800">
              {heading}
            </span>
            <span id={descriptionId} className="text-sm leading-relaxed text-gray-700">
              {description}
            </span>
          </span>
        </span>
      </button>
    </div>
  );
}

function AuditServicesExplorer({ section }) {
  const [activeService, setActiveService] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(true);

  const tabRefs = useRef([]);
  const panelRefs = useRef([]);
  const instanceId = useId();

  const icons = ["quality", "project", "supplier", "safety", "supplier", "quality"];

  const selectService = (index) => {
    setActiveService(index);
  };

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    panelRefs.current[activeService]?.animate?.(
      [
        { opacity: 0.4, transform: "translateX(10px)" },
        { opacity: 1, transform: "translateX(0)" },
      ],
      { duration: 280, easing: "ease-out" }
    );
  }, [activeService]);

  const handleTabKey = (event, index) => {
    let next;

    if (event.key === "ArrowDown") {
      next = (index + 1) % section.cards.length;
    } else if (event.key === "ArrowUp") {
      next =
        (index - 1 + section.cards.length) % section.cards.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = section.cards.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectService(next);
    tabRefs.current[next]?.focus();
  };

  const renderDescription = (card) => (
    <div className="[&_p]:text-[15px] [&_p:last-child]:mb-0">
      <Copy blocks={card.blocks} />
    </div>
  );

  return (
    <section
      id={section.id}
      className="scroll-mt-44 border-y border-orange-100 bg-gradient-to-br from-orange-50/70 via-gray-50 to-white py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2
          data-reveal
          className="mb-8 max-w-4xl text-3xl font-bold leading-tight tracking-tight lg:text-4xl"
        >
          {section.title}
        </h2>

        {section.intro.length > 0 && (
          <Copy blocks={section.intro} />
        )}

        {/* Desktop service selector */}
        <div className="hidden items-start gap-7 lg:grid lg:grid-cols-[320px_minmax(0,1fr)]">
          <div
            role="tablist"
            aria-label={section.title}
            aria-orientation="vertical"
            className="flex flex-col gap-3"
          >
            {section.cards.map((card, index) => (
              <button
                key={card.title}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`${instanceId}-tab-${index}`}
                aria-controls={`${instanceId}-panel-${index}`}
                aria-selected={activeService === index}
                tabIndex={activeService === index ? 0 : -1}
                onClick={() => selectService(index)}
                onKeyDown={(event) => handleTabKey(event, index)}
                data-reveal
                data-delay={index * 70}
                className={`flex w-full items-center gap-4 rounded-xl border p-5 text-left text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 motion-reduce:transition-none ${
                  activeService === index
                    ? "border-orange-700 bg-orange-700 text-white shadow-lg shadow-orange-950/10"
                    : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50"
                }`}
              >
                <AuditIcon
                  kind={icons[index % icons.length]}
                  className="h-6 w-6 shrink-0"
                />

                <span className="flex-1">
                  {card.title}
                </span>

                <span aria-hidden="true">→</span>
              </button>
            ))}
          </div>

          <div
            data-reveal
            data-delay="120"
            className="min-w-0 rounded-2xl border border-orange-200 bg-white p-8 shadow-xl shadow-orange-950/5 xl:p-10"
          >
            {section.cards.map((card, index) => (
              <div
                key={card.title}
                ref={(element) => {
                  panelRefs.current[index] = element;
                }}
                role="tabpanel"
                id={`${instanceId}-panel-${index}`}
                aria-labelledby={`${instanceId}-tab-${index}`}
                hidden={activeService !== index}
                tabIndex={0}
                className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
              >
                <h3 className="mb-5 text-2xl font-bold leading-snug tracking-tight">
                  {card.title}
                </h3>

                {renderDescription(card)}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile service accordion */}
        <div className="grid gap-3 lg:hidden">
          {section.cards.map((card, index) => {
            const isOpen =
              mobileOpen && activeService === index;

            return (
              <div
                key={card.title}
                data-reveal
                className={`overflow-hidden rounded-xl border bg-white ${
                  isOpen
                    ? "border-orange-300 shadow-md shadow-orange-950/5"
                    : "border-gray-200"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`${instanceId}-mobile-button-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`${instanceId}-mobile-panel-${index}`}
                    onClick={() => {
                      if (activeService === index) {
                        setMobileOpen((previous) => !previous);
                      } else {
                        selectService(index);
                        setMobileOpen(true);
                      }
                    }}
                    className={`flex w-full items-center gap-3 p-5 text-left text-base font-semibold focus-visible:outline-2 focus-visible:outline-orange-700 ${
                      isOpen
                        ? "bg-orange-50 text-orange-800"
                        : "text-gray-800"
                    }`}
                  >
                    <AuditIcon
                      kind={icons[index % icons.length]}
                      className="h-6 w-6 shrink-0"
                    />

                    <span className="flex-1">{card.title}</span>

                    <span
                      aria-hidden="true"
                      className="text-xl"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                <div
                  id={`${instanceId}-mobile-panel-${index}`}
                  role="region"
                  aria-labelledby={`${instanceId}-mobile-button-${index}`}
                  hidden={!isOpen}
                  className="px-5 pt-5 pb-3"
                >
                  {renderDescription(card)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AuditIcon({ kind, className = "h-6 w-6" }) {
  const paths = {
    supplier: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3a4 4 0 0 1 0 8M22 21v-2a4 4 0 0 0-3-3.87M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    quality: "M9 12l2 2 4-4M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4M9 2h6v4H9z",
    project: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 9h1M14 9h1M9 13h1M14 13h1",
    safety: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11ZM9 12l2 2 4-4",
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind] || paths.quality} /></svg>;
}

function AuditProcessDiagram({ section }) {
  const [activeStep, setActiveStep] = useState(0);
  const [mobileStep, setMobileStep] = useState(0);
  const instanceId = useId();
  const stepRefs = useRef([]);
  const panelRefs = useRef([]);
  const mobilePanelRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    panelRefs.current[activeStep]?.animate?.(
      [{ opacity: 0.35, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 300, easing: "ease-out" }
    );
  }, [activeStep]);

  useEffect(() => {
    if (mobileStep === null || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    mobilePanelRefs.current[mobileStep]?.animate?.(
      [{ opacity: 0.35 }, { opacity: 1 }],
      { duration: 250, easing: "ease-out" }
    );
  }, [mobileStep]);

  const handleStepKey = (event, index) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % section.cards.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + section.cards.length) % section.cards.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = section.cards.length - 1;
    else return;
    event.preventDefault();
    setActiveStep(next);
    stepRefs.current[next]?.focus();
  };

  return (
    <section id={section.id} className="scroll-mt-44 overflow-hidden border-y border-orange-100 bg-gradient-to-br from-orange-50/60 via-white to-gray-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2 data-reveal className="mb-10 max-w-4xl text-3xl font-bold leading-tight tracking-tight lg:text-4xl">{section.title}</h2>
        {section.intro.length > 0 && <div className="mb-6 max-w-4xl"><Copy blocks={section.intro} /></div>}

        {/* Desktop: connected steps and one persistent detail panel. */}
        <div className="hidden lg:block">
          <div role="tablist" aria-label="Audit process steps" aria-orientation="horizontal" className="grid grid-cols-5 gap-4">
            {section.cards.map((card, index) => (
              <div key={card.title} className="relative min-w-0" data-reveal data-delay={index * 90}>
                {index < section.cards.length - 1 && (
                  <svg aria-hidden="true" viewBox="0 0 100 16" preserveAspectRatio="none" className={`pointer-events-none absolute top-7 left-[calc(50%+42px)] h-4 w-[calc(100%-68px)] transition-colors duration-300 motion-reduce:transition-none ${activeStep === index + 1 ? "text-orange-600" : "text-orange-200"}`}>
                    <path d="M0 8H96M90 2l7 6-7 6" fill="none" stroke="currentColor" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
                  </svg>
                )}
                <button
                  type="button" role="tab"
                  id={`${instanceId}-step-${index}`}
                  aria-controls={`${instanceId}-step-panel-${index}`}
                  aria-selected={activeStep === index}
                  tabIndex={activeStep === index ? 0 : -1}
                  ref={(element) => { stepRefs.current[index] = element; }}
                  onPointerEnter={(event) => { if (event.pointerType === "mouse") setActiveStep(index); }}
                  onClick={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  onKeyDown={(event) => handleStepKey(event, index)}
                  className="group flex w-full flex-col items-center gap-5 rounded-xl px-2 pb-4 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
                >
                  <span className={`relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border transition-all duration-300 motion-reduce:transition-none ${activeStep === index ? "border-orange-600 bg-orange-600 text-white shadow-lg shadow-orange-600/20" : "border-orange-200 bg-white text-orange-700 group-hover:border-orange-400 group-hover:bg-orange-50"}`}><AuditProcessIcon step={index} className="h-8 w-8" /></span>
                  <span className={`text-sm font-semibold leading-relaxed transition-colors ${activeStep === index ? "text-orange-800" : "text-gray-700"}`}>{card.title}</span>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border border-orange-200 bg-white p-8 shadow-lg shadow-orange-950/5 xl:p-10" data-reveal data-delay="150">
            {section.cards.map((card, index) => (
              <div key={card.title} role="tabpanel" id={`${instanceId}-step-panel-${index}`} aria-labelledby={`${instanceId}-step-${index}`} hidden={activeStep !== index} ref={(element) => { panelRefs.current[index] = element; }} tabIndex={0} className="min-h-[210px] rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">
                <div className="mb-5 flex items-center gap-4"><span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-700"><AuditProcessIcon step={index} className="h-6 w-6" /></span><h3 className="text-xl font-bold leading-snug text-gray-800">{card.title}</h3></div>
                <div className="max-w-5xl [&_p]:text-[15px] [&_p:last-child]:mb-0"><Copy blocks={card.blocks} /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: a vertical timeline with one expandable step. */}
        <div className="lg:hidden">
          {section.cards.map((card, index) => (
            <div key={card.title} data-reveal className="relative pb-5 last:pb-0">
              {index < section.cards.length - 1 && <span aria-hidden="true" className="absolute top-12 bottom-0 left-[22px] w-px bg-orange-200"><svg viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.5" className="absolute -left-[5px] bottom-2 h-2 w-3 text-orange-400"><path d="m1 1 5 5 5-5" /></svg></span>}
              <div className="relative flex items-start gap-3">
                <span aria-hidden="true" className={`z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${mobileStep === index ? "border-orange-600 bg-orange-600 text-white" : "border-orange-200 bg-white text-orange-700"}`}><AuditProcessIcon step={index} className="h-6 w-6" /></span>
                <div className={`min-w-0 flex-1 overflow-hidden rounded-xl border bg-white ${mobileStep === index ? "border-orange-300 shadow-md shadow-orange-950/5" : "border-gray-200"}`}>
                  <h3><button type="button" id={`${instanceId}-mobile-step-${index}`} aria-controls={`${instanceId}-mobile-step-panel-${index}`} aria-expanded={mobileStep === index} onClick={() => setMobileStep(mobileStep === index ? null : index)} className={`flex w-full items-center gap-3 p-4 text-left text-sm font-semibold leading-relaxed focus-visible:outline-2 focus-visible:outline-orange-700 sm:p-5 ${mobileStep === index ? "bg-orange-50 text-orange-800" : "text-gray-800"}`}><span className="flex-1">{card.title}</span><span aria-hidden="true" className="text-xl">{mobileStep === index ? "−" : "+"}</span></button></h3>
                  <div role="region" id={`${instanceId}-mobile-step-panel-${index}`} aria-labelledby={`${instanceId}-mobile-step-${index}`} hidden={mobileStep !== index} ref={(element) => { mobilePanelRefs.current[index] = element; }} className="px-4 pt-4 pb-2 sm:px-5 [&_p]:text-sm"><Copy blocks={card.blocks} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuditProcessIcon({ step, className = "h-6 w-6" }) {
  const paths = [
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2",
    "M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3M9 2h6v4H9ZM8 11h8M8 15h8M8 19h5",
    "M10.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM16 16l5 5M7 10l2 2 4-4",
    "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8ZM14 2v6h6M8 17v-3M12 17v-5M16 17v-2",
    "M3 17l6-6 4 4 8-10M15 5h6v6M3 22h18",
  ];
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[step] || paths[0]} /></svg>;
}

function AuditBenefitsSection({ section }) {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [mobileBenefit, setMobileBenefit] = useState(0);
  const instanceId = useId();
  const tabRefs = useRef([]);
  const panelRefs = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    panelRefs.current[activeBenefit]?.animate?.(
      [{ opacity: 0.4, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 280, easing: "ease-out" }
    );
  }, [activeBenefit]);

  const moveBenefit = (direction) => {
    const next = (activeBenefit + direction + section.cards.length) % section.cards.length;
    setActiveBenefit(next);
  };

  const handleKey = (event, index) => {
    let next;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % section.cards.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + section.cards.length) % section.cards.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = section.cards.length - 1;
    else return;
    event.preventDefault();
    setActiveBenefit(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id={section.id} className="scroll-mt-44 border-y border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mb-9 max-w-4xl">
          <span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-orange-500" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-800 lg:text-4xl">{section.title}</h2>
          {section.intro.length > 0 && <div className="mt-5"><Copy blocks={section.intro} /></div>}
        </div>

        <div className="hidden items-start gap-7 lg:grid lg:grid-cols-[1fr_1.1fr]">
          <div role="tablist" aria-label="Explore audit benefits" aria-orientation="vertical" className="grid gap-3">
            {section.cards.map((card, index) => (
              <button
                key={card.title} type="button" role="tab"
                id={`${instanceId}-benefit-${index}`}
                aria-controls={`${instanceId}-benefit-panel-${index}`}
                aria-selected={activeBenefit === index}
                tabIndex={activeBenefit === index ? 0 : -1}
                ref={(element) => { tabRefs.current[index] = element; }}
                onPointerEnter={(event) => { if (event.pointerType === "mouse") setActiveBenefit(index); }}
                onClick={() => setActiveBenefit(index)}
                onFocus={() => setActiveBenefit(index)}
                onKeyDown={(event) => handleKey(event, index)}
                data-reveal data-delay={index * 60}
                className={`group flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 motion-reduce:transition-none ${activeBenefit === index ? "border-orange-300 bg-orange-50 shadow-md shadow-orange-950/5" : "border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50/50"}`}
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${activeBenefit === index ? "bg-orange-600 text-white" : "bg-orange-50 text-orange-700 group-hover:bg-orange-100"}`}><AuditBenefitIcon benefit={index} className="h-6 w-6" /></span>
                <span className={`flex-1 text-base font-semibold leading-snug ${activeBenefit === index ? "text-orange-800" : "text-gray-700"}`}>{card.title}</span>
                <span aria-hidden="true" className={`text-lg transition-transform duration-200 motion-reduce:transition-none ${activeBenefit === index ? "translate-x-1 text-orange-700" : "text-gray-400"}`}>→</span>
              </button>
            ))}
          </div>

          <div data-reveal data-delay="150" className="relative isolate overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50/50 p-8 shadow-xl shadow-orange-950/5 xl:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 -z-10 h-56 w-56 rounded-full border-[28px] border-orange-100/60" />
            {section.cards.map((card, index) => (
              <div key={card.title} role="tabpanel" id={`${instanceId}-benefit-panel-${index}`} aria-labelledby={`${instanceId}-benefit-${index}`} hidden={activeBenefit !== index} ref={(element) => { panelRefs.current[index] = element; }} tabIndex={0} className="min-h-[290px] rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">
                <span aria-hidden="true" className="mb-7 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-200 bg-white text-orange-600 shadow-sm"><AuditBenefitIcon benefit={index} className="h-10 w-10" /></span>
                <h3 className="mb-5 max-w-lg text-2xl font-bold leading-snug tracking-tight text-gray-800 xl:text-3xl">{card.title}</h3>
                <div className="max-w-lg [&_p]:text-base [&_p]:leading-relaxed"><Copy blocks={card.blocks} /></div>
              </div>
            ))}
            <div className="mt-5 flex items-center justify-between border-t border-orange-100 pt-5">
              <div aria-hidden="true" className="flex gap-2">{section.cards.map((card, index) => <span key={card.title} className={`h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${activeBenefit === index ? "w-7 bg-orange-500" : "w-2 bg-orange-200"}`} />)}</div>
              <div className="flex gap-2">
                <button type="button" aria-label="Previous benefit" onClick={() => moveBenefit(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-lg text-orange-700 transition-colors hover:border-orange-600 hover:bg-orange-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">←</button>
                <button type="button" aria-label="Next benefit" onClick={() => moveBenefit(1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-white text-lg text-orange-700 transition-colors hover:border-orange-600 hover:bg-orange-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">→</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 lg:hidden">
          {section.cards.map((card, index) => (
            <div key={card.title} data-reveal className={`overflow-hidden rounded-2xl border bg-white transition-colors ${mobileBenefit === index ? "border-orange-300 shadow-md shadow-orange-950/5" : "border-gray-200"}`}>
              <h3><button type="button" id={`${instanceId}-mobile-benefit-${index}`} aria-controls={`${instanceId}-mobile-benefit-panel-${index}`} aria-expanded={mobileBenefit === index} onClick={() => setMobileBenefit(mobileBenefit === index ? null : index)} className={`flex w-full items-center gap-3 p-5 text-left focus-visible:outline-2 focus-visible:outline-orange-700 ${mobileBenefit === index ? "bg-orange-50" : "bg-white"}`}><span aria-hidden="true" className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${mobileBenefit === index ? "bg-orange-600 text-white" : "bg-orange-50 text-orange-700"}`}><AuditBenefitIcon benefit={index} className="h-6 w-6" /></span><span className="flex-1 text-sm font-semibold leading-relaxed text-gray-800">{card.title}</span><span aria-hidden="true" className="text-xl text-orange-700">{mobileBenefit === index ? "−" : "+"}</span></button></h3>
              <div role="region" id={`${instanceId}-mobile-benefit-panel-${index}`} aria-labelledby={`${instanceId}-mobile-benefit-${index}`} hidden={mobileBenefit !== index} className="px-5 pt-5 pb-2 [&_p]:text-sm"><Copy blocks={card.blocks} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuditBenefitIcon({ benefit, className = "h-6 w-6" }) {
  const paths = [
    "M12 3 2 21h20L12 3ZM12 9v5M12 17h.01",
    "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11ZM9 12l2 2 4-4",
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM16 4l3-3 3 3M19 1v10",
    "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM8 15l3 3 5-5",
    "M4 21V3M4 21h17M8 16v-4M12 16V8M16 16v-6M8 6l4-3 4 2 5-3",
  ];
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[benefit] || paths[0]} /></svg>;
}

function AuditAudienceSection({ section }) {
  const [lead, ...details] = section.intro;

  return (
    <section id={section.id} className="relative scroll-mt-44 border-b border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mb-8 max-w-4xl">
          <span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-orange-500" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-800 lg:text-4xl">{section.title}</h2>
        </div>

        {lead && <div data-reveal data-delay="80" className="relative overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div aria-hidden="true" className="absolute top-0 left-0 h-full w-1 bg-orange-500" />
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:gap-7">
            <span aria-hidden="true" className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-white text-orange-600 shadow-sm"><AuditIcon kind="supplier" className="h-8 w-8" /></span>
            <p className="!mb-0 max-w-5xl text-lg leading-relaxed !text-gray-700 lg:text-xl">{lead.text}</p>
          </div>
        </div>}

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {details.map((block, index) => <div key={block.text} data-reveal data-delay={120 + index * 100} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-950/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8">
            <span aria-hidden="true" className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-700 transition-colors group-hover:bg-orange-100"><AuditIcon kind={index === 0 ? "project" : "quality"} className="h-6 w-6" /></span>
            <div className="[&_p]:text-base [&_p]:leading-relaxed [&_p:last-child]:mb-0"><Copy blocks={[block]} /></div>
          </div>)}
        </div>
      </div>
    </section>
  );
}

function WhyChooseAuditSection({ section }) {
  const lead = section.intro.slice(0, 1);
  const capabilities = section.intro.slice(1, -1);
  const closing = section.intro.slice(-1);

  return (
    <ContentSection section={section} background="bg-gray-50">
      <div data-reveal className="mb-9 max-w-4xl border-l-4 border-orange-500 pl-5 sm:pl-6 [&_p:last-child]:mb-0 [&_p]:text-sm [&_p]:font-semibold [&_p]:text-orange-800">
        <Copy blocks={lead} />
      </div>
      <CoverageFlipCards blocks={capabilities} />
      <div data-reveal className="mt-9 rounded-2xl border border-orange-100 bg-orange-50/70 px-6 py-6 sm:px-8 [&_p]:m-0 [&_p]:max-w-5xl [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-gray-700">
        <Copy blocks={closing} />
      </div>
    </ContentSection>
  );
}

// Presentation adapter: retain the full original wording, including each colon.
function asBenefitCards(section) {
  return { ...section, intro: [], cards: section.intro.map((block) => {
    const colon = block.text.indexOf(":");
    if (colon === -1) return { title: block.text, blocks: [] };
    return { title: block.text.slice(0, colon + 1), blocks: [{ ...block, text: block.text.slice(colon + 1) }] };
  }) };
}

function ContentSection({ section, children, background = "bg-white" }) {
  return (
    <section id={section.id} className={`scroll-mt-44 py-14 lg:py-20 ${background}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mb-8 max-w-4xl">
          <span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-orange-500" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-4xl">{section.title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ScheduleSection({ section }) {
  const [coverage, followUp] = section.cards;
  const criteria = coverage.blocks.slice(0, -1);
  const scopeNote = coverage.blocks.slice(-1);
  const timingIntro = followUp.blocks.slice(0, 2);
  const milestones = followUp.blocks.slice(2, 5);
  const [annual, contractNote, learnMore] = followUp.blocks.slice(5);
  const annualColon = annual.text.indexOf(":");

  return (
    <ContentSection section={section} background="border-y border-orange-100 bg-gradient-to-br from-orange-50/60 via-white to-gray-50">
      <div data-reveal className="mb-10 max-w-4xl border-l-4 border-orange-500 pl-5 sm:pl-6 [&_p:last-child]:mb-0">
        <Copy blocks={section.intro} />
      </div>

      <h3 data-reveal className="mb-5 text-xl font-bold leading-snug text-gray-800 sm:text-2xl">
        {coverage.title}
      </h3>
      <CoverageFlipCards blocks={criteria} />
      <div data-reveal className="mt-6 rounded-xl border border-orange-100 bg-orange-50 px-5 py-5 sm:px-7 [&_p:last-child]:mb-0">
        <Copy blocks={scopeNote} />
      </div>

      <div data-reveal className="mt-12 overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-sm">
        <div className="border-b border-orange-100 bg-gradient-to-br from-orange-100/80 via-orange-50 to-white px-5 py-6 sm:p-8">
          <div className="mb-4 flex items-start gap-4 sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-700 text-white">
              <AuditIcon kind="project" />
            </span>
            <h3 className="text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl">
              {followUp.title}
            </h3>
          </div>
          <div className="max-w-4xl [&_p:last-child]:mb-0">
            <Copy blocks={timingIntro} />
          </div>
        </div>

        <div className="p-5 sm:p-8">
          <ol className="relative grid list-none gap-5 p-0 md:grid-cols-3 md:before:absolute md:before:inset-x-8 md:before:top-12 md:before:border-t-2 md:before:border-dashed md:before:border-orange-300">
            {milestones.map(({ text }) => {
              const colon = text.indexOf(":");
              const [marker, percent, ...title] = text.slice(0, colon + 1).split(" ");

              return (
                <li key={text} className="relative rounded-2xl border border-orange-200 bg-white p-5 shadow-sm">
                  <h4 className="mb-3">
                    <span aria-hidden="true" className="sr-only">{marker} </span>
                    <span className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-3xl font-bold leading-tight tabular-nums tracking-tight text-orange-900">
                      {percent}
                    </span>{" "}
                    <span className="mt-3 block text-base font-semibold text-gray-900">{title.join(" ")}</span>
                  </h4>
                  <p className="!mb-0 text-sm">{text.slice(colon + 1)}</p>
                </li>
              );
            })}
          </ol>

          <div className="mt-5 flex items-start gap-4 rounded-2xl border border-orange-100 bg-orange-50 px-4 py-5 sm:px-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-orange-700 ring-1 ring-orange-200">
              <AuditIcon kind="quality" className="h-5 w-5" />
            </span>
            <div>
              <h4 className="mb-1 font-semibold text-gray-900">
                <span aria-hidden="true" className="sr-only">● </span>
                {annual.text.slice(2, annualColon + 1)}
              </h4>
              <p className="!mb-0 text-sm">{annual.text.slice(annualColon + 1)}</p>
            </div>
          </div>

          <div className="mt-6 border-t border-orange-100 pt-5">
            <p className="max-w-5xl text-sm">{contractNote.text}</p>
            <p className="!mb-0 font-semibold !text-orange-800">{learnMore.text}</p>
          </div>
        </div>
      </div>
    </ContentSection>
  );
}

function FaqSection({ section }) {
  return (
    <ContentSection section={section}>
      <div className="grid max-w-5xl gap-3">
        {section.cards.map((card) => (
          <details key={card.title} data-reveal className="group overflow-hidden rounded-xl border border-gray-200 bg-white open:border-orange-200">
            <summary className="flex cursor-pointer list-none items-center gap-4 p-5 focus-visible:outline-2 focus-visible:outline-orange-700 group-open:bg-orange-50 sm:px-7 [&::-webkit-details-marker]:hidden">
              <h3 className="m-0 flex-1 text-base font-semibold leading-snug">{card.title}</h3>
              <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center text-xl text-orange-700 after:content-['+'] group-open:after:content-['−']" />
            </summary>
            <div className="px-5 pt-5 pb-1 text-sm sm:px-7"><Copy blocks={card.blocks} /></div>
          </details>
        ))}
      </div>
    </ContentSection>
  );
}

export default function ProjectQualityAssessment() {
  const pageRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.animate?.([
          { opacity: 0.35, transform: "translateY(28px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 700, delay: Number(entry.target.dataset.delay || 0), easing: "ease-out", fill: "backwards" });
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    pageRef.current.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const [hero, overview, services, schedule, process, benefits, audience, credentials, faq, enquiry] = page.sections;
  const titleSuffix = "in Saudi Arabia";
  const titleAccentStart = page.title.endsWith(titleSuffix)
    ? page.title.length - titleSuffix.length
    : page.title.length;
  return (
    <article ref={pageRef} className="bg-white pt-[76px] text-base leading-relaxed text-gray-800 break-words max-md:pt-[50px] [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-600 [&_strong]:font-semibold [&_a]:transition-all [&_a]:duration-200 [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-orange-700 motion-reduce:[&_a]:transition-none">
      <SEO title={page.metaTitle} description={page.description} path={page.path} />
      <PageSchema id="page-schema-service" data={{
        "@context": "https://schema.org", "@type": "Service", name: page.title,
        description: page.description, url: `https://globaqksa.com${page.path}`,
        provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
      }} />
      <header className="overflow-hidden border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.85fr] lg:gap-14">
          <div>
            <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-xs text-gray-500"><Link to={parentPath} className="hover:text-orange-700">Management System Audits</Link><span aria-hidden="true">/</span><span aria-current="page">{page.label}</span></nav>
            <h1 data-reveal className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">{page.title.slice(0, titleAccentStart)}<span className="text-orange-700">{page.title.slice(titleAccentStart)}</span></h1>
            <h2 data-reveal data-delay="120" className="mb-5 max-w-2xl text-lg font-semibold leading-relaxed">{hero.title}</h2>
            <div data-reveal data-delay="220"><Copy blocks={hero.intro.filter((block) => block.type !== "cta")} /></div>
            <div data-reveal data-delay="320" className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3"><Copy blocks={hero.intro.filter((block) => block.type === "cta")} /></div>
          </div>
          <figure data-reveal data-delay="240" className="group relative isolate m-0">
            <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[28px] border border-orange-200 sm:-inset-4" />
            <div className="relative overflow-hidden rounded-2xl bg-orange-100 shadow-2xl shadow-orange-950/10">
              <img src={heroImage.src} alt="" width={heroImage.width} height={heroImage.height} className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out lg:group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-950/10 via-transparent to-orange-400/10" />
            </div>
          </figure>
        </div>
      </header>

      <ContentSection section={overview}>
        <div data-reveal className="max-w-4xl"><Copy blocks={overview.intro} /></div>
      </ContentSection>
      <AuditServicesExplorer section={services} />
      <ScheduleSection section={schedule} />
      <AuditProcessDiagram section={process} />
      <AuditBenefitsSection section={asBenefitCards(benefits)} />
      <AuditAudienceSection section={audience} />
      <WhyChooseAuditSection section={credentials} />
      <FaqSection section={faq} />
      <ContentSection section={enquiry} background="border-t border-orange-100 bg-gradient-to-r from-orange-100 to-amber-100">
        <div data-reveal className="max-w-4xl"><Copy blocks={enquiry.intro} /></div>
      </ContentSection>
    </article>
  );
}
