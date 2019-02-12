class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
    this.game.play();
  }

  bindEvents() {
    // bind a click handler to each #square that calls press()

  }

  static flash($square) {
    // class function that removes css classes and then adds them back

    setTimeout(() => {}, 500);
  }

  press($square) {
    // calls flash(), adds to guesses, and calls game's check()


  }

  setupBoard() {
    // Do this function first
    // populates the root element with a $board containing squares
    // add .black class to $board
    // add data for color for each square

    const $board = $("<div>");
    const colors = ['green', 'red', 'yellow', 'blue']


  }
}

module.exports = View;
