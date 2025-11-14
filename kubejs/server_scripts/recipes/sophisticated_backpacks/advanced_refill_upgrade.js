ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_refill_upgrade`
    let file = `recipes/${sb}/${item}.js`

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GSG',
            'IUI',
            'GCG'
        ], 
        {
            G: '#c:plates/gold',
            C: 'create:andesite_funnel',
            I: '#c:plates/brass',
            U: `${sb}:refill_upgrade`,
            S: 'create:stockpile_switch'
        }
    )

    console.log(`applied changes from ${file}`);
});