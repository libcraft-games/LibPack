LootJS.lootTables(e => {
    let mc = 'minecraft'
    e.create('lc:tables/structure/minecraft/shipwreck/treasure/resources').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:lapis_lazuli`, [1, 10]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [1, 10]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [1, 6]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:gold_ingot`, [1, 5]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:diamond`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:prismarine_crystals`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:experience_bottle`).withWeight(1))
    })
})