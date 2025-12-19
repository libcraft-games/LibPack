ServerEvents.recipes(e => {
    let bg = 'buildinggadgets2', ie = 'immersiveengineering'
    let item = `${bg}:gadget_building`
    e.remove({output: item})
    e.shaped(`${item}`,
        [
            'ABA',
            'ACA',
            'ADE'
        ],
        {
            A: '#c:plates/aluminum',
            B: `#c:ender_pearls`,
            C: `create:schematicannon`,
            D: `${ie}:capacitor_mv`,
            E: `${ie}:component_electronic_adv`
        }
    )
})