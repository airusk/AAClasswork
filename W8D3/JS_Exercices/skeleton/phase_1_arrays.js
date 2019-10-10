Array.prototype.uniq = function(){
  let uniqArr = [];
  this.forEach(ele=>{
    if (!uniqArr.includes(ele)) uniqArr.push(ele);
  });
  return uniqArr;
};

// let a = [1,2,3,2,1];
// console.log(a.uniq());

Array.prototype.twoSum = function(n=0){
  let arrObj = {};
  let positions = [];
  this.forEach((ele,i) => {
    arrObj[ele] = i;
    if (arrObj.hasOwnProperty(n - ele)) {
      positions.push([i, arrObj[n - ele]]);
    }
  });
  // for (let i = 0; i < this.length; i++) {
  //   const element = this[i];
  //   if ( arrObj.hasOwnProperty(n - element) ) {
  //     positions.push([i, arrObj[n - element]]);
  //   }
  // }
  return positions;
};

// let a = [1,-1,0,4,-4];
// console.log(a.twoSum());

Array.prototype.transpose = function () {
  let transposed = [];  
  for (let i = 0; i < this.length; i++) {
    transposed[i] = new Array(this[0].length);
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[0].length; j++) {
      transposed[j][i] = this[i][j];
    }
  }
  return transposed;
};

let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr.transpose());


