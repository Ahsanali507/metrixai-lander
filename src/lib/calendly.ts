// Calendly configuration
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/metrixai/demo";

export function openCalendlyPopup() {
  if (typeof window !== "undefined" && (window as unknown as { Calendly?: { initPopupWidget: (opts: { url: string }) => void } }).Calendly) {
    (window as unknown as { Calendly: { initPopupWidget: (opts: { url: string }) => void } }).Calendly.initPopupWidget({
      url: CALENDLY_URL,
    });
  }
}

export function getCalendlyEmbedUrl(): string {
  return CALENDLY_URL;
}
