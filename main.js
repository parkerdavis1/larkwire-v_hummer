const birdSounds = [
  // --------------Black-chinned Hummingbird--------------
  {
    bird: 'bchu',
    type: 'display',
    filename: "./sounds/601 Black-chinned Hummingbird 01 Display US-AZ.mp3"
  },
  {
    bird: 'bchu',
    type: 'call',
    filename: "./sounds/602 Black-chinned Hummingbird 02 Calls US-CA.mp3"
  },
  {
    bird: 'bchu',
    type: 'call',
    filename: "./sounds/603 Black-chinned Hummingbird 03 Calls US-AZ.mp3"
  },
  {
    bird: 'bchu',
    type: 'call',
    filename: "./sounds/604 Black-chinned Hummingbird 04 Calls US-TX.mp3"
  },
  {
    bird: 'bchu',
    type: 'call',
    filename: "./sounds/XC13527 - Black-chinned Hummingbird - Archilochus alexandri.mp3"
  },
  {
    bird: 'bchu',
    type: 'call',
    filename: "./sounds/XC132287 - Black-chinned Hummingbird - Archilochus alexandri.mp3"
  },
  {
    bird: 'bchu',
    type: 'call',
    filename: "./sounds/XC132320 - Black-chinned Hummingbird - Archilochus alexandri.mp3"
  },
  {
    bird: 'bchu',
    type: 'call',
    filename: "./sounds/XC132324 - Black-chinned Hummingbird - Archilochus alexandri.mp3"
  },
  {
    bird: 'bchu',
    type: 'call',
    filename: "./sounds/XC297544 - Black-chinned Hummingbird - Archilochus alexandri.mp3"
  },
// ---------------Anna's Hummingbird---------------------
  {
    bird: 'anhu',
    type: 'song',
    filename: "./sounds/605 Anna's Hummingbird 01 Song US-AZ.mp3"
  },
  {
    bird: 'anhu',
    type: 'display',
    filename: "./sounds/606 Anna's Hummingbird 02 Display US-CA.mp3"
  },
  {
    bird: 'anhu',
    type: 'call',
    filename: "./sounds/607 Anna's Hummingbird 03 Calls US-CA.mp3"
  },
  {
    bird: 'anhu',
    type: 'call',
    filename: "./sounds/608 Anna's Hummingbird 04 Calls US-CA.mp3"
  },
  {
    bird: 'anhu',
    type: 'call',
    filename: "./sounds/XC70078 - Anna's Hummingbird - Calypte anna.mp3"
  },
  {
    bird: 'anhu',
    type: 'call',
    filename: "./sounds/XC132220 - Anna's Hummingbird - Calypte anna.mp3"
  },
  {
    bird: 'anhu',
    type: 'call',
    filename: "./sounds/XC159808 - Anna's Hummingbird - Calypte anna.mp3"
  },
  {
    bird: 'anhu',
    type: 'call',
    filename: "./sounds/XC461240 - Anna's Hummingbird - Calypte anna.mp3"
  },
  {
    bird: 'anhu',
    type: 'call',
    filename: "./sounds/XC524667 - Anna's Hummingbird - Calypte anna.mp3"
  },
  {
    bird: 'anhu',
    type: 'call',
    filename: "./sounds/XC524805 - Anna's Hummingbird - Calypte anna.mp3"
  },
// ----------------Costa's Hummingbird-------------------
  {
    bird: 'cohu',
    type: 'display',
    filename: "./sounds/609 Costa's Hummingbird 01 Display US-AZ.mp3"
  },
  {
    bird: 'cohu',
    type: 'display',
    filename: "./sounds/610 Costa's Hummingbird 02 Display US-AZ.mp3"
  },
  {
    bird: 'cohu',
    type: 'call',
    filename: "./sounds/611 Costa's Hummingbird 03 Calls US-CA.mp3"
  },
  {
    bird: 'cohu',
    type: 'call',
    filename: "./sounds/612 Costa's Hummingbird 04 Calls US-CA.mp3"
  },
  {
    bird: 'cohu',
    type: 'call',
    filename: "./sounds/XC21428 - Costa's Hummingbird - Calypte costae.mp3"
  },
  {
    bird: 'cohu',
    type: 'call',
    filename: "./sounds/XC138145 - Costa's Hummingbird - Calypte costae.mp3"
  },
  {
    bird: 'cohu',
    type: 'call',
    filename: "./sounds/XC143788 - Costa's Hummingbird - Calypte costae.mp3"
  },
  {
    bird: 'cohu',
    type: 'call',
    filename: "./sounds/XC218781 - Costa's Hummingbird - Calypte costae.mp3"
  },
  {
    bird: 'cohu',
    type: 'call',
    filename: "./sounds/XC390286 - Costa's Hummingbird - Calypte costae.mp3"
  },
// ---------------------Verdin----------------------

  // {
  //   bird: 'verd',
  //   type: 'song',
  //   filename: "./sounds/2753 Verdin 01 Song US-AZ.mp3"
  // },
  // {
  //   bird: 'verd',
  //   type: 'song',
  //   filename: "./sounds/2754 Verdin 02 Song US-NM.mp3"
  // },
  // {
  //   bird: 'verd',
  //   type: 'call',
  //   filename: "./sounds/2755 Verdin 03 Calls US-AZ.mp3"
  // },
  // {
  //   bird: 'verd',
  //   type: 'call',
  //   filename: "./sounds/2756 Verdin 04 Calls US-AZ.mp3"
  // },
  // {
  //   bird: 'verd',
  //   type: 'call',
  //   filename: "./sounds/2757 Verdin 05 Calls US-AZ.mp3"
  // },
  {
    bird: 'verd',
    type: 'call',
    filename: "./sounds/2758 Verdin 06 Calls US-AZ.mp3"
  },
  {
    bird: 'verd',
    type: 'call',
    filename: "./sounds/2759 Verdin 07 Calls US-AZ.mp3"
  }



]

