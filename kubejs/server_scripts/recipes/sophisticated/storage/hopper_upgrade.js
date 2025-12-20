ServerEvents.recipes(e => {
    let ss = 'sophisticatedstorage'
    let item = `${ss}:hopper_upgrade`    

    let upgrade_base = `${ss}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' A ',
            'BUB',
            ' A '
        ], 
        {
            U: upgrade_base,
            B: 'minecraft:redstone',
            A: 'minecraft:hopper'
        }
    )

    console.log(`applied all changes successfully!`)
})