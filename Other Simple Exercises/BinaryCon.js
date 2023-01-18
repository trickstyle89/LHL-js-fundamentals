function binaryCon(num) {
    let Array = []; // empty array for the converted Binary Code 
    let binaryOne = num.toString(2); // converts the number to Binary Code
    let stringCon = binaryOne.toString() // converts the binary code back to string to find length
    let stringLength = binaryOne.toString().length // finds the length of the converted string of the binary code
    let reverseArray = []; // empty array for the reversed Binary Code 
    
    Array = stringCon.split(''); // splits the string into an array
    
      for (let i = 0; i < stringLength; i++) {
          reverseArray.unshift(Array.shift());
          // problem was solved by using console.log here to display array to use shotgun approach.
      }
let conBinary = reverseArray.join('');
let solution = parseInt(conBinary,2);
console.log(`The original number was ${num} and its Binary code was ${binaryOne} and when reversed is now ${conBinary} which is converted to ${solution}`);
      return Array;

}

binaryCon(99999);