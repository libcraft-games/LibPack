ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:smelting_upgrade`
    let file = `recipes/${sb}/${item}.js`

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' P ',
            'RBS',
            ' H '
        ], 
        {
            P: 'minecraft:stone',
            S: 'minecraft:smooth_stone',
            R: 'minecraft:cobblestone',
            B: upgrade_base,
            H: 'minecraft:furnace'
        }
    )

    console.log(`applied changes from ${file}`);
});