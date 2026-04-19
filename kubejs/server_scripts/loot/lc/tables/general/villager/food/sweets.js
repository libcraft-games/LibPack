LootJS.lootTables(e => {
    let mc = 'minecraft'
    e.create('lc:tables/general/villager/food/sweets').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:cookie`, [3, 11]).withWeight(5))
        pool.addEntry(LootEntry.of(`create:sweet_roll`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:cake`).withWeight(1))
    })
})