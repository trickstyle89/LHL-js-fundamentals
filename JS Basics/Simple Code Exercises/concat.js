function concat (arrayOne, arrayTwo) {
    let finalArray = [];

      for (o = 0; o <= arrayOne.length; o++) {
        finalArray.push(arrayOne[o]);
      } 

      for (t = 0; t <= arrayTwo.length; t++) {
        finalArray.push(arrayTwo[t]);
      }

      return finalArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);