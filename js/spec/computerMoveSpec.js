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

  it('checks if paper bests rock', function () {
    expect(computerMove.humanWins('paper', 'rock')).toBe(true);
  });

  it('checks if scissors bests paper', function () {
    expect(computerMove.humanWins('scissors', 'paper')).toBe(true);
  });

  it('detects when human loses with scissors', function () {
    expect(computerMove.humanWins('scissors', 'rock')).toBe(false);
  });

  it('detects when human loses with rock', function () {
    expect(computerMove.humanWins('rock', 'paper')).toBe(false);
  });

  it('detects when human loses with paper', function () {
    expect(computerMove.humanWins('paper', 'scissors')).toBe(false);
  });

  it('ignores if there is a draw', function () {
    expect(computerMove.humanWins('paper', 'paper')).not.toBe(true);
  });
});
