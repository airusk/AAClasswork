Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]); 
  }
};

let a = [1,2,3,2,1];
let callback = function (element) {
  console.log(++element);
};

// a.myEach(callback);

Array.prototype.myMap = function(callback2) {
  let result = [];
  this.myEach(el => {
    result.push(2 * callback2(el));
  });
  return result;
};

let callback2 = function (element) {
  return (++element);
};

// console.log(a.myMap(callback2));


Array.prototype.myReduce = function(callback3,initial){
  let result = initial ? initial : 0;
  this.myEach(el => {
    result = callback3(result,el);
  });
  return result;
};

// without initialValue
let x = [1, 2, 3].myReduce(function (acc, el) {
  return acc + el;
}); // => 6

console.log(x);
// with initialValue
let y = [1, 2, 3].myReduce(function (acc, el) {
  return acc + el;
}, 25); // => 31
console.log(y);
