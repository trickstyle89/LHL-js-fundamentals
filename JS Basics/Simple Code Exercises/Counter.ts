function counter(startNum: number, endNum: number) {
    let count = '';
    let down ='';
    for (let i: number = startNum; i < endNum+1; i++) {
        count = count + ` ${i} `;
    }
     console.log(count);
     
    for (let j: number = endNum; j > startNum - 1; j--) {
        down = down + ` ${j} `;
       
    }
     console.log(down);
}

counter(1, 50);