ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let ts = 'toms_storage'
    let mc = 'minecraft'
    let item = `${ts}:inventory_connector`
    e.remove({output: item})
    e.shaped(item,
        [
            'TAT',
            'BCB',
            'TDT'
        ],
        {
            T: `${ts}:trim`,
            A: `${ie}:component_electronic`,
            B: `#c:gems/diamond`,
            C: `${mc}:ender_chest`,
            D: `#c:ender_pearls`
        }
    )
})