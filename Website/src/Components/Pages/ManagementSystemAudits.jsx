/* eslint-disable react/prop-types -- Presentational helpers receive the local content arrays below. */
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../SEO";
import PageSchema from "../PageSchema";

const sections = [
  {
    "title": "Independent Audits for Supplier Performance, EPC Project Quality and Safety Compliance",
    "id": "independent-audits",
    "intro": [
      {
        "type": "p",
        "text": "Strengthen compliance, identify operational risks and improve project performance with GLOBAQ's independent management system audit services in Saudi Arabia."
      },
      {
        "type": "p",
        "text": "We help organisations evaluate supplier capabilities, EPC project quality controls and safety management practices against defined contractual, technical and management system requirements through objective, evidence-based assessments."
      },
      {
        "type": "cta",
        "text": "Discuss Your Audit Requirements"
      }
    ],
    "cards": []
  },
  {
    "title": "Independent Management System Audit Services in Saudi Arabia",
    "id": "independent-management-system-audit-services-in-saudi-arabia",
    "intro": [
      {
        "type": "p",
        "text": "Effective management systems require more than documented procedures. Organisations need reliable evidence that their suppliers, contractors and project teams are implementing the required processes and controls."
      },
      {
        "type": "p",
        "text": "GLOBAQ (Global Quality Specialists Company Limited) provides independent management system audits and assessments to help businesses evaluate compliance, identify performance gaps and make informed decisions."
      },
      {
        "type": "p",
        "text": "Our services include Saudi Aramco Schedule Q quality assessments, Schedule D safety assessments, general EPC project audits and vendor assessments. These services support organisations managing complex suppliers, contractors and project-specific quality and safety obligations across Saudi Arabia."
      },
      {
        "type": "p",
        "text": "Every assessment focuses on the applicable contractual requirements, management system standards and project specifications, with clear findings and practical recommendations for improvement."
      }
    ],
    "cards": []
  },
  {
    "title": "Our Management System Audit Services",
    "id": "our-management-system-audit-services",
    "intro": [],
    "cards": [
      {
        "title": "Vendor Assessment and Supplier Audits",
        "blocks": [
          {
            "type": "p",
            "text": "Selecting and managing suppliers requires an understanding of their technical capability, management systems and ability to meet contractual requirements."
          },
          {
            "type": "p",
            "text": "GLOBAQ provides vendor assessments and supplier audits to help organisations evaluate supplier performance before approval and during ongoing business relationships."
          },
          {
            "type": "p",
            "text": "Our services include Quality Management System (QMS) assessments and Technical Evaluations (TE), conducted by qualified CQI-IRCA-approved lead auditors. These assessments are available for both Saudi Aramco and non-Aramco projects."
          },
          {
            "type": "p",
            "text": "Depending on the agreed scope, evaluations examine QMS compliance, technical capability, available resources, operational processes and conformity with project specifications and applicable industry standards."
          },
          {
            "type": "p",
            "text": "We also conduct on-site supplier audits for initial vendor selection and ongoing performance evaluation, helping organisations make qualification and procurement decisions based on defined criteria beyond price alone."
          },
          {
            "type": "p",
            "text": "The findings support supplier selection, qualification, performance monitoring and improvement."
          },
          {
            "type": "link",
            "text": "Explore Our Vendor Assessment Services",
            "target": "vendor"
          }
        ]
      },
      {
        "title": "Project Quality Assessments – Saudi Aramco Schedule Q",
        "blocks": [
          {
            "type": "p",
            "text": "Quality management is essential for ensuring projects meet their contractual, technical and operational requirements."
          },
          {
            "type": "p",
            "text": "GLOBAQ conducts independent project quality assessments to evaluate how quality management systems and controls are implemented during project execution."
          },
          {
            "type": "p",
            "text": "For projects governed by applicable Saudi Aramco Schedule Q requirements, quality assessments examine the implementation of contractor QMS arrangements across design, procurement and construction activities."
          },
          {
            "type": "p",
            "text": "Depending on contractual requirements, independent audits may be required at project milestones such as 15%, 60% and 90% completion or through annual assessments."
          },
          {
            "type": "p",
            "text": "GLOBAQ's Aramco-approved auditors conduct Schedule Q assessments to evaluate conformity with defined quality requirements, review implementation evidence and identify gaps or nonconformities requiring corrective action. These assessments help project owners and contractors verify that quality management practices remain aligned with the relevant contract schedules and project requirements."
          },
          {
            "type": "link",
            "text": "Explore Our Project Quality Assessment Services",
            "target": "quality"
          },
          {
            "type": "p",
            "text": "Learn About Schedule Q Quality Assessments"
          }
        ]
      },
      {
        "title": "EPC Project Audits",
        "blocks": [
          {
            "type": "p",
            "text": "Engineering, Procurement and Construction (EPC) projects involve multiple contractors, technical disciplines and contractual deliverables that require consistent quality management throughout the project lifecycle."
          },
          {
            "type": "p",
            "text": "GLOBAQ provides independent EPC project audits to assess contractor compliance with project-specific requirements and the quality management obligations established in contractual schedules."
          },
          {
            "type": "p",
            "text": "These assessments cover relevant design, procurement and construction processes, with attention to the implementation of quality procedures, project controls and supporting compliance evidence."
          },
          {
            "type": "p",
            "text": "Depending on the project contract, audits may take place at defined milestones, including 15%, 60% and 90% project completion, and/or through periodic annual assessments."
          },
          {
            "type": "p",
            "text": "Our EPC audit services help project owners and contractors identify implementation gaps, verify compliance with contractual requirements and strengthen quality assurance throughout project delivery."
          }
        ]
      },
      {
        "title": "Project Safety Assessments – Saudi Aramco Schedule D",
        "blocks": [
          {
            "type": "p",
            "text": "Effective project safety management requires consistent implementation of defined safety procedures, responsibilities and operational controls."
          },
          {
            "type": "p",
            "text": "GLOBAQ provides independent project safety assessments to help contractors and project organisations evaluate their safety management arrangements and identify weaknesses requiring attention."
          },
          {
            "type": "p",
            "text": "For Saudi Aramco projects governed by Schedule D, contractors are required to implement and maintain project-specific safety and environmental management systems in accordance with applicable contractual obligations."
          },
          {
            "type": "p",
            "text": "Assessments may also consider relevant requirements from the Saudi Aramco Construction Safety Manual (CSM), applicable General Instructions (GIs) and other project-specific safety provisions. GLOBAQ's Aramco-qualified auditors have the competence and experience to conduct Schedule D safety assessments, also known as CSSP reviews, where required by the relevant contract."
          },
          {
            "type": "p",
            "text": "Depending on the assessment scope, reviews involve examining safety management documentation, implementation records, personnel responsibilities, operational practices and site conditions."
          },
          {
            "type": "p",
            "text": "These assessments help identify nonconformities, evaluate the implementation of safety controls and support corrective actions to improve project safety performance."
          },
          {
            "type": "link",
            "text": "Explore Our Project Safety Assessment Services",
            "target": "safety"
          },
          {
            "type": "p",
            "text": "Learn About Schedule D Safety Assessments"
          }
        ]
      }
    ]
  },
  {
    "title": "What Do Our Management System Audits Cover?",
    "id": "what-do-our-management-system-audits-cover",
    "intro": [
      {
        "type": "p",
        "text": "The assessment scope is established according to the organisation's objectives, applicable contractual requirements, management system standards and activities being reviewed."
      },
      {
        "type": "p",
        "text": "Our services can include:"
      },
      {
        "type": "p",
        "text": "Management System Review: Evaluating relevant policies, documented procedures, organisational responsibilities and management controls against defined audit criteria."
      },
      {
        "type": "p",
        "text": "Contractual and Standards Compliance: Assessing conformity with applicable management system requirements, Saudi Aramco contract schedules, EPC project specifications and other relevant industry standards."
      },
      {
        "type": "p",
        "text": "Supplier and Contractor Evaluation: Reviewing supplier QMS compliance, technical capabilities, available resources and ability to fulfil defined contractual and operational requirements."
      },
      {
        "type": "p",
        "text": "Project Implementation Verification: Examining documented records, objective evidence and actual working practices across relevant design, procurement, construction or safety management activities."
      },
      {
        "type": "p",
        "text": "Findings and Reporting: Documenting identified nonconformities, implementation gaps, compliance concerns and improvement opportunities against the agreed audit criteria."
      },
      {
        "type": "p",
        "text": "Corrective Action Support: Providing findings and recommendations to help organisations determine appropriate corrective actions and prioritise improvements."
      },
      {
        "type": "p",
        "text": "The objective is to provide a reliable understanding of current compliance and performance, supported by evidence that helps organisations strengthen management system effectiveness."
      }
    ],
    "cards": []
  },
  {
    "title": "Our Management System Audit Process",
    "id": "our-management-system-audit-process",
    "intro": [],
    "cards": [
      {
        "title": "1. Understanding Audit Requirements",
        "blocks": [
          {
            "type": "p",
            "text": "We establish the purpose of the assessment, applicable contractual or management system requirements, project context and areas to be reviewed."
          },
          {
            "type": "p",
            "text": "For supplier assessments, this may include vendor qualification criteria and technical requirements. For EPC projects, it may include relevant contract schedules, audit milestones and project quality or safety obligations."
          }
        ]
      },
      {
        "title": "2. Audit Planning and Document Review",
        "blocks": [
          {
            "type": "p",
            "text": "Relevant management system documents, project procedures, supplier information, quality or safety plans and supporting records are reviewed according to the agreed scope."
          },
          {
            "type": "p",
            "text": "The assessment approach is developed around the applicable audit criteria and specific activities requiring verification."
          }
        ]
      },
      {
        "title": "3. Assessment and Evidence Collection",
        "blocks": [
          {
            "type": "p",
            "text": "Our auditors evaluate implementation through document examination, personnel interviews, review of records and site observations where applicable."
          },
          {
            "type": "p",
            "text": "For vendor assessments, this may involve on-site evaluations of supplier capabilities. For EPC projects, the assessment may focus on relevant design, procurement, construction or safety management processes."
          }
        ]
      },
      {
        "title": "4. Findings and Assessment Reporting",
        "blocks": [
          {
            "type": "p",
            "text": "Assessment results are presented through clear reporting that identifies conformity gaps, nonconformities and opportunities for improvement against the defined criteria."
          },
          {
            "type": "p",
            "text": "Findings are supported by relevant assessment evidence to help the organisation understand where corrective action or further verification may be necessary."
          }
        ]
      },
      {
        "title": "5. Corrective Action and Improvement Support",
        "blocks": [
          {
            "type": "p",
            "text": "Assessment findings help organisations prioritise corrective actions, address identified weaknesses and improve existing management controls."
          },
          {
            "type": "p",
            "text": "Where included in the agreed scope, GLOBAQ can provide further guidance to support the closure of identified gaps and strengthen readiness for subsequent customer, project or supplier assessments."
          }
        ]
      }
    ]
  },
  {
    "title": "Benefits of Independent Management System Audits",
    "id": "benefits-of-independent-management-system-audits",
    "intro": [],
    "cards": [
      {
        "title": "Identify Project and Supplier Risks Earlier",
        "blocks": [
          {
            "type": "p",
            "text": "Recognise weaknesses in supplier capability, contractual compliance, project quality controls and safety management before they develop into significant operational problems."
          }
        ]
      },
      {
        "title": "Improve Contractual Compliance Visibility",
        "blocks": [
          {
            "type": "p",
            "text": "Understand how effectively contractor and supplier activities conform to defined management system requirements, EPC contract schedules and applicable Saudi Aramco quality or safety obligations."
          }
        ]
      },
      {
        "title": "Strengthen Supplier and Contractor Performance",
        "blocks": [
          {
            "type": "p",
            "text": "Use independent assessment findings to support informed vendor qualification, supplier monitoring and contractor performance improvements."
          }
        ]
      },
      {
        "title": "Support Quality and Safety Across Project Milestones",
        "blocks": [
          {
            "type": "p",
            "text": "Evaluate the implementation of quality and safety management controls during relevant project phases, helping organisations identify and address compliance gaps throughout project execution."
          }
        ]
      },
      {
        "title": "Make Better Decisions with Objective Evidence",
        "blocks": [
          {
            "type": "p",
            "text": "Receive documented assessment findings that provide a clearer basis for corrective action, supplier selection, contractor evaluation and operational improvement."
          }
        ]
      }
    ]
  },
  {
    "title": "Who Can Benefit from Our Audit Services?",
    "id": "who-can-benefit-from-our-audit-services",
    "intro": [
      {
        "type": "p",
        "text": "Our management system audit services support project owners, EPC contractors, construction organisations, procurement teams, supplier management departments, quality assurance teams and safety management personnel across Saudi Arabia."
      },
      {
        "type": "p",
        "text": "They are particularly relevant to organisations involved in Saudi Aramco projects, industrial and construction projects, supplier qualification programmes and projects governed by defined quality or safety contractual obligations."
      },
      {
        "type": "p",
        "text": "Organisations can use these assessments when they require independent supplier evaluations, project milestone audits, verification of quality or safety system implementation, or assessments against specific contractual requirements."
      }
    ],
    "cards": []
  },
  {
    "title": "Why Choose GLOBAQ for Management System Audits?",
    "id": "why-choose-globaq-for-management-system-audits",
    "intro": [
      {
        "type": "p",
        "text": "GLOBAQ combines industry-focused quality and compliance knowledge with experience in independent project assessments, vendor evaluations and management system auditing across Saudi Arabia."
      },
      {
        "type": "p",
        "text": "Our audit capabilities include:"
      },
      {
        "type": "p",
        "text": "Saudi Aramco Audit Expertise: GLOBAQ has Aramco-approved auditors for Schedule Q quality assessments and Aramco-qualified auditors experienced in Schedule D safety assessments and CSSP reviews."
      },
      {
        "type": "p",
        "text": "Qualified Vendor Assessment Professionals: Our team includes CQI-IRCA-approved lead auditors who conduct vendor QMS assessments and technical evaluations for Aramco and non-Aramco projects."
      },
      {
        "type": "p",
        "text": "Established Quality and Compliance Credentials: GLOBAQ holds ISO 9001:2015 certification and lists Saudi Aramco approval among its company credentials, reflecting its commitment to quality management and relevant industry requirements."
      },
      {
        "type": "p",
        "text": "Project-Specific Audit Approach: Rather than relying on generic checklists alone, our assessments focus on the actual contractual requirements, management system obligations and technical criteria applicable to each engagement."
      },
      {
        "type": "p",
        "text": "Practical, Evidence-Based Reporting: We emphasise objective evidence, clearly documented findings and actionable recommendations that help organisations improve supplier management, project quality and safety performance."
      },
      {
        "type": "p",
        "text": "Based in Al Khobar, Saudi Arabia, GLOBAQ supports organisations with audit services tailored to their project requirements, operational objectives and industry context."
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
        "title": "What is a management system audit?",
        "blocks": [
          {
            "type": "p",
            "text": "A management system audit is a structured evaluation of an organisation's processes, procedures and controls against defined requirements. It uses objective evidence to determine whether those requirements are being implemented and to identify gaps or improvement opportunities."
          },
          {
            "type": "p",
            "text": "Depending on the audit scope, these requirements may come from ISO management system standards, contractual schedules, project specifications or supplier qualification criteria."
          }
        ]
      },
      {
        "title": "What is the difference between a vendor assessment and a project quality assessment?",
        "blocks": [
          {
            "type": "p",
            "text": "A vendor assessment focuses on a supplier's management systems, technical capabilities, resources and ability to meet specified requirements. GLOBAQ also provides vendor assessments combining QMS compliance reviews with technical evaluations."
          },
          {
            "type": "p",
            "text": "A project quality assessment examines the implementation of quality management controls during project execution, including compliance with applicable contract schedules and project quality requirements."
          }
        ]
      },
      {
        "title": "Does GLOBAQ provide Saudi Aramco Schedule Q and Schedule D assessments?",
        "blocks": [
          {
            "type": "p",
            "text": "Yes. GLOBAQ provides Schedule Q quality assessments through Aramco-approved auditors and Schedule D safety assessments, including CSSP reviews, through Aramco-qualified auditors."
          },
          {
            "type": "p",
            "text": "The specific audit criteria, activities and assessment requirements depend on the relevant Saudi Aramco contract and project scope."
          }
        ]
      },
      {
        "title": "When are management system audits conducted on EPC projects?",
        "blocks": [
          {
            "type": "p",
            "text": "EPC project audits may be conducted at defined contractual milestones or periodically during project execution."
          },
          {
            "type": "p",
            "text": "Depending on the applicable contract, independent quality assessments may take place at stages such as 15%, 60% and 90% project completion or through annual audits."
          },
          {
            "type": "p",
            "text": "The actual timing and scope are determined by the project-specific contractual requirements."
          }
        ]
      },
      {
        "title": "Does GLOBAQ conduct vendor assessments for non-Aramco projects?",
        "blocks": [
          {
            "type": "p",
            "text": "Yes. GLOBAQ offers vendor QMS assessments and technical evaluations for both Saudi Aramco and non-Aramco projects."
          },
          {
            "type": "p",
            "text": "These assessments help organisations evaluate supplier compliance, technical capabilities and suitability against their specified requirements."
          }
        ]
      },
      {
        "title": "What is the difference between a vendor assessment and a third-party vendor inspection?",
        "blocks": [
          {
            "type": "p",
            "text": "A vendor assessment examines a supplier's management system compliance, technical capabilities and suitability against defined qualification or project requirements. A third-party vendor inspection focuses on verifying specific materials, manufacturing or fabrication activities, coating applications and other inspection requirements against relevant specifications."
          },
          {
            "type": "p",
            "text": "GLOBAQ offers both services, with the appropriate approach determined by the client's requirements."
          }
        ]
      },
      {
        "title": "What will you receive after a management system audit?",
        "blocks": [
          {
            "type": "p",
            "text": "The assessment provides documented findings identifying relevant compliance gaps, nonconformities and improvement opportunities."
          },
          {
            "type": "p",
            "text": "The specific reporting deliverables depend on the agreed audit scope. Findings and recommendations can also support corrective action planning and future compliance assessments."
          }
        ]
      },
      {
        "title": "Is a management system audit the same as ISO certification?",
        "blocks": [
          {
            "type": "p",
            "text": "No. A management system audit evaluates conformity or performance against defined requirements."
          },
          {
            "type": "p",
            "text": "ISO certification, where applicable, is a separate process conducted by an appropriately accredited certification body. Independent management system audits can help organisations evaluate implementation and identify gaps, but they do not automatically result in certification."
          }
        ]
      }
    ]
  },
  {
    "title": "Request Management System Audit Services in Saudi Arabia",
    "id": "request-management-system-audit-services-in-saudi-arabia",
    "intro": [
      {
        "type": "p",
        "text": "Need an independent assessment of your suppliers, EPC project quality systems or safety management practices?"
      },
      {
        "type": "p",
        "text": "Whether you require a Saudi Aramco Schedule Q quality assessment, Schedule D safety assessment, EPC project audit or vendor QMS and technical evaluation, GLOBAQ can help you determine an appropriate assessment approach."
      },
      {
        "type": "p",
        "text": "Contact our team to discuss your audit objectives, applicable contractual requirements, project stage and assessment scope."
      },
      {
        "type": "cta",
        "text": "Discuss Your Audit Requirements"
      },
      {
        "type": "cta",
        "text": "Request a Quote"
      }
    ],
    "cards": []
  }
];
const serviceLinks = {
  vendor:
    "/services/management-system-audits-saudi-arabia/vendor-assessment/",
  quality:
    "/services/management-system-audits-saudi-arabia/project-quality-assessments/",
  safety:
    "/services/management-system-audits-saudi-arabia/project-safety-assessment/",
};

