ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_compacting_upgrade`
    let file = `recipes/${sb}/${item}.js`

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GPG',
            'IUI',
            'GEG'
        ], 
        {
            E: `${ie}:heavy_engineering`,
            G: '#c:plates/gold',
            P: 'create:mechanical_press',
            U: `${sb}:compacting_upgrade`,
            I: 'aethersdelight:arkenium_block'
        }
    )

    console.log(`applied changes from ${file}`);
});