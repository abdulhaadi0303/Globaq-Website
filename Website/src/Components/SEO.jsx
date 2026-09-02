import { useEffect } from "react";

const SITE_URL = "https://globaqksa.com";

/**
 * Sets document title, meta description, and a self-referencing canonical
 * tag for the current page. Drop <SEO .../> at the top of any page
 * component's return. Works with the build-time prerender script because
 * Puppeteer captures the DOM after this effect has run.
 */
export default function SEO({ title, description, path, noindex = false }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content, attr = "name") => {
      if (!content) return;
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${path || ""}`);
  }, [title, description, path, noindex]);

  return null;
}