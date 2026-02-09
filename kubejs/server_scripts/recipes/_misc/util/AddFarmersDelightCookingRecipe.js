function AddFarmersDelightCookingRecipe(e, ingredients, container, result, experience, recipeBookTab) {
    let actualIngredients = []
    for(let ingredient of ingredients) {
        if((typeof ingredient) === 'string') {
            if(ingredient[0] === '#')
                actualIngredients.push({tag: ingredient.slice(1)})
            else
                actualIngredients.push({id: ingredient})
        } else {
            actualIngredients.push(ingredient)
        }
    }
    e.custom({
        type: 'farmersdelight:cooking',
        container: {
            count: 1,
            id: container
        },
        experience: experience,
        ingredients: actualIngredients,
        recipe_book_tab: recipeBookTab,
        result: {
            count: 1,
            id: result
        }
    })
}