'use strict';
/*----- constants -----*/

const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

let symbol = [
  'pics/Mangekyou.png', 'pics/rinnegan.png', 'pics/sharingan.png', 'pics/sage.png'
];

/*----- app's state (variables) -----*/


/*----- cached element references -----*/
const player = new Audio();
const bgPlayer = document.getElementById('bg-player');
const bgCheckbox = document.querySelector('input[type="checkbox"]');

document.getElementById('spinIt').addEventListener('click', spin);
bgPlayer.volume = .2;

/*----- event listeners -----*/
bgCheckbox.addEventListener('change', changeMusic);

/*----- functions -----*/

function changeMusic() {
  bgCheckbox.checked ? bgPlayer.play() : bgPlayer.pause();
}

function spin() { 
slot1.innerHTML = `<img src=${symbol[Math.floor(Math.random() * 4)]}>`
slot2.innerHTML = `<img src=${symbol[Math.floor(Math.random() * 4)]}>`
slot3.innerHTML = `<img src=${symbol[Math.floor(Math.random() * 4)]}>`
}

function winner() {
  if (slot1.innerHTML === slot2.innerHTML && slot2.innerHTML  === slot3.innerHTML  ) {
    console.log('nice');
  } else {
    console.log('rip');
  }
}

console.log(winner)
