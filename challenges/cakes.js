function cakes(recipe, available) {
    const recipeArray = Object.entries(recipe)
    let result = []

    const countRecipes = (numRecipe, numAvailable) =>{
      result = [...result, Math.floor(numAvailable / numRecipe)]
    }
  
    recipeArray.forEach(item => {
      countRecipes(item[1],available[item[0]])
    })
    return Math.min(...result)
  }

cakes({"cream":1,"flour":3,"sugar":1,"milk":1,"oil":1,"eggs":1}, {"sugar":1,"eggs":1,"flour":3,"cream":1,"oil":1,"milk":1})

/*
Description:
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). \
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0.
*/