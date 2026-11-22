/* eslint-disable react/prop-types -- Sections use the authored training brief data. */
import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaClipboardCheck } from "react-icons/fa";
import SEO from "../../SEO";
import PageSchema from "../../PageSchema";

const entrance = "motion-safe:animate-[globaq-course-entrance_700ms_ease-out_both]";
const primary = "inline-flex rounded-lg border border-orange-700 bg-orange-700 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 motion-safe:transition-colors";
const secondary = "inline-flex rounded-lg border border-orange-200 bg-white px-5 py-3 text-sm font-semibold text-orange-800 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 motion-safe:transition-colors";

function useSectionReveals() {
  const ref = useRef(null);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        observer.unobserve(target);
        if (!motion.matches) {
          target.animate?.(
            [{ opacity: 0.18, transform: "translateY(36px)" }, { opacity: 1, transform: "none" }],
            { duration: 700, delay: Number(target.dataset.delay || 0), easing: "ease-out", fill: "backwards" },
          );
        }
      }
    }, { threshold: 0.08 });

    ref.current?.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function CourseParagraphs({ paragraphs }) {
  return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
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

const programmeEntrance = "motion-safe:animate-[globaq-programme-panel_420ms_ease-out_both]";
const accordionEntrance = "motion-safe:group-open:animate-[globaq-programme-panel_420ms_ease-out_both]";

function ProgrammeDetails({ blocks }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "p": {
        const isSummary = index === blocks.length - 1;
        return (
          <p key={index} className={isSummary
            ? "!mb-0 mt-5 rounded-xl border-l-4 border-orange-500 bg-orange-50 px-4 py-4 !text-gray-800"
            : index === 0 ? "!mb-5 text-base leading-relaxed" : "!mb-3 font-semibold !text-gray-900"}>
            {block.text}
          </p>
        );
      }

      case "list": {
        const List = block.ordered ? "ol" : "ul";
        return (
          <List key={index} className={`my-4 grid gap-2.5 text-sm sm:grid-cols-2 ${block.ordered ? "list-decimal marker:font-bold marker:text-orange-800" : ""}`}>
            {block.items.map((item) => {
              const colon = item.indexOf(":");
              return (
                <li key={item} className={`min-w-0 rounded-xl border border-orange-100 bg-white px-4 py-3 leading-relaxed text-gray-800 ${block.ordered ? "list-inside" : "flex items-start gap-3"}`}>
                  {!block.ordered && <FaCheck aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-orange-700" />}
                  <span>{colon >= 0 ? <><strong>{item.slice(0, colon + 1)}</strong>{item.slice(colon + 1)}</> : item}</span>
                </li>
              );
            })}
          </List>
        );
      }

      default:
        return <TrainingBlocks key={index} blocks={[block]} />;
    }
  });
}

