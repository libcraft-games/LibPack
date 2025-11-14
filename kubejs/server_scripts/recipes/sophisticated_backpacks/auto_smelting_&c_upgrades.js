ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let file = `recipes/${sb}/auto_smelting_&c_upgrades.js`

    let types = ['smelting', 'smoking', 'blasting']

    types.forEach(type => {        
        let item = `${sb}:auto_${type}_upgrade`
        e.remove({output: item})
        e.shaped(
            item,
            [
                'GAG',
                'BUB',
                'GCG'
            ], 
            {
                G: '#c:plates/gold',
                U: `${sb}:${type}_upgrade`,
                A: `${ie}:component_electronic`,
                B: Ingredient.of(`${ie}:clinker_brick`)
                             .or(`${ie}:slag_brick`),
                C: 'minecraft:hopper'
            }
        )
    })

    console.log(`applied changes from ${file}`);
});