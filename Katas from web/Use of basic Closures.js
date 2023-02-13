// Essentially a closure is function within a function
// to demonstrate the ability to transfer data through variables and other functions.
// typical structure of the closures so far is to treat the first portion as the data to be modified.

const countdownGenerator = function(x) {
  const messages = {
    3: 'T-minus 3...',
    2: 'T-minus 2...',
    1: 'T-minus 1...',
    0: 'Blast Off!',
  };

  // typical for the anonymous return function to start the second half of closure.
  return function() {
    
    //second portion modifies the data to create a different outcome for the data shared earlier.
    let message = messages[x];
    if (message === undefined) {
      return 'Rockets already gone bub!';
    } else {
      x--;
    }
    return message;
  };
};

//demonstrates the ability for the variable to take functions values and properties.
const countdown = countdownGenerator(3);

//By repeating the function we get different results due to the second portion of the closure.

console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());


// once again first portion stores the data. In this case an array
const makeLoadedDie = function() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    
  // start of second portion of closure is fed the raw data from first half.
  return function() {
    const result = list[0];
    list.shift();
    return result;
  };
}


const rollLoadedDie = makeLoadedDie();
  
  
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


//different style of closure with use of switch case.

const countdownGenerator = function (x) {
    //return portion is at the top because it has to 'fall' into the switch where the conditionals
    // AND the output data is stored.
    return function() {
      switch (x) {
        case 3:
          x--;
          return 'T-minus 3...';
        case 2:
          x--;
          return 'T-minus 2...';
        case 1:
          x--;
          return 'T-minus 1...';
        case 0:
          x = x - 1;
          return 'Blast Off!';
        default:
          return 'Rockets already gone. bub!';
      }
    };
  };
  
  const countdown = countdownGenerator(3);
  
  console.log(countdown());
  console.log(countdown()); 
  console.log(countdown()); 
  console.log(countdown());
  console.log(countdown());
  console.log(countdown());