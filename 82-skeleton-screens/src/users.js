export function renderUsers() {
  const clients = document.getElementById("clients");
  loadUsers().then((users) => {
    clients.innerHTML = "";
    users.slice(0, 8).forEach((user) => clients.appendChild(userHtml(user)));
  });
}

function loadUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
}

function userHtml(user) {
  const container = document.createElement("div");
  container.classList.add("col-sm-6", "col-md-3");
  const testimonial = document.createElement("div");
  testimonial.classList.add(
    "testimonial__image",
    "boxed",
    "boxed--border",
    "bg--secondary"
  );
  const image = document.createElement("img");
  image.src = `https://i.pravatar.cc/150?u=${user.email}`;
  const name = document.createElement("h5");
  name.innerText = user.name;
  const position = document.createElement("span");
  position.innerText = `${user.company.name}, ${user.company.catchPhrase}`;

  testimonial.appendChild(image);
  testimonial.appendChild(name);
  testimonial.appendChild(position);

  container.appendChild(testimonial);
  return container;
}
