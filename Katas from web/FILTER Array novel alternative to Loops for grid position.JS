//interesting approach to solving a straight forward walking problem. 
// lots of array methods, might not be efficient.

function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    
    const north = walk.filter(direction => direction === 'n').length;
    const south = walk.filter(direction => direction === 's').length;
    const west = walk.filter(direction => direction === 'w').length;
    const east = walk.filter(direction => direction === 'e').length;
    
    return north === south && west === east;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

/* Straight forward Switch Case instead of If statements.

function isValidWalk(walk) {
    let startingPoint = [0,0];
    let walkingPoint = [0,0];
    
    if (walk.length !== 10) {
        return false;
    } else 
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                walkingPoint[0]++;
                break;
            case 's':
                walkingPoint[0]--;
                break;
            case 'w':
                walkingPoint[1]--;
                break;
            case 'e':
                walkingPoint[1]++;
                break;
        }
    }
    return walkingPoint.toString() === startingPoint.toString();
}

*/