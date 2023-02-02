/* 
String.fromCharCode() method turns Unicode into Characters
string.charCodeAt() method turns characters in Unicode
*/

// use of the spread operator that converts the string into array.
// there is ternary conditional in here that simplifies the code.

let decode = message => [...message].map(x=>x==" " ? x : String.fromCharCode(219-x.charCodeAt())).join("");

// I have no idea how to determine the 'shift' of the code but is -219

/*
shift = 'y'.charCodeAt(0) - 'b'.charCodeAt(0)
In both cases, the shift value is -25, which means that the letters are shifted
25 positions down the alphabet. It's worth noting that in the Caesar Cipher 
encryption method, the shift value is fixed for all the letters, so if you 
know the shift value for two letters, you can assume the shift value for all 
the letters in the plaintext.

Also, it's worth noting that if you know the shift value, you can easily decrypt 
the message by shifting the letters by the opposite direction (by adding instead 
of subtracting the shift value).

In the previous code, 219 is used as the maximum code point value for 
the Caesar Cipher encryption. It's used to determine the new code point 
for each character by subtracting the key from it.

The Caesar Cipher encryption method typically uses a key between 1 and 25. 
However, in this code, the key is not explicitly defined, instead of that 
219-x.charCodeAt() is used to determine the new code point for each character.

So the key is defined by the difference between 219 and the current code point
of the character. For example, if the character is 'A' (Unicode code point: 65), 
the key is 154 (219-65) and the new code point of the character 'A' will be
61 (65+154)

It's worth noting that 219 is a arbitrary number, it could have been any other 
number as long as it's greater than the maximum possible code point of the character
set which is 25.
*/