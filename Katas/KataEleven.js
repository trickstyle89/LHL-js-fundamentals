// The first three will calculate the volume of the individual shapes:

// sphereVolume()will calculate the volume of a sphere given a radius
// coneVolume() will calculate the volume of a cone given a radius and a height
// prismVolume() will calculate the volume of a prism given a height, a width, and a depth

// The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.

// **HINT** Implement the functions one by one. The example inputs and outputs below will help you check that each function is correct.

// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!

let sVolume = 0;
sVolume = (4/3) * PI * Math.pow(radius, 3);
return Math.round(sVolume);

}

console.log(4186 < sphereVolume(10) && sphereVolume(10) <= 4189);
console.log(sphereVolume(10));

const coneVolume = function (radius, height) {
  // And here!
  let cVolume = 0;
  cVolume =  PI * Math.pow(radius, 2) * height;
  return Math.round(cVolume);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49)
console.log(coneVolume(3, 5));

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let pVolume = 0;
  pVolume =  height * width * depth;
  return Math.round(pVolume);
}

console.log(prismVolume(3, 4, 5) === 60);
console.log(prismVolume(3, 4, 5));



const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

const totalVolume = function (solids) {
    //Initialize something to use for the total
    let total = 0;
  
    //Loop through all the inputs, use functions to add to total
    for (const solid of solids){
      if (solid.type === 'sphere'){
        total += sphereVolume(solid.radius);
      }
      else if (solid.type === 'cone'){
        total += coneVolume(solid.radius, solid.height);
      }
      else if (solid.type === 'prism'){
        total += prismVolume(solid.height, solid.width, solid.depth);
      }
    }
    return total;
  }

console.log(272000 < totalVolume(duck) && totalVolume(duck));
console.log(duck);

// expected output all true.