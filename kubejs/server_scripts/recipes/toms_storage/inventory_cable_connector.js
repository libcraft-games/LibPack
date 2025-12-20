ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let ts = 'toms_storage'
    let mc = 'minecraft'
    let item = `${ts}:inventory_cable_connector`
    e.remove({output: item})
    e.shaped(item,
        [
            ' AB',
            'CDE',
            ' AB'
        ],
        {
            A: `#c:gems/diamond`,
            B: `${ts}:trim`,
            C: `${ts}:inventory_cable`,
            D: `#c:gems/quartz`,
            E: `#c:ender_pearls`
        }
    )
})