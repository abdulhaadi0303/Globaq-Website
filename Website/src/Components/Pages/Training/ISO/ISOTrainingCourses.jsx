/* eslint-disable react/prop-types -- Presentational helpers receive the local course content. */
import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaClipboardCheck, FaGraduationCap } from "react-icons/fa";
import SEO from "../../../SEO";
import PageSchema from "../../../PageSchema";

const content = {
  "path": "/services/trainings/iso-training-courses/",
  "title": "ISO Training Courses in Saudi Arabia",
  "metaTitle": "ISO Training Courses in Saudi Arabia | GLOBAQ",
  "metaDescription": "Explore ISO training courses in Saudi Arabia with GLOBAQ. Build skills through ISO awareness, internal auditor and lead auditor training.",
  "description": "GLOBAQ provides practical ISO training courses in Saudi Arabia, including awareness, foundation, internal auditor and lead auditor programmes. Our courses help individuals and organisations understand ISO requirements, develop auditing competence and improve management system implementation.",
  "subtitle": "Practical ISO Awareness and Auditor Training",
  "intro": [
    "Strengthen management system knowledge and develop professional auditing skills with GLOBAQ's ISO training courses in Saudi Arabia.",
    "Our programmes cover ISO awareness, foundation, internal auditor and lead auditor training, helping professionals understand international standards and apply their requirements effectively."
  ],
  "overview": [
    "Understanding ISO management system requirements is essential for organisations seeking consistent processes, improved compliance and continual improvement.",
    "GLOBAQ provides ISO training programmes designed to build practical knowledge of management system standards and auditing techniques.",
    "Our courses combine theoretical understanding with relevant examples, practical exercises and industry-focused learning. Programmes can be tailored to the organisation's standard, sector and participants' experience."
  ],
  "courses": [
    {
      "title": "ISO Lead Auditor Training",
      "path": "/services/trainings/iso-lead-auditor-training/",
      "body": [
        "Develop the knowledge and practical skills required to plan, lead, conduct and report management system audits.",
        "GLOBAQ's Lead Auditor Training focuses on audit methodology, audit team leadership, evidence gathering, conformity evaluation, nonconformity reporting and audit follow-up.",
        "The programmes incorporate practical auditing techniques and real-world case studies to strengthen professional auditor competence."
      ],
      "link": "Explore ISO Lead Auditor Training"
    },
    {
      "title": "ISO Internal Auditor Training",
      "path": "/services/trainings/iso-internal-auditor-training/",
      "body": [
        "Build the skills required to evaluate management system effectiveness through structured internal audits.",
        "Our Internal Auditor Training covers audit planning, audit criteria, evidence collection, interviewing, findings, reporting and corrective action follow-up.",
        "Practical exercises and case studies help participants develop confidence in conducting evidence-based internal audits."
      ],
      "link": "Explore ISO Internal Auditor Training"
    },
    {
      "title": "ISO Awareness and Foundation Training",
      "path": "/services/trainings/iso-awareness-training/",
      "body": [
        "ISO Awareness Training introduces participants to the purpose, structure, principles and key requirements of a selected management system standard.",
        "The programmes help employees understand their roles and responsibilities within an organisation's management system.",
        "Our foundation courses provide introductory knowledge of ISO terminology, requirements and practical applications, establishing a base for further auditor training.",
        "The GLOBAQ company profile describes foundation training as a one-day programme."
      ],
      "link": "Explore ISO Awareness Training"
    }
  ],
  "standardsIntro": "GLOBAQ offers training across multiple management system standards, including:",
  "standards": [
    "ISO 9001:  Quality Management Systems",
    "ISO 14001:  Environmental Management Systems",
    "ISO 45001:  Occupational Health and Safety Management  Systems",
    "ISO 22000:  Food Safety Management Systems",
    "ISO/IEC 17025:  Testing and Calibration Laboratory  Management Systems",
    "ISO/IEC 17020:  Requirements for Inspection Bodies",
    "ISO/IEC 27001:  Information Security Management Systems",
    "ISO/IEC 20000-1:  IT Service Management Systems",
    "ISO 13485:  Medical Devices Quality Management Systems",
    "ISO 50001:  Energy Management Systems"
  ],
  "standardsOutro": "Course availability and the specific ISO standards covered depend on the selected training category.",
  "benefits": [
    [
      "Better Understanding of ISO Standards",
      " Develop knowledge  of relevant management system principles and requirements."
    ],
    [
      "Improved Auditor Competence",
      " Build practical skills  for planning, conducting and reporting audits."
    ],
    [
      "Effective System Implementation",
      " Apply standard requirements  to organisational processes and controls."
    ],
    [
      "Improved Audit Readiness",
      " Strengthen understanding  of compliance, documentation and corrective action."
    ],
    [
      "Support for Continual Improvement",
      " Equip teams to  identify weaknesses and improve management system performance."
    ]
  ],
  "audience": [
    "GLOBAQ's ISO training programmes are suitable for quality and compliance professionals, management system coordinators, internal auditors, aspiring lead auditors, implementation teams, managers and employees responsible for applying ISO requirements.",
    "The appropriate course depends on the participant's experience, responsibilities and learning objectives."
  ],
  "why": [
    "GLOBAQ provides practical, industry-focused ISO training supported by experienced quality and compliance professionals.",
    "Our approach connects management system requirements with workplace applications, helping participants build knowledge and skills relevant to their professional responsibilities.",
    "Training programmes can be adapted to the applicable ISO standard, organisational needs and participant experience."
  ],
  "faq": [
    [
      "What types of ISO training does GLOBAQ offer?",
      "GLOBAQ offers ISO awareness and foundation training, internal auditor training and lead auditor training."
    ],
    [
      "What is the difference between ISO Internal Auditor and Lead Auditor Training?",
      "Internal Auditor Training focuses on conducting effective audits within an organisation. Lead Auditor Training additionally develops the skills needed to lead audit teams, manage audit activities and oversee the complete audit process."
    ],
    [
      "Which ISO training course should I choose?",
      "Awareness and foundation courses introduce standard requirements, while internal and lead auditor courses develop progressively specialised auditing competencies."
    ]
  ],
  "request": [
    "Whether you need ISO awareness or professional auditor development, GLOBAQ can help you identify a suitable programme.",
    "Contact our team to discuss the relevant ISO standard, training objectives and participant requirements."
  ]
};

