// Newbie Nested Loop

function toJadenCase(str) {
    // always easier to iterate through all the words via split on blank spaces
    let words = str.split(' ');
    // empty array holder.
    let jadenCase = [];
    
    for (let i = 0; i < words.length; i++) {
      // word is the temp holder for each word as we iterate through the sentence.  
      let word = words[i];
      // jadenWord is the temp holder for each letter that is completely capitalized because 
      // word is already split into words and word[0] represents the first letter of each word.
      let jadenWord = word[0].toUpperCase();

      //second loop here is concatenating the first letter to the back to the word
      // the J = 1 ensures that the word is starting at the seond letter.
      for (let j = 1; j < word.length; j++) {
        // the capital word is concatenated to the rest of the word.
        jadenWord += word[j];
      }
      // each completed word is pushed into the final results array.
      jadenCase.push(jadenWord);
    }
     // the array is joined back together again.
    return jadenCase.join(' ');
  }

/* combination of the two. 

  function toJadenCase(str) {
    let words = str.split(' ');
    let jadenCase = [];
    
    for (let i = 0; i < words.length; i++) {
      jadenCase.push(words[i][0].toUpperCase() + words[i].slice(1));
    }
    
    return jadenCase.join(' ');
  }

  // full declarative

  function toJadenCase(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }

  */