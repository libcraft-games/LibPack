ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:deposit_upgrade`
    let file = `recipes/${sb}/${item}.js`

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' H ',
            'PBP',
            ' L ',
        ], 
        {
            P: 'minecraft:piston',
            L: 'create:filter',
            H: 'minecraft:hopper',
            B: upgrade_base
        }
    )
    e.shaped(
        item,
        [
            ' H ',
            'PBP',
            'IWI'
        ], 
        {
            I: '#c:nuggets/iron',
            B: upgrade_base,
            W: '#minecraft:wool',
            P: 'minecraft:piston',
            H: 'minecraft:hopper',
        }
    )

    console.log(`applied changes from ${file}`);
});