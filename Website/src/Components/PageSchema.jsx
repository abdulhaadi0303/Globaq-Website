import { useEffect } from "react";

/**
 * Injects page-specific JSON-LD schema (e.g. AboutPage, ContactPage, Service)
 * in addition to the site-wide LocalBusiness schema already added via
 * Schema.jsx in the Layout. Use a unique `id` per page so multiple
 * PageSchema instances never collide with each other or with org-schema.
 */
export default function PageSchema({ id, data }) {
    useEffect(() => {
        let script = document.getElementById(id);
        if (!script) {
            script = document.createElement("script");
            script.id = id;
            script.type = "application/ld+json";
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(data);

        return () => {
            const el = document.getElementById(id);
            if (el) el.remove();
        };
    }, [id, data]);

    return null;
}