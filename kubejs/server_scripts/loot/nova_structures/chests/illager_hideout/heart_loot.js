LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/illager_hideout_heart_loot')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:globe_banner_pattern`))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/artificer'))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(2))
    })
})