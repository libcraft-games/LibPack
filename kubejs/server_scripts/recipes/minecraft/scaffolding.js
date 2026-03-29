ServerEvents.recipes(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let item = `${mc}:scaffolding`    

    e.remove({output: item})
    e.shaped(
        `6x ${item}`,
        [
            'ABA',
            'A A',
            'A A'
        ], 
        {
            A: `#lc:bamboo`,
            B: `#c:strings`
        }
    )
    e.shaped(
        `6x ${item}`,
        [
            'ABA',
            'A A',
            'A A'
        ], 
        {
            A: `#lc:bamboo`,
            B: `${fd}:canvas`
        }
    )
})