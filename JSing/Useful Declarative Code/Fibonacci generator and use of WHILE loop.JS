/*
Use of WHILE loop to perform a function as many times until it reaches a
limit. Great for problems that need you to reach a limit without knowing how 
many times you need to perform the function.

For future reference, every third number in the sequence is an even number.
*/

function sumFibs(num) {
    
    // Fibonacci const values to start. 
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
   
    // number of unknown loops until a limit.
    while (currNumber <= num) {
      
      // check for every third FIB number which is EVEN to act as a chapter to check sum. 
        if (currNumber % 2 !== 0) {
        result += currNumber;
      }

      // Fibonacci sequence creation.
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  console.log(sumFibs(1000));
  
  /* A code yto generate an array of fib numbers for future use.

function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return  sum = arr;
 
}

  */