describe('ComputerMove', function () {
  let computerMove;

  beforeEach(function () {
    computerMove = new ComputerMove();
  });

  it('produces either rock, paper or scissors', function () {
    expect(computerMove.compGesture).toMatch(/rock|paper|scissors/);
  });

  it('checks for a draw', function () {
    expect(computerMove.isDraw('a', 'a')).toBe(true);
  });

  it('detects when not a draw', function () {
    expect(computerMove.isDraw('a', 'b')).toBe(false);
  });

  it('checks if rock beats scissors', function () {
    expect(computerMove.humanWins('rock', 'scissors')).toBe(true);
  });

  it('detects when human loses', function () {
    expect(computerMove.humanWins('scissors', 'rock')).toBe(false);
  });

});
