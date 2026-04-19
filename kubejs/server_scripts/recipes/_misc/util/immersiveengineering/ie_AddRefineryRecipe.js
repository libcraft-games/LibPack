   
// adds an _I_mmersive _E_ngineering refinery recipe.
//
// for more info on IE base predicates, see ie_BP.js.
//
// args:
//  e           RecipesKubeEvent                The event with which to add the recipe.
//  input0      any                             It's complicated.
//  input1      any                             See input0
//  catalyst    ItemOrTag? = null               Catalyst item required to perform the recipe. Not used up.
//  result      { id: string, amount: int }     Fluid produced by the recipe.
//  energy      int? = 600                      Amount of energy required to perform the recipe.
function ie_AddRefineryRecipe(e, input0, input1, catalyst, result, energy) {
    let ie = global.ie.namespace

    if(energy == null)
        energy = 600
    
    e.custom({
        type: `${ie}:refinery`,
        input0: input0,
        input1: input1,
        catalyst: catalyst,
        result: result,
        energy: energy,
    })
}