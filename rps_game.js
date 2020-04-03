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

function playGame() {
  let userMove = userGesture();
  let computerMove = compGesture();

  const result = document.getElementById('result');




  resetComputerDisplay();

  document.getElementById(`c_${computerMove}`).classList.add('selected');


  if (isDraw(userMove, computerMove)) {
     result.textContent = 'Its a draw!';
    return;
  } else if (humanWins(userMove, computerMove)) {
     result.textContent = 'You win!';
    return;
  } else {
     result.textContent = 'You loose!';
  }
}


document.getElementById('play').addEventListener('click', function () {

  playGame();

});
