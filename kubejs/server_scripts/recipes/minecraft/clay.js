ServerEvents.recipes(e => {
    let item = 'minecraft:clay_ball', block = 'minecraft:clay'
    e.shapeless(
        `4x ${item}`,
        [block]
    )
})