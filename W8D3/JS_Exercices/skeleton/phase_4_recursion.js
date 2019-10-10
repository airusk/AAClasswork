function range(start, end) {
  if (start === end) return end;
  let result = [start];
  result = result.concat(range(start + 1, end)); //  [1] + [2] = [1, 2]
  return result;
}

// console.log(range(1,5));


function sumRec(arr) {
  if (arr.length === 1) return arr[0];
  let result = arr.shift();
  result += sumRec(arr);
  return result;
}

// console.log(sumRec(range(1,5)));

function exponent(base, exp){
  if (exp === 0) return 1;
  return base * exponent(base,exp-1);
}

console.log(exponent(2,3));


function exponent2(base, exp){
  if (exp === 0) return 1;
  return (
    (exp % 2 === 0) ? 
    (exponent(base, exp / 2) ** 2) : 
    (base * (exponent(base, (exp - 1) / 2) ** 2)) 
  );
}

console.log(exponent2(2,3));
