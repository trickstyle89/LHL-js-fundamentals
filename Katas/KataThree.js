const numberOfVowels = function(words) {
    //Create a variable to hold final vowel count
    let vowelCount=0;

    //Loop looking through every letter in the string
for (i = 0; i < words.length; i++) {
    if (words[i] === 'a' || words[i] === 'e' || words[i] === 'i' || words[i] === 'o' || words[i] === 'u') {
        vowelCount += 1
    }
} 
return vowelCount
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));