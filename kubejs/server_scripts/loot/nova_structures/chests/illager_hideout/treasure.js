LootJS.lootTables(e => {
    let table = e.getLootTable('nova_structures:chests/illager_hideout_tresure') // [sic]
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/musicker').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/artificer').withWeight(2))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, [
            'usurper', 
            'lususnaturae', 'ikelos',
            'regal',        'sharkface',
            'n7',           'felix'
        ])).withWeight(3))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager_blocks').withWeight(2))
    })
})