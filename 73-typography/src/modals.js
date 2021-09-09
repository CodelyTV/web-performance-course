import { hide, show } from "./utils";

export function initModals() {
  const modalButtons = document.querySelectorAll("[data-modal]");

  modalButtons.forEach((btn) => {
    const modal = document.getElementById(btn.getAttribute("data-modal"));
    btn.addEventListener("click", () => show(modal));

    const closeBtn = modal.querySelector(".modal-close");
    closeBtn.addEventListener("click", () => hide(modal));
  });
}
