ServerEvents.recipes(e => {
    let bg = 'buildinggadgets2', ie = 'immersiveengineering'
    let item = `${bg}:gadget_exchanging`
    e.remove({output: item})
    e.shaped(`${item}`,
        [
            'BAC',
            'ADA',
            'AEA'
        ],
        {
            A: '#c:plates/aluminum',
            B: `#c:ender_pearls`,
            C: `minecraft:ender_eye`,
            D: `${ie}:capacitor_mv`,
            E: `${ie}:component_electronic_adv`
        }
    )
})