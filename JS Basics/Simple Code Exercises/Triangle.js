function triangleArea (lengthOne, lengthTwo, lengthThree) {
    let tArea = 0;
    
    if (lengthOne > lengthTwo && lengthOne > lengthThree ) {
        return tArea = (lengthTwo * lengthThree) / 2;
    } else if (lengthTwo > lengthOne && lengthTwo > lengthThree) {
        return tArea = (lengthOne * lengthThree) / 2;
    } else if (lengthThree > lengthOne && lengthThree > lengthTwo) {
        return tArea = (lengthOne * lengthTwo) / 2;
    } else if (lengthThree === lengthOne || lengthThree === lengthTwo) {
        return tArea = (lengthThree * lengthThree) / 2;
    } else if (lengthTwo === lengthOne || lengthTwo === lengthThree) {
        return tArea = (lengthTwo * lengthTwo) / 2;
    } else {
        return tArea;
  }
}
console.log(triangleArea(2, 4, 6));