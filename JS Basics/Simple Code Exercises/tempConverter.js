function tempConverter(temp, unit) {
    let finalTemp = 0
    unit = unit.toLowerCase();
    
    switch(unit) {
        
        case 'fahrenheit': finalTemp = (temp*9/5) + 32;
          console.log(`${temp} in Celsius is ${finalTemp} in Fahrenheit.`)
            break;
        case 'celsius': finalTemp = (temp - 32) * 5/9;
          console.log(`${temp} in Fahrenheit is ${finalTemp} in Celsius.`)    
            break;
        default: 
          console.log('Not a valid input!');
    }
}

tempConverter(0, 'celsius');