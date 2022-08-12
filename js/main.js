'use strict';
/*----- constants -----*/
//each column is a slot
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');


//every symbol stored into an array
let symbol = [
  'pics/Mangekyou.png', 'pics/rinnegan.png', 'pics/sharingan.png', 'pics/sage.png'
];

/*----- app's state (variables) -----*/
const tsunadeBlessing = 20;
let currentScore = [];


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
  WinningCombos(); //randomize all slots, then call a function
}

function WinningCombos() { //the function in question lol
  if (slot1.innerHTML === slot2.innerHTML && slot2.innerHTML === slot3.innerHTML) {
    
      document.getElementById("comboMessage").innerHTML = "YOU GOT A TRIPLE";
      let triple = 6;
      console.log("TRIPLE");
      console.log(tsunadeBlessing + triple);
    //store it as a triple pls
    
  } else if (slot1.innerHTML == slot2.innerHTML || slot1.innerHTML == slot3.innerHTML || slot2.innerHTML == slot3.innerHTML) {
      document.getElementById("comboMessage").innerHTML = "YOU GOT A DOUBLE";
      let double = 3;
      console.log("DOUBLE");
      console.log(tsunadeBlessing + double);
    //store it as a triple pleez
    
  } else {
    document.getElementById("comboMessage").innerHTML = "YOU LOST";
      let nothing = -2;
      console.log("If You Want To Know Pain, You Must Understand Pain. Lose points.");
      console.log(tsunadeBlessing + nothing);
    //take away points!
  }
  
}

 console.log(WinningCombos)
