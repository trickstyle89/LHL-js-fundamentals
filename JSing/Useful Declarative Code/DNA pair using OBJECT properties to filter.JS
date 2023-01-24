function pairElement(str) {
  
  // creation of an object for pair lookup *** new novel idea.
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // map character to array of character and matching pair
  return str
    .split("") // in separate arrays to for map function.
    .map(x => [x, pairs[x]]);  // function calling the object to be used in matching.
}

// test here
pairElement("GCG");