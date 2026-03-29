LootJS.lootTables(e => {
    let bop = 'biomesoplenty'
    e.create('lc:tables/general/end/anomalies').createPool(pool => {
        pool.addEntry(LootEntry.of(`${bop}:unmapped_end_stone`, [1, 7]).withWeight(7))
        pool.addEntry(LootEntry.of(`${bop}:null_end_stone`, [1, 7]).withWeight(4))
        pool.addEntry(LootEntry.of(`${bop}:anomaly`).withWeight(3))
    })
})