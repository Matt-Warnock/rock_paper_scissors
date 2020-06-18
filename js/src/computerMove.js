class ComputerMove {
  constructor() {
    this._gestureChoice = ['rock', 'paper', 'scissors'];
  }

  get compGesture() {
    let randomIndex = Math.floor(Math.random() * this._gestureChoice.length);
    return this._gestureChoice[randomIndex];
  }

  isDraw(userChoise, computerChoise) {
    return userChoise === computerChoise;
  }

  humanWins(userChoise, computerChoise) {
    return userChoise === 'rock' && computerChoise === 'scissors' ||
           userChoise === 'paper' && computerChoise === 'rock' ||
           userChoise === 'scissors' && computerChoise === 'paper';
  }
}
