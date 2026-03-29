ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:basic_motor`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ISI',
            ' C ',
            'AWA'
        ],
        {
            I: `#c:plates/iron`,
            S: 'create:shaft',
            C: `${ie}:coil_lv`,
            A: `#c:plates/andesite_alloy`,
            W: `${ie}:connector_lv`
        }
    )
})