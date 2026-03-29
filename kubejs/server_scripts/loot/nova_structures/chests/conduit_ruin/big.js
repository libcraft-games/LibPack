LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable(`nova_structures:chests/conduit_ruin/conduit_ruin_big`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/filler').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/resources').withWeight(10))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(1))
        pool.addEntry(CreateExplorationMapEntryFromData('buried_treasure').withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/equipment_iron').withWeight(60))
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/treasure').withWeight(30))
        pool.addEntry(LootEntry.reference('lc:tables/general/underwater/artifacts').withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:tide_armor_trim_smithing_template`).withWeight(1))
    })
})