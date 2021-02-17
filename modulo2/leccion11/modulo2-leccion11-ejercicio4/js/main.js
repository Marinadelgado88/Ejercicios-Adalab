const paragraph = document.querySelector('.js-paragraph');
const input = document.querySelector('.js-name');

function showName(event) {
  let addText = event.currentTarget.value;
  paragraph.innerHTML = addText;

  localStorage.setItem('name', 'addText');
}
input.addEventListener('keyup', showName);
