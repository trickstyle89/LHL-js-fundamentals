const MILES_PER_KM = 0.621371192237334;
const KM_PER_MILES = 1.609344;
const MILES_PER_GALLON = 22.4;
const LITERS_PER_GALLON = 0.26417;
const LITERS_PER_100KM = (100 * 3.785) / MILES_PER_KM;

function bessieRange(fuelInLiters) {
    let gallons = fuelInLiters * LITERS_PER_GALLON;
    if (fuelInLiters > 100) {
        console.log('Bessie cannot hold more than 100 liters of fuel.');
    } else {
        let milesRange = gallons * MILES_PER_GALLON;
        let kilometersRange = milesRange * KM_PER_MILES;
        console.log(`With ${fuelInLiters} liters or ${gallons.toFixed(2)} gallons, Bessie has a range of ${milesRange.toFixed(2)} miles or ${kilometersRange.toFixed(2)} kilometers.`);
    }
}
return {milesRange, kilometersRange};


function bessieCost(costPerLiter, milesRange, kilometersRange) {
    let totalCost = kilometers * costPerLiter;
    let costPerKilometer = (totalCost / kilometers).toFixed(2); // fix usage of dot notation 
    let costPerMile = (totalCost / miles).toFixed(2); // fix usage of dot notation 
    
    console.log(`It costs ${costPerKilometer} per Kilometer and ${costPerMile} per Mile. The cost per Kilometer is ${LITERS_PER_100KM}`);
}

bessieRange(100);
bessieCost(2.24, miles, kilometers); // call bessie cost function with the proper arguments.

