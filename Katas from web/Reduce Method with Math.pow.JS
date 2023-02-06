function narcissistic(value) {
    // *** must conver NUMBERS to strings in order to get length ***
    let nar = value.toString().length;
    // all numbers under 10 are narcisstic
    if (value < 10) {
        return true;
    }
    // converting number input to string in order to split and then converting back to number.
    numberArray = value.toString().split('').map(Number)
    // ** reducing the entire iteration of all calculations of each number with Math.pow based on value.length
    let sum = numberArray.reduce((sum , index) => sum + Math.pow(index, nar), 0);
    
    // if the value and Math.pow of each number is equal it is a Nar number!
    if (sum === value) {
        return true;
  }
  return false;
  }


  /* refactored
  
  function narcissistic(value) {
  
    let nar = value.toString().length;
  let numberArray = value.toString().split('').map(Number);
  let sum = numberArray.reduce((acc, cur) => acc + Math.pow(cur, nar), 0);
  return sum === value;
}

console.log(narcissistic(153));