function binaryCon(num) {
    var Array = []; // empty array for the converted Binary Code 
    var binaryOne = num.toString(2); // converts the number to Binary Code
    var stringCon = binaryOne.toString(); // converts the binary code back to string to find length
    var stringLength = binaryOne.toString().length; // finds the length of the converted string of the binary code
    var reverseArray = []; // empty array for the reversed Binary Code 
    Array = stringCon.split(''); // splits the string into an array
    for (var i = 0; i < stringLength; i++) {
        reverseArray.unshift(Array.shift());
        // problem was solved by using console.log here to display array to use shotgun approach.
    }
    var conBinary = reverseArray.join('');
    var solution = parseInt(conBinary, 2);
    console.log("The original number was ".concat(num, " and its Binary code was ").concat(binaryOne, " and when reversed is now ").concat(conBinary, " which is converted to ").concat(solution));
    return Array;
}
binaryCon(99999);