function BenefitFlipCard({ title, body }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const descriptionId = useId();
  const pointerType = useRef(null);

  function handleClick(event) {
    // Mouse input already flips the card on hover. Keyboard, touch, and pen activate the button.
    if (event.detail === 0 || pointerType.current !== "mouse") {
      setIsFlipped((previous) => !previous);
    }
  }

  return (
    <button
      type="button"
      aria-label={title}
      aria-expanded={isFlipped}
      aria-controls={descriptionId}
      aria-describedby={isFlipped ? descriptionId : undefined}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setIsFlipped(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsFlipped(false);
      }}
      onPointerDown={(event) => { pointerType.current = event.pointerType; }}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsFlipped(false);
      }}
      className="block h-full w-full cursor-pointer rounded-2xl text-left [perspective:1200px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
    >
      <span className={`pointer-events-none grid h-full min-h-48 motion-safe:transition-transform motion-safe:duration-500 motion-safe:[transform-style:preserve-3d] ${isFlipped ? "motion-safe:[transform:rotateY(180deg)]" : ""}`}>
        <span aria-hidden="true" className={`flex flex-col items-center justify-center gap-4 rounded-2xl border border-orange-200 bg-white p-6 text-center shadow-sm [grid-area:1/1] [backface-visibility:hidden] ${isFlipped ? "motion-reduce:invisible" : ""}`}>
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-800">
            <FaClipboardCheck aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold leading-snug text-gray-900">{title}</span>
        </span>
        <span aria-hidden={!isFlipped} className={`flex min-w-0 flex-col justify-center gap-3 rounded-2xl border border-orange-300 bg-gradient-to-br from-orange-50 to-amber-100 p-6 shadow-md [grid-area:1/1] [backface-visibility:hidden] motion-safe:[transform:rotateY(180deg)] ${isFlipped ? "" : "motion-reduce:invisible"}`}>
          <span aria-hidden="true" className="font-bold leading-snug text-orange-900">{title}</span>
          <span id={descriptionId} className="text-sm leading-relaxed text-gray-800">{body}</span>
        </span>
      </span>
    </button>
  );
}

