function ie_AddAlloy(e, input0, input1, result) {
    ie_AddAlloyFurnaceRecipe(e, input0, input1, result)
    ie_AddArcFurnaceRecipe(e, input0, [input1], [result])
}