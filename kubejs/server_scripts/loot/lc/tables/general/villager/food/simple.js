LootJS.lootTables(e => {
    let cf = 'createfood'
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    e.create('lc:tables/general/villager/food/simple').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:bread`, [1, 5]).withWeight(5))
        pool.addEntry(LootEntry.of(`${fd}:cooked_bacon`, [1, 6]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:cooked_chicken`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:cooked_beef`).withWeight(1))
    })
})