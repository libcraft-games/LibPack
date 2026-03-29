LootJS.lootTables(e => {
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    e.create('lc:tables/general/piglin/filler').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [2, 8]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:quartz`,     [3, 13]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:iron_nugget`, [2, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:bone_block`,  [3, 6]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:leather`,     [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:magma_cream`, [2, 6]).withWeight(2))
        pool.addEntry(LootEntry.of(`${nd}:cooked_loin`)        .withWeight(2))
    })
})