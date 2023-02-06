function order(words) {
    //empty array to push the results into
    let resultArray =[];
    // convert the string into an array of words.
    let wordArray = words.split(' ');
    // need to start a loop for the wordCount to look for the numbers for each word.
for (let wordCount = 1; wordCount <= wordArray.length; wordCount++) {
    // start of the actual loop. First layer.
    for (let i = 0; i < wordArray.length; i++) {
        // conditional combined with indexOf to serve as a 'nested loop'
        // converting NUMBER of wordCount into a string to iterate.
        // if the wordCount is bigger than or equal zero, it pushes the filtered word onto the resultsArray.
        if (wordArray[i].indexOf(wordCount.toString()) >= 0) {
            resultArray.push(wordArray[i]);
        }
    }
}

return resultArray.join(' ');
}

/* using SORT METHOD to solve problem declaratively

function order(words) {
    //  interesting SORT method, typical (a, b => a - b) format
return words.split(' ').sort((a, b) => {
    // numA and numB are holder values for SORT METHOD
    let numA = parseInt(a.match(/\d/)[0]);
    // parseInt can be interchanged with Number string to number for sorting.
    // regex simply looking for any numbers using \d
    // [0] is the first element of the array.
    let numB = parseInt(b.match(/\d/)[0]);
    return numA - numB;
  }).join(' ');
}