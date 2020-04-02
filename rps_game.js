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

  console.log(userReturn);
  console.log(computerReturn);

  if (isDraw(userReturn, computerReturn) === true) {
    return console.log('draw');
  } else if (gameRules(userReturn, computerReturn) === true) {
    return console.log('You Win!');
  } else {
    return console.log('You Loose');
  }
}

document.getElementById('play').addEventListener('click', function () {

  playGame();
  
});
