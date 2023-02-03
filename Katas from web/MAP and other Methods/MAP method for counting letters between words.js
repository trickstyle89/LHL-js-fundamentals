function test(str) {
    return str.split(' ')
    .map(word => {
        return (word.length > 4) 
        ? `${word[0]}${word.length-2}${word[word.length-1]}` : word 
    })
    .join(' ');
    }
    