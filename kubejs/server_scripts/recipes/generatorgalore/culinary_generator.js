ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', gg = 'generatorgalore', cei = 'create_enchantment_industry'
    let item = `${gg}:culinary_generator`
    e.remove({output: item})
    e.shaped(item,
        [
            'BCB',
            'FEF',
            'bSb'
        ],
        {
            B: `${ie}:clinker_brick_sill`,
            C: `${ie}:coil_mv`,
            F: '#farmersdelight:feasts',
            E: `${ie}:light_engineering`,
            b: `${ie}:clinker_brick`,
            S: 'farmersdelight:stove'
        }
    )
    console.log(`applied all changes successfully!`);
});