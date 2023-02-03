/* A hypothetical SLOT MACHINE.

Example:
["Q","K","A","A","A"], 
["10","A","Q","9","J"]
["A","A","A","J","K"]

*/


// scoring array. 6 elements.  Match at least 3 in a row before 50 points point_map[3]
// point_map[0] means NO matches.  point_map[5] is 5 in a row JACKPOT.
const point_map = [0, 0, 0, 50, 150, 300];

// the winning combinations based on line combinations. 
// Last two arrays account for the diagonal lines. Order is important with the ordering.
// Final two cannot work with out the first three.

const rows_list = [
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [0, 1, 2, 1, 0],
  [2, 1, 0, 1, 2],
];

/* 
For the input [0, 1, 2, 1, 0], the expression lines[row][column] uses the 
value of column as the index in the inner arrays (lines[row]) and the value 
of row as the index of the outer array (lines[row][column]). The values in 
the input array correspond to the following elements in the lines array:

lines[0][0] == lines[1][1] == lines[2][2] == lines[3][1] == lines[4][0]

Similarly, for the input [2, 1, 0, 1, 2], the values in the input array
 correspond to the following elements in the lines array:

 lines[2][2] == lines[1][1] == lines[0][0] == lines[1][3] == lines[2][4]

This is because the lines[row][column] expression uses the values in the 
input array as indices to access the corresponding elements in the lines array.
*/


function calculateWin(lines) {
  
  //total points accrued via line combinations.
  let points = 0;
  for (const rows of rows_list) {
    
    // c is to count how many matches per line up to 5.
    // first is the holder for the first symbol.
    let c, first;
    
    //always need to reset the c to count for the next line.
    // set the first symbol with row[0][0]
    for (c = 0, first = lines[rows[0]][0]; c < 5 && lines[rows[c]][c] == first; c++);
    
    //point_map[c] is what determines the score based on the number of matches.
    points += point_map[c];
  }
  return points;
}

/*
3 in a row --> 50 points
4 in a row --> 150 points
5 in a row --> 300 points

Line 1

["X","X","X","X","X"]
["","","","",""]
["","","","",""]

Line 2

["","","","",""]
["X","X","X","X","X"]
["","","","",""]

Line 3

["","","","",""]
["","","","",""]
["X","X","X","X","X"]

Line 4

["X","","","","X"]
["","X","","X",""]
["","","X","",""]

Line 5

["","","X","",""]
["","X","","X",""]
["X","","","","X"]

*/