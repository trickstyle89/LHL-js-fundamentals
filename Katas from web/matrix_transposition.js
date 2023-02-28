const transpose = function(matrix) {

  const NumRows = matrix.length;
  const NumCols = matrix[0].length;
  const finalResults = [];

  for (let i = 0; i < NumCols; i++) {
    
    //element wise transposition that creates empty arrays.
    finalResults[i] = [];
    for (let j = 0; j < NumRows; j++) {

      //element wise transposition that swaps and creates new elements for the array.
      finalResults[i][j] = matrix[j][i];
    }
  }
  return finalResults;
};

console.log(transpose([[1, 2, 3, 4, 5, 6, 7]]));
  

// This function is to print out the matrix on the console.
// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};
  
printMatrix(
  transpose([
    [1, 2, 3, 4],  // [0,0][0,1][0,2][0,3]
    [1, 2, 3, 4],  // [1,0][1,1][1,2][1,3]
    [1, 2, 3, 4],  // [2,0][2,1][2,2][2,3]
    [1, 2, 3, 4],  // [3,0][3,1][3,2][3,3]
  ])
);
  
console.log("----");
  
printMatrix(
  transpose([
    [1, 2],  // [0,0][0,1] 2 is the length  [1, 3, 5]  // [0,0][0,1][0,2]
    [3, 4],  // [1,0][1,1]                  [2, 4, 6]  // [1,0][1,1][1,2]
    [5, 6],  // [2,0][2,1]
  ])
);
  
console.log("----");
  
printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));  // [0,1][0,2][0,3][0,4][0,5][0,6][0,7]

