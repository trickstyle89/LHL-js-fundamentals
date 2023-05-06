function counter(startNum, endNum) {
    var count = '';
    var down = '';
    for (var i = startNum; i < endNum + 1; i++) {
        count = count + " ".concat(i, " ");
    }
    console.log(count);
    for (var j = endNum; j > startNum - 1; j--) {
        down = down + " ".concat(j, " ");
    }
    console.log(down);
}
counter(1, 50);
