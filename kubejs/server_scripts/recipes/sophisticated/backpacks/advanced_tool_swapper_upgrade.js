ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_tool_swapper_upgrade`
    
    let bound = 'scriptor:bound_'

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GAG',
            'DUB',
            'GCG'
        ], 
        {
            A: `${ie}:toolbox`,
            G: '#c:ingots/gold',
            D: 'enchanted:tool_poppet',
            U: `${sb}:tool_swapper_upgrade`,
            C: 'create:wrench',
            B: Ingredient.of(`${bound}pickaxe`)
                         .or(`${bound}axe`)
                         .or(`${bound}shovel`)
                         .or(`${bound}sword`)
        }
    )
    console.log(`applied all changes successfully!`);
});