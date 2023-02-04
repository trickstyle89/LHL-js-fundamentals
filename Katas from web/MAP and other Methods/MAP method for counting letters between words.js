function test(str) {
    
    // create the mini function first to simplify the MAP method later.
    const trim = (word) => 
    `${word[0]}${word.length-2}${word[word.length-1]}`;
    
    // beginning of the Array method.
    return str
    .split(" ")
    // arrow function with ternary operator.
    .map(words => (words.length > 4 ? trim(words) : words))
    .join(" ");
}

console.log(test("Every developer likes to mix kubernetes and javascript"));