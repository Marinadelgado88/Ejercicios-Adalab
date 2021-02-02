"use strict";

const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getUser);

function getUser() {
  const username = document.querySelector(".username").nodeValue;
  fetch("https://api.github.com/users/${username}")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Foto usuario";

      const name = document.querySelector(".name");
      name.innerHTML = data.login;

      const repositories = document.querySelector(".repositories");
      repositories.innerHTML = data.public_repos;
    });
}
