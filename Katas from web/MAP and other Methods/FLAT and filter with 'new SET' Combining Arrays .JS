function uniteUnique(...arr) {
    // flattens all the elements from different levels into one array.
    let allArray = arr.flat();
    // NEW SET only allows unique values in so all duplicates are filtered.
    let finalArray = [... new Set(allArray)];
    return finalArray;
  
  }