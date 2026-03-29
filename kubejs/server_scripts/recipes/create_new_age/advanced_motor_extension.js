ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:advanced_motor_extension`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABACC',
            'DEFGH',
            'ABACC'
        ],
        {
            A: `#c:plates/andesite_alloy`,
            B: `#c:ingots/electrum`,
            C: `#c:plates/electrum`,
            D: `create:shaft`,
            E: `create:precision_mechanism`,
            F: `${ie}:coil_hv`,
            G: `${ie}:component_electronic_adv`,
            H: `create:electron_tube`
        }
    )
})