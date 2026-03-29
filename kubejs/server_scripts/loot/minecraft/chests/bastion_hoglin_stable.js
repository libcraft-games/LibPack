LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/bastion_hoglin_stable`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/general').withWeight(60))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/leather').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/ranged').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/iron').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/artifacts').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/shaders').withWeight(5))
        pool.addEntry(LootEntry.of(`artifacts:cowboy_hat`).withWeight(1))
        // todo: scriptor artifacts
    })
    table.createPool(pool => {
        pool.rolls([3, 6])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/hoglin_products').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/hoglin_feed').withWeight(4))
        pool.addEntry(LootEntry.of(`farmersdelight:iron_knife`).withWeight(2).damage([0.6, 1]))
        pool.addEntry(LootEntry.of(`farmersdelight:iron_knife`).withWeight(1).damage([0.6, 0.9]).enchantRandomly())
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/hoglin').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/golden_carrot').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/filler').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/decor').withWeight(2))
    })
})