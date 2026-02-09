ServerEvents.recipes(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let item = `${mc}:tnt`    

    e.remove({output: item})
    e.shaped(
        `${item}`,
        [
            'ABA',
            'BAB',
            'ABA'
        ], 
        {
            A: `${mc}:gunpowder`,
            B: `#minecraft:sand`
        }
    )
})