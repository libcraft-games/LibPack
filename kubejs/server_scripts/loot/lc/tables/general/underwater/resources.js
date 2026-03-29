LootJS.lootTables(e => {
    let mc = 'minecraft'
    e.create('lc:tables/general/underwater/resources').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:lapis_lazuli`, [1, 6]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:clay_ball`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`create:raw_zinc`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:diamond`).withWeight(1))
    })
})