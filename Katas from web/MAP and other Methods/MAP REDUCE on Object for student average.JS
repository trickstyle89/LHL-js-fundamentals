function test(arr) {
    let results = arr.map(student => { 
        // add up all the scores for each student.
        const sum = student.scores.reduce((acc, score) => acc + score);
        // create a new key in the object and calculate the average.
        return {name: student.name, average: sum / student.scores.length };
    });  // filtering only students from the object with scores higher than 90.
    return results.filter(student => student.average > 90);
 }
   
        
 
 console.log(test( students = [
   { name: "Alice", scores: [90, 85, 92] },
   { name: "Bob", scores: [75, 80, 85] },
   { name: "Charlie", scores: [90, 95, 85] },
   { name: "David", scores: [100, 100, 100] }
 ]));