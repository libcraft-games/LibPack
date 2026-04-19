// adds an _I_mmersive _E_ngineering arc furnace recipe.
//
// for more info on IE base predicates, see ie_BP.js.
//
// args:
//  e           RecipesKubeEvent    The event with which to add the recipe.
//  input       IE Base Predicate   The item required in the input part of the UI.
//  additives   IE Base Predicate   The item required in the additives part of the UI.
//  results     IE Base Predicate   The item which is produced by the recipe.
//  energy      int = 51200         The amount of energy required to complete the recipe.
function ie_AddArcFurnaceRecipe(e, input, additives, results, energy, time) {
    if(energy == null)
        energy = 51200
    if(time == null)
        time = 100
    let ie = global.ie.namespace
    e.custom({
        type: `${ie}:arc_furnace`,
        energy: energy,
        time: time,
        input: input,
        additives: additives,
        results: results
    })
}