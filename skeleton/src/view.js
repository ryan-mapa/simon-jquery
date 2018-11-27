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

    this.$el.on("click", "#square", ( event => {
      const $square = $(event.currentTarget);
      this.press($square);
    }));
  }

  static flash($square) {
    // class function that removes css classes and then adds them back

    let color = $square.data("color");
    $square.removeClass();
    $square.addClass(`flash`);
    setTimeout(() => {
      $square.removeClass();
      $square.addClass(`${color}`);
    }, 500);
  }

  press($square) {
    // calls flash() and adds to guesses and calls geame's check()

    const color = $square.data("color");
    View.flash($square);
    this.game.guesses.push(color);
      this.game.check();
  }

  setupBoard() {
    // populates the root element with a $board containing squares
    
    const $board = $("<div>");
    $board.addClass("black");
    const colors = ['green', 'red', 'yellow', 'blue']

    for (var i = 0; i < colors.length; i++) {
      let $square = $("<div>");
      $square.attr("id", "square");
      $square.data("color", colors[i]);
      $square.addClass(`${colors[i]}`);
      $board.append($square);
    }

    this.$el.append($board);
  }
}

module.exports = View;
