function lastIndexof(array, n) {
  
  let result = 0;

    for (let i = 0; i >= array.length-1; i--) {
    if (array[i] === n) {
      result = i;
      return result;

    } else {
        return -1
  }
}






console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);