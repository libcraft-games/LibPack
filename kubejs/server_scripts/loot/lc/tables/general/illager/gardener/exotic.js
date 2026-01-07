LootJS.lootTables(e => {
    let bop = 'biomesoplenty'
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/gardener/exotic').createPool(pool => {
        pool.addEntry(LootEntry.of(`${bop}:dead_sapling`, [1, 5]).withWeight(3))
        pool.addEntry(LootEntry.of(`${bop}:umbran_sapling`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${bop}:hellbark_sapling`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:wither_rose`).withWeight(1))
    })
})