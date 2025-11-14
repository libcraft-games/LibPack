ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_restock_upgrade`
    let file = `recipes/${sb}/${item}.js`

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GAG',
            'IUI',
            'GCG'
        ], 
        {
            G: '#c:plates/gold',
            C: `${ie}:component_electronic`,
            I: `${ie}:plate_duroplast`,
            U: `${sb}:restock_upgrade`,
            A: 'create:mechanical_arm'
        }
    )

    console.log(`applied changes from ${file}`);
});