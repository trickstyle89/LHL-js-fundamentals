// Using a for loop
let numbers = Array.from({length: 10}, (_, i) => i);
console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Using a for loop
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(i);
}
console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// using map()
let numbers = numbers.map(num => num);
console.log(numbers);

/* 
Both of the code snippets create an array of numbers from 0 to 9.
 The first one uses the map method to create a new array with the 
 same values as the original array. The second one uses the Array.from 
 method to create a new array with a length of 10 and maps each element 
 to its index. They are not the same, the first one expects an existent
 \ array in the variable numbers and the second one creates a new one 
 with the Array.from method.
 */