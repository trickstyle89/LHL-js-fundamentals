/* There are two new functions used in this simple KATA.
REPEAT is just a simple way to put out characters.
use of SPACES and STARS to dynamically space symbols 
*/

function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 1; i <= nFloors; i++) {
        
        // just adds out the spaces into the array.
        let spaces = " ".repeat(nFloors - i);
        // just adds out the stars into the array.
        let stars = "*".repeat(i * 2 - 1);
        // this is the dynamic space and stars to balance the tower.
        // known as a TEMPLATE LITERAL using back ticks.
        tower.push(`${spaces}${stars}${spaces}`);
    }
    return tower;
} 