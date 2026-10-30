import { useEffect, useRef } from "react";
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

const cardStyle = "min-w-0 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-gray-900/5 sm:p-7 [&_h3]:mb-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:leading-snug [&_p]:text-sm motion-reduce:transition-none motion-reduce:hover:translate-y-0";

function Copy({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === "cta") return <Link key={index} to="/ContactUs" className={`my-2 mr-3 inline-flex max-w-full items-center justify-center gap-4 rounded-lg border border-orange-700 px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${block.text === "Request a Quote" ? "bg-transparent text-orange-700 hover:bg-orange-100" : "bg-orange-700 text-white hover:bg-orange-800 hover:shadow-md"}`}>{block.text}<span aria-hidden="true">↗</span></Link>;
    return <p key={index}>{block.text.replace(/^●\s*/, "")}</p>;
  });
}

function Paragraphs({ blocks }) {
  // Consecutive labelled points become separate cards without changing their order or wording.
  const groups = [];
  for (const block of blocks) {
    const colon = block.text.indexOf(":");
    const labelled = block.type === "p" && colon > 0 && colon < 85;
    if (labelled) {
      if (groups[groups.length - 1]?.type !== "cards") groups.push({ type: "cards", blocks: [] });
      groups[groups.length - 1].blocks.push(block);
    } else groups.push({ type: "copy", blocks: [block] });
  }
  return groups.map((group, i) => group.type === "cards" ? <div key={i} className="my-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{group.blocks.map((block, j) => {
    const colon = block.text.indexOf(":");
    return <div key={j} data-reveal className={cardStyle}><h3>{block.text.slice(0, colon + 1).replace(/^●\s*/, "")}</h3><p>{block.text.slice(colon + 1).trim()}</p></div>;
  })}</div> : <div key={i} className="max-w-4xl"><Copy blocks={group.blocks} /></div>);
}

export default function VendorAssessment() {
  const pageRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.animate?.([
          { opacity: 0.35, transform: "translateY(136px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 1500, easing: "ease-out" });
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
      <header className="border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8" data-reveal>
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-xs text-gray-500"><Link to={parentPath} className="hover:text-orange-700">Management System Audits</Link><span aria-hidden="true">/</span><span aria-current="page">{page.label}</span></nav>
          <h1 className="mb-6 max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">{page.title}</h1>
          <h2 className="mb-5 max-w-4xl text-lg font-semibold leading-relaxed text-orange-800 sm:text-xl">{hero.title}</h2>
          <div className="max-w-4xl"><Copy blocks={hero.intro} /></div>
        </div>
      </header>

      {page.sections.slice(1).map((section, index) => {
        const faq = section.title === "Frequently Asked Questions";
        const process = /Process$/.test(section.title);
        const enquiry = section.title.startsWith("Request ");
        return <section key={section.id} id={section.id} className={`scroll-mt-44 py-12 lg:py-16 ${enquiry ? "border-t border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50" : index % 2 ? "bg-gray-50" : "bg-white"}`}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <h2 data-reveal className="mb-7 max-w-5xl text-2xl font-bold leading-tight tracking-tight lg:text-3xl">{section.title}</h2>
            {faq ? <div className="grid max-w-5xl gap-3">{section.cards.map((card) => <details key={card.title} data-reveal className="group overflow-hidden rounded-xl border border-gray-200 bg-white open:border-orange-200">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 focus-visible:outline-2 focus-visible:outline-orange-700 group-open:bg-orange-50 sm:px-7 [&::-webkit-details-marker]:hidden"><h3 className="m-0 flex-1 text-base font-semibold leading-snug">{card.title}</h3><span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center text-xl text-orange-700 after:content-['+'] group-open:after:content-['−']" /></summary>
              <div className="px-5 pt-5 pb-1 text-sm sm:px-7"><Copy blocks={card.blocks} /></div>
            </details>)}</div> : <>
              <div data-reveal><Paragraphs blocks={section.intro} /></div>
              {section.cards.length > 0 && <div className={process ? "grid gap-5 md:grid-cols-6" : "grid gap-5 md:grid-cols-2 [&>div:last-child:nth-child(odd)]:md:col-span-2"}>{section.cards.map((card) => <div key={card.title} data-reveal className={`${cardStyle} ${process ? "md:col-span-3 lg:col-span-2 lg:[&:nth-child(n+4)]:col-span-3 md:[&:last-child]:col-span-6 lg:[&:last-child]:col-span-3" : "border-t-[3px] border-t-orange-500"}`}><h3>{card.title}</h3><Copy blocks={card.blocks} /></div>)}</div>}
            </>}
          </div>
        </section>;
      })}
    </article>
  );
}
