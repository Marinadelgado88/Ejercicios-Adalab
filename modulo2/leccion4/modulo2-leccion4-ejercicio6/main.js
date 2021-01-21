'use strict';

function getEl (a){
    return console.log(document.querySelector(a));
}

const titleEl = getEl('.title');
const parrafoEl = getEl('.parrafo');

if (titleEl === '')
console.error(`No existe ningún elemento con clase, id o tag llamado {.title}`)
