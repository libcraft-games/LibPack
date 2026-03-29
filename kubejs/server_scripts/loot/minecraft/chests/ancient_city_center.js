LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/ancient_city_center`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/sculk').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/center_exclusives').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/resources').withWeight(8))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_2_3').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/trims').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/discs').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/consumables').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/equipment').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/ancient_city/artifacts').withWeight(2))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, ['twili', 'vaulttec', 'dominator', 'taken'])).withWeight(2))
        // todo: scriptor artifacts
    })
})