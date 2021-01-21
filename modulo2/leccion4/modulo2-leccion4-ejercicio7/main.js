'use strict';

function getEl (a){
    return document.querySelector(a);
}

let parrafoEl = getEl('.parrafo');
let getNumber = Number(parrafoEl.innerHTML);

function paresONones(a){
    return (a%2)
}
if(paresONones(getNumber)===0){
    document.write("Es un número par");
}else{
    document.write("Es un número impar");
}
