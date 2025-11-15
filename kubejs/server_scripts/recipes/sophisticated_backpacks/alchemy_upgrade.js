ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:alchemy_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' A ',
            'BUB',
            ' C '
        ], 
        {
            U: upgrade_base,
            A: 'minecraft:brewing_stand',
            B: '#c:rods/blaze',
            C: 'createaddition:straw'
        }
    )

    console.log(`applied all changes successfully!`);
});