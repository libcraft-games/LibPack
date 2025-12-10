ServerEvents.recipes(e => {
    let powdered_obsidian = 'create:powdered_obsidian', black_sand = 'biomesoplenty:black_sand', sand = 'minecraft:sand'
    e.shapeless(
        `3x ${black_sand}`,
        [`1x ${sand}`, `2x ${powdered_obsidian}`]
    )
})