LootJS.lootTables(e => {
    let es = 'enderscape'
    let mc = 'minecraft'
    e.create('lc:tables/general/end/treasure/resources').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [2, 3]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:ender_pearl`, [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:blaze_rod`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${es}:nebulite_shards`, [1, 12]).withWeight(1))
    })
})