ServerEvents.recipes(e => {
    let su = 'supplementaries'
    let item = `${su}:lunch_basket`    

    e.remove({output: item})
    e.shaped(
        `${item}`,
        [
            ' A ',
            'BCB',
            ' B '
        ], 
        {
            A: `#lc:bamboo`,
            B: `${su}:wicker_fence`,
            C: `#minecraft:wool_carpets`
        }
    )
})