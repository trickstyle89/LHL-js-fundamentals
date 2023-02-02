function translatePigLatin(str) {

  //use of the .match function with REGEX to complete conditional statement.
  //Line below is looking vowel in first letter of word. Then adds 'way' if true.
  //Must return results to close the IF statement.
  if (str.match(/^[aeiou]/)) return str + "way";

  // This line is looking for consonants (not vowels) REGEX looking at beginning of letters that are NOT vowels
  // as well as all other letters behind it up until the first string only.
  // Need to include the [0] to ensure that only the first string is filtered (matched)
  const consonantCluster = str.match(/^[^aeiou]+/)[0];

  // Substring(*.length simply takes off the first few letters and then adds the nonvowel cluster and the 'ay' at the end.)
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here

translatePigLatin("consonant");


/* 
translatePigLatin("california") = aliforniacay.
translatePigLatin("paragraphs") = aragraphspay.
translatePigLatin("glove") = oveglay.
translatePigLatin("algorithm") = algorithmway.
translatePigLatin("eight") = eightway.
Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") = artzschway.
Should handle words without vowels. translatePigLatin("rhythm") = rhythmay.
*/