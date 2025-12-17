ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_jukebox_upgrade`
    

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GAG',
            'BUB',
            'GCG'
        ], 
        {
            A: 'minecraft:hopper',
            G: '#c:plates/gold',
            C: 'minecraft:comparator',
            U: `${sb}:jukebox_upgrade`,
            B: '#c:gems/diamond'
        }
    )
    console.log(`applied all changes successfully!`);
});