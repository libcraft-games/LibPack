ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let ts = 'toms_storage'
    let mc = 'minecraft'
    let item = `${ts}:wireless_terminal`
    e.remove({output: item})
    e.shaped(item,
        [
            'A',
            'B',
            'C'
        ],
        {
            A: `create:transmitter`,
            B: `${ts}:storage_terminal`,
            C: `${ie}:component_electronic_adv`
        }
    )
})