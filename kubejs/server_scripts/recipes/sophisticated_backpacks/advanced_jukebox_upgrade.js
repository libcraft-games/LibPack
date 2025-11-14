ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_jukebox_upgrade`
    let file = `recipes/${sb}/${item}.js`

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GAG',
            'BUB',
            'GCG'
        ], 
        {
            A: 'bibliocraft:disc_rack',
            G: '#c:plates/gold',
            C: 'minecraft:comparator',
            U: `${sb}:jukebox_upgrade`,
            B: '#c:gems/diamond'
        }
    )
    console.log(`applied changes from ${file}`);
});