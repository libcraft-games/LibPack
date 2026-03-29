LootJS.lootTables(e => {
    let table = e.getLootTable('nova_structures:chests/piglin_camp/chest')
    table.clear()
    table.createPool(pool => {
        pool.rolls([4, 6])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/hoglin').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/filler').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/ranged').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/iron').withWeight(1))
    })
    table.createPool(pool => {        
        pool.addEntry(CreateExplorationMapEntryFromData('piglin_outstation').withWeight(1))
        pool.addEntry(CreateExplorationMapEntryFromData('hamlet').withWeight(1))
    })
})