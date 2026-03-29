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
            'ACA',
            ' D '
        ],
        {
            A: `#c:plates/electrum`,
            B: `${ie}:coil_mv`,
            C: `create:brass_casing`,
            D: `${mc}:lightning_rod`
        }
    )
})