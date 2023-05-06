const isEven = function(num: number): boolean {
    return num % 2 === 0;
}

const tenIsEven: boolean = isEven(10);
const elevenIsEven: boolean = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);