const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0; // when to start
while (i < ingredients.length) { // when to stop
  console.log(ingredients[i]);
  i += 1
}

for (i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}

for (i = ingredients.length - 1; i >= 0; i--) {
    console.log(ingredients[i]);
}