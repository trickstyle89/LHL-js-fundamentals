const repeatNumbers = function(data) {
    // Put your solution here
    let answer = '';

 for (x = 0; x < data.length; x++) {
    
    let value = data[x][0];
    let reps = data[x][1];

 for (y = 0; y < reps; y++) {
    answer += value;

 }

 if (x < data.length - 1) {
    answer += ' ';
 }
 }
 return answer;
};
  
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


  

// Expected output  
// 1111111111
// 11, 222
// 10101010, 343434343434, 9292