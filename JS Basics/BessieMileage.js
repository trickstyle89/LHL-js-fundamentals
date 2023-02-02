const conKmUnit = 0.62;
const conMiUnit = 1.6;
const conGalonsToLiters = 0.26417' 

function unitMilesToKilos(km) {
   let conKilos = 0;
   
   conKilos = km * conMiUnit;
   
   console.log(conKilos);
}


function unitKilosToMiles(mi) {
   let conMiles = 0;
  
   
   conMiles = mi * conKmUnit;
   
   console.log(conMiles);
}

unitMilesToKilos(600);
unitKilosToMiles(900);

function bessieRange(fuelInLiters) {
    galons = fuelInLiters * conGalonsToLiters;
    if (fuelInLiters > 100) {}
       console.log('Bessie cannot hole more than 100 liters');
      } else {
        return bRange = galons * 21;
      } 