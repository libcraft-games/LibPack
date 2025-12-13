ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', gg = 'generatorgalore', cei = 'create_enchantment_industry'
    let item = `${gg}:enchantment_generator`
    e.remove({output: item})
    e.shaped(item,
        [
            'DGD',
            'OLO',
            'ORO'
        ],
        {
            D: '#c:gems/diamond',
            G: `${cei}:mechanical_grindstone`,
            O: '#c:obsidians',
            L: `${cei}:experience_lantern`,
            R: `${ie}:resonanz_engineering`
        }
    )
    console.log(`applied all changes successfully!`);
});