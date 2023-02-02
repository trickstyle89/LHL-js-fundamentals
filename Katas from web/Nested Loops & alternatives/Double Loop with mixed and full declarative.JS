var kWeakestRows = function(mat, k) {
    //empty array to push results into.
    let soldiersCountArray = [];
    
    //Outer loop based on the length of ALL the array 'elements'.
    for (let i = 0; i < mat.length; i++) {
        
        // count is for the SOLDIER strength;
        let soldiersCount = 0;
        // loop against the length of nnumbers of each element.
        for (let j = 0; j < mat[i].length; j++) {
            
            // if any of the elements is equal to one then we add to soldiers.
            if (mat[i][j] === 1) soldiersCount++;
            //important to break to move on to next line if nothing else equals 1.
            else break;
        } 
        // we push out this array because i is the row and count is soldier strength.
        soldiersCountArray.push([i, soldiersCount]);
    }
    // we use the sort method to check on soldiers[1]. 
    // the minus is NOT an operator but rather a comparison operator in the sort function.
    soldiersCountArray.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
    
    // the 'TRICKY' portion of the 'K' which is the variable K output.
    // Needs a seperate loop to organize the 'soldiersCountArray'
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(soldiersCountArray[i][0]);
    }
    
    return result;
};
/*
var kWeakestRows = function(mat, k) {
    const result = [];

    // this is the equivalent to a NESTED loop.

    for (let i = 0; i < mat.length; i++) {
        
        // This code is taking the row of the matrix at index i and reducing
         it to a single value by summing the elements. The resulting sum of 
         the row is then paired with its index i and added to the end of the 
         result array as a nested array [i, sum of row at i]. The reduce 
         function works by applying the provided function (a, b) => a + b 
         to each element in the array mat[i] starting from the first two 
         elements (mat[i][0], mat[i][1]). The result of the function is 
         stored in a, and the next element b is passed to the function. 
         This process is repeated for all elements in the array until the 
         final result, the sum of all the elements, is returned and stored 
         in the second element of the nested array [i, sum of row at i].
        
         result.push([i, mat[i].reduce((a, b) => a + b)]);
    }
    result.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
    return result.slice(0, k).map(row => row[0]);
};
*/


/* var kWeakestRows = function(mat, k) {
    let rowCount = mat.map((row, i) => [row.reduce((sum, el) => sum + el), i]);
    rowCount.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    return rowCount.slice(0, k).map(pair => pair[1]);
};
*/