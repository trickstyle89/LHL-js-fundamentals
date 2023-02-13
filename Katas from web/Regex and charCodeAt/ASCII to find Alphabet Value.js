function alphabetPosition(text) {
  let strNum = "";
    
    
  for (let i = 0; i < text.length; i++) {
      
    //conversion of text to ascii
    let code = text.toUpperCase().charCodeAt(i);
    //ensuring to check for only letters
    // code - 64 can be the magic number to designate 1-26 for A-Z.
    if (code > 64 && code < 91) strNum += (code - 64) + " ";
  }
    
  //ensuring the output is trimmed with no spaces on the end.
  let result = strNum.slice(0, strNum.length - 1);
  console.log(result);
}
  
console.log(alphabetPosition('abcde'));