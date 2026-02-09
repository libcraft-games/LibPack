ServerEvents.recipes(e => {
    let powdered_obsidian = 'create:powdered_obsidian', black_sand = 'biomesoplenty:black_sand', sand = 'minecraft:sand'
    e.shapeless(
        `3x ${black_sand}`,
        [`1x ${sand}`, `2x ${powdered_obsidian}`]
    )
    let smooth_basalt = 'minecraft:smooth_basalt'
    
    e.custom({
        type: 'create:milling',
        processing_time: 200,
        ingredients: [{item: smooth_basalt}],
        results: [
            {id: black_sand, count: 1}
        ]
    })
    e.custom({
        type: `${ie}:crusher`,
        energy: 2400,
        input: {item: smooth_basalt},
        result: {id: black_sand, count: 1}
    })
})