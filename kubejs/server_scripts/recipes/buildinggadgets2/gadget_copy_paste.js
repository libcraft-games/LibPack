ServerEvents.recipes(e => {
    let bg = 'buildinggadgets2', ie = 'immersiveengineering'
    let item = `${bg}:gadget_copy_paste`
    e.remove({output: item})
    e.shaped(`${item}`,
        [
            'FBF',
            'ACA',
            'ADE'
        ],
        {
            A: '#c:plates/aluminum',
            B: `#c:ender_pearls`,
            C: `create:schematicannon`,
            D: `${ie}:capacitor_mv`,
            E: `${ie}:component_electronic_adv`,
            F: `minecraft:ender_eye`
        }
    )
})