const View = require('./view');

class Game {
  constructor() {
    this.turn = 1;
    this.tracker = [];
    this.guessing = 0;
    this.guesses = [];
  }

  play() {
    this.takeTurn();
  }

  check() {
    if (this.tracker[this.guessing] == this.guesses[this.guessing]) {
      this.guessing += 1;

      if (this.guessing === this.turn) {
        this.guessing = 0;
        this.guesses = [];
        this.turn += 1;
        this.takeTurn();
      }
    } else {
      this.gameOver();
    }
  }

  takeTurn() {
    this.randomSquare();
    this.playBack();
  }

  gameOver() {
    alert(`Game Over. You got ${this.turn-1} points!!!`)
  }

  randomSquare() {
    const colors = ['green', 'red', 'yellow', 'blue'];
    let nextSquare = Math.floor(Math.random() * 4);
    this.tracker.push(colors[nextSquare]);
  }

  playBack() {
    let current = this.tracker;
    setTimeout(() => {
      for (let i = 0; i < current.length; i++) {
        // console.log(`${i+1} is ${current[i]}`);
        let square = $(`.${current[i]}`);
        setTimeout( () => View.flash(square), (1000 * i) );
      }
    }, 1500);
  }
}

module.exports = Game;
