/* 
Input: accounts = [[1,2,3],[3,2,1]] Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
*/

// straight forward nested array.
function maxWealth(accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        // The key to this is to have a value holder here outside the nested loop
        let wealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            wealth += accounts[i][j];
        }
        max = Math.max(max, wealth);
    }
    return max;
}

// One loop and one declarative code.
function maxWealth(accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let wealth = accounts[i].reduce((sum, value) => sum + value, 0);
        max = Math.max(max, wealth);
    }
    return max;
}

// Full declarative code using two loops MAP first then reduce.
return Math.max(...accounts.map(account => account.reduce((sum, value) => sum + value, 0)));
