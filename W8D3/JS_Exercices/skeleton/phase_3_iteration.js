Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        sorted = false;
      }
    }
  }
  return this;
};

// let a = [1, 2, 3, 2, 1];
// console.log(a.bubbleSort());

String.prototype.substrings = function() {
  let subs = [];
  
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length + 1; j++) {
      let sub = this.substring(i,j);
      if (!subs.includes(sub) && sub !== "") {
        subs.push(sub); 
      }
    }
  }
  return subs;
};

let str = "apple";
console.log(str.substrings());
