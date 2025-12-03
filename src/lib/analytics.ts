// Analytics helper functions
declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Track page views
export function pageview(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
}

// Track custom events
export function trackEvent({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Pre-defined event tracking
export const events = {
  ctaClick: (ctaName: string) =>
    trackEvent({
      action: "cta_click",
      category: "engagement",
      label: ctaName,
    }),
  formSubmit: (formName: string) =>
    trackEvent({
      action: "form_submit",
      category: "conversion",
      label: formName,
    }),
  demoScheduled: () =>
    trackEvent({
      action: "demo_scheduled",
      category: "conversion",
    }),
  videoPlay: (videoName: string) =>
    trackEvent({
      action: "video_play",
      category: "engagement",
      label: videoName,
    }),
};
