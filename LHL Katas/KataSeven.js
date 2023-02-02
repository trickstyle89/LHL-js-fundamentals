// Use a loop to check each of the testing sites.
      // Get the value of the threshold to establish the parameter for the loop.
        // Let testLimit = threshold * 10
      // This means you need to have a variable to measure up against.
    // It should use the length of the array to measure against.
      // Calculate the ratio of clean to dirty sites based on this.


const checkAir = function (samples, threshold) {
    // Getting the threshold to a usable value.
    let testLimit = threshold * 10;
    let polluted = 0;

    for (let x = 0; x < samples.length; x++) {
        if (samples[x] === 'dirty') {
            polluted = polluted + 1;
    
        if (polluted >= testLimit) {
            return 'Polluted';
     
    }
}
}
return 'Clean';
};


  
  console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));
  
  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ))

// Expected output
  //Polluted
  //Polluted
  //Clean

  // You could have used Math.floor as well as .filter to make code simpler.