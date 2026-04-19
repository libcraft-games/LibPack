LootJS.lootTables(e => {
    let fd = 'farmersdelight'
    let mc = 'minecraft'
    let vd = 'veggiesdelight'
    e.create('lc:tables/general/villager/food/vegetables').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:apple`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:wheat`, [1, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:carrot`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:potato`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${fd}:onion`, [1, 2]).withWeight(1))
    })
})