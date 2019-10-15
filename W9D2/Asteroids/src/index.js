console.log("Wubpack is wubbing");
document.addEventListener("DOMContentLoaded", () => {
  const MovingObject = require("./moving_object.js");
  const Asteroid = require("./asteroid.js");
  const Game = require("./game.js");
  const GameView = require("./game_view.js");
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  
  window.ctx = ctx;
  window.MovingObject = MovingObject;
  window.Asteroid = Asteroid;
  window.Game = Game;
  window.GameView = GameView;
  
  let g = new Game();
  let gv = new GameView(g, ctx);
  gv.start();
});

