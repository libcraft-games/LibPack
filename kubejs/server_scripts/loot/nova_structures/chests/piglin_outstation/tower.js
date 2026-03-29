LootJS.lootTables(e => {
    let mc = 'minecraft'

    let table = e.getLootTable('nova_structures:chests/piglin_outstation/outstation_tower')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('nova_structures:chests/piglin_outstation/outstation_generic'))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:crossbow`).enchantWithLevels([15, 20]))
    })
    table.createPool(pool => {
        pool.rolls([2, 5])
        pool.addEntry(LootEntry.of(`${mc}:spectral_arrow`, [3, 5]))
    })
})