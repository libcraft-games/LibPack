ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_magnet_upgrade`
    

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GCG',
            'EUE',
            'GNG'
        ], 
        {
            G: '#c:plates/gold',
            C: `${ie}:component_electronic`,
            U: `${sb}:magnet_upgrade`,
            E: 'minecraft:ender_eye',
            N: '#c:ingots/netherite'
        }
    )

    console.log(`applied all changes successfully!`);
});