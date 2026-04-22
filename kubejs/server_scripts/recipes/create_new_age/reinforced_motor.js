ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:reinforced_motor`
    e.remove({output: item})
    c_AddMechanicalCraftingRecipe(e,
        {
            A: `create:shaft`,
            B: `#c:plates/steel`,
            C: `create:rotation_speed_controller`,
            D: `${ie}:coil_hv`,
            E: `#c:storage_blocks/diamond`,
            F: `create:electron_tube`,
            G: `${ie}:connector_hv`
        },
        [
            ' A ',
            'BCB',
            ' D ',
            'EFE',
            ' G '
        ],
        {
            id: item,
            count: 1
        }
    )
})