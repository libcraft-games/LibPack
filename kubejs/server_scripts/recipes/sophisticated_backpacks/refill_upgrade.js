ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:refill_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' C ',
            'SBS',
            ' H '
        ], 
        {
            C: 'minecraft:comparator',
            S: 'minecraft:smooth_stone',
            B: upgrade_base,
            H: 'minecraft:hopper'
        }
    )

    console.log(`applied all changes successfully!`);
});