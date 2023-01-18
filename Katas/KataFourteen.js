

const calculateChange = function(total, cash) {
    //Declare a class which declares all of our potential variables
    let change = {
      twentyDollar: 0,
      tenDollar: 0,
      fiveDollar: 0,
      twoDollar: 0,
      oneDollar: 0,
      quarter: 0,
      dime: 0,
      nickel: 0,
      penny: 0
    }
    
    //Declare some variables for use
    let remaining = cash - total;
  
    //This is hideous. But switch statement didn't work and I went down a rabbit hole.
    //Figure out what gets put into our change object.
    do{
      if (remaining % 2000 === 0){
        change.twentyDollar++;
        remaining -= 2000;
      }
      else if (remaining % 1000 === 0){
        change.tenDollar++;
        remaining -= 1000;
      }
      else if (remaining % 500 === 0){
        change.fiveDollar++;
        remaining -= 500;
      }
      else if (remaining % 200 === 0){
        change.twoDollar++;
        remaining -= 200;
      }
      else if (remaining % 100 === 0){
        change.oneDollar++;
        remaining -= 100;
      }
      else if (remaining % 25 === 0){
        change.quarter++;
        remaining -= 25;
      }
      else if (remaining % 10 === 0 && remaining % 25 !== 5){
        change.dime++;
        remaining -= 10;
      }
      else if (remaining % 5 === 0){
        change.nickel++;
        remaining -= 5;
      }
      else{
        change.penny++;
        remaining--;
      }
      if (change.nickel === 2){
        change.nickel -= 2;
        change.dime++;
      }
    } while (remaining > 0);
  
    //Make an object to copy things into
    let sums = {}
    //for...in let's us go through each property in the object. If it's greater than 0, copy it into sums.
    for (const sum in change){
      if (change[sum] > 0){
        sums[sum] = change[sum];
      }
    }
  
  
    return sums;
  
  
  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));s