ServerEvents.recipes(e => {
    let ce = 'create_enchantment_industry'
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:netherite_magnet`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: `#c:gems/diamond`,
            B: `#c:rods/netherite`,
            C: `${ce}:super_experience_block`
        }
    )
})