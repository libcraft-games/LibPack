LootJS.lootTables(e => {
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/generic`)
    table.clear()
    table.createPool(pool => {
        pool.rolls([6, 8])
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/basic').withWeight(12))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/vegetal').withWeight(10))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/fillager/extra').withWeight(9))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/simple').withWeight(7))
        pool.addEntry(LootEntry.reference(`lc:tables/structure/${ns}/illager_manor/decor`).withWeight(6))
        pool.addEntry(LootEntry.reference('lc:tables/general/illager/victualer/soup').withWeight(5))
    })
})