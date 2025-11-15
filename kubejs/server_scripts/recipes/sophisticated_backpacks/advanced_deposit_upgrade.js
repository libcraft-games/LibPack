ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_deposit_upgrade`
    

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GFG',
            'IUI',
            'GCG'
        ], 
        {
            G: '#c:plates/gold',
            C: `${ie}:component_electronic`,
            I: '#c:plates/cardboard',
            U: `${sb}:deposit_upgrade`,
            F: 'create:brass_funnel'
        }
    )

    console.log(`applied all changes successfully!`);
});