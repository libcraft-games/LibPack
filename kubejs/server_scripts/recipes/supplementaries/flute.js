ServerEvents.recipes(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let item = `${su}:flute`    

    e.remove({input: `#lc:bamboo`, output: item})
    e.shaped(
        `${item}`,
        [
            'A',
            'A',
            'A'
        ], 
        {
            A: `#lc:bamboo`
        }
    )
})