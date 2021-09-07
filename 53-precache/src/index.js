import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/socicon.css";
import "./assets/css/theme-greensea.css";
import "./assets/css/normalize.css";
import "./assets/css/custom.css";

import { getCLS, getFID, getLCP } from "web-vitals";

import { initModals } from "./modals";
import { setUpVideoModal } from "./player";
import { initSlider } from "./slider";
import { setTime } from "./utils";

function sendToGoogleAnalytics({ name, delta, id }) {
  window.gtag("event", name, {
    event_category: "Web Vitals",
    event_label: id,
    value: Math.round(name === "CLS" ? delta * 1000 : delta),
    non_interaction: true,
  });
}

getCLS(sendToGoogleAnalytics);
getFID(sendToGoogleAnalytics);
getLCP(sendToGoogleAnalytics);

document.onload = init();

function init() {
  setTime();
  initModals();
  initSlider();
  setUpVideoModal();

  document.getElementById("subscribe").addEventListener("click", () => {
    import(/* webpackPrefetch: true */ "./form").then(({ initForm }) => {
      initForm();
    });
  });

  navigator.serviceWorker.register("/service-worker.js");
}
