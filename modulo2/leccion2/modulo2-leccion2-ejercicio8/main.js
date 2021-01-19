const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const presentation= `My dog is ${firstDogImage} and its name is ${firstDogName}`;

const htmlToShow= `<p> ${presentation} </p>`;

const content = document.getElementById('content');
//content.innerHTML= htmlToShow;
