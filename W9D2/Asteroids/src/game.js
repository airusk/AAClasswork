const Asteroid = require("./asteroid.js");

function Game(){
  this.DIM_X = 600;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 19;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    let roid = new Asteroid({ pos: this.randomPosition() });//, game: this
    this.asteroids.push(roid);
  }
};

Game.prototype.randomPosition = function(){
  return [Math.floor(Math.random() * 600), Math.floor(Math.random() * 600)];
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);
  for (let i=0; i<this.NUM_ASTEROIDS; i++){
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function(){
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids[i].move();
  }
};

// Game.prototype.wrap = function(pos){
//   let x = pos[0];
//   let y = pos[1];

//   if(x > 605){
//     x = -5;
//   }else if (x < -5){
//     x = 605;
//   }

//   if(y > 605){
//     y = -5;
//   }else if (y < -5){
//     y = 605;
//   }

//   return [x,y];
// };

module.exports = Game;