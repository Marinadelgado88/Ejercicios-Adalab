"use strict"
const infoAdalaber = document. querySelector(".information");
const infoAdalaberTwo = document. querySelector(".information2");

const adalaber1 = {
name: 'Susana',
age: 34,
profesion: 'periodista'
}
infoAdalaber.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.profesion}.`;