const sectionLinks = [
  ["iso-training-services", "Overview"],
  ["iso-training-programmes", "Programmes"],
  ["iso-training-standards", "ISO Standards"],
  ["iso-training-benefits", "Benefits"],
  ["iso-training-faqs", "FAQs"],
];
const courseIcons = [FaGraduationCap, FaClipboardCheck, FaBookOpen];
const primaryButton = "inline-flex items-center justify-center rounded-xl bg-orange-700 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 motion-safe:transition-colors";
const secondaryButton = "inline-flex items-center justify-center rounded-xl border border-orange-200 bg-white px-5 py-3 text-sm font-bold text-orange-800 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 motion-safe:transition-colors";
const heroEntrance = "motion-safe:animate-[globaq-iso-hub-reveal_700ms_ease-out_both]";

function Section({ id, title, tone = "bg-white", children }) {
  return (
    <section id={id} className={`scroll-mt-44 py-14 lg:py-20 ${tone}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mb-7 max-w-4xl">
          <span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-orange-500" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Paragraphs({ items }) {
  return items.map((item) => <p key={item}>{item}</p>);
}

export default function ISOTrainingCourses() {
  const pageRef = useRef(null);
  const titleAccent = "in Saudi Arabia";

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    const animations = new Set();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (motion.matches) continue;
        const animation = entry.target.animate?.(
          [{ opacity: 0.25, transform: "translateY(42px)" }, { opacity: 1, transform: "none" }],
          { duration: 700, delay: Number(entry.target.dataset.reveal || 0), easing: "ease-out", fill: "backwards" },
        );
        if (animation) {
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
        }
      }
    }, { threshold: 0.08 });

    pageRef.current?.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  return (
    <article ref={pageRef} className="bg-white pt-[76px] text-base leading-relaxed text-gray-800 max-md:pt-[50px] [&_p]:mb-4 [&_p]:text-gray-600">
      <SEO title={content.metaTitle} description={content.metaDescription} path={content.path} />
      <PageSchema
        id="page-schema-iso-training-hub"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: content.title,
          description: content.description,
          url: `https://globaqksa.com${content.path}`,
          provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
          areaServed: { "@type": "Country", name: "Saudi Arabia" },
        }}
      />
      <style>{`
        @keyframes globaq-iso-hub-reveal {
          from { opacity: .2; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header className="overflow-hidden border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <Link to="/services/trainings/" className={`mb-5 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-orange-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 ${heroEntrance}`}>
              <span aria-hidden="true">←</span> Trainings
            </Link>
            <h1 className={`mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl ${heroEntrance} motion-safe:[animation-delay:60ms]`}>
              {content.title.slice(0, -titleAccent.length)}
              <span className="text-orange-700">{titleAccent}</span>
            </h1>
            <p className={`text-lg font-bold leading-snug !text-gray-900 ${heroEntrance} motion-safe:[animation-delay:120ms]`}>{content.subtitle}</p>
            <div className={`${heroEntrance} motion-safe:[animation-delay:180ms]`}>
              <Paragraphs items={content.intro} />
            </div>
            <div className={`mt-6 flex flex-wrap gap-3 ${heroEntrance} motion-safe:[animation-delay:250ms]`}>
              <Link className={primaryButton} to="/ContactUs">Request an ISO Training Proposal</Link>
              <a className={secondaryButton} href="#iso-training-programmes">Our ISO Training Programmes</a>
            </div>
          </div>
          <div className={`overflow-hidden rounded-2xl border border-orange-200 bg-orange-50 shadow-lg shadow-orange-950/10 ${heroEntrance} motion-safe:[animation-delay:120ms]`}>
            <img
              src="/consultancy.webp"
              alt=""
              width="1280"
              height="853"
              className="aspect-[4/3] w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:hover:scale-[1.04]"
            />
          </div>
        </div>
      </header>

      <nav aria-label="On this page" className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="flex flex-wrap gap-2 border-b border-gray-200 py-5">
          {sectionLinks.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 motion-safe:transition-colors">{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <Section id="iso-training-services" title="Professional ISO Training Services">
        <div data-reveal className="max-w-4xl border-l-4 border-orange-500 pl-5 sm:pl-6 [&_p:last-child]:mb-0">
          <Paragraphs items={content.overview} />
        </div>
      </Section>

      <Section id="iso-training-programmes" title="Our ISO Training Programmes" tone="border-y border-orange-100 bg-gradient-to-br from-orange-50/70 via-white to-gray-50">
        <ul className="grid gap-6 lg:grid-cols-3">
          {content.courses.map(({ title, path, body, link }, index) => {
            const Icon = courseIcons[index];
            return (
              <li key={path} data-reveal={index * 95} className="flex flex-col rounded-2xl border border-orange-100 bg-white p-6 shadow-sm hover:border-orange-300 hover:shadow-lg motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 sm:p-7">
                <span aria-hidden="true" className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-800">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mb-4 text-xl font-bold leading-tight text-gray-900">{title}</h3>
                <Paragraphs items={body} />
                <Link to={path} className="mt-auto inline-flex w-fit items-center gap-2 rounded-sm pt-2 text-sm font-bold text-orange-800 underline underline-offset-4 hover:text-orange-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">
                  {link}<span aria-hidden="true">↗</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section id="iso-training-standards" title="ISO Standards Covered by Our Training Portfolio">
        <p data-reveal>{content.standardsIntro}</p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.standards.map((item, index) => {
            const split = item.indexOf(":");
            return (
              <li key={item} data-reveal={(index % 3) * 60} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                <strong className="text-orange-900">{item.slice(0, split + 1)}</strong>
                {item.slice(split + 1)}
              </li>
            );
          })}
        </ul>
        <p data-reveal className="mt-5 !mb-0 max-w-4xl">{content.standardsOutro}</p>
      </Section>

      <Section id="iso-training-benefits" title="Benefits of ISO Training" tone="bg-gray-50">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.benefits.map(([title, body], index) => (
            <li key={title} data-reveal={(index % 3) * 75} className="min-w-0">
              <BenefitFlipCard title={title} body={body} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="iso-training-audience" title="Who Should Attend ISO Training?">
        <div data-reveal className="max-w-4xl rounded-2xl border border-orange-100 bg-orange-50/50 p-6 sm:p-8 [&_p:last-child]:mb-0">
          <Paragraphs items={content.audience} />
        </div>
      </Section>

      <Section id="why-choose-globaq" title="Why Choose GLOBAQ?" tone="bg-gray-50">
        <div data-reveal className="max-w-4xl border-l-4 border-orange-500 pl-5 sm:pl-6 [&_p:last-child]:mb-0">
          <Paragraphs items={content.why} />
        </div>
      </Section>

      <Section id="iso-training-faqs" title="Frequently Asked Questions">
        <div className="grid max-w-5xl gap-3">
          {content.faq.map(([question, answer], index) => (
            <details key={question} data-reveal={index * 75} className="group rounded-xl border border-gray-200 bg-white open:border-orange-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 font-semibold group-open:bg-orange-50 focus-visible:outline-2 focus-visible:outline-orange-700 [&::-webkit-details-marker]:hidden">
                {question}
                <span aria-hidden="true" className="shrink-0 text-xl text-orange-700 after:content-['+'] group-open:after:content-['−']" />
              </summary>
              <p className="px-5 pt-4 motion-safe:group-open:animate-[globaq-iso-hub-reveal_360ms_ease-out]">{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="request-iso-training" title="Request ISO Training in Saudi Arabia" tone="border-t border-orange-100 bg-gradient-to-r from-orange-100 to-amber-100">
        <div data-reveal className="max-w-4xl"><Paragraphs items={content.request} /></div>
        <div data-reveal="65" className="mt-5">
          <Link className={primaryButton} to="/ContactUs">Request an ISO Training Proposal</Link>
        </div>
      </Section>
    </article>
  );
}
