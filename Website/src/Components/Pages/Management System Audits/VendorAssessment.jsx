/* eslint-disable react/prop-types -- Presentational helpers use the unchanged local page content. */
import { useEffect, useRef, useId, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

const page = {
  "title": "Vendor Assessment and Supplier Audit Services in Saudi Arabia",
  "metaTitle": "Vendor Assessment & Supplier Audit Services in Saudi Arabia",
  "description": "GLOBAQ provides vendor assessments and supplier audits in Saudi Arabia, including QMS and technical evaluations for Aramco and non-Aramco projects.",
  "path": "/services/management-system-audits-saudi-arabia/vendor-assessment/",
  "label": "Vendor Assessment",
  "sections": [
    {
      "title": "Evaluate Supplier Capabilities, Compliance and Performance with Confidence",
      "id": "evaluate-supplier-capabilities-compliance-and-performance-with-confidence",
      "intro": [
        {
          "type": "p",
          "text": "Make informed supplier selection and approval decisions with independent vendor assessment and supplier audit services from GLOBAQ."
        },
        {
          "type": "p",
          "text": "We help organisations across Saudi Arabia evaluate supplier capabilities, quality management systems (QMS), technical competence and operational readiness against defined contractual and project requirements."
        },
        {
          "type": "p",
          "text": "Our assessments support supplier qualification and ongoing performance evaluation for both Saudi Aramco and non-Aramco projects."
        },
        {
          "type": "cta",
          "text": "Request a Vendor Assessment"
        }
      ],
      "cards": []
    },
    {
      "title": "Independent Vendor Assessment Services in Saudi Arabia",
      "id": "independent-vendor-assessment-services-in-saudi-arabia",
      "intro": [
        {
          "type": "p",
          "text": "Choosing the right supplier is essential for maintaining quality, reducing procurement risks and ensuring reliable project delivery."
        },
        {
          "type": "p",
          "text": "GLOBAQ (Global Quality Specialists Company Limited) provides independent vendor assessments and supplier audits to help organisations determine whether existing or potential suppliers have the necessary capabilities, resources and management controls to meet their requirements. Our services include Vendor Assessments combining Quality Management System (QMS) reviews and Technical Evaluations (TE), conducted by CQI-IRCA-approved lead auditors."
        },
        {
          "type": "p",
          "text": "These assessments examine supplier quality management arrangements, technical competence, operational capacity, documented processes and implementation practices against applicable project requirements and industry standards."
        },
        {
          "type": "p",
          "text": "We conduct supplier evaluations for initial qualification, vendor selection and ongoing performance monitoring, including on-site assessments where required."
        },
        {
          "type": "p",
          "text": "Using objective evidence and structured reporting, we help procurement teams, project owners and contractors identify supplier weaknesses, evaluate technical suitability and make informed approval decisions."
        }
      ],
      "cards": []
    },
    {
      "title": "What Our Vendor Assessment Services Cover?",
      "id": "what-our-vendor-assessment-services-cover",
      "intro": [],
      "cards": [
        {
          "title": "Supplier Quality Management System (QMS) Assessment",
          "blocks": [
            {
              "type": "p",
              "text": "We review the supplier's quality management arrangements, documented procedures, responsibilities and relevant operational controls to evaluate their conformity with defined requirements."
            },
            {
              "type": "p",
              "text": "Our assessment considers how effectively the supplier's QMS is implemented and maintained, including the availability of supporting records and evidence of compliance with applicable contractual and industry requirements."
            },
            {
              "type": "p",
              "text": "The objective is to identify management system gaps that could affect the supplier's ability to consistently meet customer and project quality expectations."
            }
          ]
        },
        {
          "title": "Technical Capability and Competency Evaluation",
          "blocks": [
            {
              "type": "p",
              "text": "A supplier may have documented quality procedures but still lack the technical resources or competence necessary to meet specific project requirements."
            },
            {
              "type": "p",
              "text": "GLOBAQ conducts technical evaluations alongside QMS assessments to examine whether suppliers have the relevant technical capabilities, qualified personnel, equipment and operational resources to fulfil their contractual obligations."
            },
            {
              "type": "p",
              "text": "Evaluations are based on the technical specifications, project requirements and applicable industry standards relevant to the supplier's scope of work."
            },
            {
              "type": "p",
              "text": "This combined QMS + Technical Evaluation approach helps organisations assess both management system compliance and supplier technical suitability."
            }
          ]
        },
        {
          "title": "Supplier Capacity and Operational Readiness",
          "blocks": [
            {
              "type": "p",
              "text": "We evaluate relevant facilities, resources, production or service capacity and organisational readiness against the agreed supply requirements."
            },
            {
              "type": "p",
              "text": "Depending on the assessment scope, this may include reviewing available personnel, operational infrastructure and the supplier's ability to carry out the required manufacturing, fabrication or service activities."
            },
            {
              "type": "p",
              "text": "These assessments help procurement teams and project organisations identify capability limitations before making supplier qualification or selection decisions."
            }
          ]
        },
        {
          "title": "Supplier Compliance and Process Review",
          "blocks": [
            {
              "type": "p",
              "text": "Our auditors examine documented processes, implementation records and relevant management controls to identify gaps against applicable customer, contractual or technical requirements."
            },
            {
              "type": "p",
              "text": "For Aramco-related projects, the assessment criteria may include relevant project specifications and applicable Saudi Aramco supplier requirements."
            },
            {
              "type": "p",
              "text": "For non-Aramco projects, evaluations are tailored to the client's contractual obligations, technical specifications and relevant industry standards."
            },
            {
              "type": "p",
              "text": "The focus is on verifying actual implementation against defined requirements, rather than reviewing documentation alone."
            }
          ]
        },
        {
          "title": "On-Site Vendor Assessments",
          "blocks": [
            {
              "type": "p",
              "text": "Where required, GLOBAQ conducts on-site supplier assessments to verify relevant operational practices, technical capabilities and management system implementation."
            },
            {
              "type": "p",
              "text": "On-site evaluations provide an opportunity to review facilities, examine documented evidence, interview responsible personnel and assess whether supplier operations align with stated capabilities and project expectations."
            },
            {
              "type": "p",
              "text": "These assessments may be carried out during initial supplier qualification or as part of an ongoing supplier performance evaluation programme."
            }
          ]
        },
        {
          "title": "Assessment Reporting and Recommendations",
          "blocks": [
            {
              "type": "p",
              "text": "We provide evidence-based assessment findings that identify relevant compliance gaps, technical capability concerns, nonconformities and improvement opportunities against the agreed evaluation criteria."
            },
            {
              "type": "p",
              "text": "Our reports help organisations understand supplier strengths and weaknesses and support informed qualification, approval and supplier development decisions. Where applicable, recommendations also help suppliers and procurement teams prioritise corrective actions and improvements."
            }
          ]
        }
      ]
    },
    {
      "title": "Our Vendor Assessment Process",
      "id": "our-vendor-assessment-process",
      "intro": [],
      "cards": [
        {
          "title": "1. Assessment Planning",
          "blocks": [
            {
              "type": "p",
              "text": "We establish the supplier assessment objectives, applicable contractual requirements, technical specifications and evaluation criteria."
            },
            {
              "type": "p",
              "text": "The assessment scope is aligned with the supplier's activities, the client's requirements and the purpose of the evaluation, whether for initial qualification or ongoing performance monitoring."
            }
          ]
        },
        {
          "title": "2. Documentation Review",
          "blocks": [
            {
              "type": "p",
              "text": "Our auditors examine relevant supplier quality management documentation, operational procedures, technical information and supporting records."
            },
            {
              "type": "p",
              "text": "The review helps identify areas requiring further verification during the supplier evaluation."
            }
          ]
        },
        {
          "title": "3. Supplier QMS and Technical Capability Assessment",
          "blocks": [
            {
              "type": "p",
              "text": "We evaluate management system implementation, technical competence, available resources, operational capacity and conformity with defined requirements."
            },
            {
              "type": "p",
              "text": "Where an on-site assessment is included, auditors examine relevant supplier operations and collect objective evidence through document reviews, personnel discussions and operational observations."
            }
          ]
        },
        {
          "title": "4. Findings and Reporting",
          "blocks": [
            {
              "type": "p",
              "text": "Assessment results are documented against the agreed QMS, technical and contractual evaluation criteria."
            },
            {
              "type": "p",
              "text": "The findings identify relevant nonconformities, capability gaps and improvement opportunities, supported by available assessment evidence."
            }
          ]
        },
        {
          "title": "5. Improvement Recommendations",
          "blocks": [
            {
              "type": "p",
              "text": "We provide practical recommendations to support supplier qualification, approval decisions and corrective action planning."
            },
            {
              "type": "p",
              "text": "The findings can also inform future supplier monitoring and reassessment activities where required by the client's supplier management programme."
            }
          ]
        }
      ]
    },
    {
      "title": "Benefits of Independent Supplier Audits",
      "id": "benefits-of-independent-supplier-audits",
      "intro": [
        {
          "type": "p",
          "text": "Reduce Supplier-Related Risks: Identify potential quality management, technical capability and compliance weaknesses before they affect procurement decisions or project execution."
        },
        {
          "type": "p",
          "text": "Improve Supplier Selection: Make purchasing and qualification decisions using structured QMS and technical evaluation findings rather than relying on supplier declarations or price alone."
        },
        {
          "type": "p",
          "text": "Strengthen Quality Assurance: Verify whether supplier management processes and operational controls meet relevant quality requirements and project specifications."
        },
        {
          "type": "p",
          "text": "Support Supplier Development: Identify nonconformities and improvement opportunities that can guide corrective actions and ongoing supplier performance management."
        },
        {
          "type": "p",
          "text": "Improve Supply Chain Confidence: Gain a clearer, evidence-based understanding of supplier capabilities, technical suitability and operational readiness."
        }
      ],
      "cards": []
    },
    {
      "title": "When Should You Conduct a Vendor Assessment?",
      "id": "when-should-you-conduct-a-vendor-assessment",
      "intro": [
        {
          "type": "p",
          "text": "Vendor assessments can support different stages of supplier selection and management."
        },
        {
          "type": "p",
          "text": "Before Supplier Approval: Evaluate whether a potential supplier meets defined QMS, technical and contractual requirements before qualification or onboarding."
        },
        {
          "type": "p",
          "text": "During Supplier Prequalification: Compare supplier capabilities and suitability against established procurement or project-specific evaluation criteria."
        },
        {
          "type": "p",
          "text": "Before Project Mobilisation: Assess whether a selected supplier has the resources, technical competence and operational readiness needed to fulfil its project obligations."
        },
        {
          "type": "p",
          "text": "During Ongoing Supplier Evaluation: Review existing suppliers to identify implementation gaps, assess continued suitability and support performance improvement."
        },
        {
          "type": "p",
          "text": "When Supplier Performance Concerns Arise: Conduct an independent assessment to identify weaknesses in relevant quality management arrangements, technical capabilities or operational practices."
        }
      ],
      "cards": []
    },
    {
      "title": "Who Needs Vendor Assessment Services?",
      "id": "who-needs-vendor-assessment-services",
      "intro": [
        {
          "type": "p",
          "text": "GLOBAQ supports organisations that require independent supplier evaluations, including procurement departments, EPC contractors, construction companies, industrial businesses, project owners and supplier quality assurance teams. Our vendor assessment services are particularly relevant to organisations working on Saudi Aramco and non-Aramco projects where supplier suitability must be assessed against defined QMS, technical or contractual requirements."
        },
        {
          "type": "p",
          "text": "These assessments are useful during supplier prequalification, initial selection, project mobilisation and ongoing supplier performance reviews."
        }
      ],
      "cards": []
    },
    {
      "title": "Why Choose GLOBAQ for Vendor Assessment Services?",
      "id": "why-choose-globaq-for-vendor-assessment-services",
      "intro": [
        {
          "type": "p",
          "text": "GLOBAQ delivers independent, evidence-based vendor assessments focused on practical business, contractual and project requirements."
        },
        {
          "type": "p",
          "text": "Qualified Lead Auditors: Our team includes CQI-IRCA-approved lead auditors who conduct vendor assessments and technical evaluations."
        },
        {
          "type": "p",
          "text": "Combined QMS and Technical Evaluation: We assess supplier quality management system compliance alongside technical capability, providing a more complete understanding of supplier suitability."
        },
        {
          "type": "p",
          "text": "Aramco and Non-Aramco Project Coverage: Our vendor assessment services support organisations working on Saudi Aramco projects as well as projects governed by other client and industry requirements."
        },
        {
          "type": "p",
          "text": "On-Site Supplier Evaluation: Where required, our auditors conduct on-site assessments to examine actual practices and verify supplier capabilities against defined criteria."
        },
        {
          "type": "p",
          "text": "Project-Specific Assessment Criteria: We tailor each assessment to the supplier's scope of work, applicable technical specifications, contractual requirements and client expectations."
        },
        {
          "type": "p",
          "text": "Practical Reporting: Our assessments provide documented findings and recommendations that support supplier qualification, corrective action planning and performance improvement."
        },
        {
          "type": "p",
          "text": "Based in Al Khobar, Saudi Arabia, GLOBAQ helps organisations make informed supplier decisions through structured quality management and technical capability assessments."
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
          "title": "What is a vendor assessment?",
          "blocks": [
            {
              "type": "p",
              "text": "A vendor assessment is a structured evaluation of a supplier's capabilities, management systems, resources and ability to meet specified business, technical or contractual requirements. GLOBAQ's vendor assessment services include combined QMS compliance reviews and technical evaluations to help organisations determine supplier suitability."
            }
          ]
        },
        {
          "title": "What is the difference between a vendor assessment and a supplier audit?",
          "blocks": [
            {
              "type": "p",
              "text": "The terms often overlap. Vendor assessments may cover broader supplier capability and suitability, including management systems, technical competence and operational resources."
            },
            {
              "type": "p",
              "text": "Supplier audits typically involve a structured review of processes, controls and objective evidence against defined audit criteria."
            },
            {
              "type": "p",
              "text": "GLOBAQ's approach combines relevant management system and technical evaluation activities according to the agreed assessment scope."
            }
          ]
        },
        {
          "title": "What does QMS + Technical Evaluation mean in vendor assessments?",
          "blocks": [
            {
              "type": "p",
              "text": "QMS + Technical Evaluation combines a review of the supplier's quality management system with an assessment of its technical capabilities."
            },
            {
              "type": "p",
              "text": "The QMS assessment examines conformity with defined management system requirements, while the technical evaluation considers the supplier's competence, resources and ability to meet applicable project specifications."
            },
            {
              "type": "p",
              "text": "Together, these evaluations help determine whether a supplier has both the management controls and technical capacity needed to fulfil contractual requirements."
            }
          ]
        },
        {
          "title": "Does GLOBAQ provide vendor assessments for Saudi Aramco projects?",
          "blocks": [
            {
              "type": "p",
              "text": "Yes. GLOBAQ provides vendor assessments and technical evaluations for Saudi Aramco projects, using qualified lead auditors to evaluate supplier QMS compliance and technical capabilities against applicable project requirements."
            },
            {
              "type": "p",
              "text": "The specific assessment scope depends on the supplier's activities, contractual obligations and relevant technical specifications."
            }
          ]
        },
        {
          "title": "Does GLOBAQ assess suppliers for non-Aramco projects?",
          "blocks": [
            {
              "type": "p",
              "text": "Yes. GLOBAQ's vendor assessment services are available for both Aramco and non-Aramco projects."
            },
            {
              "type": "p",
              "text": "For non-Aramco projects, the assessment criteria are established according to the client's supplier qualification requirements, contractual obligations and applicable industry standards."
            }
          ]
        },
        {
          "title": "When should a supplier assessment be conducted?",
          "blocks": [
            {
              "type": "p",
              "text": "Supplier assessments may be conducted before approval, during prequalification, before project mobilisation, when performance concerns arise or as part of an ongoing supplier monitoring programme."
            },
            {
              "type": "p",
              "text": "The timing depends on the organisation's procurement procedures, project requirements and supplier risk considerations."
            }
          ]
        },
        {
          "title": "What is the difference between a vendor assessment and a third-party vendor inspection?",
          "blocks": [
            {
              "type": "p",
              "text": "A vendor assessment evaluates a supplier's management system, technical competence, resources and suitability against defined requirements."
            },
            {
              "type": "p",
              "text": "A third-party vendor inspection focuses on verifying specified products, materials or manufacturing activities against applicable technical specifications and inspection requirements."
            },
            {
              "type": "p",
              "text": "GLOBAQ provides both vendor assessments and third-party inspection services, allowing organisations to select the service appropriate to their procurement or project needs."
            }
          ]
        },
        {
          "title": "What will we receive after a vendor assessment?",
          "blocks": [
            {
              "type": "p",
              "text": "GLOBAQ provides documented assessment findings covering relevant QMS compliance gaps, technical capability concerns, identified nonconformities and improvement opportunities."
            },
            {
              "type": "p",
              "text": "The specific deliverables depend on the agreed scope, and the findings can support supplier approval decisions, corrective action planning and ongoing supplier evaluation."
            }
          ]
        }
      ]
    },
    {
      "title": "Request Vendor Assessment Services in Saudi Arabia",
      "id": "request-vendor-assessment-services-in-saudi-arabia",
      "intro": [
        {
          "type": "p",
          "text": "Need to evaluate a potential supplier or assess the performance of an existing vendor?"
        },
        {
          "type": "p",
          "text": "GLOBAQ provides independent supplier audits and QMS + Technical Evaluations for Aramco and non-Aramco projects across Saudi Arabia."
        },
        {
          "type": "p",
          "text": "Contact our team to discuss your supplier qualification objectives, technical requirements and assessment scope."
        },
        {
          "type": "cta",
          "text": "Request a Vendor Assessment"
        },
        {
          "type": "cta",
          "text": "Discuss Your Supplier Audit Requirements"
        }
      ],
      "cards": []
    }
  ]
};
const parentPath = "/services/management-system-audits-saudi-arabia/";

function Copy({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === "cta") return <Link key={index} to="/ContactUs" className={`my-2 mr-3 inline-flex max-w-full items-center justify-center gap-4 rounded-lg border border-orange-700 px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${block.text === "Request a Quote" ? "bg-transparent text-orange-700 hover:bg-orange-100" : "bg-orange-700 text-white hover:bg-orange-800 hover:shadow-md"}`}>{block.text}<span aria-hidden="true">↗</span></Link>;
    return <p key={index}>{block.text}</p>;
  });
}

