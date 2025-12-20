ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:restock_upgrade`
    
    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' L ',
            'PBP',
            ' H ',
        ], 
        {
            P: 'minecraft:sticky_piston',
            L: 'create:filter',
            H: 'minecraft:hopper',
            B: upgrade_base
        }
    )
    e.shaped(
        item,
        [
            'IWI',
            'PBP',
            ' H '
        ], 
        {
            I: '#c:nuggets/iron',
            B: upgrade_base,
            W: '#minecraft:wool',
            P: 'minecraft:sticky_piston',
            H: 'minecraft:hopper',
        }
    )

    console.log(`applied all changes successfully!`);
});