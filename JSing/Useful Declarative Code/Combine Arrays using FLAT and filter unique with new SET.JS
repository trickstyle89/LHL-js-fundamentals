function uniteUnique(...arr) {
  
    let allArray = arr.flat();
    let finalArray = [... new Set(allArray)];
    return finalArray;
  
  }