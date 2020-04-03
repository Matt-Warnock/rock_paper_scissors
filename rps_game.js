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

function gameRules(userChoise, computerChoise) {
  if (userChoise === 'rock' && computerChoise === 'scissors') {
    return true;
  } else if (userChoise === 'paper' && computerChoise === 'rock') {
    return true;
  } else if (userChoise === 'scissors' && computerChoise === 'paper') {
    return true;
  } else {
    return false;
  }
}

function playGame() {
  let userReturn = userGesture();
  let computerReturn = compGesture();

  const footer = document.getElementById('result');

  let displayRock = document.getElementById('c_rock');
  let displayPaper = document.getElementById('c_paper');
  let displayScissors = document.getElementById('c_scissors');


  function displayComputerGesture() {
    if (computerReturn === 'rock') {
      displayRock.classList.add('selected');
      return;
    }
    else if (computerReturn === 'paper') {
      displayPaper.classList.add('selected');
      return;
    }
    else {
      displayScissors.classList.add('selected');
    }
  }

function resetComputerDisplay() {
  displayRock.classList.remove('selected');
  displayPaper.classList.remove('selected');
  displayScissors.classList.remove('selected');
}

resetComputerDisplay();
displayComputerGesture();

  if (isDraw(userReturn, computerReturn) === true) {
     footer.textContent = 'Its a draw!';
    return;
  } else if (gameRules(userReturn, computerReturn) === true) {
     footer.textContent = 'You win!';
    return;
  } else {
     footer.textContent = 'You loose!';
  }
}


document.getElementById('play').addEventListener('click', function () {

  playGame();

});
