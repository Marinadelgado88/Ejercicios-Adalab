'use strict';

// Declarar variable para que cuando pase el botón aparezca el evento
// Crear el evento 
// Declarar otra variable que cambie el texto
//Escribir dentro de la función lo que quiero que pase que en 

const color = document.querySelector('.body');

function changeColor(event) {
if (event.code === 'KeyR'){
    color.classList.add('class1');
    color.classList.remove('class3');
} else if (event.code === 'KeyP'){
    color.classList.remove('class1'); 
    color.classList.add('class3');
    
}
}

document.addEventListener('keydown', changeColor);