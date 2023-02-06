// pretty proud of this one as it looks at array from both sides to 
// eliminate the edge cases.

function stray(numbers) {
    // capture the two unique numbers and coverts the object to an array.
    let objUnique = Array.from(new Set(numbers));
    // using a cross reference from the front and back. If it matches it is the unique char.
    if (numbers.lastIndexOf(objUnique[1]) === numbers.indexOf(objUnique[1])) {
        return objUnique[1];
    } else 
        return objUnique[0];
    
  }

