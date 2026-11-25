/* eslint-disable react/prop-types -- Presentational helpers receive the local brief content. */
import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBookOpen, FaChartLine, FaClipboardCheck, FaLeaf, FaShieldAlt, FaUtensils } from "react-icons/fa";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

const content = {
  "title": "ISO, Quality, Safety & Professional Training in Saudi Arabia",
  "metaTitle": "Professional Training Courses in Saudi Arabia | GLOBAQ",
  "metaDescription": "Explore GLOBAQ's professional training courses in Saudi Arabia, including ISO, lead auditor, Six Sigma, QHSE, risk assessment and sustainability training.",
  "description": "GLOBAQ provides practical professional training programmes in Saudi Arabia covering ISO management systems, auditing, quality, safety, process improvement and sustainability. Our courses help organisations develop employee competence, strengthen compliance awareness and apply industry requirements effectively.",
  "hero": "Build Workforce Competence Through Practical, Industry-Focused Training",
  "heroCopy": [
    "GLOBAQ provides professional training courses in Saudi Arabia covering ISO management systems, auditing, quality assurance, occupational safety, process improvement and sustainability.",
    "Our training programmes help organisations strengthen employee knowledge, develop professional competence and apply relevant standards and industry requirements in everyday operations."
  ],
  "overview": "Professional Training Services in Saudi Arabia",
  "overviewCopy": [
    "Building a competent workforce is essential for maintaining compliance, improving operational performance and achieving organisational objectives.",
    "GLOBAQ (Global Quality Specialists Company Limited) offers practical training programmes for organisations and professionals seeking to strengthen their knowledge of management systems, quality, safety and industry practices.",
    "Our training approach combines technical knowledge with practical examples and workplace applications. Programmes can be tailored to organisational needs, applicable standards and participants' experience levels."
  ],
  "courses": "Explore Our Professional Training Courses",
  "cards": [
    {
      "title": "ISO Training Courses",
      "intro": [
        "Develop the knowledge and skills required to understand, implement and audit ISO management systems.",
        "Our ISO training portfolio includes:"
      ],
      "items": [
        "ISO Awareness and Foundation Training: Understand management system principles, terminology, requirements and responsibilities.",
        "ISO Lead Auditor Training: Develop the skills to plan, lead, conduct and report management system audits.",
        "ISO Internal Auditor Training: Learn to evaluate management system implementation through structured internal audits."
      ],
      "link": "Explore ISO Training Courses",
      "path": "/services/trainings/iso-training-courses/"
    },
    {
      "title": "Six Sigma, Lean Six Sigma and 5S Training",
      "intro": [
        "Improve business processes through structured problem-solving and workplace improvement methods.",
        "Our process improvement training covers Six Sigma principles, DMAIC methodology, process variation, waste reduction, Lean techniques and 5S workplace organisation."
      ],
      "items": [],
      "link": "Explore Six Sigma Training",
      "path": "/services/trainings/six-sigma-training/"
    },
    {
      "title": "Sustainability and ESG Training",
      "intro": [
        "Build awareness of sustainable business practices and responsible organisational performance.",
        "Training topics include:"
      ],
      "items": [
        "Environmental, Social and Governance (ESG) fundamentals",
        "UN Sustainable Development Goals (SDGs) awareness",
        "Circular economy principles and resource efficiency"
      ],
      "link": "Explore Sustainability Training",
      "path": "/services/trainings/sustainability-training/"
    },
    {
      "title": "Risk Assessment and HIRAC Training",
      "intro": [
        "Develop practical skills for identifying, evaluating and controlling workplace and organisational risks.",
        "Our programmes cover risk identification, risk evaluation, risk treatment, Hazard Identification, Risk Assessment and Control (HIRAC), and the selection of appropriate controls."
      ],
      "items": [],
      "link": "Explore Risk Assessment Training",
      "path": "/services/trainings/risk-assessment-training/"
    },
    {
      "title": "HACCP Awareness Training",
      "intro": [
        "Understand the principles of Hazard Analysis and Critical Control Points (HACCP) and their application to food safety management.",
        "The programme introduces food safety hazards, critical control points, monitoring and corrective action."
      ],
      "items": [],
      "link": "Explore HACCP Training",
      "path": "/services/trainings/haccp-training/"
    },
    {
      "title": "Saudi Aramco Awareness Training",
      "intro": [
        "Build awareness of project-specific quality, safety and contractor requirements relevant to applicable Saudi Aramco projects.",
        "Our specialised awareness programmes cover:"
      ],
      "items": [
        "Schedule Q – Quality Requirements",
        "Schedule D – Safety Requirements",
        "Construction Safety Manual (CSM)",
        "Contractor Safety Administrative Requirements (CSAR)",
        "Work Site Safety Manual (WSSM)"
      ],
      "link": "Explore Saudi Aramco Awareness Training",
      "path": "/services/trainings/saudi-aramco-awareness-training/"
    },
    {
      "title": "Management System Implementation Training",
      "intro": [
        "Develop practical implementation skills with GLOBAQ's management system training in Saudi Arabia."
      ],
      "items": [],
      "link": "Explore Management System Implementation Training",
      "path": "/services/trainings/implementation-training/"
    }
  ],
  "benefits": "Benefits of GLOBAQ Training Programmes",
  "benefitItems": [
    "Develop Professional Competence: Strengthen employees' understanding of standards, processes and responsibilities.",
    "Improve Compliance Awareness: Help teams understand relevant management system and project requirements.",
    "Build Auditing Capabilities: Develop practical internal and lead auditor skills.",
    "Improve Operational Performance: Apply structured approaches to quality, safety, risk and process improvement.",
    "Support Continual Improvement: Equip employees with knowledge they can apply to organisational challenges."
  ],
  "why": "Why Choose GLOBAQ?",
  "whyIntro": [
    "GLOBAQ is a Saudi-based quality assurance and compliance services company focused on delivering practical, industry-relevant solutions.",
    "Our training approach emphasises:"
  ],
  "values": [
    "Experienced quality and compliance professionals",
    "Practical applications and industry-focused examples",
    "Programmes tailored to organisational requirements",
    "Clear understanding of applicable standards",
    "Employee competence and continual improvement"
  ],
  "conclusion": "We aim to make professional training practical, relevant and valuable for everyday organisational operations.",
  "faq": "Frequently Asked Questions",
  "questions": [
    {
      "question": "What professional training courses does GLOBAQ offer?",
      "answer": "GLOBAQ offers ISO awareness, internal auditor and lead auditor training, alongside programmes covering Six Sigma, Lean Six Sigma, ESG, sustainability, risk assessment, HIRAC, HACCP and Saudi Aramco-related awareness."
    },
    {
      "question": "Can ISO training be customised for an organisation?",
      "answer": "Yes. GLOBAQ's ISO training programmes can be tailored to the organisation's applicable standard, industry requirements and participant experience."
    },
    {
      "question": "Who can benefit from these training programmes?",
      "answer": "The programmes are relevant to employees, managers, quality professionals, auditors, safety personnel, project teams and other professionals seeking job-related technical and management system knowledge."
    }
  ],
  "request": "Request Professional Training in Saudi Arabia",
  "requestCopy": [
    "Looking to develop your team's competence in ISO standards, auditing, quality, safety or process improvement?",
    "Contact GLOBAQ to discuss your training objectives, relevant standards and organisational requirements."
  ]
};

