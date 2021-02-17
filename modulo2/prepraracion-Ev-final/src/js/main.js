'use strict';
let message = [];

function getDataFromApi() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => {
      message = data.message;
      setInLocalStorage();
    });
}
//guarda en localStorage
function setInLocalStorage() {
  const stringMovies = JSON.stringify(favorites);
  localStorage.setItem('favorites', stringMovies);
}
//recuperar del localStorage y si no llamar al api
function getFromLocalStorage() {
  const localStorageMovies = localStorage.getItem('favorites');
  if (localStorageMovies === null) {
    getDataFromApi();
  } else {
    const arrayMovies = JSON.parse(localStorageMovies);
    message = arrayMovies;
  }
}
// start app, hay que ejecutarlo cuando arranque la página

getFromLocalStorage();
