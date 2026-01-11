LootJS.lootTables(e => {
    let path = 'minecraft:chests/nether_bridge'
    let table = e.getLootTable(path)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 7])
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/fortress/filler').withWeight(22))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/fortress/singles').withWeight(14))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/fortress/equipment_stone_leather').withWeight(7))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/fortress/equipment_diamond').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/fortress/artifacts').withWeight(1))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*nether_bridge.*/)
    e.removeGlobalModifiers(/exposure_expanded:.*nether_bridge.*/)
})