const pagePath = "/trainings/";
const courseIcons = [FaBookOpen, FaChartLine, FaLeaf, FaShieldAlt, FaUtensils, FaClipboardCheck, FaClipboardCheck];
const isoCourses = [
  ["ISO Lead Auditor Training", "/services/trainings/iso-lead-auditor-training/"],
  ["ISO Internal Auditor Training", "/services/trainings/iso-internal-auditor-training/"],
  ["ISO Awareness Training", "/services/trainings/iso-awareness-training/"],
];

const primaryButton = "inline-flex items-center justify-center rounded-lg border border-orange-700 bg-orange-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700";
const secondaryButton = "inline-flex items-center justify-center rounded-lg border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-orange-800 transition-colors hover:border-orange-400 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700";
const courseLinkStyle = "inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-orange-800 underline underline-offset-4 hover:text-orange-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700";

const sectionLinks = [
  ["professional-training-services", "Overview"],
  ["professional-training-courses", "Courses"],
  ["training-benefits", "Benefits"],
  ["why-choose-globaq", "Why GLOBAQ"],
  ["training-faqs", "FAQs"],
];

const heroEntrance = "motion-safe:animate-[globaq-training-hero_700ms_ease-out_both]";
const disclosureEntrance = "motion-safe:group-open:animate-[globaq-training-disclosure_360ms_ease-out]";

