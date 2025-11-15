ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:blasting_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' A ',
            'DUB',
            ' C '
        ], 
        {
            U: upgrade_base,
            A: '#c:ingots/iron',
            B: '#c:ingots/gold',
            C: 'minecraft:smoker',
            D: '#c:ingots/copper'
        }
    )

    console.log(`applied all changes successfully!`);
});