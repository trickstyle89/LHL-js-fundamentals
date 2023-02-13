// specific use of CALLBACK built-in JS feature for these reasons.
const wrapLog = function(callback, name) {
  // need to return the function earlier to feed back into calculations
  return function(...args) {
    // this uses a spread operator to grab the variable arguments into the function.
    const result = callback(...args);
    console.log(`${name}(${args}) => ${result}`);
    return result;
  };
};
  

const wrapLog = function (callback, name) {
    return function () {
      // use of apply lets you grab variables as designated by the specific callback functions.
      // negates the need for variatic input using spread operators because the functions did that already.
      const result = callback.apply(null, arguments);
      // however, you still need to use spread operators to output the variatic variables from the two functions.
      console.log(`${name}(${[...arguments]}) => ${result}`);
      return result;
    };
  };

  
const area = function(x, y) {
  return x * y;
};
  
  
const logArea = wrapLog(area, "area");
  
console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6
  
const volume = function(x, y, z) {
  return x * y * z;
    
    
};
const logVolume = wrapLog(volume, "volume");
  
console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24