ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:reactor_rod`
    e.remove({output: item})
    c_AddMechanicalCraftingRecipe(e,
        {
            A: create_recipeItem(`${cn}:reactor_casing`),
            B: create_recipeItem(`#c:plates/lead`),
            C: create_recipeItem(`${cn}:heat_pipe`),
            D: create_recipeItem(`${cn}:reactor_glass`),
            E: create_recipeItem(`#c:plates/hop_graphite`)
        },
        [
            'ABCBA',
            ' DED ',
            ' DED ',
            ' DED ',
            'ABCBA',
        ],
        {
            id: item,
            count: 1
        }
    )
})