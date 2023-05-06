function ageCalculator(fName: string, birth: number, current: number): string {
var age: number = current - birth;
return `${fName} is ${age} years old.`
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
