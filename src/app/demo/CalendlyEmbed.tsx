"use client";

import { useEffect } from "react";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/metrixai/demo";

export function CalendlyEmbed() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_landing_page_details=1`}
      style={{
        minWidth: "320px",
        height: "750px",
        overflow: "hidden"
      }}
    />
  );
}
