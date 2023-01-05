function howManyHundreds(num) {
    let howMany = num / 100;
    return `${Math.round(howMany)}`
}

console.log(howManyHundreds(1000))
console.log(howManyHundreds(894))
console.log(howManyHundreds(520))
console.log(howManyHundreds(99))
console.log(howManyHundreds(0))

*// Even More Efficient Code

function howManyHundreds(num) {
    return Math.floor(num % 100); 
  }
  
  console.log(howManyHundreds(1000), "=?", 10);
  console.log(howManyHundreds(894), "=?", 8);
  console.log(howManyHundreds(520), "=?", 5);
  console.log(howManyHundreds(99), "=?", 0);
  console.log(howManyHundreds(0), "=?", 0);