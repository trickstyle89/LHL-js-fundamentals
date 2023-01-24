//Ugly long winded code that does not adhere to the DRY.

function myReplace(str, before, after) {
 
    // checking 'before' word for a capital using regex.
    if (before.match(/^[A-Z]/)) {
       //changing the first letter of 'after' word.
        let firstLetter = after.charAt(0).toUpperCase();
        // completing the new word by adding capitalized letter to trimmed word via substring.
       let modifiedWord = firstLetter+after.substring(1);
       
       //replacing the modified words into place.
    let finalResult = str.replace(before, modifiedWord);
    return finalResult;
  
    } else {
    

       // checking the non-capitalization of first word to match the second word.
    if (before.match(/^[a-z]/)) {
       let firstLetter = after.charAt(0).toLowerCase();
       let modifiedWord = firstLetter+after.substring(1);
       
    let finalResult = str.replace(before, modifiedWord);
    return finalResult;
        
    }
    
    return str.replace(before, after);
  }


  /* Refactored by Chat GPT that uses Ternary syntax as well as designating letters
  
  function myReplace(str, before, after) {
  let modifiedWord = before.match(/^[A-Z]/) ?            //boolean condition is first letter capitalized?
  after[0].toUpperCase() + after.substring(1) :          // if true capitalize first letter of second word.
  before.match(/^[a-z]/) ?                               // if false another condtion if first letter of first word is NOT capitalized.
  after[0].toLowerCase() + after.substring(1) : after;   // if true then make the first letter of second word NOT capitalized.
  return str.replace(before, modifiedWord);              // if false then simply replace the words straight up.
}
 */