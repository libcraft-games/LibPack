LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.create('lc:tables/structure/minecraft/desert_pyramid/treasure')
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [1, 8]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:gold_block`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:diamond`, [1, 2]).withWeight(1))
    })
})