const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
    // return;
  }else{
    reader.question("Please input a number <3: ", function(userNum){
      let num = parseInt(userNum);
      sum += num;
      console.log(sum);
      addNumbers(sum, --numsLeft, completionCallback);
    });
  }
};

addNumbers(0, 3, sum =>{
  console.log(`Total Sum: ${sum}`);
  reader.close();
});