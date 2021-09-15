import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/socicon.css";
import "./assets/css/theme-greensea.css";
import "./assets/css/normalize.css";
import "./assets/css/custom.css";

import { initAnalytics, initWebVitals } from "./analytics";
import { initForm } from "./form";
import { initModals } from "./modals";
import { setUpVideoModal } from "./player";
import { initSlider } from "./slider";
import { setTime } from "./utils";

initAnalytics();
initWebVitals();

document.onload = init();

function init() {
  setTime();
  initModals();
  initSlider();
  initForm();
  setUpVideoModal();
}
