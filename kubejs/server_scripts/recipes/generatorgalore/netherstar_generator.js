ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', gg = 'generatorgalore', cei = 'create_enchantment_industry'
    let item = `${gg}:netherstar_generator`
    e.remove({output: item})
    e.shaped(item,
        [
            'NRN',
            'CPC',
            'NBN'
        ],
        {
            N: '#c:ingots/netherite',
            R: `${ie}:resonanz_engineering`,
            C: `${ie}:concrete_reinforced`,
            P: `${ie}:reinforced_window`,
            B: `${mc}:beacon`
        }
    )
    console.log(`applied all changes successfully!`);
});