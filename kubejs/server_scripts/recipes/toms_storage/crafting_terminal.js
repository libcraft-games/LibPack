ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let ts = 'toms_storage'
    let mc = 'minecraft'
    let item = `${ts}:crafting_terminal`
    e.remove({output: item})
    e.shaped(item,
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            A: `${ie}:component_electronic_adv`,
            B: `#c:gems/diamond`,
            C: `${ts}:storage_terminal`,
            D: `minecraft:crafter`
        }
    )
})