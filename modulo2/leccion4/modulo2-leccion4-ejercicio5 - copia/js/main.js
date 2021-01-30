'use strict';

// Declarar variable para que cuando clique el botón aparezca el evento
// Crear el evento 
// Declarar otra variable que cambie el texto
//Escribir dentro de la función lo que quiero que pase que en este caso esa que coja del input el nombre y lo escriba en el párrafo.

const button = document.querySelector('.button');
const valueName = document.querySelector('.name');

function handleName(){
console.log ('Hola' + valueName.value) ;

}

button.addEventListener('click', handleName);