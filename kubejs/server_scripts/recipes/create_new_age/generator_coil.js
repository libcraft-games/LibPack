ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:generator_coil`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: `${ie}:coil_lv`,
            B: `#c:storage_blocks/andesite_alloy`
        }
    )
})