function chooseRandom (array) {
  return array[Math.floor(Math.random()*array.length)];
}

let randomBird = chooseRandom(birdSounds);

let currentSoundEl = document.getElementById('currentSound');
currentSoundEl.src = randomBird.filename;

function newRandomBird() {
  randomBird = chooseRandom(birdSounds);
  currentSoundEl.src = randomBird.filename;
  currentSoundEl.setAttribute('autoplay', 'true');
  let allBirds = document.getElementsByClassName('bird')
  for (let bird of allBirds) {
    bird.style.backgroundColor = '';
  }
  document.getElementById('audioFileName').innerHTML='';
}

let newBirdButton = document.getElementById('newBird');
newBirdButton.addEventListener('click', newRandomBird)

function isThisCurrentBird(event) {
  if (event.target.className.includes(randomBird.bird)) {
    // event.target.parentElement.style.backgroundColor = 'lightgreen';
    event.target.style.backgroundColor = 'lightgreen';
  }
}

let birdNodeList = document.getElementsByClassName('bird-image')
for (let bird of birdNodeList) {
  bird.addEventListener('click', isThisCurrentBird);
}

let playPauseButton = document.getElementById('playPause');
playPauseButton.addEventListener('click', playPause)

function playPause() {
  // Update the Button
  let pause = playPauseButton.innerHTML === 'Play';
  playPauseButton.innerHTML = pause ? 'Play' : 'Pause';

  // Update the Audio
  let method = pause ? 'play' : 'pause';
  currentSound[method](); 

  // Prevent Default Action
  return false;
}

currentSoundEl.addEventListener('ended', fileEnd)

function fileEnd() {
  playPauseButton.innerHTML = 'Play';
}




const reveal = function() {
  let currentBirdEl = document.getElementById(randomBird.bird);
  // currentBirdEl.parentElement.style.backgroundColor = 'lightblue'
  currentBirdEl.style.backgroundColor = 'lightblue'
  let currentBirdFileName = document.getElementById('audioFileName');
  currentBirdFileName.innerHTML = randomBird.filename;
}

let revealButton = document.getElementById('reveal');
revealButton.addEventListener('click', reveal);