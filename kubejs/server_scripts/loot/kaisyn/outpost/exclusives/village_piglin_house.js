LootJS.lootTables(e => {
    let table = e.getLootTable('kaisyn:village/exclusives/village_piglin_house')
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/golden_carrot').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/general').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/gold').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/iron').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/ranged').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/filler').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/decor').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/hoglin').withWeight(2))
    })
})