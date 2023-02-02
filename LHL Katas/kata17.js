const urlDecode = function(text) {
    // Put your solution here
    const regex = /\W/;
    return result = text.match(regex);
};

console.log(urlDecode("bootcamp=Lighthouse%20Labs"));

/*  
  console.log(urlDecode("duck=rubber"));
  console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
  console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

*/