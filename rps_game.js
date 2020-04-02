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
  }
  else if (userChoise === 'paper' && computerChoise === 'rock') {
    return true;
  }
  else if (userChoise === 'scissors' && computerChoise === 'paper') {
    return true;
  }
  else {
    return false;
  }
}


const button = document.getElementById('play');
button.addEventListener('click', function () {
var x = compGesture();
  console.log(userGesture());
  console.log(x);
  console.log(gameRules(userGesture(), x));
});
