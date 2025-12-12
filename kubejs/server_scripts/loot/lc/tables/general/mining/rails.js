LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft'
    e.create('lc:tables/general/mining/rails').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:rail`, [4, 16]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:powered_rail`, [1, 6]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:detector_rail`, [2, 6]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:activator_rail`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:activator_rail`, [1, 2]).withWeight(1))
    })
})