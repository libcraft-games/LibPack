ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:filter_upgrade`
    let file = `recipes/${sb}/${item}.js`

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' C ',
            'RBR',
            ' L '
        ], 
        {
            C: 'minecraft:comparator',
            L: 'create:filter',
            R: '#c:dusts/redstone',
            B: upgrade_base
        }
    )
    e.shaped(
        item,
        [
            ' C ',
            'RBR',
            'IWI'
        ], 
        {
            C: 'minecraft:comparator',
            I: '#c:nuggets/iron',
            R: '#c:dusts/redstone',
            B: upgrade_base,
            W: '#minecraft:wool'
        }
    )

    console.log(`applied changes from ${file}`);
});