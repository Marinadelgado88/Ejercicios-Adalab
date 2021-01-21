
'use strict';
const control = document.querySelector(".control")
let userName = prompt("Introduce tu nombre");

if (userName==="Marina" || userName ==="Sagra"){
    control.innerHTML = "Bienvenida Adalaber"
}else{
    control.innerHTML = "Lo sentimos, pero no tienes acceso a este contenido :("
}
