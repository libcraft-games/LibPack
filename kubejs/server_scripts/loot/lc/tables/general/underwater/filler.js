LootJS.lootTables(e => {
    let mc = 'minecraft'
    e.create('lc:tables/general/underwater/filler').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:seagrass`, [3, 5]).withWeight(18))
        pool.addEntry(LootEntry.of(`${mc}:sand`, [2, 4]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:kelp`, [1, 4]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:gravel`, [2, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:sea_pickle`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:turtle_scute`).withWeight(1))
    })
})