ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:advanced_motor_extension`
    e.remove({output: item})
    c_AddMechanicalCraftingRecipe(e,
        {
            A: `#c:plates/andesite_alloy`,
            B: `#c:ingots/electrum`,
            C: `#c:plates/electrum`,
            D: `create:shaft`,
            E: `create:precision_mechanism`,
            F: `${ie}:coil_hv`,
            G: `${ie}:component_electronic_adv`,
            H: `create:electron_tube`
        },
        [
            'ABACC',
            'DEFGH',
            'ABACC'
        ],
        {
            id: item,
            count: 1
        }
    )
})