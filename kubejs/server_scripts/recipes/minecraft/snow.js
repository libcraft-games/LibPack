ServerEvents.recipes(e => {
    let item = 'minecraft:snowball', block = 'minecraft:snow_block'
    e.shapeless(
        `4x ${item}`,
        [block]
    )
})