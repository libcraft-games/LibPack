LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/bastion_other`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/general').withWeight(12))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/gold').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/iron').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/ranged').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/artifacts').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/shaders').withWeight(1))
        // todo: scriptor artifacts
    })
    table.createPool(pool => {
        pool.rolls([4, 6])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/filler').withWeight(7))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/decor').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/hoglin').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/golden_carrot').withWeight(3))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/exposure_expanded:.*bastion_other.*/)
})