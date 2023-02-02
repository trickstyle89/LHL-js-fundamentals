const conditionalSum = function(values, condition) {
    let sum = 0;
  
    //Loop through the array. Determine condition, add it to sum.
    for (const value of values){
      if (condition === "even" && value % 2 === 0){
        sum += value;
      }
      if (condition === "odd" && value % 2){
        sum += value;
        
      }
    }
    
  return sum;
  };
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));
    // Looping through the array for the correct values  
    // Using Operand % 2 to determine odd or even
    // Adding the sum of the filtered values


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));