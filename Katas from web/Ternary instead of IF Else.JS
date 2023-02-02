// The key to this LAYERED ternary is to use the second half ':' as the next condition.
// Once you get to the third ternary there were issues.
// you need brackets around the AND condition for syntax purposes.
const saleHotdogs = n =>  n < 5 ? n * 100 : (n >= 5 && n < 10) ? n * 95 : n * 90;

/* 
even more concise
const saleHotdogs = n =>  n * (n < 5 ? 100 : n < 10 ? 95 : 90);

function saleHotdogs(n){
    if(n < 5) {
        return n * 100;
    } else if (n >= 5 && n < 10) {
        return n * 95;
    } else {
        return n * 90;
    }
}
*/