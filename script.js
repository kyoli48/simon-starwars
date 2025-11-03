// ==============================================
// GAME CONFIGURATION AND GLOBAL VARIABLES
// ==============================================
// Pattern represents the Imperial March sequence that players need to replicate
let pattern = [2, 2, 2, 1, 3, 2, 1, 3, 2];  // Imperial March sequence
let progress = 0;
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;
let guessCounter = 0;
let isRandomMode = false; // true for Sith mode

// Timing constants for game mechanics (in milliseconds)
const clueHoldTime = 700;
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting clue sequence

// UI element references
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// ==============================================
// CORE GAME CONTROL FUNCTIONS
// ==============================================
function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  isRandomMode = document.getElementById("difficultySelect").value === "random";

  // swap the Start and Stop buttons
  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");

  resetProgressBar();

  // play clues based on progress
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;

  // swap the Start and Stop buttons
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");

  resetProgressBar();
}

// ==============================================
// BUTTON AND VISUAL FEEDBACK FUNCTIONS
// ==============================================
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// ==============================================
// GAME SEQUENCE AND CLUE PLAYBACK FUNCTIONS
// ==============================================
// Randomizes button positions in Sith mode for added difficulty
function swapButtonPositions() {
  const gameButtonArea = document.getElementById("gameButtonArea");
  const buttons = Array.from(gameButtonArea.children);

  // Remove all buttons
  buttons.forEach(button => gameButtonArea.removeChild(button));

  // Add them back in random order
  buttons
    .sort(() => Math.random() - 0.5)
    .forEach(button => gameButtonArea.appendChild(button));
}

function playClueSequence() {
  context.resume()

  if (isRandomMode) {
    swapButtonPositions();
  }

  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// ==============================================
// PLAYER INPUT AND GAME LOGIC FUNCTIONS
// ==============================================
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn === pattern[guessCounter]) {
    if (guessCounter === progress) {
      if (progress === pattern.length - 1) {
        winGame();
      } else {
        progress++;
        updateProgressBar();
        setTimeout(playClueSequence, 1000);
      }
    } else {
      guessCounter++;
    }
  } else {
    loseGame();
  }
}

// ==============================================
// GAME OUTCOME FUNCTIONS
// ==============================================
function loseGame() {
  stopGame();
  const message = messages.defeat[Math.floor(Math.random() * messages.defeat.length)];
  showModal('lose', message);
}

function winGame() {
  stopGame();
  const message = messages.victory[Math.floor(Math.random() * messages.victory.length)];
  showModal('win', message);
}

// ==============================================
// AUDIO SYNTHESIS CONFIGURATION AND FUNCTIONS
// ==============================================
// Frequency mapping for musical notes (Imperial March theme)
const freqMap = {
  1: 311.13,  // Eb4
  2: 392.00,  // G4
  3: 466.16,  // Bb4
  4: 587.33   // D5
}

function playTone(btn, len) {
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function() {
    stopTone()
  }, len)
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
  tonePlaying = false
}

// ==============================================
// PROGRESS TRACKING AND UI UPDATE FUNCTIONS
// ==============================================
function updateProgressBar() {
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");
  const percentage = ((progress) / pattern.length) * 100;

  progressFill.style.width = `${percentage}%`;
  progressText.textContent = `Progress: ${progress}/${pattern.length}`;
}

function resetProgressBar() {
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");

  progressFill.style.width = `0%`;
  progressText.textContent = `Progress: 0/${pattern.length}`;
}

// ==============================================
// GAME MESSAGES AND MODAL FUNCTIONS
// ==============================================
// Collection of Darth Vader quotes for victory and defeat scenarios
const messages = {
  victory: [
    "The Force is strong with this one.",
    "Impressive. Most impressive.",
    "All too easy."
  ],
  defeat: [
    "You have failed me for the last time.",
    "Your lack of faith is disturbing.",
    "The Emperor is not as forgiving as I am.",
    "You are as clumsy as you are stupid.",
    "Be careful not to choke on your aspirations, Director."
  ]
};

function showModal(type, message) {
  const modal = document.createElement('div');
  modal.className = 'game-modal ' + type;
  modal.innerHTML = `
    <div class="modal-content">
      <h2>${type === 'win' ? 'Victory!' : 'Defeat!'}<br>${message}</h2>
      <button onclick="this.parentElement.parentElement.remove()">Continue</button>
    </div>
  `;
  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add('visible'), 10);
}

// ==============================================
// AUDIO CONTEXT INITIALIZATION
// ==============================================
// Page Initialization
// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)
resetProgressBar();
