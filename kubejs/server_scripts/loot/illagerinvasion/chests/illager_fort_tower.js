LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let table = e.getLootTable(`${ii}:chests/illager_fort_tower`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/soup').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/sandwich').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/paper').withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/vindicator').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/inquisitor').withWeight(4))
        pool.addEntry(LootEntry.reference('lc:tables/general/scriptor/tiers_1_2').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/vaultager').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/artificer').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/treasurer/resourceager').withWeight(1))
    })
})