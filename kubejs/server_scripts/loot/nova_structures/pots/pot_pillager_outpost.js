LootJS.lootTables(e => {
    let table = e.getLootTable('nova_structures:pots/pot_pillager_outpost')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/pot').withWeight(17))
    })
})