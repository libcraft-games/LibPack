ServerEvents.recipes(e => {
    let gg = 'generatorgalore', ie = 'immersiveengineering'
    function registerCombined(generator, center, ct) {
        let input = `${gg}:${generator}_generator`
        if(ct > 1)
            input += `_${ct}x`
        let output = `${gg}:${generator}_generator_${ct * 8}x`
        e.remove({output: output})
        e.shaped(
            `${output}`,
            [
                'GGG',
                'GCG',
                'GGG'
            ],
            {
                G: input,
                C: center
            }
        )
    }
    for(let generator of ['culinary', 'enchantment', 'obsidian', 'iron', 'netherite', 'magmatic', 'potion']) {
        for(let [level, material] of [[1, `${ie}:generator`], [8, `${ie}:resonanz_engineering`]]) {
            registerCombined(generator, material, level)
        }
    }
    console.log(`applied all changes successfully!`);
});