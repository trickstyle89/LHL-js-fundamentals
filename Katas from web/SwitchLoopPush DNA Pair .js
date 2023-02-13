function pairElement(str) {
  // Function to match each character with the base pair

  // ESSENTIAL to define the function first for use in loop later.
  
  const matchWithBasePair = function(char) {
    switch (char) {
    case "A":
      return ["A", "T"];
    case "T":
      return ["T", "A"];
    case "C":
      return ["C", "G"];
    case "G":
      return ["G", "C"];
    }
  };

  // The PUSH method is paired with the function from
  // above to iterate through each individual letter of the string.
  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchWithBasePair(str[i]));
  }

  return pairs;
}

// test here
pairElement("GCG");