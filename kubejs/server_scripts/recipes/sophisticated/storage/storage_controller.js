ServerEvents.recipes(e => {
    let ss = 'sophisticatedstorage'
    let ie = global.ie.namespace
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
            A: `${ie}:component_electronic`,
            B: `${ie}:sorter`
        }
    )
})