const View = require('./view');
const Game = require('./game');

$( () => {
  const rootEl = $('#simon');
  const game = new Game();
  new View(game, rootEl);
});