function Section({ id, title, background = "bg-white", children }) {
  return (
    <section id={id} className={`scroll-mt-44 py-14 lg:py-20 ${background}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 max-w-4xl" data-reveal>
          <span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-orange-500" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Paragraphs({ items }) {
  return items.map((text) => <p key={text}>{text}</p>);
}

function CourseDetails({ course }) {
  return (
    <>
      <Paragraphs items={course.intro} />
      {course.items.length > 0 && (
        <ul className="mb-5 list-disc space-y-2 pl-5 text-gray-700 marker:text-orange-600">
          {course.items.map((text) => <li key={text}>{text}</li>)}
        </ul>
      )}
      <Link to={course.path} className={courseLinkStyle}>
        {course.link}<span aria-hidden="true">↗</span>
      </Link>
    </>
  );
}

function CourseExplorer() {
  const [active, setActive] = useState(0);
  const id = useId();
  const tabs = useRef([]);
  const panels = useRef([]);
  const courseCount = content.cards.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = panels.current[active]?.animate?.(
      [{ opacity: 0.2, transform: "translateX(20px)" }, { opacity: 1, transform: "none" }],
      { duration: 400, easing: "ease-out" },
    );
    return () => animation?.cancel();
  }, [active]);

  function handleTabKey(event, index) {
    let next;
    switch (event.key) {
      case "ArrowDown": next = (index + 1) % courseCount; break;
      case "ArrowUp": next = (index + courseCount - 1) % courseCount; break;
      case "Home": next = 0; break;
      case "End": next = courseCount - 1; break;
      default: return;
    }

    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <>
      <div className="hidden items-start gap-7 lg:grid lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.45fr)]">
        <div role="tablist" aria-label={content.courses} aria-orientation="vertical" className="grid gap-3">
          {content.cards.map((course, index) => {
            const Icon = courseIcons[index];
            const selected = active === index;
            return (
              <button
                key={course.title}
                ref={(node) => { tabs.current[index] = node; }}
                type="button"
                role="tab"
                id={`${id}-tab-${index}`}
                aria-selected={selected}
                aria-controls={`${id}-panel-${index}`}
                data-reveal={Math.min(index, 3) * 80}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => handleTabKey(event, index)}
                className={`group flex w-full items-center gap-3 rounded-xl border p-3 text-left text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 motion-reduce:transition-none ${selected ? "border-orange-600 bg-orange-700 text-white shadow-md" : "border-gray-200 bg-white text-gray-900 hover:border-orange-300 hover:bg-orange-50"}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-800">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="flex-1">{course.title}</span>
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none">→</span>
              </button>
            );
          })}
        </div>

        <div className="relative isolate min-w-0 overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-white to-orange-50/80 p-8 shadow-sm" data-reveal="160">
          <span aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 -z-10 h-48 w-48 rounded-full border-[24px] border-orange-100/80" />
          {content.cards.map((course, index) => {
            const Icon = courseIcons[index];
            return (
              <div
                key={course.title}
                ref={(node) => { panels.current[index] = node; }}
                role="tabpanel"
                id={`${id}-panel-${index}`}
                aria-labelledby={`${id}-tab-${index}`}
                hidden={active !== index}
                tabIndex={0}
                className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-800">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </span>
                <h3 className="mb-4 text-2xl font-bold leading-snug text-gray-900">{course.title}</h3>
                <CourseDetails course={course} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 lg:hidden">
        {content.cards.map((course, index) => {
          const Icon = courseIcons[index];
          return (
            <details key={course.title} name={id} open={index === 0} className="group rounded-xl border border-orange-100 bg-white shadow-sm open:border-orange-200" data-reveal={Math.min(index, 3) * 75}>
              <summary className="flex cursor-pointer list-none items-center gap-3 rounded-xl p-4 font-semibold text-gray-900 group-open:bg-orange-50 focus-visible:outline-2 focus-visible:outline-orange-700 [&::-webkit-details-marker]:hidden">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-800">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="flex-1">{course.title}</span>
                <span aria-hidden="true" className="shrink-0 text-orange-700 after:content-['+'] group-open:after:content-['−']" />
              </summary>
              <div className={`p-5 ${disclosureEntrance}`}><CourseDetails course={course} /></div>
            </details>
          );
        })}
      </div>
    </>
  );
}

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

export default function TrainingsHub() {
  const { hash } = useLocation();
  const pageRef = useRef(null);

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
          [{ opacity: 0.18, transform: "translateY(56px)" }, { opacity: 1, transform: "none" }],
          { duration: 850, delay: Number(entry.target.dataset.reveal || 0), easing: "ease-out", fill: "backwards" },
        );
        if (animation) {
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
        }
      }
    }, { threshold: 0.08 });

    pageRef.current?.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  useEffect(() => {
    if (hash !== "#iso-training-options") return;

    const courseOptions = document.getElementById("iso-training-options");
    courseOptions?.focus({ preventScroll: true });
    courseOptions?.scrollIntoView({ block: "start" });
  }, [hash]);

  const titleAccent = "in Saudi Arabia";

  return (
    <article ref={pageRef} className="bg-white pt-[76px] text-base leading-relaxed text-gray-800 max-md:pt-[50px] [&_p]:mb-4 [&_p]:text-gray-600">
      <SEO title={content.metaTitle} description={content.metaDescription} path={pagePath} />
      <PageSchema
        id="page-schema-training-hub"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: content.title,
          description: content.description,
          url: `https://globaqksa.com${pagePath}`,
          provider: { "@type": "LocalBusiness", name: "GLOBAQ KSA", url: "https://globaqksa.com" },
          areaServed: { "@type": "Country", name: "Saudi Arabia" },
        }}
      />

      <style>{`
        @keyframes globaq-training-hero {
          from { opacity: .18; transform: translateY(36px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes globaq-training-disclosure {
          from { opacity: .25; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header className="overflow-hidden border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.85fr] lg:gap-14">
          <div>
            <h1 className={`mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl ${heroEntrance}`}>
              {content.title.slice(0, -titleAccent.length)}
              <span className="text-orange-700">{titleAccent}</span>
            </h1>
            <h2 className={`mb-5 text-lg font-semibold leading-relaxed ${heroEntrance} motion-safe:[animation-delay:110ms]`}>{content.hero}</h2>
            <div className={`${heroEntrance} motion-safe:[animation-delay:210ms]`}><Paragraphs items={content.heroCopy} /></div>
            <div className={`mt-6 flex flex-wrap gap-3 ${heroEntrance} motion-safe:[animation-delay:300ms]`}>
              <Link to="/ContactUs" className={primaryButton}>Request a Training Proposal</Link>
              <a href="#professional-training-courses" className={secondaryButton}>Explore Our Professional Training Courses</a>
            </div>
          </div>
          <figure className={`group relative isolate m-0 ${heroEntrance} motion-safe:[animation-delay:170ms]`}>
            <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[28px] border border-orange-200 sm:-inset-4" />
            <img
              src="/consultancy.webp"
              alt=""
              width="1280"
              height="853"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-orange-950/10 motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.04]"
            />
          </figure>
        </div>
      </header>

      <nav aria-label="On this page" className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="flex flex-wrap gap-2 border-b border-gray-200 py-5">
          {sectionLinks.map(([id, label], index) => (
            <li key={id} data-reveal={(index % 3) * 65}>
              <a
                href={`#${id}`}
                className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 motion-safe:transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Section id="professional-training-services" title={content.overview}>
        <div data-reveal className="max-w-4xl border-l-4 border-orange-500 pl-5 sm:pl-6 [&_p:last-child]:mb-0">
          <Paragraphs items={content.overviewCopy} />
        </div>
      </Section>

      <Section id="professional-training-courses" title={content.courses} background="border-y border-orange-100 bg-gradient-to-br from-orange-50/70 via-white to-gray-50">
        <CourseExplorer />
        <nav id="iso-training-options" tabIndex={-1} aria-label="ISO Training Courses" data-reveal="100" className="mt-8 flex scroll-mt-44 flex-wrap gap-3 rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:p-6">
          {isoCourses.map(([label, path]) => (
            <Link key={path} to={path} className={secondaryButton}>{label}</Link>
          ))}
        </nav>
      </Section>

      <Section id="training-benefits" title={content.benefits}>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.benefitItems.map((text, index) => {
            const split = text.indexOf(":");
            return (
              <li key={text} data-reveal={String((index % 3) * 65)} className="min-w-0">
                <BenefitFlipCard title={text.slice(0, split + 1)} body={text.slice(split + 1).trimStart()} />
              </li>
            );
          })}
        </ul>
      </Section>

      <Section id="why-choose-globaq" title={content.why} background="bg-gray-50">
        <div data-reveal className="mb-6 max-w-4xl border-l-4 border-orange-500 pl-5 sm:pl-6 [&_p:last-child]:mb-0"><Paragraphs items={content.whyIntro} /></div>
        <ul className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {content.values.map((text, index) => (
            <li key={text} data-reveal={(index % 3) * 90} className="flex items-start gap-3 rounded-xl border border-orange-100 bg-white p-5 hover:border-orange-300 hover:bg-orange-50/50 hover:shadow-md motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1">
              <FaClipboardCheck aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-orange-700" />
              {text}
            </li>
          ))}
        </ul>
        <p data-reveal className="!mb-0 rounded-xl border border-orange-100 bg-orange-50 p-5">{content.conclusion}</p>
      </Section>

      <Section id="training-faqs" title={content.faq}>
        <div className="grid max-w-5xl gap-3">
          {content.questions.map(({ question, answer }) => (
            <details key={question} data-reveal className="group rounded-xl border border-gray-200 bg-white open:border-orange-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 font-semibold group-open:bg-orange-50 focus-visible:outline-2 focus-visible:outline-orange-700 [&::-webkit-details-marker]:hidden">
                {question}
                <span aria-hidden="true" className="text-xl text-orange-700 after:content-['+'] group-open:after:content-['−']" />
              </summary>
              <p className={`px-5 pt-4 ${disclosureEntrance}`}>{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="request-training" title={content.request} background="border-t border-orange-100 bg-gradient-to-r from-orange-100 to-amber-100">
        <div data-reveal className="max-w-4xl"><Paragraphs items={content.requestCopy} /></div>
        <div data-reveal="65" className="mt-5 flex flex-wrap gap-3">
          <Link to="/ContactUs" className={primaryButton}>Request a Training Proposal</Link>
          <Link to="/ContactUs" className={secondaryButton}>Contact GLOBAQ</Link>
        </div>
      </Section>
    </article>
  );
}
