LootJS.lootTables(e => {
    let mc = 'minecraft'
    let nd = 'mynethersdelight'
    e.create('lc:tables/general/piglin/food/hoglin_feed').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:crimson_fungus`,  [2, 7]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:crimson_roots`,   [2, 6]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:crimson_nylium`,  [2, 5]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:soul_sand`,       [3, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${nd}:hoglin_loin`,     [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${nd}:letios_compost`,  [3, 5]).withWeight(2))
        pool.addEntry(LootEntry.of(`${nd}:crimson_fungus_colony`)  .withWeight(1))
    })
})