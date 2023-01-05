const moves = [ 'north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) {
  let x = 0, y = 0;
  for (let i = 0; i < moves.length; i++) {
    switch(moves[i]) {
    case "north":
      y++;
      break;
    case "south":
      y--;
      break;
    case "east":
      x++;
      break;
    case "west":
      x--;
      break;
    default:
      break;
    }
  }
  return [x, y]
}

finalPosition(moves);