function CoverageFlipCards({ blocks }) {
  const icons = ["quality", "safety", "supplier", "project", "quality", "safety"];

  return (
    <div className={"grid gap-5 sm:grid-cols-2 lg:grid-cols-3"}>
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

function CoverageFlipCard({ heading, description, icon, className = "" }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const descriptionId = useId();

  return (
    <div data-reveal className={`min-w-0 ${className}`}>
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
        onClick={() => setIsFlipped((previous) => !previous)}
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
    if (index !== activeService) {
      setActiveService(index);
    }
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
      data-landing-section
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
                  kind={icons[index]}
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

                {renderDescription(card, index, "desktop")}
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
                      kind={icons[index]}
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
                  {renderDescription(card, index, "mobile")}
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
    <section id={section.id} data-landing-section className="scroll-mt-44 overflow-hidden border-y border-orange-100 bg-gradient-to-br from-orange-50/60 via-white to-gray-50 py-14 lg:py-20">
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

  const moveBenefit = (direction, focusTab = false) => {
    const next = (activeBenefit + direction + section.cards.length) % section.cards.length;
    setActiveBenefit(next);
    if (focusTab) tabRefs.current[next]?.focus();
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
    <section id={section.id} data-landing-section className="scroll-mt-44 border-y border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white py-14 lg:py-20">
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
  const audienceTerms = ["procurement departments", "EPC contractors", "construction companies", "industrial businesses", "project owners", "supplier quality assurance teams"];
  const lead = section.intro[0];
  const leadParts = lead?.text.split(new RegExp(`(${audienceTerms.join("|")})`, "g")) || [];

  return (
    <section id={section.id} data-landing-section className="relative scroll-mt-44 border-b border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mb-8 max-w-4xl">
          <span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-orange-500" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-800 lg:text-4xl">{section.title}</h2>
        </div>

        {lead && <div data-reveal data-delay="80" className="relative overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div aria-hidden="true" className="absolute top-0 left-0 h-full w-1 bg-orange-500" />
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:gap-7">
            <span aria-hidden="true" className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-white text-orange-600 shadow-sm"><AuditIcon kind="supplier" className="h-8 w-8" /></span>
            <p className="!mb-0 max-w-5xl text-lg leading-relaxed !text-gray-700 lg:text-xl">{leadParts.map((part, index) => audienceTerms.includes(part) ? <strong key={index} className="font-semibold text-orange-800">{part}</strong> : part)}</p>
          </div>
        </div>}

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {section.intro.slice(1).map((block, index) => <div key={block.text} data-reveal data-delay={120 + index * 100} className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-950/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8">
            <span aria-hidden="true" className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-700 transition-colors group-hover:bg-orange-100"><AuditIcon kind={index === 0 ? "project" : "quality"} className="h-6 w-6" /></span>
            <div className="[&_p]:text-base [&_p]:leading-relaxed [&_p:last-child]:mb-0"><Copy blocks={[block]} /></div>
          </div>)}
        </div>
      </div>
    </section>
  );
}

function WhyChooseAuditSection({ section }) {
  const isCapability = (block) => {
    const colon = block.text.indexOf(":");
    return block.type === "p" && colon > 0 && colon < 75 && block.text.slice(colon + 1).trim().length > 0;
  };
  const capabilities = section.intro.filter(isCapability);
  const first = section.intro.findIndex(isCapability);
  const last = section.intro.reduce((lastIndex, block, index) => isCapability(block) ? index : lastIndex, -1);

  return (
    <section id={section.id} data-landing-section className="scroll-mt-44 bg-gray-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mb-8 max-w-4xl"><span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-orange-500" /><h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-800 lg:text-4xl">{section.title}</h2></div>
        {capabilities.length > 0 ? <>
          <div data-reveal className="mb-9 max-w-4xl border-l-4 border-orange-500 pl-5 sm:pl-6 [&_p:first-child]:text-lg [&_p:first-child]:leading-relaxed [&_p:first-child]:text-gray-700 [&_p:last-child]:mb-0 [&_p:last-child]:mt-4 [&_p:last-child]:text-sm [&_p:last-child]:font-semibold [&_p:last-child]:text-orange-800"><Copy blocks={section.intro.slice(0, first)} /></div>
          <CoverageFlipCards blocks={capabilities} balanced />
          {last < section.intro.length - 1 && <div data-reveal className="mt-9 rounded-2xl border border-orange-100 bg-orange-50/70 px-6 py-6 sm:px-8 [&_p]:m-0 [&_p]:max-w-5xl [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-gray-700"><Copy blocks={section.intro.slice(last + 1)} /></div>}
        </> : <Copy blocks={section.intro} />}
      </div>
    </section>
  );
}

function Paragraphs({ blocks }) {
  const groups = [];
  for (const block of blocks) {
    const colon = block.text.indexOf(":");
    const labelled = block.type === "p" && colon > 0 && colon < 85;
    if (labelled) {
      if (groups[groups.length - 1]?.type !== "cards") groups.push({ type: "cards", blocks: [] });
      groups[groups.length - 1].blocks.push(block);
    } else groups.push({ type: "copy", blocks: [block] });
  }
  return groups.map((group, i) => group.type === "cards"
    ? <CoverageFlipCards key={i} blocks={group.blocks} />
    : <div key={i} data-reveal className="mb-6 max-w-4xl"><Copy blocks={group.blocks} /></div>);
}

// Presentation adapter: retain the full original wording, including each colon.
function asCards(section) {
  return { ...section, intro: [], cards: section.intro.map((block) => {
    const colon = block.text.indexOf(":");
    return { title: block.text.slice(0, colon + 1), blocks: [{ ...block, text: block.text.slice(colon + 1) }] };
  }) };
}

export default function VendorAssessment() {
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

  const hero = page.sections[0];
  return (
    <article ref={pageRef} className="bg-white pt-[76px] text-base leading-relaxed text-gray-800 break-words max-md:pt-[50px] [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-600 [&_strong]:font-semibold [&_a]:transition-all [&_a]:duration-200 [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-orange-700 motion-reduce:[&_a]:transition-none">
      <SEO title={page.metaTitle} description={page.description} path={page.path} />
      <PageSchema id="page-schema-service" data={{
        "@context": "https://schema.org", "@type": "Service", name: page.title,
        description: page.description, url: `https://globaqksa.com${page.path}`,
        provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
      }} />
      <header data-landing-section className="overflow-hidden border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.85fr] lg:gap-14">
          <div>
            <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-xs text-gray-500"><Link to={parentPath} className="hover:text-orange-700">Management System Audits</Link><span aria-hidden="true">/</span><span aria-current="page">{page.label}</span></nav>
            <h1 data-reveal className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">{page.title.slice(0, page.title.indexOf("in Saudi Arabia"))}<span className="text-orange-700">{page.title.slice(page.title.indexOf("in Saudi Arabia"))}</span></h1>
            <h2 data-reveal data-delay="120" className="mb-5 max-w-2xl text-lg font-semibold leading-relaxed">{hero.title}</h2>
            <div data-reveal data-delay="220"><Copy blocks={hero.intro.filter((block) => block.type !== "cta")} /></div>
            <div data-reveal data-delay="320" className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3"><Copy blocks={hero.intro.filter((block) => block.type === "cta")} /></div>
          </div>
          <figure data-reveal data-delay="240" className="group relative isolate m-0">
            <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[28px] border border-orange-200 sm:-inset-4" />
            <div className="relative overflow-hidden rounded-2xl bg-orange-100 shadow-2xl shadow-orange-950/10">
              <img src="/audit.jpg" alt="" width="1024" height="536" fetchPriority="high" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out lg:group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-950/10 via-transparent to-orange-400/10" />
            </div>
          </figure>
        </div>
      </header>

      {page.sections.slice(1).map((section, index) => {
        if (section.id === "what-our-vendor-assessment-services-cover") return <AuditServicesExplorer key={section.id} section={section} />;
        if (section.id === "our-vendor-assessment-process") return <AuditProcessDiagram key={section.id} section={section} />;
        if (section.id === "benefits-of-independent-supplier-audits") return <AuditBenefitsSection key={section.id} section={asCards(section)} />;
        if (section.id === "who-needs-vendor-assessment-services") return <AuditAudienceSection key={section.id} section={section} />;
        if (section.title.startsWith("Why Choose")) return <WhyChooseAuditSection key={section.id} section={section} />;
        const faq = section.title === "Frequently Asked Questions";
        const enquiry = section.title.startsWith("Request ");
        return <section key={section.id} id={section.id} className={`scroll-mt-44 py-14 lg:py-20 ${enquiry ? "border-t border-orange-100 bg-gradient-to-r from-orange-100 to-amber-100" : index % 2 ? "bg-gray-50" : "bg-white"}`}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div data-reveal className="mb-8 max-w-4xl"><span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-orange-500" /><h2 className="text-3xl font-bold leading-tight tracking-tight lg:text-4xl">{section.title}</h2></div>
            {faq ? <div className="grid max-w-5xl gap-3">{section.cards.map((card) => <details key={card.title} data-reveal className="group overflow-hidden rounded-xl border border-gray-200 bg-white open:border-orange-200">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 focus-visible:outline-2 focus-visible:outline-orange-700 group-open:bg-orange-50 sm:px-7 [&::-webkit-details-marker]:hidden"><h3 className="m-0 flex-1 text-base font-semibold leading-snug">{card.title}</h3><span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center text-xl text-orange-700 after:content-['+'] group-open:after:content-['−']" /></summary>
              <div className="px-5 pt-5 pb-1 text-sm sm:px-7"><Copy blocks={card.blocks} /></div>
            </details>)}</div> : <>
              <div data-reveal><Paragraphs blocks={section.intro} /></div>

            </>}
          </div>
        </section>;
      })}
    </article>
  );
}