function ProgrammeExplorer({ programmes }) {
  const [active, setActive] = useState(0);
  const instance = useId();
  const tabs = useRef([]);

  function handleKeyDown(event, index) {
    let next;
    switch (event.key) {
      case "ArrowDown": next = (index + 1) % programmes.length; break;
      case "ArrowUp": next = (index + programmes.length - 1) % programmes.length; break;
      case "Home": next = 0; break;
      case "End": next = programmes.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <>
      <div className="hidden items-start gap-7 lg:grid lg:grid-cols-[minmax(16rem,1fr)_minmax(0,2.35fr)]">
        <div role="tablist" aria-label="Training programmes" aria-orientation="vertical" className="grid gap-3">
          {programmes.map(({ title }, index) => (
            <button
              key={title}
              ref={(node) => { tabs.current[index] = node; }}
              type="button"
              role="tab"
              id={`${instance}-tab-${index}`}
              aria-controls={`${instance}-panel-${index}`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              data-reveal
              data-delay={index * 65}
              className={`group flex min-w-0 items-center gap-3 rounded-xl border p-4 text-left font-semibold leading-snug focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 motion-safe:transition-colors ${active === index ? "border-orange-700 bg-orange-700 text-white shadow-md shadow-orange-950/10" : "border-gray-200 bg-white text-gray-900 hover:border-orange-300 hover:bg-orange-50"}`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-800">
                <FaClipboardCheck aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">{title}</span>
              <span aria-hidden="true">→</span>
            </button>
          ))}
        </div>
        <div data-reveal data-delay="100" className="min-w-0 rounded-2xl border border-orange-200 bg-gradient-to-br from-white via-white to-orange-50/70 p-7 shadow-sm xl:p-8">
          {programmes.map(({ title, blocks }, index) => (
            <div
              key={title}
              role="tabpanel"
              id={`${instance}-panel-${index}`}
              aria-labelledby={`${instance}-tab-${index}`}
              hidden={active !== index}
              tabIndex={0}
              className={`rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 ${active === index ? programmeEntrance : ""}`}
            >
              <h3 className="mb-5 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-orange-900">{title}</h3>
              <ProgrammeDetails blocks={blocks} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 lg:hidden">
        {programmes.map(({ title, blocks }, index) => (
          <details key={title} name={`${instance}-programmes`} open={index === 0} data-reveal className="group min-w-0 rounded-xl border border-gray-200 bg-white shadow-sm open:border-orange-200">
            <summary className="flex cursor-pointer list-none items-center gap-3 rounded-xl p-4 font-semibold leading-snug text-gray-900 group-open:bg-orange-50 group-open:text-orange-900 focus-visible:outline-2 focus-visible:outline-orange-700 [&::-webkit-details-marker]:hidden">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-800">
                <FaClipboardCheck aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">{title}</span>
              <span aria-hidden="true" className="shrink-0 text-orange-700 after:content-['+'] group-open:after:content-['−']" />
            </summary>
            <div className={`p-4 sm:p-6 ${accordionEntrance}`}><ProgrammeDetails blocks={blocks} /></div>
          </details>
        ))}
      </div>
    </>
  );
}

function TrainingBlocks({ blocks }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "p":
        return <p key={index} className="max-w-4xl">{block.text}</p>;

      case "list": {
        const List = block.ordered ? "ol" : "ul";
        return (
          <List key={index} className={`mb-5 max-w-5xl space-y-2 pl-6 text-gray-700 marker:font-semibold marker:text-orange-700 ${block.ordered ? "list-decimal" : "list-disc"}`}>
            {block.items.map((item, i) => <li key={i} className="pl-1">{item}</li>)}
          </List>
        );
      }

      case "cards":
        return <CoverageCards key={index} cards={block.cards} />;

      case "faq":
        return (
          <div key={index} className="grid max-w-5xl gap-3">
            {block.cards.map(({ title, body }) => (
              <details key={title} data-reveal className="group rounded-xl border border-gray-200 bg-white shadow-sm open:border-orange-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl p-5 font-semibold leading-snug text-gray-900 group-open:bg-orange-50 focus-visible:outline-2 focus-visible:outline-orange-700 [&::-webkit-details-marker]:hidden">
                  {title}
                  <span aria-hidden="true" className="shrink-0 text-xl text-orange-700 after:content-['+'] group-open:after:content-['−']" />
                </summary>
                <p className="!mb-0 p-5">{body}</p>
              </details>
            ))}
          </div>
        );

      case "programmes":
        return <ProgrammeExplorer key={index} programmes={block.groups} />;

      case "groups":
        return (
          <div key={index} className="grid gap-5">
            {block.groups.map(({ title, blocks: detail }) => (
              <section key={title} data-reveal className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="mb-4 text-xl font-bold leading-snug text-orange-900">{title}</h3>
                <TrainingBlocks blocks={detail} />
              </section>
            ))}
          </div>
        );

      default:
        return null;
    }
  });
}

export default function TrainingCourse({
  content,
  image = { src: "/consultancy.jpg", width: 1280, height: 853 },
  exploreTo = "/trainings/",
  exploreLabel = content.exploreLabel,
}) {
  const ref = useSectionReveals();
  const suffix = "in Saudi Arabia";
  const accentStart = content.title.endsWith(suffix) ? content.title.length - suffix.length : content.title.length;

  return (
    <article ref={ref} className="bg-white pt-[76px] text-base leading-relaxed text-gray-800 max-md:pt-[50px] [&_p]:mb-4 [&_p]:text-gray-600">
      <SEO title={content.metaTitle} description={content.metaDescription} path={content.path} />
      <PageSchema
        id="page-schema-training-course"
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
        @keyframes globaq-programme-panel {
          from { opacity: .2; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes globaq-course-entrance {
          from { opacity: .18; transform: translateY(36px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header className="overflow-hidden border-b border-orange-100 bg-gradient-to-br from-orange-50 via-white to-gray-50 py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.85fr] lg:gap-14">
          <div>
            <nav aria-label="Breadcrumb" className={`mb-5 text-sm font-semibold text-orange-800 ${entrance}`}>
              <Link to="/trainings/" className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700"><span aria-hidden="true">←</span> Trainings</Link>
            </nav>
            <h1 className={`mb-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl ${entrance} motion-safe:[animation-delay:65ms]`}>
              {content.title.slice(0, accentStart)}<span className="text-orange-700">{content.title.slice(accentStart)}</span>
            </h1>
            <h2 className={`mb-5 text-lg font-semibold leading-relaxed ${entrance} motion-safe:[animation-delay:125ms]`}>{content.hero}</h2>
            <div className={`${entrance} motion-safe:[animation-delay:190ms]`}>
              <CourseParagraphs paragraphs={content.heroCopy} />
              <Link to="/ContactUs" className={primary}>{content.requestLabel}</Link>
            </div>
          </div>
          <figure className={`group relative isolate m-0 ${entrance} motion-safe:[animation-delay:170ms]`}>
            <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[28px] border border-orange-200 sm:-inset-4" />
            <img src={image.src} width={image.width} height={image.height} alt="" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-orange-950/10 motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.04]" />
          </figure>
        </div>
      </header>

      <nav aria-label="On this page" className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="flex flex-wrap gap-2 border-b border-gray-200 py-5">
          {content.sections.map(({ id, title, navLabel }) => (
            <li key={id}>
              <a href={`#${id}`} className="inline-flex rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-700 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">
                {navLabel ?? title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {content.sections.map(({ id, title, blocks }, index) => (
        <section key={id} id={id} className={`scroll-mt-44 py-14 lg:py-20 ${index % 2 === 0 ? "bg-white" : "border-y border-orange-100 bg-gradient-to-br from-orange-50/70 via-white to-gray-50"}`}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div data-reveal className="mb-7 max-w-4xl">
              <span aria-hidden="true" className="mb-5 block h-1 w-14 rounded-full bg-orange-500" />
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl">{title}</h2>
            </div>
            <div className="space-y-6"><TrainingBlocks blocks={blocks} /></div>
          </div>
        </section>
      ))}

      <section id="request-training" className="scroll-mt-44 border-t border-orange-100 bg-gradient-to-r from-orange-100 to-amber-100 py-14 lg:py-20">
        <div data-reveal className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="mb-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-gray-900 lg:text-4xl">{content.request.title}</h2>
          <div className="max-w-4xl"><CourseParagraphs paragraphs={content.request.paragraphs} /></div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/ContactUs" className={primary}>{content.requestLabel}</Link>
            <Link to={exploreTo} className={secondary}>{exploreLabel}</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
