ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_filter_upgrade`
    let file = `recipes/${sb}/${item}.js`

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GRG',
            'BUB',
            'GAG'
        ], 
        {
            A: 'create:attribute_filter',
            G: '#c:plates/gold',
            R: `${ie}:sorter`,
            U: `${sb}:filter_upgrade`,
            B: '#c:ingots/brass'
        }
    )
    console.log(`applied changes from ${file}`);
});