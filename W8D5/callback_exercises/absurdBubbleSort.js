const readline = require('readline');
reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr,sortCompletionCallback){

}

function askIfGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2}? (y/n)`,function(response){
    greater = (response === 'y') ? true : false;
    callback(greater);
  });
}