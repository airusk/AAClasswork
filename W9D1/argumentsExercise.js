function sum(){
  let sum = 0;
  let arr = [].slice.call(arguments);
  arr.forEach(el => sum += el);
  return sum;
}

sum(1, 2, 3, 4) === 10;
sum(1, 2, 3, 4, 5) === 15;


// Function.prototype.myBind = function(ctx) {
//   let bindArgs = [].slice.call(arguments, 1);
//   let that = this;
//   return function() {
//     let callArgs = [].slice.call(arguments);
//     return that.apply(ctx, bindArgs.concat(callArgs));
//   };
// };

Function.prototype.myBind = function(ctx, ...bindArgs) {
  return (...callArgs) =>{
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs){
  const numbers = [];
  return function _curriedSum(num){
    numbers.push(num);
    if (numbers.length === numArgs){
      let result = 0;
      numbers.forEach(num => result += num)
      return result;
    }else{
      return _curriedSum;
    }
  }
}

// const cSum = curriedSum(4);
// // console.log(cSum);
// console.log(cSum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs){
  const args = [];
  let that = this;
  return function _curry(arg){
    args.push(arg);
    if (args.length === numArgs){
      return that.apply(null,args);
    }else{
      return _curry;
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30;
