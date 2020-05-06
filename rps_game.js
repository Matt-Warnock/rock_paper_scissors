(function () {
  let userInput = {
    userGesture () {
      return document.querySelector('input[name=gesture]:checked').value;
    },
    clickToPlay () {
      document.getElementById('play').addEventListener('click', function () {
        gameLayout.resetComputerDisplay();
        gameLayout.playGame();
      });
    }
  };

  let computerMove = {
    _gestureChoice: ['rock', 'paper', 'scissors'],

    get compGesture() {
      let randomIndex = Math.floor(Math.random() * this._gestureChoice.length);
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

  const gameLayout = {
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
