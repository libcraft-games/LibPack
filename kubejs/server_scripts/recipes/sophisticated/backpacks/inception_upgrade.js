ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:inception_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            'SBS',
            'NCN',
            'SBS'
        ], 
        {
            S: 'minecraft:nether_star',
            C: 'twilightforest:carminite',
            N: '#c:ingots/netherite',
            B: `${sb}:upgrade_base`
        }
    )

    console.log(`applied all changes successfully!`);
});