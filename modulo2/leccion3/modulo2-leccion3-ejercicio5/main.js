'use strict';
const box = document.querySelector(".container");
const tittle =document.querySelector('.tittle');
const text = document.querySelector('.info');
let method = prompt("Introduce que clase quieres, succes , error o warning").toLowerCase();

if( method === 'warning'){
    box.classList.add ('warning')
    tittle.innerHTML = 'AVISO';
    text.innerHTML ='Tenga cuidado'
} else if (method ==='error') {
    box.classList.add ('error')
        tittle.innerHTML = 'ERROR';
        text.innerHTML ='Ha surgido un error'
} else if (method === 'succes') {
    box.classList.add ('succes')
        tittle.innerHTML = 'CORRECTO';
        text.innerHTML ='Los datos son correctos'
}


