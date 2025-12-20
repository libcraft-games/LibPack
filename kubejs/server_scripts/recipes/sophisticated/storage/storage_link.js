ServerEvents.recipes(e => {
    let ss = 'sophisticatedstorage', ie = 'immersiveengineering'
    let item = `${ss}:storage_link`    

    e.remove({output: item})
    e.shaped(
        item,
        [
            'T',
            'C',
            'P'
        ], 
        {
            T: `create:transmitter`,
            C: `create:smart_chute`,
            P: `#c:ender_pearls`
        }
    )

    console.log(`applied all changes successfully!`)
})