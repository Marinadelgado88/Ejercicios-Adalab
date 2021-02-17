let counter = 0;
let unit = 'segundo';

const incrementAndShowCounter = () => {
  counter++;
  let message;
  const time = document.querySelector('.time');
  if (counter === 1) {
    message = `Ha pasado ${counter} ${unit}`;
  } else if (counter > 59) {
    unit = 'minuto';
    message = `Ha pasado 1 ${unit}`;
  } else if (counter > 1) {
    unit = 'segundos';
    message = `
    Han pasado ${counter} ${unit}`;
  }
  time.innerHTML = message;
};

setInterval(incrementAndShowCounter, 1000);
