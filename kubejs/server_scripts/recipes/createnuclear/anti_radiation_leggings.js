ServerEvents.recipes(e => {
    let cn = 'createnuclear', ie = 'immersiveengineering'
    let itemType = 'leggings'
    global.libcraft.colors.forEach(color => {
        let item = `${cn}:${color}_anti_radiation_${itemType}`
        let dye = `#c:dyes/${color}`
        e.remove({input: '#c:ingots/lead', output: item})
        e.shapeless(item,
            [`#${cn}:anti_radiation_${itemType}_dye`, dye]
        )
    })
    e.shaped(`${cn}:white_anti_radiation_${itemType}`,
        [
            'FPF',
            'P P',
            'F F'
        ],
        {
            F: `${ie}:hemp_fabric`,
            P: `#c:plates/lead`
        }
    )
    console.log(`applied all changes successfully!`);
})