function dontGiveMeFive(start, end) {
    // Array.from() takes an object with a length property throught a function to
    // set the range of the 'loop' .
    // MAP method is next to start the LOOP.
    let resultArray = Array.from({length: end - start + 1}, (_, i) => start + i);
    // use of REGEX to filter out all the numbers that have a 5 in them.
    return resultArray.filter(num => !/5/.test(num)).length;
   }
   
/*
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
*/