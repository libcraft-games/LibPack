ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:advanced_motor`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            ' A ',
            'BCB',
            ' D ',
            'EFE',
            ' G '
        ],
        {
            A: `create:shaft`,
            B: `#c:plates/andesite_alloy`,
            C: `create:precision_mechanism`,
            D: `${ie}:coil_mv`,
            E: `#c:plates/brass`,
            F: `create:electron_tube`,
            G: `${ie}:connector_mv`
        }
    )
})