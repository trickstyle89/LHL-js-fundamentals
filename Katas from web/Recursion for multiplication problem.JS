// Working on this problem trying to use FOR and WHILE LOOP
// Problem arose when I have to feed the results back in and also
// declarative code required looping back around.....

function persistence(n) {
    // less than ten means single digit limit.
    if (n < 10) {
        // if less than 10 return 0.
        return 0;
    } else {
        // number needs converted to string, to be split to multiply to get next number.
        let digits = n.toString().split('');
        // Reduce function to mulitply the numbers in array with one another.
        // result is a number that needs that needs to be converted to a string
        // and split again in this recursion.
        let result = digits.reduce((a, b) => a * b);
        // counter that lets us know how many times the loop goes for.
        return 1 + persistence(result);
    }
}

/* 
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

//Using a While Loop

function persistence(n) {
    let count = 0;
    while (n >= 10) {
        n = n.toString().split('').reduce((a, b) => a * b);
        count++;
    }
    return count;
}

*/

