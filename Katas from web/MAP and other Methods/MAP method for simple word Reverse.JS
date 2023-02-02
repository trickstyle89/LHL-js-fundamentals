// very concise and declarative code

function reverseWords(str) {
    // first split to seperate each word. Second Split to seperate letters
    // reverse individual words ONLY. First join to put form letters into words.
    // second join to put word back into string.
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }

// "This is an example!" ==> "sihT si na !elpmaxe"

/* 

Combination of simple FOR LOOP using declarative.

function reverseWords(str) {
  let strArray = str.split(' ');
  let resultArray = [];
  
  for (let i = 0; i < strArray.length; i++) {
      strArray[i] = strArray[i].split('').reverse().join('');
      resultArray.push(strArray[i]);
  }
  return resultArray.join(' ');
};
*/