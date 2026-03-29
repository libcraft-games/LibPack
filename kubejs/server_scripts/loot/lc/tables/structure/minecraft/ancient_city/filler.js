LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/ancient_city/filler')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:sculk_vein`, [2, 8]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:soul_torch`, [1, 15]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:bone`, [1, 15]).withWeight(3))
    })
})