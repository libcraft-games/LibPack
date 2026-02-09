ServerEvents.recipes(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let item = `${mc}:stick`    

    e.remove({input: `#lc:bamboo`, output: item})
    e.shaped(
        `${item}`,
        [
            'A',
            'A'
        ], 
        {
            A: `#lc:bamboo`
        }
    )
})