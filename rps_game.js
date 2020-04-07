function userGesture() {
  return document.querySelector('input[name=gesture]:checked').value;
}

function compGesture() {
  var gestureChoice = ['rock', 'paper', 'scissors'];
  var randomIndex = Math.floor(Math.random() * 3);
  return gestureChoice[randomIndex];
}

function isDraw(userChoise, computerChoise) {
  return userChoise === computerChoise;
}

function humanWins(userChoise, computerChoise) {
  return userChoise === 'rock' && computerChoise === 'scissors' ||
  userChoise === 'paper' && computerChoise === 'rock' ||
  userChoise === 'scissors' && computerChoise === 'paper';
}

function resetComputerDisplay() {
  document.getElementById('c_rock').classList.remove('selected');
  document.getElementById('c_paper').classList.remove('selected');
  document.getElementById('c_scissors').classList.remove('selected');
}

function updateDispay(printOnScreen, humanDisplay, robotDisplay) {
  result.textContent = printOnScreen;
  document.getElementById('human_face').src = humanDisplay;
  document.getElementById('robot_face').src = robotDisplay;
}

function playGame() {
  let userMove = userGesture();
  let computerMove = compGesture();

  const winSound = new Audio('audio/tada.mp3');
  const drawSound = new Audio('audio/kongas.mp3');
  const looseSound = new Audio('audio/Wrong-answer-sound-effect.mp3');

  const result = document.getElementById('result');


  document.getElementById(`c_${computerMove}`).classList.add('selected');


  if (isDraw(userMove, computerMove)) {
    drawSound.play();
    return updateDispay('Its a draw!', 'images/human.png', 'images/robot.png');

  } else if (humanWins(userMove, computerMove)) {
    winSound.play();
    return updateDispay('You win!', 'images/human-win.png', 'images/robot-sad.png');

  } else {
    looseSound.play();
    return updateDispay('You loose!', 'images/human-sad.png', 'images/robot-win.png');
  }
}


document.getElementById('play').addEventListener('click', function () {

  resetComputerDisplay();
  playGame();

});
