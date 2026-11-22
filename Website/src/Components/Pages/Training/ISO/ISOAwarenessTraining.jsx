/* eslint-disable react/prop-types -- Section helpers render the local brief content. */
import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaChevronDown, FaClipboardCheck, FaGraduationCap } from "react-icons/fa";
import SEO from "../../../SEO";
import PageSchema from "../../../PageSchema";

const content = {
  "path": "/services/trainings/iso-awareness-training/",
  "title": "ISO Awareness and Foundation Training in Saudi Arabia",
  "metaTitle": "ISO Awareness Training in Saudi Arabia | GLOBAQ",
  "metaDescription": "Build ISO management system knowledge with GLOBAQ's ISO Awareness Training in Saudi Arabia. Learn ISO principles, requirements, responsibilities and applications.",
  "description": "GLOBAQ provides ISO Awareness and Foundation Training in Saudi Arabia to help employees and professionals understand ISO management system principles, terminology, requirements and responsibilities. Our practical programmes build essential knowledge for effective system implementation and further auditor development.",
  "image": {
    "src": "/consultancy.jpg",
    "width": 1280,
    "height": 853
  },
  "hero": "Build a Strong Foundation in ISO Management System Requirements",
  "heroCopy": [
    "Develop essential knowledge of international management system standards with GLOBAQ's ISO Awareness Training in Saudi Arabia.",
    "Our programmes introduce ISO principles, terminology, requirements and organisational responsibilities, helping participants understand how management systems support compliance, consistent operations and continual improvement."
  ],
  "requestLabel": "Request ISO Awareness Training",
  "exploreLabel": "Explore ISO Training Courses",
  "overview": {
    "title": "Professional ISO Awareness and Foundation Training",
    "paragraphs": [
      "Understanding ISO standards is an important first step towards effective management system implementation.",
      "GLOBAQ provides ISO awareness and foundation training designed for professionals who need to understand the purpose, structure and requirements of relevant management system standards.",
      "Our training combines introductory concepts with practical examples, interactive discussions and workplace applications.",
      "Foundation courses are designed to establish essential knowledge before participants progress to implementation, internal auditor or lead auditor training."
    ]
  },
  "coverage": {
    "title": "What Does Our ISO Awareness Training Cover?",
    "cards": [
      {
        "title": "Introduction to ISO Management Systems",
        "body": "Understand the purpose of ISO management system standards and their role in improving organisational processes and performance."
      },
      {
        "title": "ISO Principles and Terminology",
        "body": "Learn the key concepts, terminology and management system principles associated with the selected ISO standard."
      },
      {
        "title": "Understanding ISO Requirements",
        "body": "Explore the structure and essential requirements of the applicable standard and how they relate to organisational activities."
      },
      {
        "title": "Roles and Responsibilities",
        "body": "Understand the responsibilities of employees, management and relevant teams in maintaining effective management systems."
      },
      {
        "title": "Practical Workplace Applications",
        "body": "Explore examples demonstrating how ISO requirements can be applied to everyday organisational processes."
      },
      {
        "title": "Interactive Learning and Discussion",
        "body": "Strengthen understanding through practical examples, questions and discussions tailored to the organisation's context."
      }
    ]
  },
  "standards": {
    "title": "ISO Standards Covered by Awareness and Foundation Training",
    "lead": "GLOBAQ's foundation training portfolio includes:",
    "items": [
      "ISO 9001: Quality Management Systems",
      "ISO 14001: Environmental Management Systems",
      "ISO 45001: Occupational Health and Safety Management Systems",
      "ISO 22000: Food Safety Management Systems",
      "ISO/IEC 17025: Testing and Calibration Laboratories",
      "ISO/IEC 17020: Inspection Bodies",
      "ISO/IEC 27001: Information Security Management Systems",
      "ISO 13485: Medical Devices Quality Management Systems",
      "ISO 50001: Energy Management Systems"
    ],
    "note": "The applicable content is determined by the selected ISO standard and participants' learning objectives."
  },
  "audience": {
    "title": "Who Should Attend ISO Awareness Training?",
    "lead": "Our programmes are suitable for:",
    "items": [
      "Employees seeking introductory ISO knowledge",
      "Managers and department supervisors",
      "Quality and compliance personnel",
      "Management system implementation teams",
      "Professionals preparing for internal auditor training",
      "Individuals seeking foundational management system knowledge"
    ],
    "note": "No auditor role is required to benefit from ISO awareness training."
  },
  "benefits": {
    "title": "Benefits of ISO Awareness Training",
    "cards": [
      {
        "title": "Improve ISO Knowledge:",
        "body": "Understand fundamental management system requirements and terminology."
      },
      {
        "title": "Strengthen Employee Awareness:",
        "body": "Help personnel recognise their responsibilities within the management system."
      },
      {
        "title": "Support Effective Implementation:",
        "body": "Establish the knowledge required to apply ISO requirements."
      },
      {
        "title": "Develop a Quality-Focused Culture:",
        "body": "Encourage consistent processes, compliance awareness and continual improvement."
      },
      {
        "title": "Prepare for Further Training:",
        "body": "Build a foundation for ISO implementation and professional auditor development."
      }
    ]
  },
  "why": {
    "title": "Why Choose GLOBAQ?",
    "paragraphs": [
      "GLOBAQ delivers practical, industry-focused ISO awareness and foundation programmes supported by experienced quality and compliance professionals.",
      "Our approach connects ISO principles with workplace requirements through interactive learning, practical examples and organisational context.",
      "GLOBAQ's foundation training programmes are described as one-day courses, providing introductory knowledge for further professional development."
    ]
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "cards": [
      {
        "title": "What is ISO Awareness Training?",
        "body": "ISO Awareness Training introduces the purpose, principles, structure and key requirements of an ISO management system standard and explains employees' responsibilities."
      },
      {
        "title": "What is the difference between ISO Awareness and Internal Auditor Training?",
        "body": "Awareness Training develops general understanding of ISO requirements. Internal Auditor Training develops the specialised skills needed to plan, conduct and report management system audits."
      },
      {
        "title": "How long is ISO Foundation Training?",
        "body": "GLOBAQ's company profile describes its foundation courses as one-day programmes. Confirm the duration of the selected awareness or foundation course when requesting training details."
      }
    ]
  },
  "request": {
    "title": "Request ISO Awareness Training in Saudi Arabia",
    "paragraphs": [
      "Build a stronger understanding of ISO requirements and prepare your organisation for effective management system implementation.",
      "Contact GLOBAQ to discuss the relevant ISO standard and your team's training objectives."
    ]
  }
};

