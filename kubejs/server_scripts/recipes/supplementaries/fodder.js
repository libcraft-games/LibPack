ServerEvents.recipes(e => {
    let file = `recipes/supplementaries/doormat.js`

    let grains = Ingredient.of('minecraft:hay_block')
                           .or('culturaldelights:corn_cob_crate')
    let fodder = 'supplementaries:fodder'
    e.remove({output: fodder})
    e.shapeless(
        `2x ${fodder}`,
        [
            grains,
            'farmersdelight:straw_bale'
        ]
    )

    console.log(`applied changes from ${file}`);
});