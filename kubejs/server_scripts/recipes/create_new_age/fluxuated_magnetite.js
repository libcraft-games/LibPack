ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace
    let mc = 'minecraft'

    let item = `${cn}:fluxuated_magnetite`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: `${cn}:magnetite_block`,
            B: `#c:dusts/diamond`,
            C: `${mc}:netherite_scrap`
        }
    )
})