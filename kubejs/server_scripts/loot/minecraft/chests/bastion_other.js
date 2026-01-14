LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/bastion_other`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/general').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/artifacts').withWeight(1))
        pool.addEntry(LootEntry.reference(global.libcraft.shader_tables['piglin']).withWeight(1))
        // todo: scriptor artifacts
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/iron').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/gold').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/ranged').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 6])
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