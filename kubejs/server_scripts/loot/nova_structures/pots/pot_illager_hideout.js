LootJS.lootTables(e => {
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:pots/pot_illager_hideout')
    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/pot').withWeight(6))    
    })
})