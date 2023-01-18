function counter(startNum, endNum) {
    let count = '';
    let down ='';
    for (let i = startNum; i < endNum+1; i++) {
        count = count + ` ${i} `;
    }
     console.log(count);
     
    for (let j = endNum; j > startNum - 1; j--) {
        down = down + ` ${j} `;
       
    }
     console.log(down);
}

counter(1, 50);