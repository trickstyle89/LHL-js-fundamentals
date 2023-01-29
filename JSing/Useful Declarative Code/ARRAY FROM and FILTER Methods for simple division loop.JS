function getDivisorsCnt(num) {
    return Array.from({length: num}, (_, i) => i + 1).filter(i => num % i === 0).length;
    }


/* Here is the simple loop
 

function getDivisorsCnt(num){
    
    let counter = 0;
    
    for (let i = 1; i <= num; i++) {
       if (num % i === 0 ) {
           counter++;
    }
}
return counter;
}

*/