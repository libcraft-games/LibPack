function c_AddSplashingRecipe(e, ingredients, results) {
    e.custom({
        type: 'create:splashing',
        ingredients: ingredients,
        results: results
    })
}