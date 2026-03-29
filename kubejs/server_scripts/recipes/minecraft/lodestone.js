ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let mc = 'minecraft'
    let item = 'minecraft:lodestone'
    e.remove({output: item});
    e.shaped(
        Item.of(item),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: `${mc}:chiseled_stone_bricks`,
            B: `${cn}:magnetite_block`
        }
    )
})