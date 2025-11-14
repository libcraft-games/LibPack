ServerEvents.recipes(e => {
    let file = 'recipes/crittersandcompanions/silk_lead.js'
    let item = 'crittersandcompanions:silk_lead'
    e.remove({output: item})
    e.shaped(item,
        [
            'SS ',
            'SS ',
            '  S'
        ],
        {
            S: 'crittersandcompanions:silk'
        }
    )
    console.log(`applied changes from ${file}`);
});