"use strict"
const infoAdalaber = document. querySelector(".information");
const infoAdalaberTwo = document. querySelector(".information2");

const adalaber1 = {}
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.profesion = 'periodista';
adalaber1.run = running => `${running}`;

adalaber1.runMarathon = (distance) => {
    console.log(`Estoy corriendo un maratón de ${distance} kilómetros`);
}
adalaber1.runMarathon (50);


//infoAdalaber.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.profesion}.`;