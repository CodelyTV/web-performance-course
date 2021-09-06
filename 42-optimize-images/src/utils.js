import "dayjs/locale/es";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale("es");
dayjs.extend(relativeTime);

export function setTime() {
  const timeElements = document.querySelectorAll("time");

  timeElements.forEach((time) => {
    const readableTime = dayjs(time.getAttribute("datetime")).fromNow();

    time.innerHTML = readableTime;
  });
}

export function show(element) {
  element.classList.remove("hidden");
}

export function hide(element) {
  element.classList.add("hidden");
}
