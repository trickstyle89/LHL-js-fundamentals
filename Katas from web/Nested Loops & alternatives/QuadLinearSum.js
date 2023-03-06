// dreaded nested loop that you don't quite like;

const arrayContainsSumQuad = function(array, sum) {
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];

    for (let ii = 0; ii = array.length; ii++) {
      const element2 = array[ii];
  
      if (element1 + element2 === sum) {
        return true;

      }
    }
  }
  return false;
};

const arrayContainsSumLinear = function(array, sum) {

  let i = 0;
  let ii = array.length - 1;

  while (i <= ii) {
    const element1 = array[i];
    const element2 = array[ii];
    const currentSum = array[i] + array[ii];

    if (currentSum === sum) {
      return true;
    } else if (currentSum > sum) {
      ii--;
    } else {
      i++;
    }
  }
  return false;
};