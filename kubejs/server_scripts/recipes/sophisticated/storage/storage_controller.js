ServerEvents.recipes(e => {
    let ss = 'sophisticatedstorage', ie = 'immersiveengineering'
    let item = `${ss}:controller`    

    e.remove({output: item})
    e.shaped(
        item,
        [
            'cAc',
            'BUB',
            'cAc'
        ], 
        {
            U: `#c:chests/wooden`,
            c: '#c:stones',
            A: `${ie}:component_electronic_adv`,
            B: `${ie}:sorter`
        }
    )

    console.log(`applied all changes successfully!`)
})