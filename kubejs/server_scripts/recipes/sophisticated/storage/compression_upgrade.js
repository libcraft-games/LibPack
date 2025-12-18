ServerEvents.recipes(e => {
    let ss = 'sophisticatedstorage'
    let item = `${ss}:compression_upgrade`    

    let upgrade_base = `${ss}:upgrade_base`

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
            C: 'minecraft:crafter',
            B: 'minecraft:comparator',
            A: 'minecraft:piston'
        }
    )

    console.log(`applied all changes successfully!`)
})