ServerEvents.recipes(e => {
    let ie = 'immersiveengineering';
    let modular_accumulator = 'createaddition:modular_accumulator';
    e.remove({output: modular_accumulator});
    // Create mechanical crafting recipes are just normal crafting recipes which don't fit in a 3x3 square
    e.shaped(
        Item.of(modular_accumulator),
        [
            ' ABA ',
            'ACDCA',
            'IFGFI',
            'ACJCA',
            ' AIA '
        ],
        {
            A: '#c:plates/brass',
            B: 'create:factory_gauge',
            C: `${ie}:duroplast`,
            D: `${ie}:component_electronic_adv`,
            F: `${ie}:capacitor_mv`,
            G: 'create:brass_casing',
            I: `${ie}:connector_hv`,
            J: `${ie}:coil_hv`
        }
    )
})