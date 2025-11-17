ServerEvents.recipes(e => {
    let item = 'create:powdered_obsidian', block = 'biomesoplenty:black_sand'
    e.shapeless(
        `${block}`,
        [`4x ${item}`]
    )
})