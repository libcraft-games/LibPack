LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/vindicator_chest`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(17))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(16))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/vindicator').withWeight(15))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sandwich').withWeight(8))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(2))
    })
})