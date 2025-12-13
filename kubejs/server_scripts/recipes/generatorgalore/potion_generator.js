ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', gg = 'generatorgalore', cei = 'create_enchantment_industry'
    let item = `${gg}:potion_generator`
    e.remove({output: item})
    e.shaped(item,
        [
            'PSP',
            'bsb',
            'PBP'
        ],
        {
            P: `${ie}:sheetmetal_colored_pink`,
            S: 'create:spout',
            b: `${mc}:brewing_stand`,
            s: 'createaddition:straw',
            B: 'create:blaze_burner'
        }
    )
    console.log(`applied all changes successfully!`);
});