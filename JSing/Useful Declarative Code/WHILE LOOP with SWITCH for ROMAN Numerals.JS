// Long winded WHILE and Switch Case solution.
// THe pain is understanding the rules of ROMAN numerals.

function deromanize(roman) {
    let r = 0;
    let index = 0;
    while (index < roman.length) {
      switch (roman[index]) {
        case 'M':
          r += 1000;
          break;
        case 'D':
          r += 500;
          break;
        case 'C':
          if (roman[index + 1] === 'M') {
            r += 900;
            index++;
          } else if (roman[index + 1] === 'D') {
            r += 400;
            index++;
          } else {
            r += 100;
          }
          break;
        case 'L':
          r += 50;
          break;
        case 'X':
          if (roman[index + 1] === 'C') {
            r += 90;
            index++;
          } else if (roman[index + 1] === 'L') {
            r += 40;
            index++;
          } else {
            r += 10;
          }
          break;
        case 'V':
          r += 5;
          break;
        case 'I':
          if (roman[index + 1] === 'X') {
            r += 9;
            index++;
          } else if (roman[index + 1] === 'V') {
            r += 4;
            index++;
          } else {
            r += 1;
          }
          break;
      }
      index++;
    }
    return r;
  }


  /* Crazy REGEX filter along OBJECT properties being used to calculate
  
  function deromanize(roman) {
  var r = 0;
  // regular expressions to check if valid Roman Number.
  if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(roman))
    throw new Error('Invalid Roman Numeral.');

  roman.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function(i) {
    r += {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}[i]; 
  });

  return r;
}
*/