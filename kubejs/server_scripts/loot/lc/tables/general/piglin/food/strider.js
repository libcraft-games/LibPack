LootJS.lootTables(e => {
    let cf = 'createfood'
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    e.create('lc:tables/general/piglin/food/strider').createPool(pool => {
        pool.addEntry(LootEntry.of(`${nd}:strider_rock`,                [1, 2]).withWeight(8))
        pool.addEntry(LootEntry.of(`${nd}:strider_slice`,               [2, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`${nd}:strider_egg`)                        .withWeight(3))
        pool.addEntry(LootEntry.of(`${cf}:strider_meatball_stick_1`,    [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${cf}:strider_meatball_stick_2`,    [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${cf}:strider_meatball_stick_3`)           .withWeight(1))
    })
})