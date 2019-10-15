
// Function.prototype.inherits = function(parentClass) {
//   function Surrogate () {}
//   Surrogate.prototype = parentClass.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function(parentClass) {
  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;
};



class MovingObject {
  constructor(drag, velocity) {
  this.drag = drag;
  this.velocity = velocity;
  }

  dropOff() {
    console.log(`Calculating Drop Off...`)
  }
}

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

let xWillx = new Ship();
xWillx.dropOff();

let airus = new Asteroid();
airus.dropOff();


