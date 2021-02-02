'use strict';

const teacher1 = document.querySelector('.teacher--isra');
const teacher2 = document.querySelector('.teacher--tuerto');
const teacher3 = document.querySelector('.teacher--nasi');

function selectedTeacher(event) {
  const selectedTeacher = event.currentTarget;
  selectedTeacher.classList.toggle('teacher--selected');
  const favoritSelect = selectedTeacher.querySelector('.favorite');
  if (favoritSelect.innerHTML === 'Añadir') {
    favoritSelect.innerHTML = 'Quitar';
  } else {
    favoritSelect.innerHTML = 'Añadir';
  }
}

teacher1.addEventListener('click', selectedTeacher);
teacher2.addEventListener('click', selectedTeacher);
teacher3.addEventListener('click', selectedTeacher);
