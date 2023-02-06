function rgb(red, green, blue) {
    
    // CLAMPING to ensure numbers are between 0 - 255. If they are then they slide through as the number.
    red = Math.max(0, Math.min(255, red));
    green = Math.max(0, Math.min(255, green));
    blue = Math.max(0, Math.min(255, blue));

    // any number under 16 returns as single digit. 
    // all characters need to be capitalized. 
    let redHex = (red < 16 ? "0" : "") + red.toString(16).toUpperCase();
    let greenHex = (green < 16 ? "0" : "") + green.toString(16).toUpperCase();
    let blueHex = (blue < 16 ? "0" : "") + blue.toString(16).toUpperCase();
    
    return `${redHex}${greenHex}${blueHex}`;
}

console.log(rgb(218, 21, 260));


/* refactored solution. With two functions. One function just converts each argument seperately.

function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

*/