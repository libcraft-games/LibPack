LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/desert_pyramid/misc')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:wheat`, [1, 6]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:feather`, [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:honeycomb`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:honey_bottle`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${fd}:honey_cookie`, [1, 6]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:glistering_melon_slice`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:rabbit_hide`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:rabbit_foot`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:golden_apple`, [1, 2]).withWeight(1))
    })
})