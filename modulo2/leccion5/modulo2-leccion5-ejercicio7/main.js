"use strict"
const button =document.querySelector (".button");
function changeColor(){
    button.classList.toggle("blue");
}
button.addEventListener("click", changeColor);