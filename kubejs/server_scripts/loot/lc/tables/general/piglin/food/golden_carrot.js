LootJS.lootTables(e => {
    let mc = 'minecraft'
    e.create('lc:tables/general/piglin/food/golden_carrot').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:golden_carrot`, [8, 17]))
    })
})