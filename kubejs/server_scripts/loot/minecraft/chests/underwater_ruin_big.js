LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/underwater_ruin_big`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/filler').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/resources').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/equipment').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/treasure').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/artifacts').withWeight(1))
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/artifacts:.*underwater_ruin_big.*/)
})