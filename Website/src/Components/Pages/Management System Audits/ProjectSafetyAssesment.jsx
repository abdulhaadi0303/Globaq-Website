/* eslint-disable react/prop-types -- Presentational helpers use the unchanged local page content. */
import { useEffect, useRef, useId, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

const page = {
  "title": "Project Safety Assessment Services in Saudi Arabia",
  "metaTitle": "Project Safety Assessment & Schedule D Audits Saudi Arabia",
  "description": "GLOBAQ provides Schedule D safety assessments, CSSP reviews and CSM compliance audits in Saudi Arabia through Aramco-qualified auditors.",
  "path": "/services/management-system-audits-saudi-arabia/project-safety-assessment/",
  "label": "Project Safety Assessment",
  "sections": [
    {
      "title": "Independent Project Safety Audits and Saudi Aramco Schedule D Assessments",
      "id": "independent-project-safety-audits-and-saudi-aramco-schedule-d-assessments",
      "intro": [
        {
          "type": "p",
          "text": "Strengthen project safety management, evaluate implementation of safety controls and identify compliance gaps with GLOBAQ's independent project safety assessment services in Saudi Arabia."
        },
        {
          "type": "p",
          "text": "We help contractors, project owners and industrial organisations assess their safety management practices against applicable project requirements, including Saudi Aramco Schedule D, Contractor Site Safety Program (CSSP) and Construction Safety Manual (CSM) requirements."
        },
        {
          "type": "p",
          "text": "Our Aramco-qualified auditors provide independent safety assessments and CSSP reviews to help organisations identify implementation weaknesses and improve contractual safety compliance."
        },
        {
          "type": "cta",
          "text": "Discuss Your Project Safety Assessment"
        }
      ],
      "cards": []
    },
    {
      "title": "Independent Project Safety Assessment Services in Saudi Arabia",
      "id": "independent-project-safety-assessment-services-in-saudi-arabia",
      "intro": [
        {
          "type": "p",
          "text": "Effective project safety management requires more than written policies and procedures. Organisations must demonstrate that appropriate safety responsibilities, operational controls and documented practices are implemented throughout project execution."
        },
        {
          "type": "p",
          "text": "GLOBAQ (Global Quality Specialists Company Limited) provides independent project safety assessments to help organisations evaluate safety and environmental management arrangements and identify gaps against applicable requirements."
        },
        {
          "type": "p",
          "text": "Our services include Saudi Aramco Schedule D safety assessments, also known as CSSP reviews, as well as construction safety audits against applicable contractual and project safety requirements."
        },
        {
          "type": "p",
          "text": "For Saudi Aramco projects, assessments consider the relevant Schedule D obligations, Construction Safety Manual (CSM), General Instructions (GIs) and project-specific safety management arrangements."
        },
        {
          "type": "p",
          "text": "Our assessments focus on documented procedures, Contractor Site Safety Program implementation, operational controls, site practices and objective evidence."
        },
        {
          "type": "p",
          "text": "The findings provide project teams with practical information to support corrective actions, strengthen safety compliance and improve the effectiveness of project safety management."
        }
      ],
      "cards": []
    },
    {
      "title": "Our Project Safety Assessment Services",
      "id": "our-project-safety-assessment-services",
      "intro": [],
      "cards": [
        {
          "title": "Project Safety Management System Assessment",
          "blocks": [
            {
              "type": "p",
              "text": "We evaluate relevant project safety management processes, responsibilities, documented procedures and operational controls against defined requirements."
            },
            {
              "type": "p",
              "text": "Our assessments examine whether project-specific safety and environmental management systems are established, implemented and maintained in accordance with the applicable contractual obligations."
            },
            {
              "type": "p",
              "text": "The review focuses on the arrangements used to manage project safety responsibilities, operational risks and compliance throughout project execution."
            }
          ]
        },
        {
          "title": "Safety Compliance Assessment",
          "blocks": [
            {
              "type": "p",
              "text": "Our safety compliance audits evaluate implementation against applicable project safety obligations, contractual requirements and relevant organisational procedures."
            },
            {
              "type": "p",
              "text": "For Saudi Aramco projects, the assessment may include applicable Schedule D requirements, relevant Construction Safety Manual provisions and Saudi Aramco General Instructions. The objective is to identify differences between required safety practices and their actual implementation, providing evidence for corrective action and compliance improvement."
            }
          ]
        },
        {
          "title": "Safety Procedures and Documentation Review",
          "blocks": [
            {
              "type": "p",
              "text": "We examine safety management documentation, implementation records and supporting evidence to identify gaps requiring attention."
            },
            {
              "type": "p",
              "text": "Depending on the project requirements, this may include reviewing relevant safety management procedures, Contractor Site Safety Plan documentation, CSSP arrangements, responsibilities and other project-specific safety records."
            },
            {
              "type": "p",
              "text": "Our auditors evaluate whether the available documentation addresses the defined requirements and whether implementation can be demonstrated through objective evidence."
            }
          ]
        },
        {
          "title": "Contractor Site Safety Program (CSSP) Review",
          "blocks": [
            {
              "type": "p",
              "text": "GLOBAQ provides independent CSSP reviews as part of its Saudi Aramco Schedule D safety assessment services."
            },
            {
              "type": "p",
              "text": "A CSSP review evaluates the contractor's site-specific safety programme and whether its required safety arrangements are effectively implemented during project activities."
            },
            {
              "type": "p",
              "text": "Our assessments examine relevant programme requirements, responsibilities, implementation records and actual site practices against the applicable contract and safety criteria."
            },
            {
              "type": "p",
              "text": "The review helps identify weaknesses in the contractor's safety management arrangements and provides recommendations for improving safety programme implementation."
            }
          ]
        },
        {
          "title": "Construction Safety Manual (CSM) Compliance Audit",
          "blocks": [
            {
              "type": "p",
              "text": "The Saudi Aramco Construction Safety Manual (CSM) provides safety requirements and guidance relevant to applicable contractor construction activities."
            },
            {
              "type": "p",
              "text": "As part of an agreed project safety assessment, GLOBAQ can evaluate conformity with applicable CSM requirements and identify gaps between defined safety obligations and actual project practices."
            },
            {
              "type": "p",
              "text": "A CSM audit may examine relevant safety procedures, documented controls, implementation evidence and site conditions within the assessment scope."
            },
            {
              "type": "p",
              "text": "These reviews help contractors identify nonconformities and strengthen compliance with applicable Saudi Aramco construction safety requirements."
            }
          ]
        },
        {
          "title": "Safety Control Implementation Review",
          "blocks": [
            {
              "type": "p",
              "text": "Where applicable, we use personnel interviews, implementation records and site observations to evaluate whether defined safety controls are applied in practice."
            },
            {
              "type": "p",
              "text": "Our assessments focus on verifying the implementation of relevant safety procedures and controls against the applicable project requirements."
            },
            {
              "type": "p",
              "text": "This approach helps identify situations where documented safety arrangements may not be consistently reflected in actual site activities."
            }
          ]
        },
        {
          "title": "Safety Findings and Improvement Recommendations",
          "blocks": [
            {
              "type": "p",
              "text": "GLOBAQ documents identified safety gaps, nonconformities and improvement opportunities against the agreed assessment criteria."
            },
            {
              "type": "p",
              "text": "Assessment findings are supported by relevant evidence and recommendations that help project teams understand weaknesses and prioritise corrective actions."
            },
            {
              "type": "p",
              "text": "The objective is to support stronger project safety management and compliance with applicable contractual requirements."
            }
          ]
        }
      ]
    },
    {
      "title": "Saudi Aramco Schedule D Safety Assessment and CSSP Review",
      "id": "saudi-aramco-schedule-d-safety-assessment-and-cssp-review",
      "intro": [
        {
          "type": "p",
          "text": "Saudi Aramco Schedule D establishes contractual safety and environmental requirements for projects where these provisions form part of the applicable contract."
        },
        {
          "type": "p",
          "text": "Contractors are required to implement and maintain project-specific safety and environmental management systems and comply with other applicable Saudi Aramco requirements, including relevant provisions of the Construction Safety Manual and General Instructions."
        },
        {
          "type": "p",
          "text": "Independent safety assessments may also be mandatory where required by the contract."
        },
        {
          "type": "p",
          "text": "GLOBAQ's Aramco-qualified auditors have the competence and experience to conduct Schedule D safety assessments, including independent CSSP reviews, to evaluate contractor compliance and the implementation of required safety management arrangements."
        },
        {
          "type": "p",
          "text": "These assessments help project owners and contractors verify that site safety practices align with defined contractual requirements and identify deficiencies requiring corrective action."
        }
      ],
      "cards": [
        {
          "title": "What Does Our Schedule D Assessment Cover?",
          "blocks": [
            {
              "type": "p",
              "text": "Applicable Schedule D Requirements: Review of the relevant contractual safety and environmental obligations, project specifications and assessment criteria. Contractor Site Safety Program (CSSP): Evaluation of the contractor's site-specific safety programme, documented responsibilities and evidence demonstrating implementation of the required safety arrangements."
            },
            {
              "type": "p",
              "text": "Contractor Site Safety Plan Review: Examination of relevant site safety planning documents and associated safety procedures against the requirements applicable to the project's activities."
            },
            {
              "type": "p",
              "text": "Construction Safety Manual (CSM) Compliance: Assessment of implementation against relevant Saudi Aramco Construction Safety Manual provisions included within the agreed audit criteria."
            },
            {
              "type": "p",
              "text": "General Instructions and Project Requirements: Review of compliance with applicable Saudi Aramco General Instructions, project-specific safety procedures and other relevant contractual obligations."
            },
            {
              "type": "p",
              "text": "Safety and Environmental Management Systems: Evaluation of the procedures, responsibilities and controls established to manage applicable project safety and environmental requirements."
            },
            {
              "type": "p",
              "text": "Site Observations and Personnel Interviews: Verification of relevant safety management practices through site observations, records and discussions with responsible personnel, where applicable."
            },
            {
              "type": "p",
              "text": "Safety Gap and Nonconformity Identification: Identification and reporting of weaknesses, implementation gaps and departures from defined safety requirements."
            },
            {
              "type": "p",
              "text": "Corrective Action Recommendations: Practical recommendations to help project teams address identified findings and strengthen the implementation of relevant safety controls."
            },
            {
              "type": "p",
              "text": "GLOBAQ tailors each assessment to the applicable project contract, activities and assessment criteria rather than assuming identical Schedule D, CSSP or CSM requirements apply to every project."
            }
          ]
        },
        {
          "title": "When Is an Independent CSSP Review Required?",
          "blocks": [
            {
              "type": "p",
              "text": "Independent CSSP reviews may be required for certain Saudi Aramco construction projects, depending on the relevant contract and applicable safety requirements."
            },
            {
              "type": "p",
              "text": "These reviews are intended to verify whether the contractor's site-specific safety programme is implemented effectively and meets the defined contractual and safety criteria."
            },
            {
              "type": "p",
              "text": "The assessment may be conducted during project execution at intervals specified in the applicable contract or assessment requirements."
            },
            {
              "type": "p",
              "text": "GLOBAQ supports contractors and project organisations by conducting independent CSSP reviews within the agreed audit scope and documenting findings that require attention."
            }
          ]
        }
      ]
    },
    {
      "title": "Our Project Safety Assessment Process",
      "id": "our-project-safety-assessment-process",
      "intro": [],
      "cards": [
        {
          "title": "1. Safety Requirement and Scope Review",
          "blocks": [
            {
              "type": "p",
              "text": "We identify the applicable safety requirements, contractual obligations and agreed assessment scope."
            },
            {
              "type": "p",
              "text": "For Saudi Aramco projects, this includes determining the relevant Schedule D provisions, CSSP requirements, applicable CSM sections and General Instructions."
            }
          ]
        },
        {
          "title": "2. Safety Documentation Assessment",
          "blocks": [
            {
              "type": "p",
              "text": "Our auditors review relevant safety management procedures, Contractor Site Safety Program documentation, project-specific safety plans, documented controls and implementation records."
            },
            {
              "type": "p",
              "text": "The review establishes the relevant documentation and evidence requiring further verification during the assessment."
            }
          ]
        },
        {
          "title": "3. Safety Implementation Verification",
          "blocks": [
            {
              "type": "p",
              "text": "We evaluate available evidence through documentation, personnel interviews and site observations where applicable."
            },
            {
              "type": "p",
              "text": "For CSSP reviews and CSM compliance assessments, this includes examining whether relevant safety management requirements are reflected in actual project activities and site practices."
            }
          ]
        },
        {
          "title": "4. Findings and Assessment Reporting",
          "blocks": [
            {
              "type": "p",
              "text": "GLOBAQ documents identified safety gaps, nonconformities and opportunities for improvement against the defined assessment criteria."
            },
            {
              "type": "p",
              "text": "Findings are supported by relevant evidence to help project teams understand where implementation or compliance improvements are required."
            }
          ]
        },
        {
          "title": "5. Corrective Action Support",
          "blocks": [
            {
              "type": "p",
              "text": "We provide recommendations to help project teams address identified findings, strengthen implementation of safety management controls and improve readiness for subsequent assessments."
            }
          ]
        }
      ]
    },
    {
      "title": "Benefits of Project Safety and Schedule D Assessments",
      "id": "benefits-of-project-safety-and-schedule-d-assessments",
      "intro": [
        {
          "type": "p",
          "text": "Identify Safety Management Weaknesses: Recognise gaps in project safety management arrangements, CSSP implementation and operational safety controls."
        },
        {
          "type": "p",
          "text": "Strengthen Schedule D Compliance: Evaluate alignment with applicable contractual safety requirements, Saudi Aramco Construction Safety Manual provisions and relevant General Instructions."
        },
        {
          "type": "p",
          "text": "Improve CSSP Review Readiness: Identify deficiencies in the contractor's site safety programme and supporting evidence before or during required independent safety assessments."
        },
        {
          "type": "p",
          "text": "Enhance On-Site Safety Controls: Verify whether documented safety procedures and management controls are implemented effectively during relevant project activities."
        },
        {
          "type": "p",
          "text": "Support Continuous Improvement: Use objective assessment findings to guide corrective actions, address nonconformities and improve project safety management processes."
        }
      ],
      "cards": []
    },
    {
      "title": "Who Needs Project Safety Assessments?",
      "id": "who-needs-project-safety-assessments",
      "intro": [
        {
          "type": "p",
          "text": "Our project safety assessment services support EPC contractors, construction organisations, industrial project owners, safety management teams and organisations responsible for implementing contractual safety requirements."
        },
        {
          "type": "p",
          "text": "These services are particularly relevant to contractors working on Saudi Aramco projects where Schedule D, CSSP, CSM and other project-specific safety requirements apply."
        },
        {
          "type": "p",
          "text": "Independent safety assessments may also benefit organisations that require objective verification of their safety management system implementation, contractor compliance and on-site safety controls."
        },
        {
          "type": "p",
          "text": "GLOBAQ supports organisations seeking to identify safety management gaps, evaluate contractor performance against defined requirements and strengthen compliance during project execution."
        }
      ],
      "cards": []
    },
    {
      "title": "Why Choose GLOBAQ for Project Safety Assessment Services?",
      "id": "why-choose-globaq-for-project-safety-assessment-services",
      "intro": [
        {
          "type": "p",
          "text": "GLOBAQ provides independent, evidence-based project safety assessments supported by relevant auditor qualifications and project auditing experience across Saudi Arabia."
        },
        {
          "type": "p",
          "text": "Aramco-Qualified Safety Auditors: Our team includes Aramco-qualified auditors with the competence and experience to conduct Schedule D safety assessments and CSSP reviews. Experience in Saudi Project Audits: GLOBAQ's team has a documented track record of conducting project assessments across Saudi Arabia."
        },
        {
          "type": "p",
          "text": "Schedule D and CSSP Expertise: Our assessments focus on contractor safety programme implementation and applicable Saudi Aramco contractual safety requirements."
        },
        {
          "type": "p",
          "text": "Construction Safety Manual Compliance: We evaluate implementation against relevant CSM provisions and General Instructions included within the defined assessment scope."
        },
        {
          "type": "p",
          "text": "Project-Specific Assessment Approach: Rather than relying on generic safety checklists alone, our assessments focus on the actual contractual requirements and project activities being reviewed."
        },
        {
          "type": "p",
          "text": "Evidence-Based Reporting: We provide documented findings, relevant compliance observations and practical recommendations to support corrective action and stronger safety management performance."
        },
        {
          "type": "p",
          "text": "Based in Al Khobar, Saudi Arabia, GLOBAQ supports contractors and project organisations with independent safety assessments tailored to their specific project requirements."
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
          "title": "What is a project safety assessment?",
          "blocks": [
            {
              "type": "p",
              "text": "A project safety assessment is a structured evaluation of relevant safety management arrangements, procedures, operational controls and implementation evidence against defined project requirements."
            },
            {
              "type": "p",
              "text": "It helps identify compliance gaps, nonconformities and areas where safety management practices require improvement."
            }
          ]
        },
        {
          "title": "What is Saudi Aramco Schedule D?",
          "blocks": [
            {
              "type": "p",
              "text": "Saudi Aramco Schedule D refers to contractual safety and environmental requirements included in applicable Saudi Aramco project contracts."
            },
            {
              "type": "p",
              "text": "These requirements may include the implementation of project-specific safety and environmental management systems, relevant Construction Safety Manual provisions, General Instructions and independent safety assessments."
            },
            {
              "type": "p",
              "text": "The exact obligations depend on the project's contractual requirements."
            }
          ]
        },
        {
          "title": "What is a CSSP review?",
          "blocks": [
            {
              "type": "p",
              "text": "A CSSP review is an assessment of the Contractor Site Safety Program and its implementation at the project site."
            },
            {
              "type": "p",
              "text": "For applicable Saudi Aramco projects, independent CSSP reviews evaluate whether the contractor's site safety arrangements are being implemented in accordance with relevant Schedule D, CSM and contractual requirements."
            },
            {
              "type": "p",
              "text": "GLOBAQ provides these assessments through Aramco-qualified auditors."
            }
          ]
        },
        {
          "title": "What is the difference between a Contractor Site Safety Plan and a CSSP?",
          "blocks": [
            {
              "type": "p",
              "text": "A Contractor Site Safety Plan generally describes the safety arrangements, procedures and responsibilities established for activities at a particular project site."
            },
            {
              "type": "p",
              "text": "Under Saudi Aramco terminology, CSSP refers to the Contractor Site Safety Program, which addresses the contractor's site-specific safety management arrangements and their implementation."
            },
            {
              "type": "p",
              "text": "The required documents, content and approval arrangements depend on the applicable contract and Saudi Aramco requirements."
            }
          ]
        },
        {
          "title": "What is a CSM audit?",
          "blocks": [
            {
              "type": "p",
              "text": "A CSM audit is a review of compliance with relevant provisions of the Saudi Aramco Construction Safety Manual."
            },
            {
              "type": "p",
              "text": "It can involve examining safety procedures, implementation records and actual site practices against the applicable CSM requirements."
            },
            {
              "type": "p",
              "text": "GLOBAQ can incorporate CSM compliance verification into project safety assessments where these requirements form part of the agreed audit scope."
            }
          ]
        },
        {
          "title": "What does a Schedule D safety assessment include?",
          "blocks": [
            {
              "type": "p",
              "text": "A Schedule D assessment may include review of applicable contractual safety requirements, safety management documentation, CSSP implementation, relevant CSM provisions, General Instructions, site observations and personnel interviews."
            },
            {
              "type": "p",
              "text": "The assessment identifies relevant compliance gaps and documents findings requiring corrective action."
            }
          ]
        },
        {
          "title": "When is an independent CSSP review required?",
          "blocks": [
            {
              "type": "p",
              "text": "Independent CSSP reviews may be required for certain Saudi Aramco construction projects under applicable Schedule D contractual provisions. The need for an independent assessment, its timing and the required review frequency depend on the project's contract and applicable Saudi Aramco requirements."
            }
          ]
        },
        {
          "title": "Does GLOBAQ conduct construction safety audits for non-Aramco projects?",
          "blocks": [
            {
              "type": "p",
              "text": "GLOBAQ provides project safety assessments tailored to applicable contractual and project-specific requirements."
            },
            {
              "type": "p",
              "text": "For non-Aramco projects, the assessment scope can be established according to the client's safety management arrangements, project obligations and agreed evaluation criteria."
            }
          ]
        },
        {
          "title": "What will we receive after a project safety assessment?",
          "blocks": [
            {
              "type": "p",
              "text": "GLOBAQ provides documented assessment findings identifying relevant safety management gaps, nonconformities and improvement opportunities."
            },
            {
              "type": "p",
              "text": "The findings can support corrective action planning and improvements to project safety management controls."
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
      "title": "Request Project Safety or Schedule D Assessment Services",
      "id": "request-project-safety-or-schedule-d-assessment-services",
      "intro": [
        {
          "type": "p",
          "text": "Need an independent evaluation of your project's safety management arrangements, a Saudi Aramco Schedule D assessment or a CSSP review?"
        },
        {
          "type": "p",
          "text": "GLOBAQ provides project safety assessments covering relevant contractual safety requirements, Contractor Site Safety Program implementation and Construction Safety Manual compliance."
        },
        {
          "type": "p",
          "text": "Contact our team to discuss your project scope, applicable Schedule D obligations, CSSP review requirements and assessment needs."
        },
        {
          "type": "cta",
          "text": "Discuss Your Schedule D or Project Safety Assessment"
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

const heroImage = { src: "/aramco-safety.jpg", width: 678, height: 452 };

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
  const [requirement, purpose, timing, support] = followUp.blocks;
  const criteria = coverage.blocks.slice(0, -1);
  const scopeNote = coverage.blocks.slice(-1);
  // The source stores two criteria in one paragraph. Display each in its own card.
  const firstCriterion = criteria[0];
  const csspStart = firstCriterion.text.indexOf(" Contractor Site Safety Program (CSSP):");
  const coverageCards = [
    { ...firstCriterion, text: firstCriterion.text.slice(0, csspStart) },
    { ...firstCriterion, text: firstCriterion.text.slice(csspStart + 1) },
    ...criteria.slice(1),
  ];

  return (
    <ContentSection section={section} background="border-y border-orange-100 bg-gradient-to-br from-orange-50/60 via-white to-gray-50">
      <div data-reveal className="mb-10 max-w-4xl border-l-4 border-orange-500 pl-5 sm:pl-6 [&_p:last-child]:mb-0">
        <Copy blocks={section.intro} />
      </div>

      <h3 data-reveal className="mb-5 text-xl font-bold leading-snug text-gray-800 sm:text-2xl">
        {coverage.title}
      </h3>
      <CoverageFlipCards blocks={coverageCards} />
      <div data-reveal className="mt-6 rounded-xl border border-orange-100 bg-orange-50 px-5 py-5 sm:px-7 [&_p:last-child]:mb-0">
        <Copy blocks={scopeNote} />
      </div>

      <div data-reveal className="mt-12 overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-sm">
        <div className="border-b border-orange-100 bg-gradient-to-br from-orange-100/80 via-orange-50 to-white px-5 py-6 sm:p-8">
          <div className="mb-4 flex items-start gap-4 sm:items-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-700 text-white">
              <AuditIcon kind="safety" />
            </span>
            <h3 className="text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl">
              {followUp.title}
            </h3>
          </div>
          <p className="!mb-0 max-w-4xl text-base !text-gray-700 sm:text-lg">{requirement.text}</p>
        </div>

        <div className="p-5 sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-800">
                <AuditIcon kind="quality" className="h-5 w-5" />
              </span>
              <p className="!mb-0">{purpose.text}</p>
            </div>
            <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-800">
                <AuditIcon kind="project" className="h-5 w-5" />
              </span>
              <p className="!mb-0">{timing.text}</p>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-4 rounded-2xl border border-orange-100 bg-orange-50 px-4 py-5 sm:px-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-orange-800 ring-1 ring-orange-200">
              <AuditIcon kind="supplier" className="h-5 w-5" />
            </span>
            <p className="!mb-0 max-w-4xl">{support.text}</p>
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

export default function ProjectSafetyAssessment() {
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
