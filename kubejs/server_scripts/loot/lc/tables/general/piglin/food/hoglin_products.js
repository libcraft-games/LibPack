LootJS.lootTables(e => {
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    e.create('lc:tables/general/piglin/food/hoglin_products').createPool(pool => {
        pool.addEntry(LootEntry.of(`${nd}:hoglin_loin`,     [1, 4]).withWeight(16))
        pool.addEntry(LootEntry.of(`${nd}:hoglin_sausage`,  [2, 5]).withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:leather`,         [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${nd}:hoglin_hide`)            .withWeight(2))
        pool.addEntry(LootEntry.of(`heads:hoglin_head`)            .withWeight(1))
    })
})