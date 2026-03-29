ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:redstone_magnet`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: `#c:nuggets/iron`,
            B: `${cn}:magnetite_block`,
            C: `#c:storage_blocks/redstone`,
        }
    )
})