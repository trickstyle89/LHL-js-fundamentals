const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    // Code here!
        let chosenRecipe;
        for (let i = 0; i < recipes.length; i++) {
          let allIngredientsPresent = true;
          for (let j = 0; j < recipes[i].ingredients.length; j++) {
            if (!bakeryA.includes(recipes[i].ingredients[j]) && !bakeryB.includes(recipes[i].ingredients[j])) {
              allIngredientsPresent = false;
            }
          }
          if (allIngredientsPresent) {
            chosenRecipe = recipes[i].name;
          }
        }
        return chosenRecipe;
      }

  let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
  let bakeryB = ['milk', 'butter', 'cream cheese'];
  let recipes = [
      {
          name: 'Coconut Sponge Cake',
          ingredients: ['coconut', 'cake base']
      },
      {
          name: 'Persian Cheesecake',
          ingredients: ['saffron', 'cream cheese']
      },
      {
          name: 'Custard Surprise',
          ingredients: ['custard', 'ground beef']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));
  
  bakeryA = ['potatoes', 'bay leaf', 'raisins'];
  bakeryB = ['red bean', 'dijon mustard', 'apples'];
  recipes = [
      {
          name: 'Potato Ganache',
          ingredients: ['potatoes', 'chocolate']
      },
      {
          name: 'Sweet Fish',
          ingredients: ['anchovies', 'honey']
      },
      {
          name: "Nima's Famous Dijon Raisins",
          ingredients: ['dijon mustard', 'raisins']
      }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));


  //* This one is a doozy! We might want to start by creating a helper function called ingredientCheck() that will take in one bakery at a time, along with the recipes.ingredients array to check if the given bakery possesses any of the ingredients from that recipe.