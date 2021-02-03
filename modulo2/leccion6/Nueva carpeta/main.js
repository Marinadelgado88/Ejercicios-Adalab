const infoAdalaber = document.querySelector('.information');
const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.job = 'periodista';

infoAdalaber.innerHTML =
  'Mi nombre es ${.name}, tengo ${adalaber.age} años y soy ${adalaber.job}';
