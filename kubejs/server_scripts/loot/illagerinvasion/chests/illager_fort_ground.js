LootJS.lootTables(e => {
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let table = e.getLootTable(`${ii}:chests/illager_fort_ground`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/vegetal').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(1))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/paper').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/weaponer/vindicator').withWeight(1))
    })
})