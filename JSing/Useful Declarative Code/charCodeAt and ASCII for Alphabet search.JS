
/*
The charCodeAt() method is used to get the Unicode of a character 
at a specified index in a string. It is typically used when working 
with strings of text and needing to manipulate individual characters 
within the string based on their Unicode values. For example, it can 
be used to determine if a character is a letter or a number, or to 
convert the case of a letter. It can also be used to compare characters 
in a string to see if they match.
*/

function fearNotLetter(str) {

// Classic loop to translate each letter from string into ASCII equivalent.
  for (let i = 0; i < str.length; i++) {
    /* code of current character which comes out as a bunch of numbers */
    const charCode = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");