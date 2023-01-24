/* 

*/
function high(sentence1 = "", sentence2 = "") {
  if(typeof sentence1 !== "string" || typeof sentence2 !== "string")
    throw new Error("Both arguments must be of string type.");

  const words1 = sentence1.split(" "); 
  const words2 = sentence2.split(" "); 
  let maxSum = 0;
  let maxWord = "";
  const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  
  // function to get the sum of each word
  const getWordSum = (word) => {
    let sum = 0;
    for(let j = 0; j < word.length; j++) {
        if(cipher[word[j].toLowerCase()]) sum += cipher[word[j].toLowerCase()];
    }
    return sum;
  }

  //iterating through each word in sentence1 and sentence2
  // use of spread operator different than split. More below.
  //this is where two sets of data can be processed at the same time.
  [...words1, ...words2].forEach(word => {
    let sum = getWordSum(word);
    if(sum > maxSum) {
      maxSum = sum;
      maxWord = word;
    }
  });
  
  return maxWord;
}

/* 
the split() method is used to split a string into an array of substrings,
while the spread operator is used to spread the elements of an iterable 
object into individual elements. For example, sentence.split(" ") will take 
a string sentence and split it into an array of substrings, where each 
substring is a word and the separator is the space character " " .
On the other hand, The spread operator ... is used to spread the 
elements of an iterable object (such as an array) into individual elements.
It's like to spread the elements of an array into individual variables.
*/

/* crazy concise declarative code.
/* can the MAGIC number of charCodeAt(0)-96,0 represent the 1-25 alphabet designation?

function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
*/
