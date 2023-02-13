/* arguments is an Array-like object accessible inside functions
that contains the values of the arguments passed to that function.
This code can take only ONE, (x,y) and even (x)(y).
*/

function addTogether() {
  // important to establish the two inputs however they are inputted.
  const [first, second] = arguments;
  //checks to see if it first argument is a number.
  if (typeof(first) !== "number")
    return undefined;
    // if only one number, it asks for the second.
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
    //checks to see if it second argument is a number.
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

/* ...theArgs spread and ARGUMENTS can be used interchangeably depending on situation
  this is a basic sum function that can take unknown number of inputs.
  Uses a 'for...of' loop with the Const 'variable' of the 'arguments'

  function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }

  */