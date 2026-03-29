ServerEvents.recipes(e => {
    let su = 'supplementaries'
    let sq = 'suppsquared'
    let sackTag = `#${su}:sacks`

    for(let color of global.libcraft.colors) {
        let dye = `#c:dyes/${color}`
        let dyedSack = `${sq}:sack_${color}`
        e.shapeless(
            dyedSack,
            [ sackTag, dye ]
        )
    }
    e.shapeless(`${su}:sack`, [sackTag, `${su}:soap`])
})