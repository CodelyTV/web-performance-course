function addPlayer(container) {
  const videoId = container.getAttribute("data-video-id");
  const iframe = document.createElement("iframe");

  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  iframe.setAttribute(
    "src",
    `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`
  );

  container.innerHTML = "";
  container.appendChild(iframe);
}

export function setUpVideoModal() {
  const container = document.getElementById("video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addPlayer(container);
        } else {
          container.innerHTML = "";
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }
  );

  observer.observe(container);
}
