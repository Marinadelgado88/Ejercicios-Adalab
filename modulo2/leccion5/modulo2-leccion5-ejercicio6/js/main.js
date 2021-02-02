"use stric";
/*EJERCICIO 6
Información instantánea
Crear una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.
Nota: el objetivo es hacerlo utilizando event.currentTarget.*/

// Necesito una constante para que me guarde lo que se escribe en el input

const btn = document.querySelector(".btn");

//Necesio de otra constante para que lo que se guarda en el input se escriba en el párrafo

const parag = document.querySelector(".paragraph");

// Le digo a mi función qué es lo que tiene que hacer

function getElement(event) {
  //Necesito conocer el valor de lo que se escriba en el input, uso currentTarget para llamar a la constante btn

  const nameValue = event.currentTarget.value;

  //Me traigo el contenido del párrafo y le digo que muestre el valor

  parag.innerHTML = nameValue;
}
// Por último, le pongo e listener para que cuando la usuaria toque una tecla se escriba en el párrafo
btn.addEventListener("keyup", getElement);
