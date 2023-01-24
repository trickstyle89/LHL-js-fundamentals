

function convertHTML(str) {
    // Use Object Lookup to declare as many entities as needed.
    // Can also use SWITCH/CASE to do this but then you can't use as argument for MAP
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      // Below is a simple arror function with argument 'entity' using the properties of the object to filter.
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }
  
  // test here
  convertHTML("Dolce & Gabbana");