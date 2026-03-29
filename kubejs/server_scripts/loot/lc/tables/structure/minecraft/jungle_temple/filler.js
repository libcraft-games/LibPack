LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/jungle_temple/filler')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:vine`, [2, 8]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:rotten_flesh`, [3, 7]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:bone`, [4, 6]).withWeight(4))
    })
})