LootJS.lootTables(e => {
    let table = e.getLootTable('minecraft:chests/illager_mansion/kitchen')
    table.clear()
    table.createPool(pool => {
        pool.rolls([8, 12])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/vegetal').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/preserves').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sweets').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/soup').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sandwich').withWeight(2))
    })
})