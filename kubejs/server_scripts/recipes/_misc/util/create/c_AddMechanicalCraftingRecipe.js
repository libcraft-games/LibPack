function create_recipeItem(itemOrTag) {
    if((typeof itemOrTag) == 'string') {
        if(itemOrTag.startsWith('#')) {                
            return { tag: itemOrTag.substring(1) }
        } else {
            return { item: itemOrTag }
        }
    }
    return itemOrTag
}
// Creates a Create mechanical crafting recipe.
//
// Arguments
//  Name                Type                        Description
//  ----                ----                        -----------
//  e                   RecipesKubeEvent            The event with which to add the recipe.
//
//  items               Dict<string,                The dictionary for interpreting the pattern.
//                           string | ItemOrTag>    Keys MUST be of length 1, and MUST NOT be ' '.
//                                                  Values which are strings are passed through 
//                                                  ItemOrTag(); non-strings are assumed to have 
//                                                  already been passed through this method.
//
//  pattern             List<string>                The pattern the `items` will be arranged in in
//                                                  the resulting recipe. All entries in this 
//                                                  pattern must be the same length, which will be 
//                                                  the width of the resulting recipe. Spaces in the 
//                                                  recipe are specified by ' '.
//
//  result              { id: ItemId, count: int }  The item produced by the recipe.
//
//  category            string? = 'misc'            TODO: figure out what this does, exactly.
//
//  acceptMirrored      bool? = false               If true, the recipe can be mirrored 
//                                                  (TODO: along which axis?)
//
//  showNotification    bool? = false               TODO: dunno what this does
function c_AddMechanicalCraftingRecipe(e, items, pattern, result, category, acceptMirrored, showNotification) {
    if(category == null)
        category = 'misc'
    if(acceptMirrored == null)
        acceptMirrored = false
    if(showNotification == null)
        showNotification = false
    let processedItems = {}
    for(let [key, item] in items) {
        processedItems[key] = ItemOrTag(item)
    }
    e.custom({
        type: `create:mechanical_crafting`,
        accept_mirrored: acceptMirrored,
        category: category,
        key: processedItems,
        pattern: pattern,
        result: result,
        show_notification: showNotification
    })
}