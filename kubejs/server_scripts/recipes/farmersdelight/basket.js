ServerEvents.recipes(e => {
    let fd = 'farmersdelight'
    let su = 'supplementaries'
    let item = `${fd}:basket`    

    e.remove({output: item})
    e.shaped(
        `${item}`,
        [
            'A A',
            'B B',
            'ABA'
        ], 
        {
            A: `#lc:bamboo`,
            B: `${su}:wicker_fence`
        }
    )
    e.shaped(
        `${item}`,
        [
            'A A',
            'B B',
            'ABA'
        ], 
        {
            A: `#lc:bamboo`,
            B: `${fd}:canvas`
        }
    )
})