function Copy({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === "cta") return <Link key={index} to="/ContactUs" className={`my-2 mr-3 inline-flex max-w-full items-center justify-center gap-5 rounded-lg border border-orange-700 bg-orange-700 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-orange-800 hover:shadow-md motion-reduce:hover:translate-y-0 ${block.text === "Request a Quote" ? "!bg-transparent !text-orange-700 hover:!bg-orange-100" : ""}`}>{block.text}<span aria-hidden="true">↗</span></Link>;
    if (block.type === "link") return <Link key={index} to={serviceLinks[block.target]} className="mt-2 inline-block text-sm font-semibold text-orange-700 underline underline-offset-4 hover:text-orange-900">{block.text}<span aria-hidden="true"> →</span></Link>;
    const colon = block.text.indexOf(":");
    return <p key={index}>{colon > 0 && colon < 75 ? <><strong>{block.text.slice(0, colon + 1)}</strong>{block.text.slice(colon + 1)}</> : block.text}</p>;
  });
}

function SmallCards({ blocks }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{blocks.map((block, index) => {
    const colon = block.text.indexOf(":");
    return <div key={index} className="min-w-0 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-gray-900/5 sm:p-7 [&_h3]:mt-4 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:leading-snug [&_p]:text-sm motion-reduce:transition-none motion-reduce:hover:translate-y-0" data-reveal><span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-sm font-bold text-orange-700" aria-hidden="true">✓</span>{colon > 0 && colon < 75 ? <><h3>{block.text.slice(0, colon)}</h3><p>{block.text.slice(colon + 1).trim()}</p></> : <p>{block.text}</p>}</div>;
  })}</div>;
}

