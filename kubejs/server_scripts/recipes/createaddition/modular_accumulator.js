ServerEvents.recipes(e => {
    let ie = global.ie.namespace
    let item = 'createaddition:modular_accumulator'
    e.remove({output: item})
    c_AddMechanicalCraftingRecipe(e,
        {
            A: '#c:plates/brass',
            B: 'create:precision_mechanism',
            C: `${ie}:duroplast`,
            D: `${ie}:component_electronic_adv`,
            F: `${ie}:capacitor_mv`,
            G: 'create:brass_casing',
            I: `${ie}:connector_hv`,
            J: `${ie}:coil_hv`
        },
        [
            ' ABA ',
            'ACDCA',
            'IFGFI',
            'ACJCA',
            ' AIA '
        ],
        {
            id: item,
            count: 1
        }
    )
})