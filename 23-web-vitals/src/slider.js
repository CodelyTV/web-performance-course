import Glide from "@glidejs/glide";

export function initSlider() {
  const glide = new Glide(".glide", {
    type: "carousel",
    perView: 4,
    breakpoints: {
      800: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
    autoplay: 4000,
  });

  glide.mount();
}
