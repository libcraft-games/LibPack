LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/bastion_treasure`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([4, 5])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/general').withWeight(18))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/special').withWeight(12))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/gold').withWeight(4))
        pool.addEntry(LootEntry.reference(global.libcraft.shader_tables['piglin']).withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/treasure/artifacts').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/equipment/netherite').withWeight(1))
        // todo: scriptor artifacts
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/food/golden_carrot').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/general/piglin/decor').withWeight(2))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*bastion_treasure.*/)
    e.removeGlobalModifiers(/sophisticatedbackpacks:.*bastion_treasure.*/)
})