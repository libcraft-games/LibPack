LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:pots/pot_desert_ruin')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/filler').withWeight(6))  
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/desert_pyramid/misc').withWeight(4))
        pool.addEntry(LootEntry.empty().withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:lapis_lazuli`, [3, 13]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:gold_nugget`, [3, 16]).withWeight(1))
    })
})