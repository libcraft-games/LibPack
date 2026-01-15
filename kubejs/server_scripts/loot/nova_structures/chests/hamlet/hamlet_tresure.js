LootJS.lootTables(e => {
    let table = e.getLootTable('nova_structures:chests/hamlet/hamlet_tresure')
    table.clear()
    table.createPool(pool => {
        pool.rolls([4, 6])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/golden_carrot').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/decor').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/ranged').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/iron').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/general').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/gold').withWeight(2))
    })
    // todo: explorer maps to piglin outstation (red x, 5973037) and bastion (red x, 3679277)
})