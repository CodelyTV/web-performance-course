import { getCLS, getFID, getLCP } from "web-vitals";

export function initAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = () => {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());

  window.gtag("config", "UA-206596733-1");
}

function sendToGoogleAnalytics({ name, delta, id }) {
  if (!window.gtag) {
    console.error("ups");
  }
  console.log(name);
  window.gtag("event", name, {
    event_category: "Web Vitals",
    event_label: id,
    value: Math.round(name === "CLS" ? delta * 1000 : delta),
    non_interaction: true,
  });
}

export function initWebVitals() {
  getCLS(sendToGoogleAnalytics);
  getFID(sendToGoogleAnalytics);
  getLCP(sendToGoogleAnalytics);
}
