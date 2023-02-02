const isOdd = function(num) {
    return num % 2 !== 0;
}

const threeIsOdd = isOdd(3);
const eightIsEven = isOdd(8);

console.log("3 is ODD: " +threeIsOdd);
console.log("8 is EVEN: " +eightIsEven);