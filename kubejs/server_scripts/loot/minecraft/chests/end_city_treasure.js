LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/end_city_treasure`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 6])
        pool.addEntry(LootEntry.reference('lc:tables/general/end/treasure/resources').withWeight(21))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/treasure/misc').withWeight(14))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/treasure/dragon').withWeight(7))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/anomalies').withWeight(5))
        pool.addEntry(LootEntry.reference(global.libcraft.shader_tables['end']).withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_2_3').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/equipment/armor').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/equipment/tools').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/equipment/weapons').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/treasure/books').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/end/treasure/artifacts').withWeight(1))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*end_city_treasure.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*end_city_treasure.*/)
    e.removeGlobalModifiers(/supplementaries:.*end_city.*/)
})