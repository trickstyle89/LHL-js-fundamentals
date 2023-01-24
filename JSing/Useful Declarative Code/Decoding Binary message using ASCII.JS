/* My ugly iterate code that I crafted. 
*** code to translate binary to Number is parseInt(num, 2)
*** code to make number into binary is num.toString(2)
*/

function binaryAgent(str) {
    
    // need to split the string into workable sections
    let binaryArray = str.split(' ');
    // empty holder for new array.
    let integerArray = [];
    // empty string for the end result.
    let decode = '';
    
    // first loop for decoding the binary numbers.
    for (let i = 0; i < binaryArray.length; i++) {
        // pushing the results in new array after decoding using parseInt 
        integerArray.push(parseInt(binaryArray[i], 2));
        // line below is the conversion for numbers into characters.  
        let decoded = String.fromCharCode(integerArray[i])
        // adding the results of the decode onto new string.
        decode = decode + decoded + "";
      }
  return(decode);    
  }

  /* Refactor declartive code via Chat GPT

  function binaryAgent(str) {
  return str
    .split(" ")
    // important to make a function in order to use MAP.
    .map(binary => String.fromCharCode(parseInt(binary, 2)))
    .join("");
}
  */