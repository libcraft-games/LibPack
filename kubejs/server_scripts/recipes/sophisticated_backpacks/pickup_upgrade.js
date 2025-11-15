ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:pickup_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' P ',
            'RBR',
            ' H '
        ], 
        {
            P: 'minecraft:sticky_piston',
            R: '#c:dusts/redstone',
            B: upgrade_base,
            H: 'minecraft:hopper'
        }
    )

    console.log(`applied all changes successfully!`);
});