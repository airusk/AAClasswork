const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid(options){
  options.color = options.color || '#' + Math.floor(Math.random() * 16777215).toString(16);
  options.radius = options.radius || 10;
  options.vel = options.vel || Util.randomVec(0.5);
  MovingObject.call(this, options);
}


Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;