LootJS.lootTables(e => {
    let table = e.getLootTable('kaisyn:outpost/common/food')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 10])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sandwich').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/soup').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sweets').withWeight(1))
    })
})