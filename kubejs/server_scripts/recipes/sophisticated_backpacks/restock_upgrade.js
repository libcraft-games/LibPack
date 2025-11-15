ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:restock_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' C ',
            'PBP',
            ' H '
        ], 
        {
            P: 'minecraft:sticky_piston',
            C: 'bibliocraft:stockroom_catalog',
            H: `${ie}:hatch`,
            B: upgrade_base
        }
    )

    console.log(`applied all changes successfully!`);
});