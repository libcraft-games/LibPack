ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:basic_motor_extension`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABA',
            'CDE',
            'ABA'
        ],
        {
            A: `#c:plates/andesite_alloy`,
            B: `#c:ingots/andesite_alloy`,
            C: `create:shaft`,
            D: `${ie}:coil_mv`,
            E: `${ie}:component_electronic`
        }
    )
})