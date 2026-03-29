LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/jungle_temple/treasure')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [2, 5]).withWeight(12))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [1, 3]).withWeight(2))
    })
})