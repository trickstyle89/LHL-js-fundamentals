function largestOfFour(arr) {
    let results = []; // this is the final space for our results

    for (let i = 0; i < arr.length; i++) { //this is the start of the first loop to iterate the first numbers
        let largestNum = arr[i][0]; // this specifically looks at the first number of each array to find a largest number, we have to use LET to establish the variable which sets the first largest number for each specific array.
           for (let j = 1; j < arr[i].length; j++) { // nested loop that starts looking at the rest of the number of each array down. J starts at 1 because previous loops already looked at first numbers. 
             if (arr[i][j] > largestNum) { // conditional statement to find the largest number of the array by comparing the first number of each array that was found in the first loop.
                largestNum = arr[i][j]; // if the condition is met then the new large number is set y using this line.
            } //closing bracket for the conditional statement
            results[i] = largestNum; // this is the creating the first of many answers for the final array from the largest number. 
        } // closing loop for inner loop. Above kept blank because nothing needs to be done if you can't find largest number.    
    } // closing loop for entire loop including the nested
    return results; // this is the last chance to share the results before closing the function.
} // closing loop for entire function

console.log(largestOfFour([[444, 5, 1, 3], [13, 27, 118, 26], [352, 35, 37, 39], [1000, 10701, 857, 1]]));