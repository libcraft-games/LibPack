LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let table = e.getLootTable(`${ii}:chests/labyrinth`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([6, 9])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(18))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/extra').withWeight(18))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/vegetal').withWeight(12))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(12))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager').withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/artificer').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([0, 2])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/pillager').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/vindicator').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/basher').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/marauder').withWeight(2))
    })
})