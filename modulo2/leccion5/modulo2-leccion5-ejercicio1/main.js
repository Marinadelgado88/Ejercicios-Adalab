'use strict';

const button = document.querySelector('.button');
const parrafo = document.querySelector('.parrafo');
function changeText(){
 parrafo.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}
button.addEventListener('click', changeText);

