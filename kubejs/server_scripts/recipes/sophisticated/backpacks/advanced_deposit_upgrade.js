ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_deposit_upgrade`
    

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GCG',
            'IUI',
            'GFG'
        ], 
        {
            G: '#c:ingots/gold',
            C: `${ie}:component_electronic`,
            I: '#c:storage_blocks/cardboard',
            U: `${sb}:deposit_upgrade`,
            F: 'create:brass_funnel'
        }
    )

    console.log(`applied all changes successfully!`);
});