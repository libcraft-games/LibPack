ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:everlasting_upgrade`
    let file = `recipes/${sb}/${item}.js`

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' N ',
            'SBS',
            ' N '
        ], 
        {
            B: upgrade_base,
            N: '#c:ingots/netherite',
            S: 'minecraft:nether_star'
        }
    )

    console.log(`applied changes from ${file}`);
});