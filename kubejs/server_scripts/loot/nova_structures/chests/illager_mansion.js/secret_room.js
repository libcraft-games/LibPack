LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/secret_room`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/minecraft/mansion/treasure').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/musicker').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tier_3').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/artificer').withWeight(1))
        pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, [
            'usurper', 
            'lususnaturae', 'massfusion',
            'regal',        'sharkface',
            'eyas',         'felix'
        ])))
    })
    table.createPool(pool => {
        pool.rolls([4, 6])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager_blocks').withWeight(3))
    })
})