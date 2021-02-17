const inputsColors = document.querySelectorAll('input');
const parrafos = document.querySelector('.parrafos');

function changeColors(event) {
  parrafos.classList.remove('select1');
  parrafos.classList.remove('select2');
  if (event.currentTarget.value === '1') {
    parrafos.classList.add('select1');
    localStorage.setItem('color selected', event.currentTarget.value);
  } else if (event.currentTarget.value === '2') {
    parrafos.classList.add('select2');
    localStorage.setItem('color selected', event.currentTarget.value);
  }
}
for (const input of inputsColors) {
  input.addEventListener('change', changeColors);
}
function uploadTheme() {
  const colorTheme = localStorage.getItem('color selected');
  if (colorTheme === '1') {
    parrafos.classList.add('colores-morado');
  } else {
    parrafos.classList.add('colores-rosa');
  }
}
uploadTheme();
