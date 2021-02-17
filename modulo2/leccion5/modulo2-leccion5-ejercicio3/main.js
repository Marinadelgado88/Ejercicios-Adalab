const lorem = document.querySelector('.old');
const ipsum = document.querySelector('.new');

function showP() {
  ipsum.innerHTML =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae neque dicta labore dolorum corrupti fugiat assumenda enim beatae. Ratione reprehenderit culpa architecto distinctio rem veritatis omnis qui laboriosam porro ipsum.';
}

lorem.addEventListener('mouseover', showP);
