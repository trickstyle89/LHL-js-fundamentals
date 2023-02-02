/* Short CONCISE delarative code */

function truthCheck(collection, pre) {
    
    // EVERY method requires a function or conditional that 
    // tests all elements in array/object to see if it has the property 
    //AND if it is truthy (meaning SOMETHING in it)
    
    return collection.every(function (element) {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
  }

 /* truthCheck([{name: "Quincy", role: "Founder", isBot: false},
 {name: "Naomi", role: "", isBot: false}, 
 {name: "Camperbot", role: "Bot", isBot: true}], "isBot")
should return false.

truthCheck([{name: "Quincy", role: "Founder", isBot: false},
 {name: "Naomi", role: "", isBot: false},
  {name: "Camperbot", role: "Bot", isBot: true}], "name")
   should return true.

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, 
{name: "Naomi", role: "", isBot: false}, 
{name: "Camperbot", role: "Bot", isBot: true}], "role")
 should return false.
*/