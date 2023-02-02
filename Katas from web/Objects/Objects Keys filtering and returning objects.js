//This function is a template for a looped conditional to filtier through the Object.Keys

//takes an array or objects.
function whatIsInAName(collection, source) {
    
    // creates the initial key to filter.
    const sourceKeys = Object.keys(source); 
  
    // filter the collection loop with return loop at beginning because of the If conditional later.
    return collection.filter(obj => {

        // sourceKey.length checks to see if there are more than one object in the source.
      for (let i = 0; i < sourceKeys.length; i++) {
        
        // .hasOwnProperty is an Object specific method that return Boolean statement 
        if (!obj.hasOwnProperty(sourceKeys[i]) ||
            
        // not sure of this.
        obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
  }
  

/*

 whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], 
 { "apple": 1 }) 
 should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

 whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }],
  { "apple": 1, "bat": 2 }) 
  should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].