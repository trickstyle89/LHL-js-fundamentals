function calculateRectangleArea(length: number, width: number) {
    if (length > 0 && width > 0) {
      return width * length;
     }
  }
  
  function calculateTriangleArea(base: number, height: number) {
      if (base > 0 && height > 0) {
          return base * height / 2;
     }
  }
  
  function calculateCircleArea(radius: number) {
      if (radius > 0) {
          return Math.PI * (radius * radius);
      }
  }
  

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined
