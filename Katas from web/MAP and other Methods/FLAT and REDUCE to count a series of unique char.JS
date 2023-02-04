function test(num) {
    return num.flat().reduce((counter, elementIndex) => {
    
    // checks to see if there is anything there. Truthyness.    
    if (counter[elementIndex]) {
      // if there is something and it exists then add one to the count.
        counter[elementIndex] += 1;
    } else {
      // if not then create a new object key.
        counter[elementIndex] = 1;
    }
    return counter;
  }, {});
  }
      
  
  
  
  console.log(test([
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ]));

  // result { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }