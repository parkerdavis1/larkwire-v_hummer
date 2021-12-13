const birdSounds = [
  {
    bird: 'bendire',
    filename: "./sounds/3142 Bendire's Thrasher 01 Song US-AZ.mp3"
  },
  {
    bird: 'bendire',
    filename: "./sounds/3143 Bendire's Thrasher 02 Song US-AZ.mp3"
  },
  {
    bird: 'bendire',
    filename: "./sounds/3144 Bendire's Thrasher 03 Calls US-AZ.mp3"
  },
  {
    bird: 'bendire',
    filename: "./sounds/3145 Bendire's Thrasher 04 Calls US-AZ.mp3"
  },
  {
    bird: 'leconte',
    filename: "./sounds/3153 LeConte's Thrasher 01 Song US-AZ.mp3"
  },
  {
    bird: 'leconte',
    filename: "./sounds/3154 LeConte's Thrasher 02 Song US-AZ.mp3"
  },
  {
    bird: 'leconte',
    filename: "./sounds/3155 LeConte's Thrasher 03 Song US-AZ.mp3"
  },
  {
    bird: 'leconte',
    filename: "./sounds/3156 LeConte's Thrasher 04 Calls US-AZ.mp3"
  },
  {
    bird: 'leconte',
    filename: "./sounds/3157 LeConte's Thrasher 05 Calls US-CA.mp3"
  },
  {
    bird: 'leconte',
    filename: "./sounds/3158 LeConte's Thrasher 06 Calls US-CA.mp3"
  },
  {
    bird: 'crissal',
    filename: "./sounds/3159 Crissal Thrasher 01 Song US-AZ.mp3"
  },
  {
    bird: 'crissal',
    filename: "./sounds/3160 Crissal Thrasher 02 Song US-TX.mp3"
  },
  {
    bird: 'crissal',
    filename: "./sounds/3161 Crissal Thrasher 03 Calls US-NM.mp3"
  },
  {
    bird: 'crissal',
    filename: "./sounds/3162 Crissal Thrasher 04 Calls US-NV.mp3"
  },
  {
    bird: 'crissal',
    filename: "./sounds/3163 Crissal Thrasher 05 Calls US-AZ.mp3"
  },
  {
    bird: 'crissal',
    filename: "./sounds/3164 Crissal Thrasher 06 Calls US-NM.mp3"
  },
  {
    bird: 'sage',
    filename: "./sounds/3165 Sage Thrasher 01 Song US-CA.mp3"
  },
  {
    bird: 'sage',
    filename: "./sounds/3166 Sage Thrasher 02 Song US-CA.mp3"
  },
  {
    bird: 'sage',
    filename: "./sounds/3167 Sage Thrasher 03 Song US-NV.mp3"
  },
  {
    bird: 'sage',
    filename: "./sounds/3168 Sage Thrasher 04 Song US-CA.mp3"
  },
  {
    bird: 'sage',
    filename: "./sounds/3169 Sage Thrasher 05 Calls US-AZ.mp3"
  },
  {
    bird: 'sage',
    filename: "./sounds/3170 Sage Thrasher 06 Calls US-WA.mp3"
  },

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