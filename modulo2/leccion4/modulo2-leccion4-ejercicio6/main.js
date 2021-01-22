'use strict';

function getEl (a){
    const clas = document.querySelector(a);
    return clas;
}
const clasName=".primer";
const invento= getEl  (clasName);


if (invento === null){
    console.log(`No existe ningún elemento con clase, id o tag llamado ${clasName}`);}
