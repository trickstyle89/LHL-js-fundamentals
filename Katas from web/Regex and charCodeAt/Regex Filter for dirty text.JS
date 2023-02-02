//Amazing little Regular Expression that can pick out all kinds of sloppy sentences and make them neater.
/* The gem of this code is the Regular expression that uses:
  The | (or) to look for several different conditions.
  The ?= lookahead to skip certain groups of data.
  */  

/* Here is a breakdown of the regular expression: 

   \s matches any whitespace character (space, tab, newline, etc.)
   | is the alternation operator which means that the regular expression will match either the preceding or the following pattern
   _ matches the _ character
   (?=[A-Z]) is a positive lookahead assertion which asserts that the immediately following character is an uppercase letter.

*/

function spinalCase(str) {
  
    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }


// Did not work due to edge cases and overcompensated to not work on basic problems.

/* function spinalCase(str) {
    let seperateWords = str.replace(/\s|_|(?=[A-Z])/g, " ")   
    let filtered = seperateWords.replace(/[^A-Z0-9a-z]+/g, " ");  
    return filtered.toLowerCase().split(' ').join('-').toString();
    }
      console.log(spinalCase("The_Andy_Griffith_Show"));
    
    
spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
spinalCase("AllThe-small Things") should return the string all-the-small-things.
spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
*/