const calculateChange = function(total, cash) {
    // Your code here
      let change = cash - total;
      if(change<=0) return "Not enough cash to give change"; // edge case to handle when cash is less than total
      let changeObj = {};
      let denom = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
      let denomName = ["TwentyDollars", "TenDollars", "FiveDollars", "Toonie", "Loonie", "Quarter", "Dime", "Nickel", "Penny"];
      
      for (let i = 0; i < denom.length; i++) {
        while (change >= denom[i]) {
          change -= denom[i];
          changeObj[denomName[i]] = (changeObj[denomName[i]] || 0) + 1;
        }
      }
    
      return changeObj;
    };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));
  console.log(calculateChange(1234, 10000));



//  Valid denominations are as follows:

//Twenty ,Ten, Five dollars, Toonie, Loonie. Quarter (25¢), Dime (10¢), Nickel (5¢), Penny (1¢)


// Expected Output
// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }