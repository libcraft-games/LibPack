ServerEvents.recipes(e => {
    let cn = 'createnuclear', ie = 'immersiveengineering'
    let reinforced_glass = `${cn}:reinforced_glass`
    let itemType = 'helmet'
    global.libcraft.colors.forEach(color => {
        let item = `${cn}:${color}_anti_radiation_${itemType}`
        let dye = `#c:dyes/${color}`
        e.remove({input: reinforced_glass, output: item})
        e.shapeless(item,
            [`#${cn}:anti_radiation_${itemType}_dye`, dye]
        )
    })
    e.shaped(`${cn}:white_anti_radiation_${itemType}`,
        [
            'FPF',
            'PGP'
        ],
        {
            F: `${ie}:hemp_fabric`,
            P: `#c:plates/lead`,
            G: reinforced_glass
        }
    )
    console.log(`applied all changes successfully!`);
})