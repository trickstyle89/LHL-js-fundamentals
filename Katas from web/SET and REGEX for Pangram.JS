
function isPangram(string){
    // scrub everything BUT the letters.
    scrubStrArray = string.toLowerCase().split('').filter(el => /^[a-zA-Z]+$/.test(el));
    
    // new Set creates object with only unique characters
    let pangramCheck = new Set(scrubStrArray);
    // Array.from converts the SET into an array.
    let pangramArray = Array.from(pangramCheck);
    //if the array has 26 unique characters (alphabet) it is a Pangram.
    if (pangramArray.length === 26) {
        return true;
    }
    return false;
   }

/* refactored
   function isPangram(string){
    // instead of splitting into array you just 'filter' the string.
    // makes a condensed string with no spaces or numbers.
    let scrubStrArray = string.toLowerCase().replace(/[^a-z]/g, '');
    // creates the NEW SET OBJECT.
    let uniqueLetters = new Set(scrubStrArray);
    // instead of having to check for an array length you check for the set.SIZE
    return uniqueLetters.size === 26;
  };

*/