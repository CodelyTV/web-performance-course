import { hide, show } from "./utils";

export function initForm() {
  loadSelectData();

  document
    .getElementById("user_form")
    .addEventListener("submit", async function (ev) {
      ev.preventDefault();
      const form = ev.target;

      if (isFormValid()) {
        const { success, data: newUser } = await createUser(form);

        if (!success) {
          handleFormError();
          return;
        }

        handleFormSuccess(form, newUser);
      }
    });
}

function fetchData(select) {
  const domain =
    document.domain == "localhost" ? "localhost:8080" : document.domain;
  const type = select.getAttribute("data-type");

  return fetch(`http://${domain}/data/${type}.json`)
    .then((response) => response.json())
    .catch(() => {
      throw new Error(`Could not find ${type}.json`);
    });
}

async function loadSelectData() {
  const dataLoaders = document.querySelectorAll(".js-load-data");
  const requests = [];

  for (const select of dataLoaders) {
    requests.push(fetchData(select));
  }

  const responses = await Promise.all(requests).catch((e) => {
    console.error(e);
    return [];
  });

  responses.forEach(({ data }, index) => {
    const select = dataLoaders[index];

    for (const item of data) {
      const option = document.createElement("option");
      option.textContent = item.name;
      select.append(option);
    }
  });
}

function validateRequiredField(field) {
  const isValid = !!field.value;

  if (!isValid) {
    field.classList.add("error");
  }
  return isValid;
}

function validateEmail() {
  const field = document.getElementById("email");
  const isValid = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
  ).test(field.value);

  if (!isValid) {
    field.classList.add("error");
  }
  return isValid;
}

function validateDob() {
  const field = document.getElementById("dob");
  const date = +new Date(field.value);
  const now = +new Date();
  const isValid = Math.abs(new Date(now - date).getUTCFullYear() - 1970) > 18;

  if (!isValid) {
    field.classList.add("error");
  }
  return isValid;
}

function validateBio() {
  const field = document.getElementById("bio");
  const fieldLength = field.value.length;
  const isValid = fieldLength > 0 && field.value.length <= 200;

  if (!isValid) {
    field.classList.add("error");
  }
  return isValid;
}

function isFormValid() {
  hide(document.getElementById("user_form_error"));

  const formControls = document.querySelectorAll(".js-form-control");

  formControls.forEach(function (control) {
    control.classList.remove("error");
  });

  const isValid =
    validateRequiredField(document.getElementById("firstName")) &&
    validateRequiredField(document.getElementById("lastName")) &&
    validateEmail() &&
    validateDob() &&
    validateRequiredField(document.getElementById("country")) &&
    validateRequiredField(document.getElementById("courseCategory")) &&
    validateBio();

  if (!isValid) {
    show(document.getElementById("user_form_error"));
  }

  return isValid;
}

function handleFormError() {
  show(document.getElementById("network_form_error"));
}

function handleFormSuccess(form) {
  const thanksBlock = document.getElementById("thanks");
  const title = thanksBlock.querySelector("h3");
  const content = thanksBlock.querySelector("p");

  title.innerHTML = "Thank you!";
  content.innerHTML = "We've sent you a confirmation email";

  hide(form);
  show(thanksBlock);
}

function createUser(form) {
  return new Promise((resolve) => {
    const newUser = Object.values(form.elements).reduce((user, element) => {
      if (element.id) {
        user[element.id] = element.value;
      }
      return user;
    }, {});

    resolve({
      success: true,
      data: newUser,
    });
  });
}
