"use strict"
const infoAdalaber = document. querySelector(".information");
const infoAdalaberTwo = document. querySelector(".information2");

const adalaber1 = {}
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.profesion = 'periodista';
adalaber1.run = running => `${running}`;


console.log(adalaber1.run("Estoy corriendo"));

infoAdalaber.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.profesion}.`;