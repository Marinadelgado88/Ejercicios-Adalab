'use strict';
const btn = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

function handleColor(event) {
  const selectButton = event.currentTarget;
  selectButton.classList.toggle('blue');
  console.log(selectButton);
}

btn.addEventListener('click', handleColor);
btn2.addEventListener('click', handleColor);
