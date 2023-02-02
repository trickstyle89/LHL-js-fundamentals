//Taking two arrays, filtering through each other and then combining the results from the two filter methods.

function diffArray(arr1, arr2) {

    let uniqueOne = arr1.filter(otherArr => !arr2.includes(otherArr));
    let uniqueTwo = arr2.filter(anotherArr => !arr1.includes(anotherArr));

    return uniqueOne.concat(uniqueTwo);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


