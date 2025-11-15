ServerEvents.recipes(e => {
    
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
    console.log(`applied all changes successfully!`);
});