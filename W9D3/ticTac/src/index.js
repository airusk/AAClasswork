const View = require("./ttt-view.js");
const Game = require("../ticTacNodeSolution/game.js");


// $(() => {
  //code goes here
  //   });
  
$(() => {
  let game = new Game();
  let $el = $(".ttt");
  new View(game, $el);
});