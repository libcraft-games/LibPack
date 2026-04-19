function ie_AddAlloyFurnaceRecipe(e, input0, input1, result) {
    let ie = global.ie.namespace
    e.custom({
        type: `${ie}:alloy`,
        input0: input0,
        input1: input1,
        result: result
    })
}