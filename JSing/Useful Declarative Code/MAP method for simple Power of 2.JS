// A super simple code but refactored to use MAP.

/* the spread operator ensures the return is in an array
// n+1 ensures that it includes all outputs 'i <= n' in FOR Loop
// the first argument is not being used, so it is represented by '_'
// which is a convention used to indicate that the argument is not used.
// map((_,i) is saying that we don't care about the current element and 
// we are only interested in the index, so we can use it to perform some 
// calculations. We are using the index i to calculate the power of 2 
// raised to the current loop variable i using the 2 ** i operator.
*/

const powersOfTwo = n => [...Array(n+1)].map((_,i) => 2 ** i);

/* original code

function powersOfTwo(n){
    
    let finalArray = [];
    
for (let i = 0; i <= n; i++) {
let power = Math.pow(2, i);
finalArray.push(power);
}
return finalArray;
}
*/