ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:compacting_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' P ',
            'PBP',
            ' P '
        ], 
        {
            P: 'minecraft:piston',
            B: upgrade_base
        }
    )

    console.log(`applied all changes successfully!`);
});