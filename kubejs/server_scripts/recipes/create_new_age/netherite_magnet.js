ServerEvents.recipes(e => {
    let ce = 'create_enchantment_industry'
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let diamond   = create_recipeItem(`#c:gems/diamond`) 
    let super_xp  = create_recipeItem(`${ce}:super_experience_nugget`) 
    let netherite = create_recipeItem(`#c:nuggets/netherite`) 
    let magnetite = create_recipeItem(`${cn}:magnetite_block`) 

    let result = `${cn}:netherite_magnet`
    e.remove({output: result})
    c_AddMechanicalCraftingRecipe(e,
        {
            A: `#c:gems/diamond`,
            B: `${ce}:super_experience_nugget`,
            C: `#c:nuggets/netherite`,
            D: `${cn}:magnetite_block`
        },
        [
            'ABCBA',
            'BDBDB',
            'CBCBC',
            'BDBDB',
            'ABCBA'
        ],
        {
            id: result,
            count: 1
        }
    )
})