ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace
    let mc = 'minecraft'

    let item = `${cn}:advanced_energiser`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABA',
            'CDC',
            'AEA',
            ' F '
        ],
        {
            A: `#c:gems/diamond`,
            B: `create:electron_tube`,
            C: `#c:plates/copper`,
            D: `${ie}:coil_hv`,
            E: `${ie}:capacitor_hv`,
            F: `${mc}:lightning_rod`
        }
    )
})