'use strict';
const btn = document.querySelector('.button');

function handleColor() {
  btn.classList.toggle('blue');
  btn.classList.add('form');
}

btn.addEventListener('click', handleColor);
