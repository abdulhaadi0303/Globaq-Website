import { useEffect } from "react";

/**
 * Injects site-wide Organization/LocalBusiness JSON-LD schema once,
 * at the Layout level, so it's present on every page. Real business
 * details pulled from Footer.jsx / ContactUs.jsx — update here if
 * those ever change so there's one source of truth.
 */
export default function Schema() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "GLOBAQ KSA",
      "url": "https://globaqksa.com",
      "email": "info@globaqksa.com",
      "telephone": "+966530767286",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Al-Khobar",
        "addressCountry": "SA"
      },
      "description": "Globaq provides ISO certification support, quality management system audits, and accreditation consultancy across Saudi Arabia."
    };

    let script = document.getElementById("org-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "org-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }, []);

  return null;
}