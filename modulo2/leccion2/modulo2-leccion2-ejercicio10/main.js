const age= document.querySelector (".ageMarina");


console.log(age.innerHTML);

//const ageMarina=32;
const hours=8760; 
const totalHours = parseInt(age.innerHTML) * hours;

console.log(`tardarías ${totalHours} horas en verlos`);
