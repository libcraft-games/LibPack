// converts an item or tag with optional count to an IE base predicate for use in IE recipe arguments
function ie_BP(itemOrTag, count) {
    if(count == null)
        count = 1
    if((typeof itemOrTag) == 'string') {
        if(itemOrTag.startsWith('#')) {                
            return {
                basePredicate: {
                    tag: itemOrTag.substring(1)
                },
                count: count
            }
        } else {
            return {
                basePredicate: {
                    item: itemOrTag
                },
                count: count
            }
        }
    }
    return itemOrTag
}
function ie_AddAlloy(e, input0, input1, result) {
    ie_AddAlloyFurnaceRecipe(e, input0, input1, result)
    ie_AddArcFurnaceRecipe(e, input0, [input1], [result])
}
function ie_AddAlloyFurnaceRecipe(e, input0, input1, result) {
    let ie = global.ie.namespace
    e.custom({
        type: `${ie}:alloy`,
        input0: input0,
        input1: input1,
        result: result
    })
}
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