const Game = require("../ticTacNodeSolution/game.js");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("ul").on("click", "li", (e) => {
      let $li = $(e.currentTarget);
      this.makeMove($li);
      /
      / if (this.game.winner())
    });
  }
  
  makeMove($square) {
    $square.addClass("toad");
    let mark = this.game.currentPlayer;
    this.game.playMove($square.data("pos"));
    $square.append(`<label>${mark}</label>`);
    debugger

    // fixes: current player should actually be the next player's mark instead

  }

  setupBoard() {
     this.$el.append($("<ul>"));
     for (let i = 0; i < 3; i++) {
       for (let j = 0; j < 3; j++) {
         let $li = $("<li>");
         $li.data("pos", [i, j]);
         $("ul").append($($li));
       }
     }
  }
}

module.exports = View;
