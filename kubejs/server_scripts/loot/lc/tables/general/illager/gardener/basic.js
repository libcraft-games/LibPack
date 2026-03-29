LootJS.lootTables(e => {
    let mc = 'minecraft'
    e.create('lc:tables/general/illager/gardener/basic').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:dark_oak_sapling`, [1, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:large_fern`).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:fern`, [1, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:blue_orchid`, [1, 4]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:lilac`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:small_dripleaf`).withWeight(1))
    })
})