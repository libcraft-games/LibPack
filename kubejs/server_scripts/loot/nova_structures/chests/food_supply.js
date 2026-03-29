LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:chests/food_supply')
    table.clear()
    table.createPool(pool => {
        pool.rolls([5, 7])
        pool.addEntry(LootEntry.reference('lc:tables/general/villager/food/vegetables').withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/villager/food/simple').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/general/villager/food/sweets').withWeight(1))
    })
})