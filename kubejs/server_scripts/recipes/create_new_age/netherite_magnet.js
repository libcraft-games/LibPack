ServerEvents.recipes(e => {
    let ce = 'create_enchantment_industry'
    let cn = 'create_new_age'
    let ie = global.ie.namespace

    let item = `${cn}:netherite_magnet`
    e.remove({output: item})
    e.shaped(
        Item.of(item),
        [
            'ABCBA',
            'BDBDB',
            'CBDBC',
            'BDBDB',
            'ABCBA'
        ],
        {
            A: `#c:gems/diamond`,
            B: `${cn}:magnetite_block`,
            C: `${ce}:super_experience_block`,
            D: `#c:nuggets/netherite`
        }
    )
})