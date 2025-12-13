ServerEvents.recipes(e => {
    let gg = 'generatorgalore', ie = 'immersiveengineering'
    function registerGenerator(generator, tier, engineering_block, material) {
        generator = `${gg}:${generator}_generator`
        e.remove({output: generator})
        e.shaped(
            `${generator}`,
            [
                'MCM',
                'RER',
                'MFM'
            ],
            {
                M: `${ie}:${material}`,
                C: `${ie}:coil_${tier}`,
                E: `${ie}:${engineering_block}_engineering`,
                R: 'minecraft:redstone_block',
                F: 'minecraft:blast_furnace'
            }
        )
    }
    registerGenerator('iron',       'lv', 'basic', 'treated_wood_horizontal')
    registerGenerator('obsidian',   'mv', 'light', 'sheetmetal_iron')
    registerGenerator('netherite',  'hv', 'heavy', 'sheetmetal_steel')
    console.log(`applied all changes successfully!`);
});