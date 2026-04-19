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
function create_AddMechanicalCraftingRecipe(e, keys, pattern, result) {
    e.custom({
        type: `create:mechanical_crafting`,
        accept_mirrored: false,
        key: keys,
        pattern: pattern,
        result: result,
        show_notification: false
    })
}