// Here are a couple of clever declarative ways to solve this simple problem

function getCount(str) {
    // split string into array and use REDUCE function with two arguments.
    // not sure how the function works (Accumulator [vowelCount], currentValue [char] array?)
    return str.split('').reduce((vowelCount, char) => 
    // use a 'vowel' array to be used with INCLUDES followed with TERNARY conditional   
    (['a', 'e', 'i', 'o', 'u'].includes(char)) ? vowelCount + 1 : vowelCount, 0);
}

/* Even shorter and more clever solution
function getCount(str) {
    // Using regular expression to filter out everything BUT 
    // vowels and counting the length of remaining string. GENIUS.
    return (str.match(/[aeiou]/ig)||[]).length;
}

*/


/* The basic iterative way. My personal newbie solution.
function getCount(str) {
    let vowelCount = 0;
  for (i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
          vowelCount ++;
      } 
      vowelCount = vowelCount;
  }
  
  return vowelCount;
}
*/