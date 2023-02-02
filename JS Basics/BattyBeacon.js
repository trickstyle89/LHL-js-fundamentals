function BattyBeacon(range, multiples, words) {

const rangeStart = range[0];
const rangeEnd = range[1];

const firstMul = multiples[0];
const secondMul = multiples[1];

const firstWord = words[0];
const secondWord = words[1];
const combinedWord = `${firstWord}${secondWord}`;

for (let i = rangeStart; i <= rangeEnd; i++) {
    if (i % firstMul === 0 && i % secondMul) {
        console.log(combinedWord);
    } else if (i % firstMul === 0) {
        console.log(firstWord);
    } else if (i % secondMul === 0) {
        console.log(secondWord);
    } 
else 
console.log(i);
}
}

BattyBeacon([15, 90], [2, 5], ['Batty', 'Beacon']);


/* 3 arrays, 2 sets of numbers. one set of words.
   array[0][r] is the range of numbers to divide
   array[1][m] is the multiples to use operand % on.
   array[2][w] are the words you replace the multiples.
   Log out in a list.

   use of loops. if statements || && statements
*/


