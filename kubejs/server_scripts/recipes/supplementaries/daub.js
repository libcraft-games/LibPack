ServerEvents.recipes(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let item = `${su}:daub`    

    e.remove({output: item})
    e.shapeless(
        `6x ${item}`,
        [
            `${fd}:straw`,
            `${mc}:clay_ball`,
            `#c:sands`,
            `#lc:dirt`
        ]
    )
})