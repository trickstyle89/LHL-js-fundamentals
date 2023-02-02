// use of spread array lets you accept a strange mix of arrays and strings (below). 

function destroyer(...args) {    
    let toBeFiltered = args[0];  
    let destroyers = args.length - 1;
    let destroyArray = [];

// loop to push the remaining arguments into a seperate string.
for (let i = 1; i <= destroyers; i++) {
    destroyArray.push(args[i]);
}

// declarative way to filter an array through another array to pick out 'destroy' the duplicates.

return toBeFiltered.filter(destroy => !destroyArray.includes(destroy)); 
}


/*
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"]
, "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")
 should return [12,92,65].