const sumLargestNumbers = function(data) {
    // Put your solution here
let bigOne = 0;
let bigTwo = 0;
    // You will go through the loop twice without the use of ForEach if possible.

 for (let i = 0; i < data.length; i++) {
    // First Loop
    if (data[i] >= bigOne && data[i] >= bigTwo) {
        bigOne = data[i];
    }
 }
 // Second Loop
 for (let i = 0; i < data.length; i++) {
    if (data[i] >= bigTwo && data[i] < bigOne) {
        bigTwo = data[i];
    }
 }
return bigOne + bigTwo;
 
};
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));