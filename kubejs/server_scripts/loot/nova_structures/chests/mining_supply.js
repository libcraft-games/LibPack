LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/mining_supply')
    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/tools'))
    })
    table.createPool(pool => {
        pool.rolls([3, 4])
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/lighting').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/rails').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/explosives').withWeight(2))
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/minecarts').withWeight(1))
    })
})