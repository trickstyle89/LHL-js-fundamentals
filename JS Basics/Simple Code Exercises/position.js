const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
    // Your code for the FUNCTION (modify) here ...
    
    const finalCoor = [] // Place for final array coordinates
    let x = 0, y = 0;

    // loop to go through all the directional moves
      for (let i = 0; i < moves.length; i++) {
        switch(moves[i]) {
            //East to West constant
          case 'west':
            x--;
            break;
          case 'east':
            x++;
            break;
          case 'north':
            y++;
            break;
          case 'south':
            y--;
            break;  
          default:
            break;
        }
    }
    finalCoor.push(moves) 
    return finalCoor;

      }


console.log(finalPosition(moves))

// This function should return the array [-1, 4]
