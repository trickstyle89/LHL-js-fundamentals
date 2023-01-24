function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
    //EVERY is METHOD that tests if all elements in the array pass the function test.  
    // Read in notes on the bottom for explanation of EVERY()
    if (primes.every((prime) => i % prime !== 0))
        primes.push(i);
    }
    return primes.reduce((sum, prime) => sum + prime, 0);
  }


  /* here is the base code to create an array of Prime Numbers.
 let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
      console.log(primes);

Here's what's happening in detail:

The every() method is called on the primes array.

For each element in the array, the callback function is called with two arguments: 
the current element (prime) and the index of the current element (index),

Inside the callback function, it's checking if i is divisible by prime or not.

If i is divisible by prime, the callback function returns false

If i is not divisible by prime, the callback function returns true

If the callback function returns false for any element of the primes array, the every method returns false

If the callback function returns true for every element of the primes array, the every method returns true
So, in short, the every() method is used to check if the current number is divisible by any of the 
prime numbers found so far. If it's not divisible by any of them, the every method returns true and that 
means that i is a prime number.

*/