const isoCoursesPath = "/services/trainings/iso-training-courses/";
const primaryButton = "inline-flex items-center justify-center rounded-lg border border-orange-700 bg-orange-700 px-5 py-3 text-sm font-semibold text-white motion-safe:transition-colors hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700";
const secondaryButton = "inline-flex items-center justify-center rounded-lg border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-orange-800 motion-safe:transition-colors hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700";

function Section({ title, id, background = "bg-white", children }) {
  return (
    <section id={id} className={`scroll-mt-44 py-14 lg:py-20 ${background}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-reveal className="mb-8 max-w-4xl">
          <span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-orange-500" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Paragraphs({ items }) {
  return items.map((text) => <p key={text}>{text}</p>);
}

function Checklist({ items }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} data-reveal className="flex min-w-0 items-start gap-3 rounded-xl border border-orange-100 bg-white p-5 shadow-sm hover:border-orange-300 hover:shadow-md motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-1">
          <FaCheck aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-orange-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const sectionLinks = [
  ["training-overview", "Overview"],
  ["training-coverage", "Course coverage"],
  ["iso-standards", "ISO standards"],
  ["training-audience", "Who should attend"],
  ["training-benefits", "Benefits"],
  ["training-faqs", "FAQs"],
];

function useCourseReveals() {
  const pageRef = useRef(null);

  useEffect(() => {
    const preferences = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preferences.matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return;
        if (!preferences.matches) {
          target.animate?.(
            [{ opacity: 0.45, transform: "translateY(20px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 520, delay: Number(target.dataset.delay || 0), easing: "ease-out", fill: "backwards" },
          );
        }
        observer.unobserve(target);
      });
    }, { threshold: 0.08 });

    pageRef.current?.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return pageRef;
}

function CoverageFlipCard({ title, body }) {
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

function CoverageCards({ cards }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map(({ title, body }, index) => (
        <li key={title} data-reveal data-delay={(index % 3) * 55} className="min-w-0">
          <CoverageFlipCard title={title} body={body} />
        </li>
      ))}
    </ul>
  );
}

function BenefitExplorer({ cards, label }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = useRef([]);
  const panels = useRef([]);
  const instanceId = useId();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = panels.current[activeIndex]?.animate?.(
      [{ opacity: 0.45, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 260, easing: "ease-out" },
    );
    return () => animation?.cancel();
  }, [activeIndex]);

  function handleTabKey(event, index) {
    let next;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % cards.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + cards.length) % cards.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = cards.length - 1;
    else return;

    event.preventDefault();
    setActiveIndex(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-7">
      <div role="tablist" aria-label={label} aria-orientation="vertical" className="grid gap-2.5">
        {cards.map(({ title }, index) => (
          <button
            key={title}
            ref={(element) => { tabs.current[index] = element; }}
            type="button"
            role="tab"
            id={`${instanceId}-benefit-${index}`}
            aria-controls={`${instanceId}-benefit-panel-${index}`}
            aria-selected={activeIndex === index}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleTabKey(event, index)}
            data-reveal
            data-delay={index * 45}
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold leading-snug focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 motion-safe:transition-colors sm:px-5 sm:text-base ${
              activeIndex === index
                ? "border-orange-700 bg-orange-700 text-white shadow-sm"
                : "border-orange-100 bg-white text-gray-800 hover:border-orange-300 hover:bg-orange-50"
            }`}
          >
            <FaCheck aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
            {title}
          </button>
        ))}
      </div>

      <div data-reveal data-delay="100" className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg shadow-orange-950/5 sm:p-8">
        {cards.map(({ title, body }, index) => (
          <div
            key={title}
            ref={(element) => { panels.current[index] = element; }}
            id={`${instanceId}-benefit-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${instanceId}-benefit-${index}`}
            hidden={activeIndex !== index}
            tabIndex={0}
            className="rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"
          >
            <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200 bg-white text-orange-700 shadow-sm">
              <FaGraduationCap aria-hidden="true" className="h-7 w-7" />
            </span>
            <p className="!mb-0 text-base leading-relaxed sm:text-lg">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ISOAwarenessTraining() {
  const { overview, coverage, standards, audience, benefits, why, faq, request } = content;
  const titleAccent = "in Saudi Arabia";
  const pageRef = useCourseReveals();

  return (
    <article ref={pageRef} className="bg-white pt-[76px] text-base leading-relaxed text-gray-800 max-md:pt-[50px] [&_p]:mb-4 [&_p]:text-gray-600">
      <SEO title={content.metaTitle} description={content.metaDescription} path={content.path} />
      <PageSchema
        id="page-schema-iso-training"
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

      <header className="overflow-hidden border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.85fr] lg:gap-14">
          <div>
            <Link to={isoCoursesPath} data-reveal className="mb-5 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-orange-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">
              <span aria-hidden="true">←</span> ISO Training Courses
            </Link>
            <h1 data-reveal data-delay="65" className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">
              {content.title.slice(0, -titleAccent.length)}
              <span className="text-orange-700">{titleAccent}</span>
            </h1>
            <h2 data-reveal data-delay="110" className="mb-5 text-lg font-semibold leading-relaxed">{content.hero}</h2>
            <div data-reveal data-delay="145">
              <Paragraphs items={content.heroCopy} />
            </div>
            <div data-reveal data-delay="175" className="mt-6">
              <Link to="/ContactUs" className={primaryButton}>{content.requestLabel}</Link>
            </div>
          </div>
          <figure data-reveal data-delay="120" className="group relative isolate m-0">
            <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[28px] border border-orange-200 sm:-inset-4" />
            <div className="relative overflow-hidden rounded-2xl bg-orange-100 shadow-2xl shadow-orange-950/10">
              <img
                src={content.image.src}
                alt=""
                width={content.image.width}
                height={content.image.height}
                className="aspect-[4/3] w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.04]"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-950/10 via-transparent to-orange-400/10" />
            </div>
          </figure>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav aria-label="On this page" className="flex flex-wrap items-center gap-2 border-b border-orange-100 py-5">
          <span className="mr-2 text-xs font-semibold text-gray-600">On this page</span>
          {sectionLinks.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-800 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 motion-safe:transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <Section id="training-overview" title={overview.title}>
        <div data-reveal className="max-w-4xl border-l-4 border-orange-500 pl-5 sm:pl-6 [&_p:last-child]:mb-0">
          <Paragraphs items={overview.paragraphs} />
        </div>
      </Section>

      <Section
        id="training-coverage"
        title={coverage.title}
        background="border-y border-orange-100 bg-gradient-to-br from-orange-50/70 via-white to-gray-50"
      >
        <CoverageCards cards={coverage.cards} />
      </Section>

      <Section id="iso-standards" title={standards.title}>
        <p className="max-w-4xl">{standards.lead}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {standards.items.map((item) => {
            const colon = item.indexOf(":");
            return (
              <li key={item} data-reveal className="rounded-xl border border-orange-100 bg-orange-50/70 p-5 hover:border-orange-300 hover:bg-orange-100/60 hover:shadow-sm motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-1">
                <strong className="text-orange-900">{item.slice(0, colon + 1)}</strong>
                {item.slice(colon + 1)}
              </li>
            );
          })}
        </ul>
        <p className="!mb-0 mt-6 max-w-4xl">{standards.note}</p>
      </Section>

      <Section id="training-audience" title={audience.title} background="bg-gray-50">
        <p className="max-w-4xl">{audience.lead}</p>
        <Checklist items={audience.items} />
        {audience.note && <p className="!mb-0 mt-6 max-w-4xl">{audience.note}</p>}
      </Section>

      <Section id="training-benefits" title={benefits.title} background="border-y border-orange-100 bg-gradient-to-br from-white via-orange-50/60 to-white">
        <BenefitExplorer cards={benefits.cards} label={benefits.title} />
      </Section>

      <Section id="why-choose-globaq" title={why.title} background="bg-gray-50">
        <div data-reveal className="max-w-4xl rounded-2xl border border-orange-200 bg-white p-6 shadow-sm sm:p-8 [&_p:last-child]:mb-0">
          <Paragraphs items={why.paragraphs} />
        </div>
      </Section>

      <Section id="training-faqs" title={faq.title}>
        <div className="grid max-w-5xl gap-3">
          {faq.cards.map(({ title, body }) => (
            <details key={title} data-reveal className="group overflow-hidden rounded-xl border border-gray-200 bg-white open:border-orange-300 open:shadow-sm hover:border-orange-200 motion-safe:transition-all">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 font-semibold group-open:bg-orange-50 focus-visible:outline-2 focus-visible:outline-orange-700 [&::-webkit-details-marker]:hidden">
                {title}
                <FaChevronDown aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-orange-700 group-open:rotate-180 motion-safe:transition-transform" />
              </summary>
              <p className="px-5 pt-4">{body}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section
        id="request-training"
        title={request.title}
        background="border-t border-orange-100 bg-gradient-to-r from-orange-100 to-amber-100"
      >
        <div data-reveal className="max-w-4xl"><Paragraphs items={request.paragraphs} /></div>
        <div data-reveal data-delay="75" className="mt-5 flex flex-wrap gap-3">
          <Link to="/ContactUs" className={primaryButton}>{content.requestLabel}</Link>
          <Link to={isoCoursesPath} className={secondaryButton}>{content.exploreLabel}</Link>
        </div>
      </Section>
    </article>
  );
}