export default function ManagementSystemAudits() {
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

  const hero = sections[0];
  return (
    <article className="bg-white pt-[76px] text-base leading-relaxed text-gray-800 break-words max-md:pt-[50px] [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-600 [&_strong]:font-semibold [&_a]:transition-all [&_a]:duration-200 [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-offset-4 [&_a]:focus-visible:outline-orange-700 motion-reduce:[&_a]:transition-none" ref={pageRef}>
      <SEO title="Management System Audits in Saudi Arabia | GLOBAQ" description="Independent management system audits in Saudi Arabia, including vendor assessments, project quality assessments and project safety assessments." path="/services/management-system-audits-saudi-arabia/" />
      <PageSchema id="page-schema-service" data={{
        "@context": "https://schema.org", "@type": "Service",
        name: "Management System Audits in Saudi Arabia",
        description: "Independent vendor, project quality and project safety assessments in Saudi Arabia.",
        url: "https://globaqksa.com/services/management-system-audits-saudi-arabia/",
        provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
        areaServed: { "@type": "Country", name: "Saudi Arabia" },
      }} />

      <header className="border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 grid items-center gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
          <div data-reveal>
            <h1 className="my-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">Management System Audits <span className="text-orange-700">in Saudi Arabia</span></h1>
            <h2 className="mb-5 text-lg font-semibold leading-relaxed">{hero.title}</h2>
            <Copy blocks={hero.intro} />
          </div>
          <nav className="rounded-2xl border border-orange-100 bg-white p-6 shadow-xl shadow-orange-950/5 sm:p-8 [&>p]:my-5 [&>p]:text-2xl [&>p]:leading-tight [&>p]:tracking-tight [&>p]:text-gray-800 [&>a]:flex [&>a]:items-center [&>a]:gap-3 [&>a]:border-t [&>a]:border-gray-200 [&>a]:py-5 [&>a]:text-gray-800 [&>a:hover]:text-orange-700 [&>a:hover]:translate-x-1 [&>a>span:nth-child(2)]:flex-1 [&_strong]:block [&_strong]:text-[15px] [&_small]:mt-1 [&_small]:block [&_small]:text-xs [&_small]:text-gray-500 motion-reduce:[&>a:hover]:translate-x-0" data-reveal aria-label="Explore audit services">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-orange-700 [&>span]:h-2 [&>span]:w-2 [&>span]:shrink-0 [&>span]:rounded-full [&>span]:bg-orange-500">Our audit services</div>
            {[ ["Vendor Assessment", "vendor"], ["Project Quality Assessments", "quality"], ["Project Safety Assessment", "safety"] ].map(([title, target]) => <Link key={target} to={serviceLinks[target]}><strong className="flex-1">{title}</strong><span aria-hidden="true">↗</span></Link>)}
          </nav>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <nav className="flex flex-wrap items-center gap-2 border-b border-gray-200 py-6 [&>span]:mr-3 [&>span]:w-full [&>span]:text-xs [&>span]:font-semibold [&>span]:text-gray-500 sm:[&>span]:w-auto [&>a]:rounded-full [&>a]:border [&>a]:border-gray-200 [&>a]:bg-gray-50 [&>a]:px-3 [&>a]:py-1.5 [&>a]:text-xs [&>a:hover]:border-orange-200 [&>a:hover]:bg-orange-50 [&>a:hover]:text-orange-700" aria-label="On this page">
          <span>Explore this page</span>
          {[ [sections[2].id,"Services"], [sections[3].id,"Audit coverage"], [sections[4].id,"Our process"], [sections[5].id,"Benefits"], [sections[8].id,"FAQs"] ].map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </div>

      {sections.slice(1).map((section, index) => {
        const isFAQ = section.title === "Frequently Asked Questions";
        const isProcess = section.title === "Our Management System Audit Process";
        const isServices = section.title === "Our Management System Audit Services";
        const isCoverage = section.title === "What Do Our Management System Audits Cover?";
        const isWhy = section.title.startsWith("Why Choose");
        const isEnquiry = section.title.startsWith("Request ");
        const labelled = section.intro.filter((block) => block.type === "p" && block.text.includes(":") && block.text.indexOf(":") < 75);
        return <section key={section.id} id={section.id} className={`scroll-mt-44 py-12 lg:py-16 ${index % 2 ? "bg-gray-50" : ""} ${isEnquiry ? "border-t border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50" : ""}`}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="mb-7 flex max-w-4xl items-start gap-3 sm:gap-4 [&>h2]:m-0 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:leading-tight [&>h2]:tracking-tight lg:[&>h2]:text-3xl" data-reveal><h2>{section.title}</h2></div>
            {isFAQ ? <div className="grid max-w-5xl gap-3">{section.cards.map((card) => <details className="group overflow-hidden rounded-xl border border-gray-200 bg-white open:border-orange-200 [&>summary]:flex [&>summary]:cursor-pointer [&>summary]:list-none [&>summary]:items-center [&>summary]:gap-4 [&>summary]:p-5 sm:[&>summary]:px-7 [&>summary::-webkit-details-marker]:hidden open:[&>summary]:bg-orange-50 [&>summary>h3]:m-0 [&>summary>h3]:flex-1 [&>summary>h3]:text-base [&>summary>h3]:font-semibold [&>summary>h3]:leading-snug [&>summary]:focus-visible:outline-2 [&>summary]:focus-visible:outline-orange-700" data-reveal key={card.title}><summary><h3>{card.title}</h3><span className="flex h-6 w-6 shrink-0 items-center justify-center text-xl text-orange-700 after:content-['+'] group-open:after:content-['−']" aria-hidden="true" /></summary><div className="px-5 pt-5 pb-1 text-sm sm:px-7 sm:pl-16"><Copy blocks={card.blocks} /></div></details>)}</div>
              : <>
                {(isCoverage || isWhy) ? <>
                  <div className="max-w-4xl" data-reveal><Copy blocks={section.intro.filter((block) => !labelled.includes(block) && section.intro.indexOf(block) < section.intro.indexOf(labelled[0]))} /></div>
                  <SmallCards blocks={labelled} />
                  <div className="max-w-4xl mt-6" data-reveal><Copy blocks={section.intro.filter((block) => !labelled.includes(block) && section.intro.indexOf(block) > section.intro.indexOf(labelled[labelled.length-1]))} /></div>
                </> : <div data-reveal className={`max-w-4xl ${isEnquiry ? "max-w-3xl" : ""}`}><Copy blocks={section.intro} /></div>}
                {section.cards.length > 0 && <div className={isProcess ? "grid gap-5 md:grid-cols-6" : "grid gap-5 md:grid-cols-2 [&>div:last-child:nth-child(odd)]:md:col-span-2"}>{section.cards.map((card) => <div key={card.title} data-reveal className={`min-w-0 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-gray-900/5 sm:p-7 [&_h3]:mt-4 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:leading-snug [&_p]:text-sm motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${isServices ? "border-t-[3px] border-t-orange-500" : ""} ${isProcess ? "md:col-span-3 lg:col-span-2 lg:[&:nth-child(n+4)]:col-span-3 md:[&:last-child]:col-span-6 lg:[&:last-child]:col-span-3" : ""}`}>
                  <h3>{card.title}</h3><Copy blocks={card.blocks} />
                </div>)}</div>}
              </>}
          </div>
        </section>;
      })}
    </article>
  );
}
