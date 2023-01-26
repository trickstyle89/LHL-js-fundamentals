/* Use of nested Ternary operators  
*/

const truncateString = (str, num) => 
// First ternary returns orignal 'str' or goes on to SLICE based on str.length
// second nested ternary focuses on how much to SLICE base on second condition.
str.length <= num ? str : str.slice(0, num > 3 ? num - 3 : num) + '...';


/*

refactored with ONE ternary operator.

function truncateString(str, num) {
    if (str.length <= num) return str;
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
}



original newbie code 

const truncateString = (str, num) => {
const truncate = num - 3;  // minus three to include the final '...'
const endOfResult = '...';

if (str.length < num || str.length === num) 
    return str;
} else if (num <= 3) {
    return (str.substring(0, num))+endOfResult;
} else 
    return (str.substring(0, truncate))+endOfResult;
}


*/