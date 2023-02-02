const camelCase = function(input) {
    // Your code here (similar to urlEncode)
  
let camelName = '';

  for (i = 0; i < input.length; i++) {
    if (input[i] === ' ' && input[0] !== ' ')
      camelName += input[i+1].toUpperCase();
  
    else  
      camelName += input[i];

  }
return camelName;
};


  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));


//Expected output

//thisIsAString
//loopyLighthouse
//supercalifragalisticexpialidocious