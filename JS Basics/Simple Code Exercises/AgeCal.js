function ageCalculator(fName, birth, current) {
    var age = current - birth;
    return "".concat(fName, " is ").concat(age, " years old.");
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
