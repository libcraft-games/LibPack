ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:layered_magnet`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: `#c:ingots/electrum`,
            B: `#c:ingots/nickel`,
            C: `${cn}:magnetite_block`,
        }
    )
})