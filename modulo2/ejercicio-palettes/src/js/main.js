'use strict';
const palettesContainer = document.querySelector('.js-palettes-container');
let palettes = []; // guardo fetch en una variable global para poder vovler a usar después

// api

function getDataFromApi() {
  fetch(
    'http://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json'
  )
    .then((response) => response.json())
    .then((data) => {
      palettes = data.palettes;
      paintPalettes();
      setInLocalStorage();
    });
}

//local storge, aquí esta guardado en el local Storage, lo divido en función para que cada una haga solo una actividad

function setInLocalStorage() {
  const stringPalettes = JSON.stringify(palettes);
  localStorage.setItem('palettes', stringPalettes);
}

function getFromLocalStorage() {
  const localStoragePalettes = localStorage.getItem('palettes');
  if (localStoragePalettes === null) {
    getDataFromApi();
  } else {
    const arrayPalettes = JSON.parse(localStoragePalettes);
    palettes = arrayPalettes;
    paintPalettes();
  }
}

//pintar
function paintPalettes() {
  let htmlCode = ''; //como tengo un array y necesito recorrerlo, necesito un cajón para ir acumulando todo el código html y luego pintarlo en el HTML, al pincipio pinto un string vacía que iré rellenado con código html
  for (const palette of palettes) {
    htmlCode += '<li class="palette">'; // estoy pintando el html, entonces le digo el html es igual a si mismo mas lo que pongo entre comillas
    htmlCode += '<h2 class="palette__title">${palette.name}</h2>';
    htmlCode += '<div class="palette__colors">';
    for (const paletteColor of palette.colors) {
      htmlCode +=
        '<div class="palette__color" style="background-color: #${paletteColor}"></div>';
    }
    htmlCode += '</div>';
    htmlCode += '</li>';
  }
  palettesContainer.innerHTML = htmlCode;
}
// start app, hay que ejecutarlo cuando arranque la página

getFromLocalStorage();
