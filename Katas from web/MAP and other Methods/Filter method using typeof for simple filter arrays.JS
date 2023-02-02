function filter_list(list) {
    // filter method needs to be a function
    // use of arrow anonymous function using TYPEOF to 
    // check if array 'element' is a number
    return list.filter(element => typeof element === 'number');
}


/* Personal crafted NEWBIE code
function filter_list(list) {
    let resultsArray = [];
    
  for (let i = 0; i < list.length; i++) {
      if (typeof list[i] === 'number') {
          resultsArray.push(list[i]);
      }
  }
return resultsArray;
}
*/