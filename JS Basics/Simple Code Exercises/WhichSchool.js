function whichSchool(age) {
    if (age < 13) {
      return `I am ${age}. Which school should I go to? Elementary School`;
    } else if (age > 13 && age <= 18) {
      return `I am ${age}. Which school should I go to? Secondary School`;
    } else {
      return `I am ${age}. Which school should I go to? Lighthouse Labs`;
    }
  }

console.log(whichSchool(11));
console.log(whichSchool(14));
console.log(whichSchool(42));