ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_pickup_upgrade`
    let file = `recipes/${sb}/${item}.js`

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GCG',
            'IUI',
            'GDG'
        ], 
        {
            G: '#c:plates/gold',
            C: `${ie}:component_electronic`,
            I: '#c:plates/steel',
            U: `${sb}:pickup_upgrade`,
            D: '#c:gems/diamond'
        }
    )

    console.log(`applied changes from ${file}`);
});