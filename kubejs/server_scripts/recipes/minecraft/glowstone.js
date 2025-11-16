ServerEvents.recipes(e => {
    let item = 'minecraft:glowstone_dust', block = 'minecraft:glowstone'
    e.shapeless(
        `4x ${item}`,
        [block]
    )
})