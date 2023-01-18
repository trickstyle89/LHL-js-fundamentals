function operator(firstNumber, secondNumber, operator) {
    let finalNumber = 0
    switch(operator) {
        
        case 'add': finalNumber = firstNumber + secondNumber;
          return finalNumber;
          break;
        case 'subtract': finalNumber = firstNumber - secondNumber;
          return finalNumber;
          break;
        case 'multiply': finalNumber = firstNumber * secondNumber;
          return finalNumber;
          break;
        case 'divide': finalNumber = firstNumber / secondNumber
          return finalNumber;
          break;  
        default: 
          return 'Not a valid input!';
    }
}

console.log(operator(10, 5));