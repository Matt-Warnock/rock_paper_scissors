/* function userGesture() {
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
};

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
  const loseSound = new Audio('audio/Wrong-answer-sound-effect.mp3');

  const result = document.getElementById('result');


  document.getElementById(`c_${computerMove}`).classList.add('selected');


  if (isDraw(userMove, computerMove)) {
    drawSound.play();
    return updateDispay('Its a draw!', 'images/human.png', 'images/robot.png');

  } else if (humanWins(userMove, computerMove)) {
    winSound.play();
    return updateDispay('You win!', 'images/human-win.png', 'images/robot-sad.png');

  } else {
    loseSound.play();
    return updateDispay('You lose!', 'images/human-sad.png', 'images/robot-win.png');
  }
}


document.getElementById('play').addEventListener('click', function () {

  resetComputerDisplay();
  playGame();

}); */


(function () {
  let userInput = {
    userGesture () {
      return document.querySelector('input[name=gesture]:checked').value;
    },
    clickToPlay () {
      document.getElementById('play').addEventListener('click', function () {
        displayReaction.resetComputerDisplay();
        displayReaction.playGame();
      });
    }
  };

  let computerMove = {
    _gestureChoice: ['rock', 'paper', 'scissors'],

    get compGesture() {
      randomIndex = Math.floor(Math.random() * 3);
      return this._gestureChoice[randomIndex];
    },

    isDraw(userChoise, computerChoise) {
      return userChoise === computerChoise;
    },

    humanWins(userChoise, computerChoise) {
      return userChoise === 'rock' && computerChoise === 'scissors' ||
             userChoise === 'paper' && computerChoise === 'rock' ||
             userChoise === 'scissors' && computerChoise === 'paper';
    }
  };

  const displayReaction = {
    _winSound: new Audio('audio/tada.mp3'),
    _drawSound: new Audio('audio/kongas.mp3'),
    _loseSound: new Audio('audio/Wrong-answer-sound-effect.mp3'),
    _result: document.getElementById('result'),

    resetComputerDisplay() {
      document.getElementById('c_rock').classList.remove('selected');
      document.getElementById('c_paper').classList.remove('selected');
      document.getElementById('c_scissors').classList.remove('selected');
    },

    _updateDispay(printOnScreen, humanDisplay, robotDisplay) {
      this._result.textContent = printOnScreen;
      document.getElementById('human_face').src = humanDisplay;
      document.getElementById('robot_face').src = robotDisplay;
    },

    playGame() {
      let humanMove = userInput.userGesture(),
      robotMove = computerMove.compGesture;

      document.getElementById(`c_${robotMove}`).classList.add('selected');

      if (computerMove.isDraw(humanMove, robotMove)) {
        this._drawSound.play();
        return this._updateDispay('Its a draw!', 'images/human.png', 'images/robot.png');

      } else if (computerMove.humanWins(humanMove, robotMove)) {
        this._winSound.play();
        return this._updateDispay('You win!', 'images/human-win.png', 'images/robot-sad.png');

      } else {
        this._loseSound.play();
        return this._updateDispay('You lose!', 'images/human-sad.png', 'images/robot-win.png');
      }
    }
  };

  userInput.clickToPlay();

  })();
