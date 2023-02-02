const urlEncode = function(text) {

    let urlName = '';

    for (i = 0; i < text.length; i++) {
      // first space
        if (text[i] === ' ' && i === 0) {
          urlName += '';
        }
      // last space
        else if (text[i] === ' ' && i === text.length - 1) {
          urlName += '';
      }
      // encode the rest
        else if (text[i] === ' ' && i !== text.length -1 && i !== 0) {
          urlName+= '%20'; 
        } else {
            urlName += text[i];

    }
}
return urlName;
};


// input
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// Expected Output
// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure