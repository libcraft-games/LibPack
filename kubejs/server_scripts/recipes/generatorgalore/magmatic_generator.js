ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', gg = 'generatorgalore', cei = 'create_enchantment_industry'
    let item = `${gg}:magmatic_generator`
    e.remove({output: item})
    e.shaped(item,
        [
            'OBO',
            'CGC',
            'OCO'
        ],
        {
            C: '#c:plates/constantan',
            O: '#c:obsidians',
            B: `${ie}:metal_barrel`,
            G: `${ie}:thermoelectric_generator`
        }
    )
    console.log(`applied all changes successfully!`);
});