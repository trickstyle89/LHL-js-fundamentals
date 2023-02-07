// process.argv is NODE native feature
// ARGV array contains, the directory and the file plus the arguments.
// Using split(2) can reduce the extra outputs
const [node, script, ...args] = process.argv; //.split(2)

if (args.length === 0) {
  //readline is a NODE.JS native feature
  const readline = require('readline').createInterface({
    //input for arguments
    input: process.stdin,
    //output for the results
    output: process.stdout
  });
  
  // output if no argument is made.
  // looks like a function almost.....
  readline.question('Enter a string to reverse: ', (string) => {
    reverse(string);
    readline.close();
    // interesting to have to CLOSE the readline.
  });
} else {
  reverse(args.join(' '));
}

function reverse(string) {
  let finalArray = [];
  let strArray = string.split('');

  for (let i = strArray.length - 1; i >= 0; i--) {
    finalArray.push(strArray[i]);
  }
  // ASSERT is used to figure out bugs if the output does not match the expected output and it throws an error.
  console.assert(finalArray.length === strArray.length, 'The length of the input string and the reversed string should be equal');
  console.log(finalArray.join(''));
}