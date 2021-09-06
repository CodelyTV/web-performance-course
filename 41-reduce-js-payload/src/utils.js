import moment from "moment";

moment.locale("es");

export function setTime() {
  const timeElements = document.querySelectorAll("time");

  timeElements.forEach((time) => {
    const readableTime = moment(time.getAttribute("datetime")).fromNow();

    time.innerHTML = readableTime;
  });
}

export function show(element) {
  element.classList.remove("hidden");
}

export function hide(element) {
  element.classList.add("hidden");
}
