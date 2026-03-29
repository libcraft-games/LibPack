LootJS.lootTables(e => {
    let table = e.getLootTable('nova_structures:chests/pillager_outpost_kitchen')
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/vegetal').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sweets').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/soup').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sandwich').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/preserves').withWeight(1))
    })
})