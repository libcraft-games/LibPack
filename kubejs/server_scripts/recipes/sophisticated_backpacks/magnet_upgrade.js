ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:magnet_upgrade`
    let file = `recipes/${sb}/${item}.js`

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' M ',
            'PUR',
            ' A '
        ], 
        {
            P: '#c:ender_pearls',
            R: '#c:dusts/redstone',
            U: `${sb}:pickup_upgrade`,
            M: '#lc:magnets/portable',
            A: '#c:ingots/arkenium'
        }
    )

    console.log(`applied changes from ${file}`);
});