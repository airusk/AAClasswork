// const Game = require("./game.js");

const mo = new MovingObject({
  pos: [300,300],
  vel: [10,5],
  radius: 20,
  color: "#41e0cb"
});

function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options["vel"];
  this.radius = options.radius;
  this.color = options.color;
  // this.game = options.game;
}


MovingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  // this.pos = this.game.wrap(this.pos);
  if (this.pos[0] > 610) {
    this.pos[0] = -5;
  }else if (this.pos[0] < -5){
    this.pos[0] = 610;
  }
  if(this.pos[1] > 610){
    this.pos[1] = -5;
  }else if (this.pos[1] < -5){
    this.pos[1] = 610;
  }
  
};



module.exports = MovingObject;