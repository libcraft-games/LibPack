LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let mc = 'minecraft'
    let table = e.getLootTable(`${mc}:chests/underwater_ruin_small`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/filler').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/resources').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/equipment_stone').withWeight(4))
        pool.addEntry(LootEntry.of(`${ee}:blur_filter`))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(2))
        pool.addEntry(CreateExplorationMapEntryFromData('buried_treasure').withWeight(1))
    })
})